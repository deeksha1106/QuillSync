import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/DocumentsList.css';

const DocumentsList = () => {
  // Simulated document data
  const [documents, setDocuments] = useState([
    { _id: '1', title: 'Document 1' },
    { _id: '2', title: 'Document 2' },
  ]);

  return (
    <div className="documents-list">
      <h1>Your Documents</h1>
      <Link to="/documents/new"><button>Create New Document</button></Link>
      <ul>
        {documents.map((doc) => (
          <li key={doc._id}>
            <Link to={`/documents/${doc._id}`}>{doc.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;