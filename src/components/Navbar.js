import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={`${active === 1 ? "active" : ""}`}
              onClick={() => setActive(1)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${active === 2 ? "active" : ""}`}
              onClick={() => setActive(2)}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#my-portfolio"
              className={`${active === 3 ? "active" : ""}`}
              onClick={() => setActive(3)}
            >
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
