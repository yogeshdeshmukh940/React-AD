import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import TaskCheck from './components/TaskCheck'
import Page1 from './components/Page1'
import Cards from './components/Cards'
import GetData from './components/GetData'
import DataFetchingComponent from './components/DataFetchingComponent'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<GetData />} />
            <Route path='/cards' element={<Cards />} />
          </Route>
        </Routes>
      </BrowserRouter>



      {/* <GetData/> */}
      {/* <Login/> */}
      {/* <DataFetchingComponent/> */}
      {/* <Cards/> */}
      {/* <RegistrationForm/> */}
      {/* <TaskCheck/> */}
      {/* <Page1/> */}
    </>
  )
}

export default App