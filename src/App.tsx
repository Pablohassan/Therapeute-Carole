// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CouplePage from './pages/Couple';
import Apropos from './pages/Apropos';
import FamilyPage from './pages/Family';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/couple" element={<CouplePage />} />
        <Route path="/bio" element={<Apropos />} />
        <Route path="/family" element={<FamilyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
