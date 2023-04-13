import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import MenuHamburger from './components/menuhamburger';
import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';

import Header from './components/header';
import LeftSidebar from './components/leftsidebar';
import MainContent from './maincontent';

export default function MainLayout() {
  const [open, setOpen] = useState(true);

  const divMain = styled.div`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    `
  return (
    <>
       {/* HEADER */}
       <Header>
        <MenuHamburger open={open} setOpen={setOpen} />
        <Row className='align-items-center'>
          <Col xs={8} md={8}>
            <Link to="/" className='logo_block'>
              <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png" className='img-fluid'/>
            </Link>
            <span className='txt_brand ms-3'>PDF Equipment</span>  
          </Col>
          <Col xs={4} md={4}>
            <div className='username_block'>
              <div className='icon'>
              <img src="https://w7.pngwing.com/pngs/290/731/png-transparent-computer-icons-user-username-avatar-person-skill-thumbnail.png" className='img-fluid'/>
              </div>
              <span className='txt_username'>User Name</span>
            </div>
          </Col>
        </Row>
      </Header>

      {/* LEFT SIDEBAR */}
      <LeftSidebar open={open} setOpen={setOpen} />

      
      {/* MAIN CONTENT */}
      <MainContent open={open} setOpen={setOpen}/>
    </>
  )
}
