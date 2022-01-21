import React from 'react'
import logo from '../Utils/Images/logo.png'
function Footer() {
 return (
  <footer className="text-center text-lg-start">
   <section className="pt-2">
    <div className="container text-center text-md-start mt-5">

     <div className="row mt-3">

      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

       <h6 className="text-uppercase fw-bold mb-4">
        <img src={logo} alt='logo' style={{width:'60%', height:'auto'}}/>
       </h6>
       <p>Home And Dome is the best website to look for appartments and PGs for students in different cities with just one click!!!</p>
      </div>
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
       <h6 className="text-uppercase fw-bold mb-4">
        Important Links
       </h6>
       <p>
        <a href="#!" className="text-reset">Home</a>
       </p>
       <p>
        <a href="#!" className="text-reset">Owner</a>
       </p>
       <p>
        <a href="#!" className="text-reset">About Us</a>
       </p>
       <p>
        <a href="#!" className="text-reset">Housings</a>
       </p>
       <p>
        <a href="#!" className="text-reset">Services</a>
       </p>
      </div>
      
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

       <h6 className="text-uppercase fw-bold mb-4">
        Contact
       </h6>
       <p>Annanya / Kunal Aggarwal / Utpal / Hritick Chourasia</p>
       <p>
        annanya17699@gmail.com / kunalcse2022@gmail.com / 08utpal@gmail.com / hritick@gmail.com
       </p>
      </div>

     </div>

    </div>
   </section>

   <div className="copyright text-center text-white p-4">
    © 2021 Copyright: &nbsp;
    <span className='fw-bold text-light'>annanya17699@gmail.com , kunalcse2022@gmail.com , 08utpal@gmail.com</span>
   </div>

  </footer>

 )
}

export default Footer
