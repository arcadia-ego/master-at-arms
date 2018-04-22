import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  flex: 1 0 13.5%;
  background-color: grey;
  border: 1px solid darkgray;
  text-decoration: none;
  color: black;
  padding: 1.5px;
`;

const Navbar = () => (
  <div className="navBar">
    <h1 className="navHeader"> The Master At Arms Inc. </h1>
    <StyledLink to="/">Home</StyledLink> 
    <StyledLink to="/henlo">Product</StyledLink>
    <StyledLink to="/henlo">Repair</StyledLink>
    <StyledLink to="/henlo">Policy</StyledLink>
    <StyledLink to="/henlo">Trade/Consignment</StyledLink>
    <StyledLink to="/henlo">News</StyledLink>
    <StyledLink to="/henlo">Contact Us</StyledLink>
  </div>
);

export default Navbar;