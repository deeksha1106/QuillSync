import React, { useState } from 'react';
import '../css/DocumentEditor.css';

const DocumentEditor = ({ documentId }) => {
  const [content, setContent] = useState('');

  const handleEdit = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  return (
    <div className="document-editor">
      <textarea value={content} onChange={handleEdit}></textarea>
    </div>
  );
};

export default DocumentEditor;
