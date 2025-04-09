import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Crosswords from './pages/Crosswords';
import { AnimatePresence } from 'framer-motion';
import ResumePage from './pages/Resume';
import NoMatch from './pages/NoMatch/ui/Page/Page';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8 ">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crosswords" element={<Crosswords />} />
            <Route path="/crosswords/:puzzleId" element={<Crosswords />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App; 