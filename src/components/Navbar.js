import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as NavbarBootstrap, Nav, NavItem } from 'reactstrap';

const Navbar = () => {
  return (
    <>
      <NavbarBootstrap color='dark' light expand='md'>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <NavLink className='text-light' exact to={'/trending'}>
              Top Gifs
            </NavLink>
          </NavItem>
        </Nav>
      </NavbarBootstrap>
    </>
  );
};

export default Navbar;
