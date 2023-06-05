import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
 
} from "react-icons/fa";
import { Col } from "react-bootstrap";
function Footer() {
  return (
    <>
         <div className="collapse mt-5 d-flex flex-coloumn justify-content-md-center navbar-collapse " >
           
        <a className="nav-link active  mr-3 " href="#">Privacy Policy</a>
        <div className='mr-3'>|</div>
        <a className="nav-link active   mr-3" href="#">Privacy</a>
        <div className='mr-3'>|</div>
        <a className="nav-link  active   mr-3" href="#">Terms of Use</a>
        <div className='mr-3'>|</div>
        <a className="nav-link active  mr-3"  href="#">FAQs</a>
        <div className='mr-3'>|</div>
        <a className="nav-link active   mr-3" href="#">Conatct Us</a>
        
       
     
    </div>
    <div>

<div className="d-flex justify-content-center mt-3 mx-2">
<p className='mr-2'>Follow us :</p>
          <FaFacebook className='mr-2' size={18} />
        
       
          <FaTwitter className='mr-2'  size={18} />
       
        
          <FaInstagram className='mr-2'  size={18} />   
        
       
          <FaYoutube className='mr-2'  size={18} />
       
       
          <FaPinterest size={18} />
      
      </div>


    </div>
    <div className='mr-2 ml-2' style={{borderBottom:"2px solid gray" }}></div>
    <div>
      @Copyright @ 2020 BamBino Pasta Industries.
    </div>
    </>
  )
}

export default Footer