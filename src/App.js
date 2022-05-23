import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import RequireAuth from './Pages/Login/RequireAuth'
import Signup from './Pages/Login/Signup'
import Purchase from './Pages/Purchase/Purchase'
import Navbar from './Pages/Shared/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyOrders from './Pages/Dashboard/MyOrders'
import AddReview from './Pages/Dashboard/AddReview'
import MyProfile from './Pages/Dashboard/MyProfile'

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
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} >
          <Route index element={<MyOrders />} />
          <Route path='/dashboard/myReview' element={<AddReview />} />
          <Route path='/dashboard/myProfile' element={<MyProfile />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
