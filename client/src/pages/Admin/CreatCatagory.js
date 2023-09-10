import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import MainPage from '../../components/Layout/MainPage'

const CreatCatagory = () => {
  return (
    <MainPage title={"dashboard-Creatcatgory"}>
    <div className="container-fluid m-3 p-3">
    <div className="row">
      <div className="col-md-3">
          <AdminMenu/>
      </div>
      <div className="col-md-9">
        <h1>CreatCatagory</h1>
      </div>
    </div>
    </div>
  </MainPage>
  )
}

export default CreatCatagory
