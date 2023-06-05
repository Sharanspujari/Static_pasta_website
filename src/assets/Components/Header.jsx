import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch ,} from "@fortawesome/free-solid-svg-icons";

import Navbar from "react-bootstrap/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
 
} from "react-icons/fa";

import { Col } from "react-bootstrap";

function Header() {
  return (
    <>
    
    <Navbar className="d-flex justify-content-between ml-3">
      <div className="d-flex">
        <Col>
          <FaFacebook size={22} />
        </Col>
        <Col>
          <FaTwitter size={22} />
        </Col>
        <Col>
          <FaInstagram size={22} />   
        </Col>
        <Col>
          <FaYoutube size={22} />
        </Col>
        <Col>
          <FaPinterest size={22} />
        </Col>
      </div>

      <div>
      <img
        className="logoimg"
        src="https://t3.ftcdn.net/jpg/02/15/75/02/360_F_215750265_BCH7ZqeUiqdK2c5i594qwZotdDp7Wl9Y.jpg"
      />
      </div>
      <div className="navbar margin-left-100 d-flex align-items-end  ">
        <form className=" d-flex flex-column form-inline my-8 my-lg-0">
        <div className="d-flex flex-row  justify-content-md-between">
      <div className="d-flex mr-4 ">
    <span>  1800 123 456</span> 
    </div>  
    <div className="d-flex  mr-5 mb-2">
    <span>Enquery</span>
    </div>
    </div>
    <div className="form-group mr-3">
          <input
            className="form-control form-control py-2 mx-2 border-right-0 border "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
         <span className=" input-group-append">
         <div className="input-group-text py-2 ">
          <FontAwesomeIcon icon={faSearch}/>
          </div>
        </span>
        </div>
        </form>
      </div>
      
    </Navbar>
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse d-flex justify-content-md-center navbar-collapse " >
      <div className="navbar-nav   ">
        <a className="nav-link active fw-bold text-danger mr-3 "  href="#">Home</a>
        <a className="nav-link active fw-bold  mr-3" href="#">About</a>
        <a className="nav-link  active fw-bold  mr-3" href="#">Products</a>
        <a className="nav-link active fw-bold  mr-3"  href="#">Recipes</a>
        <a className="nav-link active fw-bold  mr-3" href="#">Career</a>
        <a className="nav-link active fw-bold  mr-3" href="#">Media</a>
        <a className="nav-link active fw-bold  mr-3" href="#">Contact</a>
       
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;
