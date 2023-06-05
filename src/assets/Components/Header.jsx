import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch ,} from "@fortawesome/free-solid-svg-icons";
import { ic_question_answer } from 'react-icons-kit/md/ic_question_answer'
import { Icon } from 'react-icons-kit';
import { whatsapp } from 'react-icons-kit/fa/whatsapp';
import {Navbar,Nav} from "react-bootstrap/Navbar";
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
    
    <Navbar className="d-flex  expand-lg justify-content-between ml-3">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
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
      </Nav>  
      </Navbar.Collapse>
      <div>
      <img
        className="logoimg"
        src="https://t3.ftcdn.net/jpg/02/15/75/02/360_F_215750265_BCH7ZqeUiqdK2c5i594qwZotdDp7Wl9Y.jpg"
      />
      </div>
      <div className="navbar margin-left-100 d-flex flex-wrap align-items-end  ">
        <form className=" flex-fill flex-wrap d-flex flex-column form-inline my-8 my-lg-0">
        <div className="d-flex flex-fill flex-row  justify-content-md-between">
      <div className="d-flex mr-4 ">
      <Icon icon={whatsapp} size={20} />
    <span>1800 123 456</span> 
    </div>  
    <div className="d-flex  mr-5 mb-2">
    <Icon icon={ic_question_answer} size={20} />
    <span>Enquery</span>
    </div>
    </div>
    <div className="form-group mr-3 d-flex flex-fill">
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
      <div className="navbar-nav d-flex flex-coloumn  ">
        <a className="nav-link active  mr-3 "  href="#">Home</a>
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
