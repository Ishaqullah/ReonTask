import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import ChartPage from './pages/ChartPage';
import TablePage from './pages/TablePage';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Navigate to="/chart" />} />
      <Route exact path="/chart" element={<ChartPage/>}/>
      <Route exact path="/table" element={<TablePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
