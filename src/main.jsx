import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './app/Layouts/MainLayout.jsx';
import CanvasEffect from './app/Components/CanvasEffect.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CanvasEffect/>
    <MainLayout/>
  </React.StrictMode>,
)
