import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Homepage from './Frontend/Homepage/Homepage.jsx'
import Contact from './Frontend/Contact/Contact.jsx'
import About from './Frontend/About/About.jsx'
import Default from './Frontend/Default/Default.jsx'
import SignIn from './Frontend/SignIn/SignIn.jsx'
import SignUp from './Frontend/SignUp/SignUp.jsx'
import Diary from './Frontend/Diary/Diary.jsx'
import Converse from './Frontend/Converse/Converse.jsx'
import Desktop from './Frontend/Desktop/Desktop.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/desktop" element={<Desktop />} />
          <Route path="/desktop/diary" element={<Diary />} />
          <Route path="/desktop/converse" element={<Converse />} />

          <Route path="*" element={<Default />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
