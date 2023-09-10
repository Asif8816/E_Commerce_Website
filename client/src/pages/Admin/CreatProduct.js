import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import MainPage from '../../components/Layout/MainPage'

const CreatProduct = () => {
  return (
    <MainPage title={" Dasboard-Creat Prodcut "}>
  <div className="container-fluid m-3 p-3">
    <div className="row">
      <div className="col-md-3">
          <AdminMenu/>
      </div>
      <div className="col-md-9">
         CreatProduct
      </div>
    </div>
    </div>
  </MainPage>
  )
}

export default CreatProduct
