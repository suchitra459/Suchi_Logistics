import React from 'react';
import './index.css'
import { Routes,Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import About from './Pages/About.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Pricing from './Pages/Pricing.jsx';
import Tracking from './Pages/Tracking.jsx';
import Login from './Pages/login.jsx';
import Register from './Pages/Register.jsx';
import FAQ from './Pages/FAQ.jsx';
import Privacypolicy from './Pages/Privacypolicy.jsx';
import Termofuse from './Pages/Termofuse.jsx';
import Refund from './Pages/Refund.jsx';
function App() {

  return (
    <>
     
      <Routes>
      <Route path="/" element={<MainLayout />}> 
        <Route index element={<Home />} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Tracking' element={<Tracking/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
<Route path='/Privacypolicy' element={<Privacypolicy/>}/>
<Route path='/Termofuse' element={<Termofuse/>}/>
<Route path='/Refund' element={<Refund/>}/>

         
     </Route>
        </Routes>

    </>
  )
}

export default App



