import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import DevTest from './pages/DevTest';
import AiSearch from './pages/AiSearch';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
          </>
        } />
        <Route path="/dev-test/*" element={<DevTest />} />
        <Route path="/ai-search" element={<AiSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
