import React, { useState, useEffect } from 'react';
import { api } from '../api';
import '../styles/Editor.css';

const Editor = ({ templateName, onBack, onGenerated }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [editableFields, setEditableFields] = useState({});
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadTemplate();
  }, [templateName]);

  const loadTemplate = async () => {
    try {
      setLoading(true);
      const html = await api.getTemplateContent(templateName);
      setHtmlContent(html);
      extractEditableFields(html);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const extractEditableFields = (html) => {
    const fields = {};

    // Nếu template có thẻ <body> thì chỉ lấy phần bên trong body
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : html;

    // Xác định base URL để xử lý ảnh tương đối
    const baseUrl = api.getTemplateUrl(templateName);
    const baseDir = baseUrl.substring(0, baseUrl.lastIndexOf('/'));

    // 🖼️ Trích xuất hình ảnh
    const imgRegex = /<img\b[^>]*?\bsrc=['"]([^'"]+)['"][^>]*>/gi;
    let match;
    let imgIndex = 0;
    while ((match = imgRegex.exec(bodyContent)) !== null) {
      let imgSrc = match[1];

      // Nếu ảnh là đường dẫn tương đối → chuyển sang tuyệt đối
      if (!/^https?:\/\//i.test(imgSrc)) {
        imgSrc = `${baseDir}/${imgSrc.replace(/^(\.\/|\/)/, '')}`;
      }

      fields[`img_${imgIndex}`] = {
        type: 'image',
        value: imgSrc,
        original: match[0],
        label: `Hình ảnh ${imgIndex + 1}`
      };
      imgIndex++;
    }

    // 📄 Trích xuất văn bản
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = bodyContent;
    const walker = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT);

    let textIndex = 0;
    while (walker.nextNode()) {
      const text = walker.currentNode.textContent.trim();
      if (text.length > 2 && !text.match(/^[\s\n\r]*$/)) {
        fields[`text_${textIndex}`] = {
          type: 'text',
          value: text,
          original: text,
          label: `Văn bản ${textIndex + 1}`
        };
        textIndex++;
      }
    }

    setEditableFields(fields);
  };



  const updateField = (key, value) => {
    setEditableFields((prev) => ({
      ...prev,
      [key]: { ...prev[key], value }
    }));
  };

  const applyChanges = () => {
    let updatedHtml = htmlContent;

    Object.entries(editableFields).forEach(([key, field]) => {
      if (field.type === 'image') {
        const oldSrc = field.original.match(/src="([^"]*)"/)?.[1];
        if (oldSrc) {
          updatedHtml = updatedHtml.replace(
            new RegExp(`src="${oldSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g'),
            `src="${field.value}"`
          );
        }
      } else if (field.type === 'text') {
        updatedHtml = updatedHtml.replace(
          field.original,
          field.value
        );
      }
    });

    return updatedHtml;
  };

  const handleGenerate = async () => {
    try {
      setSaving(true);
      const updatedHtml = applyChanges();
      const result = await api.generateHtml(updatedHtml, password);
      const qrUrl = api.getQrCodeUrl(result.url);
      onGenerated({ url: result.url, qrCode: qrUrl });
    } catch (err) {
      console.error(err);
      alert('Có lỗi xảy ra khi tạo HTML!');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="editor">
        <div className="loading">Đang tải template...</div>
      </div>
    );
  }

  return (
    <div className="editor">
      <div className="editor__header">
        <button onClick={onBack} className="editor__back-btn">
          ← Quay lại List
        </button>
      </div>

      <div className="editor__container">
        <div className="editor__form">
          <h2>Chỉnh sửa</h2>

          <div className="editor__fields">
            {Object.entries(editableFields).map(([key, field]) => (
              <div key={key} className="field">
                <label className="field__label">
                  {field.type === 'image' ? '🖼️' : '📄'} {field.label}
                </label>

                {field.type === 'image' ? (
                  <div className="field__image">
                    <input
                      type="text"
                      value={field.value}
                      onChange={(e) => updateField(key, e.target.value)}
                      className="field__input"
                      placeholder="URL hình ảnh"
                    />
                    {field.value && (
                      <img
                        src={field.value}
                        alt="preview"
                        className="field__image-preview"
                      />
                    )}
                  </div>
                ) : (
                  <textarea
                    value={field.value}
                    onChange={(e) => updateField(key, e.target.value)}
                    className="field__textarea"
                    rows={3}
                  />
                )}
              </div>
            ))}

            <div className="field">
              <label className="field__label">🔒 Mật khẩu (tùy chọn)</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field__input"
                placeholder="Nhập mật khẩu bảo vệ"
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={saving}
            className="editor__save-btn"
          >
            {saving ? '⏳ Đang xử lý...' : '💾 Lưu và Tạo Link'}
          </button>
        </div>

        <div className="editor__preview">
          <h2>Xem trước</h2>
          <div className="editor__preview-content">
            <iframe
              srcDoc={applyChanges()}
              title="preview"
              className="editor__iframe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;