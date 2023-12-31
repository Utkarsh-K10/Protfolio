import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../../pages/CSS/style.css";

// const Header = () => {
    
//     const [expand, setExpand] = useState(false)
//     const [navShow, updateNavShow] = useState(false)

//     const scrollHandler = () => {
//         if (window.scrollY >= 20) {
//             updateNavShow(true)
//         } else {
//             updateNavShow(false)
//         }
//     }

//     window.addEventListener('scroll', scrollHandler)


//     return (
//         <Navbar
//             expanded={expand}
//             fixed='top'
//             expand="md"
//             className={navShow ? 'sticky' : 'navbar'}
//         >
//             <Navbar.Brand className='logotext' as={Link} to='/'>
//                 <div className='logo'></div>
//             </Navbar.Brand>

//             <Navbar.Toggle
//                 className='navbar-toggler'
//                 aria-controls="responsive-navbar-nav"
//                 onClick={() => {
//                     updateExpanded(expand ? false : "expanded");
//                 }}
//             >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </Navbar.Toggle>

//             <Navbar.Collapse id='responsive-navbar-nav' className='responsive-navbar'>
//                 <Nav className='ms-auto' defaultActiveKey="#home">

//                     <Nav.Item>
//                         <NavLink
//                             className={"nav-link"}
//                             to='/'
//                             onClick={() => setExpand(false)}
//                         >
//                             Home
//                         </NavLink>
//                     </Nav.Item>

//                     <Nav.Item>
//                         <NavLink
//                             className={"nav-link"}
//                             to='/about'
//                             onClick={() => setExpand(false)}
//                         >
//                             About
//                         </NavLink>
//                     </Nav.Item>

//                     <Nav.Item>
//                     <NavLink
//                             className={"nav-link"}
//                             to='/projects'
//                             onClick={() => setExpand(false)}
//                         >
//                             Projects
//                         </NavLink>
//                     </Nav.Item>

//                     <Nav.Item>
//                         <NavLink
//                             className={"nav-link"}
//                             to='/contact'
//                             onClick={() => setExpand(false)}
//                         >
//                             Contact
//                         </NavLink>
//                     </Nav.Item>

//                     <Button className='resumebtn'
//                     onClick={()=> window.open("https://drive.google.com/file/d/1_qIbe3iBwqsT_4EpKoZPSNKuwjn_b6kT/view?usp=share_link")}>
//                         <span>Resume</span>
//                     </Button>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     )
// }

const Header = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
  
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  
    window.addEventListener("scroll", scrollHandler);
  
    return (
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Navbar.Brand className="logotext" as={Link} to="/">
          <div className="logo"></div>
        </Navbar.Brand>
  
        <Navbar.Toggle
          className="navbar-toggler"
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/"
                onClick={() => updateExpanded(false)}
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                About
              </NavLink>
            </Nav.Item>
  
            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                Projects
              </NavLink>
            </Nav.Item>
  
            <Nav.Item>
              <NavLink
                className="nav-link"
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                Contact
              </NavLink>
            </Nav.Item>
  
            <Button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1_qIbe3iBwqsT_4EpKoZPSNKuwjn_b6kT/view"
                );
              }}
              className="resumebtn"
            >
              <span>Resume</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  export default Header;