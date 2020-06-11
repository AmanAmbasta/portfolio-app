import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Head from './components/Head';
import MainContent from './components/MainContent'
import './scss/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
