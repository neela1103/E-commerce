import React, { useState } from 'react';
import { Navbar, Container, Form, Button, Nav, NavDropdown } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navcomp.module.css'
import { FaRegUser } from 'react-icons/fa';
import { useAuth } from '../AuthContext';

function NavbarCompo() {
  const { user, signOut } = useAuth();
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const navigate = useNavigate();

  const openSearch = () => {
    setOverlayOpen(!isOverlayOpen);
    setShowSearchIcon(false);
  };

  const handleContinueShopping = () => {
    if (user) {
      navigate("/finalcart");
    }
    else
      navigate("/wishcomp");
  };

  const closeSearch = () => {
    setOverlayOpen(false);
    setShowSearchIcon(true);
  };

  const handleScrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const opensignupcomp = () => {
    console.log('Navigating to signup');
    navigate('/signup');
  };
  
  const handleLogout = () => {
    console.log('Logging out');
    signOut();
  }

  return (
    <div>
      <Navbar expand="lg" className={`${styles.navi}`}>
        <Container fluid>
          <Navbar.Brand className={styles.brandname}>
            FASHION <span className={styles.red}>HUB</span>
          </Navbar.Brand>
          <Navbar.Toggle className={styles.dropbtn} aria-controls="navbarScroll" />
          <Navbar.Collapse className={styles.dropdownbtn} id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link as={Link} to="/" className={styles.navLink1}>
                Home
              </Nav.Link>
              <NavDropdown title="Category" id="navbarScrollingDropdown" className={styles.navLink}>
                <NavDropdown.Item onClick={() => handleScrollToSection('Peaky')} className={styles.drop2}>
                  Mens
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleScrollToSection('womensSection')} className={styles.drop1}>
                  Womens
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => handleScrollToSection('dealsSection')} className={styles.navLinkdeals}>
                Deal
              </Nav.Link>
            </Nav>
            {isOverlayOpen && (
              <div className="overlay">
                <span className={styles.closebtn} onClick={closeSearch} title="Close Overlay">
                  ×
                </span>
                <div className="overlay-content">
                  <form action="">
                    <input type="text" className={styles.searchcon} placeholder="Search.." name="search" />
                  </form>
                </div>
              </div>
            )}
            <Form>
              <div className={styles.searcharea}>
                {showSearchIcon && (
                  <>
                    <BiSearch className={styles.searchicon} onClick={openSearch} />
                    <span className={styles.searchs} onClick={openSearch}>
                      Search
                    </span>
                  </>
                )}
                <IoBagHandleOutline
                  className={styles.icon}
                  onClick={handleContinueShopping}
                  cursor="pointer"
                  fontSize="18px"
                />
                <span className={styles.carts} onClick={handleContinueShopping}>
                  Cart
                </span>
                {user ? (
                  <div  className={styles.custombutton1}>
                  <NavDropdown variant="danger"  className={styles.user2} title={<FaRegUser />} id="user-dropdown">                      <NavDropdown.ItemText className={styles.usermail}>{user.email}</NavDropdown.ItemText>
                      <NavDropdown.Item onClick={handleLogout} className={styles.usermail}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </div>
                ) : (
                  <Button variant="danger"  className={styles.custombutton} onClick={opensignupcomp}>
                    Get Started
                  </Button>
                )}
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={styles.hrStyle} />
    </div>
  );
}

export default NavbarCompo;