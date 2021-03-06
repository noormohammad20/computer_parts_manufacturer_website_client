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
import Users from './Pages/Dashboard/Users'
import RequireAdmin from './Pages/Login/RequireAdmin'
import AddProduct from './Pages/Dashboard/AddProduct'
import ManageProduct from './Pages/Dashboard/ManageProduct'
import Payment from './Pages/Dashboard/Payment'
import NotFound from './Pages/Shared/NotFound'
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders'
import MyPortfolio from './Pages/Shared/MyPortfolio'
import Blogs from './Pages/Shared/Blogs'
import LoadMyProfile from './Pages/Dashboard/LoadMyProfile'
import UpdateProfile from './Pages/Dashboard/UpdateProfile'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/product/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile />} />
          <Route path='/dashboard/loadMyProfile' element={<LoadMyProfile />} />
          <Route path='/dashboard/updateProfile' element={<UpdateProfile />} />
          <Route path='/dashboard/myReview' element={<AddReview />} />
          <Route path='/dashboard/myOrders' element={<MyOrders />} />
          <Route path='/dashboard/payment/:id' element={<Payment />} />
          <Route path='/dashboard/users' element={<RequireAdmin><Users /></RequireAdmin>} />
          <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='/dashboard/manageProduct' element={<RequireAdmin><ManageProduct /></RequireAdmin>} />
          <Route path='/dashboard/manageAllOrders' element={<RequireAdmin><ManageAllOrders /></RequireAdmin>} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
