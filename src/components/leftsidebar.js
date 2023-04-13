import React from 'react'
import {  NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function LeftSidebar({open}) {

    const StyledMenu = styled.nav`
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    transition: transform 3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`
  return (
    <>
     <StyledMenu open={open} className='left_sidebar'>
        <ul className='list_bullet list-unstyled'>
            <li>
                <NavLink to="/">
                    <span className='icon'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className='img-fluid'/>
                    </span>
                    <span className='txt'>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/">
                    <span className='icon'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className='img-fluid'/>
                    </span>
                    <span className='txt'>Home</span>
                </NavLink>
            </li>
        <li>
            <NavLink to="/" className="bg_highlight">
                Profile
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className='img-fluid'/>
                </span>
                <span className='txt'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className='img-fluid'/>
                </span>
                <span className='txt'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className='img-fluid'/>
                </span>
                <span className='txt'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink to="/">
                <span className='icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" className='img-fluid'/>
                </span>
                <span className='txt'>Home</span>
            </NavLink>
        </li>
      </ul>
    </StyledMenu>
    </>
  )
}
