import React, { useEffect,useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../components/Navbar/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

const CheckerNav = () => {
  const [first, setfirst] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <Navbar expand="sm" style={{ backgroundColor: "#a6b7ff", height: "5rem" }}>
    //   <Container>
    //     <LinkContainer to="/">
    //       <Navbar.Brand>SOPIFY CHECKER DASHBOARD</Navbar.Brand>
    //       {/* <Navbar.Brand>EASEUP</Navbar.Brand> */}
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <LinkContainer to="/CheckerDashboard">
    //           <Nav.Link>Home</Nav.Link>
    //         </LinkContainer>
    //         {/* <LinkContainer to="/chat">
    //           <Nav.Link>Chat</Nav.Link>
    //         </LinkContainer> */}
    //         {/* <LinkContainer to="/blog">
    //           <Nav.Link>Blogs</Nav.Link>
    //         </LinkContainer> */}

    //         {/* 
    //         <LinkContainer to="/PandC">
    //           <Nav.Link>Community Support</Nav.Link>
    //         </LinkContainer> */}

    //         <LinkContainer to="/Checkertable">
    //           <Nav.Link>Intern Task List</Nav.Link>
    //         </LinkContainer>

    //         <LinkContainer to="/chat">
    //           <Nav.Link>My Chats</Nav.Link>
    //         </LinkContainer>

    //         <LinkContainer to="/SignInChecker">
    //           <Nav.Link>Logout</Nav.Link>
    //         </LinkContainer>

    //         {/* <LinkContainer to="/listenerregister">
    //           <Nav.Link>Register As Intern</Nav.Link>
    //         </LinkContainer> */}

    //         {/* <LinkContainer to="/ListenerLogin">
    //           <Nav.Link>Login Intern</Nav.Link>
    //         </LinkContainer> */}

    //         {/* <LinkContainer to="/RegisterUser">
    //           <Nav.Link>Register User</Nav.Link>
    //         </LinkContainer> */}
    //         {/*  */}
    //         {/* <LinkContainer to="/aboutUs">
    //           <Nav.Link>About Us</Nav.Link>
    //         </LinkContainer>

    //         <LinkContainer to="/contactUs">
    //           <Nav.Link>Contact Us</Nav.Link>
    //         </LinkContainer> */}

    //         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    // export default BasicExample;
    <>
    <div className="navbars" style={{backgroundColor:"#a6b7ff",height:"5rem"}}>
        <div className="navbar-child">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            <NavLink className="Navlink" to="/checkerDashboard">
            SOPIFY CHECKER DASHBOARD
            </NavLink>
            
          </div>
          <ul className="navbar-ul">
            <NavLink className="Navlink" to="/checkerDashboard">
              <li className="navbar-li">Home</li>
                          </NavLink>
            <NavLink className="Navlink" to="/Checkertable">
              <li className="navbar-li">Intern Task List</li>
            </NavLink>
            <NavLink className="Navlink" to="/chat">
              <li className="navbar-li">My Chats</li>
            </NavLink>
            <NavLink className="Navlink" to="/SignInChecker">
              <li className="navbar-li">Log Out</li>
            </NavLink>
            
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            SOPIFY CHECKER DASHBOARD
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
                  <a href="/checkerDashboard">Checker Dashoard</a>
                </li>
                <li className="R_navs-list">
                  <a href="/Checkertable">Intern Task List</a>
                </li>
                <li className="R_navs-list">
                  <a href="/chat">My Chats</a>
                </li>
                <li className="R_navs-list">
                  <a href="/SignInChecker">Log Out</a>
                </li>
                
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default CheckerNav;
