import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
