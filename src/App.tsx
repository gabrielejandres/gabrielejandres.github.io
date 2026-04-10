import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Header, Footer } from './components';
import { HomePage } from './pages/home';
import { ProjectDetailPage } from './pages/project-detail';
import './core/i18n/config';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen bg-neutral-950 ${isDark ? 'theme-dark' : ''}`}>
        <Header isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
