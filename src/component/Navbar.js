import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
function Navbar() {

//     const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (


    <IconContext.Provider value={{ color: 'fff' }}>
    <>
{/* <div className='navbar'>
<Link to="#" className='menu-bars'>
<FaIcons.FaBars onClick={handleShow}/>
</Link>
</div> */}

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

<Offcanvas className='offfull' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offbody'>
        <ul onClick={handleClose}>
       
                  {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
              </ul>
        </Offcanvas.Body>
      </Offcanvas>
          {/* <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className='nav-menu-items' onClick={showSidebar}>
                  <li className='navbar-toggle'>
                      <Link to='#' className='menu-bars'>
                          <AiIcons.AiOutlineClose />
                      </Link>
                  </li>

                  {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
              </ul>
          </nav> */}

    </>
    </IconContext.Provider>
  )
}

export default Navbar