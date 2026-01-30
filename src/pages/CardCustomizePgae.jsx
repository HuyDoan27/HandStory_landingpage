// src/pages/CardCustomizePage.jsx
import React, { useState } from 'react';
import TemplateList from '../components/TemplateList';
import Editor from '../components/Editor';
import QRModal from '../components/QRModal';

const CardCustomizePage = () => {
  const [view, setView] = useState('list'); // 'list' | 'editor'
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [generatedResult, setGeneratedResult] = useState(null);

  const handleSelectTemplate = (templateName) => {
    setSelectedTemplate(templateName);
    setView('editor');
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedTemplate(null);
    setGeneratedResult(null);
  };

  const handleGenerated = (result) => {
    setGeneratedResult(result);
  };

  const handleCloseModal = () => {
    setGeneratedResult(null);
  };

  return (
    <div className="card-customize-page">
      {view === 'list' && (
        <TemplateList onSelectTemplate={handleSelectTemplate} />
      )}

      {view === 'editor' && (
        <Editor
          templateName={selectedTemplate}
          onBack={handleBackToList}
          onGenerated={handleGenerated}
        />
      )}

      {generatedResult && (
        <QRModal
          url={generatedResult.url}
          qrCode={generatedResult.qrCode}
          onClose={handleCloseModal}
          onBackToList={handleBackToList}
        />
      )}
    </div>
  );
};

export default CardCustomizePage;