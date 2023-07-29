import logo from './logo.svg';
import './App.css';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/Login';
import Register from './pages/Register';
import CandidateRegister from './pages/CandidateRegister';
import InstituteRegister from './pages/InstituteRegister';
import RecruiterRegister from './pages/RecruiterRegister';
import OfficerRegister from './pages/OfficerRegister';
import AdminRegister from './pages/AdminRegister';
import Contact from './pages/Contact';
import Roles from './pages/Roles';
import Feedback from './pages/Feedback';
import ForgotPassword from './pages/ForgotPassword';
import CandidateDashboard from './pages/CandidateDashboard';
import CandidateJobApplied from './pages/CandidateJobApplied';
import CandidateJobSearch from './pages/CandidateJobSearch';
import CandidateJobSaved from './pages/CandidateJobSaved';
import CandidateProfile from './pages/CandidateProfile';
import CandidateChat from './pages/CandidateChat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/candidate_register" element={<CandidateRegister />} />
          <Route path="/institute_register" element={<InstituteRegister />} />
          <Route path="/recruiter_register" element={<RecruiterRegister />} />
          <Route path="/officer_register" element={<OfficerRegister />} />
          <Route path="/admin_register" element={<AdminRegister />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />

          {/* Candidate Routes */}
          <Route path="/candidate_dashboard" element={<CandidateDashboard />} />
          <Route path="/candidate_jobsearch" element={<CandidateJobSearch />} />
          <Route path="/candidate_jobapplied" element={<CandidateJobApplied />} />
          <Route path="/candidate_jobsaved" element={<CandidateJobSaved />} />
          <Route path="/candidate_profile" element={<CandidateProfile />} />
          <Route path="/candidate_chat" element={<CandidateChat />} />
        </Routes>
      </Router>
      {/* <Index />
      <Contact /> */}
    </div>
  );
}

export default App;