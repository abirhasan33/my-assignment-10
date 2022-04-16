import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
// import logo from "../../../images/logo.png";
import "./Heder.css";
import {Link} from 'react-router-dom';
import CustomLink from "../CustomLink/CustomLink";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
// import { signOut } from "firebase/auth";

const Heder = () => {
//   const [user] = useAuthState(auth);
//   const handleSignOut = () => {
//     signOut(auth);
//   }
  return (
    <>
      <Navbar className="container-times" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={35} src="" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="home#service">Service</Nav.Link>
              <CustomLink as={Link} to="/checkout">Checkout</CustomLink>
              <CustomLink as={Link} to="/Login">Login</CustomLink>
            </Nav>
            <Nav>
              <CustomLink as={Link} to="/about">About</CustomLink>
              {/* {
                user?
                <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>sign out</button>
                :
                 <Nav.Link as={Link} to="/login" href="#memes">
                   Login
                 </Nav.Link>
              } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Heder;
