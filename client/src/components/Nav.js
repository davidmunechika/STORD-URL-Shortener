//Libraries
import React from 'react';
//Styles
import styled from 'styled-components';
//Images
import logo from '../assets/stord-logo.png';

//Sticky nav bar component
const Nav = () => {
  return (
    <StyledNav>
      <img src={logo} alt="STORD Logo" />
      <h1 id="logo">STORD URL Shortener</h1>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
  img {
    height: 2rem;
    width: 2rem;
    margin: 1rem;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: regular;
    color: black;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
  }
`;

export default Nav;
