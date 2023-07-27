import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <Index />
      <Contact /> */}
    </div>
  );
}

export default App;
