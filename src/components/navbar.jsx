import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import pdf from '../assets/vishal.pdf';

const NavbarComponent = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY < 200) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        className={`header-nav${isSticky ? ' sticky' : ''}`}
        fixed="top"
        collapseOnSelect
        bg="dark"
        expand="lg"
      >
        <div className="logo">
          <Fade left cascade>
            <Navbar.Brand href="#home" className="brand-name ml-5">
              Vishal.
            </Navbar.Brand>
          </Fade>
        </div>

        <div className="menu">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Fade right cascade>
                <Nav.Link className="px-3" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="px-3" href="#about">
                  About
                </Nav.Link>
                <Nav.Link className="px-3" href="#work">
                  Experience
                </Nav.Link>
                <Nav.Link className="px-3" href="#project">
                  Projects
                </Nav.Link>
                <Nav.Link className="px-3" href="#contact">
                  Contact
                </Nav.Link>
                <Nav.Link
                  className="px-3"
                  rel="noopener noreferrer"
                  href={pdf}
                  target="_blank"
                >
                  <Button variant="outline-success" className="button">
                    Resume
                  </Button>
                </Nav.Link>
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
