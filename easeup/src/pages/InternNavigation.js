import axios from "axios";
import React, { useEffect,useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../components/Navbar/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
// import { ChatState } from "../../context/ChatProvider";

const InternNavigation = () => {
  const [first, setfirst] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* {" "}
      <Navbar style={{ backgroundColor: "#a6b7ff", height: "5rem" }}expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SOPIFY INTERN DASHBOARD</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <LinkContainer to="/chat">
                <Nav.Link>My Chats</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/particularClient">
                <Nav.Link>Particular Client Info</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/approvalstatus">
                <Nav.Link>Approval Status</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
            show={show}
            placement="end"
            className="off_canvas"
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>SOPIFY</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_navs-list">
                  <a href="/">Home Page</a>
                </li>
                <li className="R_navs-list">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="R_navs-list">
                  <a href="/services">Services</a>
                </li>
                <li className="R_navs-list">
                  <a href="/sop">SOP</a>
                </li>
                <li className="R_navs-list">
                  <a href="/lor">LOR</a>
                </li>
                <li className="R_navs-list">
                  <a href="/assignment">Assignment</a>
                </li>
                <li className="R_navs-list">
                  <a href="/aboutus">Contact Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/contactus">About Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/login">Login In/Sign Up</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas> */}
     <div className="navbars" style={{backgroundColor:"#a6b7ff",height:"5rem"}}>
        <div className="navbar-child">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            <NavLink className="Navlink" to="/internDashboard">
            SOPIFY INTERN DASHBOARD
            </NavLink>
            
          </div>
          <ul className="navbar-ul">
            <NavLink className="Navlink" to="/chat">
              <li className="navbar-li">My Chats</li>
            </NavLink>
            <NavLink className="Navlink" to="/particularClient">
              <li className="navbar-li">Particular Client Info</li>
            </NavLink>
            <NavLink className="Navlink" to="/approvalstatus">
              <li className="navbar-li">Approval Status</li>
            </NavLink>
            
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            SOPIFY INTERN DASHBOARD
          </div>
          <div onClick={handleShow} className="Burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <Offcanvas
            show={show}
            placement="end"
            className="off_canvas"
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>SOPIFY</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="R_Navigation">
                <li className="R_navs-list">
                  <a href="/">Home Page</a>
                </li>
                <li className="R_navs-list">
                  <a href="/blog">Blogs</a>
                </li>
                <li className="R_navs-list">
                  <a href="/services">Services</a>
                </li>
                <li className="R_navs-list">
                  <a href="/sop">SOP</a>
                </li>
                <li className="R_navs-list">
                  <a href="/lor">LOR</a>
                </li>
                <li className="R_navs-list">
                  <a href="/assignment">Assignment</a>
                </li>
                <li className="R_navs-list">
                  <a href="/aboutus">Contact Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/contactus">About Us</a>
                </li>
                <li className="R_navs-list">
                  <a href="/login">Login In/Sign Up</a>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default InternNavigation;
