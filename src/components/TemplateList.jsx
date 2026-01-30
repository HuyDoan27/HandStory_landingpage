import React, { useState, useEffect } from 'react';
import { api } from '../api';
import '../styles/TemplateList.css';

const TemplateList = ({ onSelectTemplate }) => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      setLoading(true);
      const data = await api.getTemplates();
      setTemplates(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="template-list">
        <div className="loading">Đang tải templates...</div>
      </div>
    );
  }

  return (
    <div className="template-list">
      <div className="template-list__header">
        <h1>Danh sách các mẫu Thiệp online</h1>
        <p>Chọn một template để bắt đầu custom cho người bạn yêu thương</p>
      </div>

      <div className="template-list__grid">
        {templates.map((template) => (
          <div key={template} className="template-card">
            <div className="template-card__preview">
              <iframe
                src={api.getTemplateUrl(template)}
                title={template}
                className="template-card__iframe"
              />
            </div>

            <div className="template-card__content">
              <button
                onClick={() => onSelectTemplate(template)}
                className="template-card__btn"
              >
                Bắt đầu chỉnh sửa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateList;