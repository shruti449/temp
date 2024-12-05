import { useState } from 'react'
 import reactLogo from './assets/react.svg'
 import viteLogo from '/vite.svg'
 import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import Home from './Home'
import ButtonBaseDemo from './components/ButtonBaseDemo'
import CustomizedBadges from './components/CustomizedBadges.jsx'
 function App() {
   return (
     <>
       <div>
         <Routes>
           <Route path='/' element={<LoginForm></LoginForm>}></Route>
           <Route path='categories' element={<ButtonBaseDemo></ButtonBaseDemo>}></Route>
           <Route path='home' element={<Home></Home>}></Route>
         </Routes>
         {/* <CustomizedBadges></CustomizedBadges> */}
       </div>
     </>
   )
 }
 
 export default App