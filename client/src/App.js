import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PagenotFound from './pages/PagenotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import CreatCatagory from './pages/Admin/CreatCatagory';
import CreatProduct from './pages/Admin/CreatProduct';
import User from './pages/Admin/User';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>
      <Route path='user/profile' element={<Profile/>}/>
      <Route path='user/order' element={<Orders/>}/>
      </Route>

      <Route path='/dashboard' element={<AdminRoute/>}>
      <Route path='admin' element={<AdminDashboard/>}/>
      <Route path='admin/creat-category' element={<CreatCatagory/>}/>
      <Route path='admin/creat-product' element={<CreatProduct/>}/>
      <Route path='admin/users' element={<User/>}/>



      </Route>

      <Route path='/Register' element={<Register/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<PagenotFound/>}/>


    </Routes>
    </>
  );
}

export default App;
