import React, {useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/Header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import { useCart } from "../../comoponents/layouts/CartContext";

export default function Header() {
  const { cart } = useCart();
  const [nav,setNav] = useState()

  const changeValueOnScroll = ()=>{
    const scrollValue = document?.documentElement?.scrollTop
    scrollValue >100 ? setNav(true) : setNav(false)
  }

  window.addEventListener("scroll",changeValueOnScroll)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : "" }`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
            <Link to='/'>
            <h3>RepEAT</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/wish">
                Wishlist
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{cart.length}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
