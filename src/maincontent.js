import React,{useState} from 'react';
import styled from 'styled-components';
import {Outlet} from 'react-router-dom';
import Footer from './components/footer';

export default function MainContent({ open }) {

  const divMain = styled.div`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    `
  return (
    <>

      {/* MAIN CONTENT */}
      <divMain className='main_content' open={open}>
        <Outlet/>
        <Footer/>
      </divMain>
    </>
  )
}
