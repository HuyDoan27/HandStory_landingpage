const API_URL = 'http://localhost:5000';

export const api = {
  // Lấy danh sách templates
  async getTemplates() {
    try {
      const res = await fetch(`${API_URL}/api/templates`);
      return await res.json();
    } catch (err) {
      console.error('Lỗi khi tải templates:', err);
      throw err;
    }
  },

  // Lấy nội dung template
  async getTemplateContent(templateName) {
    try {
      const res = await fetch(`${API_URL}/templates/${templateName}`);
      return await res.text();
    } catch (err) {
      console.error('Lỗi khi tải template:', err);
      throw err;
    }
  },

  // Tạo HTML đã custom
  async generateHtml(htmlContent, password = '') {
    try {
      const res = await fetch(`${API_URL}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ htmlContent, password })
      });
      return await res.json();
    } catch (err) {
      console.error('Lỗi khi tạo HTML:', err);
      throw err;
    }
  },

  // Tạo QR code
  getQrCodeUrl(url) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
  },

  // Lấy URL template để preview
  getTemplateUrl(templateName) {
    return `${API_URL}/templates/${templateName}`;
  }
};