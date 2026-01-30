import React, { useState } from 'react';
import { Modal, Button, Input, Space, Typography, Divider, message } from 'antd';
import { CopyOutlined, CheckOutlined, GlobalOutlined, UnorderedListOutlined, QrcodeOutlined } from '@ant-design/icons';
import '../styles/QRModal.css';

const { Title, Paragraph } = Typography;

const QRModal = ({ url, qrCode, onClose, onBackToList }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    message.success('Đã copy link vào clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={null}
      width={520}
      centered
      className="qr-modal-antd"
      closeIcon={<span className="qr-modal-close-icon">✕</span>}
    >
      <div className="qr-modal-content">
        {/* Header */}
        <div className="qr-modal-header">
          <div className="qr-modal-success-icon">
            <CheckOutlined />
          </div>
          <Title level={3} className="qr-modal-title">
            Tạo thành công!
          </Title>
          <Paragraph className="qr-modal-subtitle">
            Trang HTML của bạn đã sẵn sàng để chia sẻ
          </Paragraph>
        </div>

        <Divider className="qr-modal-divider" />

        {/* QR Code */}
        <div className="qr-modal-qr-section">
          <div className="qr-modal-qr-wrapper">
            <QrcodeOutlined className="qr-modal-qr-icon" />
            <img src={qrCode} alt="QR Code" className="qr-modal-qr-image" />
          </div>
          <Paragraph className="qr-modal-qr-label">
            Quét mã QR để truy cập nhanh
          </Paragraph>
        </div>

        <Divider className="qr-modal-divider" />

        {/* Link Section */}
        <div className="qr-modal-link-section">
          <Paragraph className="qr-modal-link-label">
            Link truy cập
          </Paragraph>
          <Space.Compact style={{ width: '100%' }}>
            <Input
              value={url}
              readOnly
              className="qr-modal-input"
            />
            <Button
              type="primary"
              icon={copied ? <CheckOutlined /> : <CopyOutlined />}
              onClick={copyToClipboard}
              className={`qr-modal-copy-btn ${copied ? 'copied' : ''}`}
            >
              {copied ? 'Đã copy' : 'Copy'}
            </Button>
          </Space.Compact>
        </div>

        {/* Action Buttons */}
        <div className="qr-modal-actions">
          <Button
            type="primary"
            size="large"
            icon={<GlobalOutlined />}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="qr-modal-btn-primary"
            block
          >
            Mở trang web
          </Button>
          <Button
            size="large"
            icon={<UnorderedListOutlined />}
            onClick={onBackToList}
            className="qr-modal-btn-secondary"
            block
          >
            Quay lại danh sách
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default QRModal;