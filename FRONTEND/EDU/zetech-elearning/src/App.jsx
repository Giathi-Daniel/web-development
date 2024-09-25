import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Course from './pages/Course';
import Timetables from './pages/Timetables';
import Results from './pages/Results';
import Support from './pages/Support';
import Library from './pages/Library';
import FAQ from './pages/FAQ';
import MOOCS from './pages/MOOCS';
import Contacts from './pages/Contacts';
// import Login from './pages/LogIn';

function App() {

  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/timetables" element={<Timetables />} />
            <Route path="/results" element={<Results />} />
            <Route path="/support" element={<Support />} />
            <Route path="/library" element={<Library />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/moocs" element={<MOOCS />} />
            <Route path="/contacts" element={<Contacts />} />
            {/* <Route path="/login" element={<LogIn />} /> */}
          </Routes>
      </Router>
    </>
  )
}

export default App
