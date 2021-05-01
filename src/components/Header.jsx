import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import icon from '../assets/undraw_wallet_aym5.svg';

const Header = () => {
  return (
    <Navbar bg='light' variant='black'>
      <Container>
        <Navbar.Brand className='font-weight-bold' href='/'>
          Bank Search Application
        </Navbar.Brand>
        <Image src={icon} style={{ height: '90px', width:'100px' }} fluid />
      </Container>
    </Navbar>
  );
};

export default Header;
