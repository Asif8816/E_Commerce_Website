import React from 'react'
import MainPage from '../../components/Layout/MainPage'
import UserManu from '../../components/Layout/UserManu';
import { useAuth } from '../../context/auth';
const Dashboard = () => {
  const [auth]=useAuth();
  return (
    <MainPage>
    <div className="container-fluid p-3 m-3">
              <UserManu/>
    </div>
    </MainPage>
  )
}

export default Dashboard;
