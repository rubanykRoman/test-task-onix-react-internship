import './App.scss';
import ThemeProvider from './common/contexts/themeContext';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <ThemeProvider>
      <Home/>
    </ThemeProvider>
  );
}