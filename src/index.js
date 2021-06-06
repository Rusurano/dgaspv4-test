import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { SheetProvider } from './Components/contexts/SheetContext';
import { ThemeProvider } from './Components/contexts/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <SheetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </SheetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
