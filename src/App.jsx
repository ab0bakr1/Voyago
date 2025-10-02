import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Menu from './assets/pages/Menu'
import DetailsPage from './assets/pages/DetailsPage'
import NoPage from './assets/pages/NoPage'
import SingUpPage from './assets/pages/SingUpPage'
import LoginPage from './assets/pages/LoginPage'
import SearchPage from './assets/pages/SearchPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/List" element={<Menu />} />
      <Route path="/SingUp" element={<SingUpPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      
      <Route path="/Details/:id" element={<DetailsPage />} />
      <Route path="*" element={<NoPage />} />

    </Routes>
  )
}
