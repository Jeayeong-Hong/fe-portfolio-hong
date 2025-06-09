import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevTest from './pages/DevTest';
import AiSearch from './pages/AiSearch';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev-test" element={<DevTest />} />
        <Route path="/ai-search" element={<AiSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
