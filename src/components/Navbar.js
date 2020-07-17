import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavbarBootstrap, Nav, NavItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { GET_TRENDING } from './../stores/actions/gifs';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <NavbarBootstrap color='dark' light expand='md'>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link
              className='text-light'
              to='/trending'
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Top Gifs
            </Link>
          </NavItem>
        </Nav>
      </NavbarBootstrap>
    </>
  );
};

export default Navbar;
