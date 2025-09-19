import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
