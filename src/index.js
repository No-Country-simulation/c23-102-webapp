import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde react-dom/client
import App from './App';
// Obtén el elemento raíz donde se montará la aplicación
const rootElement = document.getElementById('root');
// Crea el root y renderiza la aplicación
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);