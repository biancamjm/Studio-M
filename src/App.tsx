import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import { Routes } from 'react-router-dom'; 
import Routers from './Routes';
import { Home } from './Pages/Home';
import logoHome from "../src/assets/logoHome.png";
import bghome from "../src/assets/bghome.png";
// import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <img src={bghome} alt="" height='550px' width='1250px'></img>
    <img src={logoHome} alt="" height='350px'/>
    {/* <h1>STUDIO M</h1> */}
    {/* <App /> */}
  </StrictMode>,
)

// function App () {

//   return (
//     <>
//     {/* <Home></Home> */}
//       <Routers></Routers>
//     </>
//   )
// }

// export default App;