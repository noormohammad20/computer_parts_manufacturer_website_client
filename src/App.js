import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth'
import Signup from './Pages/Login/Signup'
import Purchase from './Pages/Purchase/Purchase'
import Navbar from './Pages/Shared/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/product/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>

    </div>
  )
}

export default App
