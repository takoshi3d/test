// App.js
import React from 'react';
import DocumentComponent from './DocumentComponent';

function App() {
  return (
    <div className="App">
      <DocumentComponent collectionName="yourCollection" docId="yourDocId" />
    </div>
  );
}

export default App;
