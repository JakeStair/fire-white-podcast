import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <MainContent />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;