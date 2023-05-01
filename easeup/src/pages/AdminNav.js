import axios from "axios";
import React, { useEffect ,useState} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { ChatState } from "../../context/ChatProvider";

const AdminNav = () => {
  const [first, setfirst] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      {/* <Navbar style={{ backgroundColor: "#a6b7ff", height: "5rem" }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SOPIFY ADMIN DASHBOARD</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/adminDashboard">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/clientdetails">
                <Nav.Link>All Clients</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/chat">
                <Nav.Link>My Chats</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/internList">
                <Nav.Link>Interns List </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/AllPaidClientList">
                <Nav.Link>Paid Client List </Nav.Link>
              </LinkContainer> */}
              {/* <LinkContainer to="/particularClient">
                <Nav.Link>Particular Client Info</Nav.Link>
              </LinkContainer> */}
              {/* <LinkContainer to="/approvalstatus">
                <Nav.Link>Approval Status</Nav.Link>
              </LinkContainer> */}
            {/* </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <div className="navbars" style={{backgroundColor:"#a6b7ff",height:"5rem"}}>
        <div className="navbar-child">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            <NavLink className="Navlink" to="/checkerDashboard">
            SOPIFY ADMiN DASHBOARD
            </NavLink>
            
          </div>
          <ul className="navbar-ul">
            <NavLink className="Navlink" to="/adminDashboard">
              <li className="navbar-li">Home</li>
                          </NavLink>
            <NavLink className="Navlink" to="/clientdetails">
              <li className="navbar-li">All Clients</li>
            </NavLink>
            <NavLink className="Navlink" to="/chat">
              <li className="navbar-li">My Chats</li>
            </NavLink>
            <NavLink className="Navlink" to="/internList">
              <li className="navbar-li">Interns List</li>
            </NavLink>
            <NavLink className="Navlink" to="/AllPaidClientList">
              <li className="navbar-li">Paid Client List</li>
            </NavLink>
            
          </ul>
        </div>
        <div className="R_NavBar-nav">
          <div className="navs-logo">
            {/* <img src={logo} className="navs-logoImg" alt="" /> */}
            SOPIFY ADMIN DASHBOARD
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
                  <a href="/adminDashboard">Admin Dashoard</a>
                </li>
                <li className="R_navs-list">
                  <a href="/clientdetails">All Clients</a>
                </li>
                <li className="R_navs-list">
                  <a href="/chat">My Chats</a>
                </li>
                <li className="R_navs-list">
                  <a href="/internList">Interns List</a>
                </li>
                <li className="R_navs-list">
                  <a href="/AllPaidClientList">Paid Client List</a>
                </li>
                
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
