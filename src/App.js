import React from 'react';
import './App.scss';
import ThemeProvider from './contexts/themeContext';
import HomePage from './pages/Home/components/HomePage';

const App = () => 
  <ThemeProvider>
    <HomePage />
  </ThemeProvider>

export default App;
