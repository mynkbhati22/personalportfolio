import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bg from "../assets/img/banner-bg.png";
import { FaLinkedinIn, FaTelegramPlane, FaInstagram } from "react-icons/fa";

export default function ReactNavbar() {
  const [active, setActive] = React.useState(0);
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scroll ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">MY PROTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              href="#home"
              className={`${active === 1 ? "active" : ""}mx-2`}
              onClick={() => setActive(1)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${active === 2 ? "active" : ""} mx-2`}
              onClick={() => setActive(2)}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#my-portfolio"
              className={`${active === 3 ? "active" : ""} mx-2`}
              onClick={() => setActive(3)}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#"
              target="_blank"
              className={`${active === 4 ? "active" : ""} mx-2`}
              onClick={() => setActive(4)}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/" target="_blank" className="sociallink">
              <FaTelegramPlane />
            </Nav.Link>
            <Nav.Link href="/" target="_blank" className="sociallink">
              <FaLinkedinIn />
            </Nav.Link>
            <Nav.Link href="/" target="_blank" className="sociallink">
              <FaInstagram />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <div className="background">
        <img src={bg} alt="" className="bg-img" />
      </div>
    </Navbar>
  );
}
