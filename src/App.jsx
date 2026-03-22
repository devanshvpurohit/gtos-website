import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Home from './pages/Home'
import Problem from './pages/Problem'
import Vision from './pages/Vision'
import Features from './pages/Features'
import Audience from './pages/Audience'
import Waitlist from './pages/Waitlist'

function App() {
  return (
    <BrowserRouter>
      <ParticleBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/features" element={<Features />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
