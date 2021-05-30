import React from 'react';
import './App.scss';
import ThemeProvider from './contexts/themeContext';
import Home from './pages/Home/components/Home';

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
