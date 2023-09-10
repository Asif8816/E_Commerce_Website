import React from 'react'
import MainPage from '../../components/Layout/MainPage'
import AdminMenu from '../../components/Layout/AdminMenu'

const User = () => {
  return (
    <MainPage title={"dashboard-All Users"}>
     <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
            <AdminMenu/>
        </div>
        <div className="col-md-9">
            All users
        </div>
      </div>
      </div>
    </MainPage>
  )
}

export default User
