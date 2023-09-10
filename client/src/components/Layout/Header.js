import React from 'react';
import {Link} from 'react-router-dom';
import {GiShoppingBag} from 'react-icons/gi'
import { useAuth } from '../../context/auth';
import Dashboard from './../../pages/user/Dashboard';

const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,
      user:null,
      token:""
    });
    localStorage.removeItem("auth");

  };
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar-bg">
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"> <GiShoppingBag/>   Ecommerce App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link " aria-current="page">Home</Link>
        </li>
        {/* <li class="nav-item">
          <Link to="/categ" class="nav-link" aria-current="page">Categaory</Link>
        </li> */}
        {
          !auth.user? (<>
          <li class="nav-item">
          <Link to="/register" class="nav-link">Register</Link>
        </li>
        <li class="nav-item">
          <Link to="/login" class="nav-link">Login</Link>
        </li>
          </>):(<>

            <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to={`/dashboard/${auth?.user?.role===1?'admin':'user'}`} class="dropdown-item" href="#">Dashboard</Link></li>
            <li>
            <Link onClick={handleLogout} to="/login" class="dropdown-item" >Logout</Link>

            </li>

          </ul>

        </li>

          </>)
        }
        <li class="nav-item">
          <Link to="/cart" class="nav-link">Cart(0)</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
