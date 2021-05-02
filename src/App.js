import './App.scss';
import ThemeProvider from './contexts/themeContext';
import Home from './pages/Home/components/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  );
}