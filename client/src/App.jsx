
import './App.css'

import { Route, Routes } from 'react-router-dom'

import RequireAuth from './Components/Auth/RequireAuth'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseLIst from './Pages/Course/CourseLIst'
import CreateCourse from './Pages/Course/CreateCourse'
import AddLecture from './Pages/Dashboard/AddLecture'
import AdminDashboard from './Pages/Dashboard/AdminDashboard'
import Displaylectures from './Pages/Dashboard/Displaylectures'
import Denied from './Pages/Denied'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Payment/Checkout'
import CheckoutFailure from './Pages/Payment/CheckoutFailure'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import Signup from './Pages/Signup'
import EditProfile from './Pages/User/EditProfile'
import Profile from './Pages/User/Profile'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/courses' element={<CourseLIst/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/denied' element={<Denied/>}/>
     
      <Route path='/course/description' element={<CourseDescription/>}/>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>

      <Route  element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
      <Route path='/course/create' element={<CreateCourse/>}/>
      <Route path='/course/addlecture' element={<AddLecture/>}/>
      <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
     </Route>

      <Route  element={<RequireAuth allowedRoles={["ADMIN",'USER']}/>}>
      <Route path='/user/profile' element={<Profile/>}/>
      <Route path='/user/editprofile' element={<EditProfile/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/checkout/success' element={<CheckoutSuccess/>}/>
      <Route path='/checkout/fail' element={<CheckoutFailure/>}/>
      <Route path='/course/displaylecture' element={<Displaylectures/>}/>
  
      </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>


    </>
  )
}

export default App
