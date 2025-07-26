import React from 'react';
import './App.css';
import { I18nProvider } from './i18n';
import { ThemeProvider } from './context';
import HeaderComponent from './components/layout/HeaderComponent/HeaderComponent';
import MainComponent from './components/layout/MainComponent/MainComponent';
import FooterComponent from './components/layout/FooterComponent/FooterComponent';

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="app">
          <HeaderComponent />
          <MainComponent />
          <FooterComponent />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
