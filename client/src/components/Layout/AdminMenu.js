import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
    <div className="text-center">
    <div className="list-group">
        <h4>Admin Panel</h4>
  <NavLink to="/dashboard/admin/creat-category" className="list-group-item list-group-item-action " aria-current="true">
    Creat category 
  </NavLink>
  <NavLink to="/dashboard/admin/creat-product" className="list-group-item list-group-item-action " aria-current="true">
    Creat Product 
  </NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action " aria-current="true">
    User
  </NavLink>
   </div>
    </div>



    </>
  )
}

export default AdminMenu
