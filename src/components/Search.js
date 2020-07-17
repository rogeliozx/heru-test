import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Col, Form, Button, Image } from 'react-bootstrap';
const Search = ({ setsearch, searchGif }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='text-center'>
      <Form
        inline
        fluid='true'
        onSubmit={(e) => {
          e.preventDefault();
          searchGif(inputValue);
        }}
      >
        <Col sm={12}>
          <Image width='20%' src={Logo} thumbnail />
        </Col>
        <Col sm={12}>
          <Form.Control
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className='mb-2 mr-sm-2 mt-2 w-25'
            placeholder='Search'
          />
          <Button type='submit' className='mb-2 mt-2'>
            Buscar
          </Button>
        </Col>
      </Form>
    </div>
  );
};

export default Search;
