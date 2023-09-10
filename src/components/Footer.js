import React from 'react'
import {FaFacebook,FaGooglePlusG,FaInstagram,FaLinkedin} from 'react-icons/fa6'
export default function Footer() {
  return (
   
     
<div >

  <footer className="text-white text-center text-lg-start bg-dark">
   
    <div className="container p-4">
     
      <div className="row mt-4">
       
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>

          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>

          <div className="mt-4">
           
            <button type="button" className="btn btn-floating btn-light btn-lg mr-4">  < FaFacebook/>  </button>
          
            <button type="button" className="btn btn-floating btn-light btn-lg"><FaLinkedin/></button>
          
            <button type="button" className="btn btn-floating btn-light btn-lg"><FaInstagram/></button>
          
            <button type="button" className="btn btn-floating btn-light btn-lg"> <FaGooglePlusG/> </button>
         
          </div>
        </div>
      

       
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
         

          <div className="form-outline form-white mb-4">
          
          </div>

          <ul className="fa-ul" style={{margin: "1.65em"}}>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Johar town, 00-967, Lahore</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">shahbazgill621@gmail.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
            </li>
          </ul>
        </div>
       
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      
      </div>
    
    </div>
   
    <div className="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
      © 2023 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">KFC-Pakistan.com</a>
    </div>
 
  </footer>

</div>


   
  )
}
