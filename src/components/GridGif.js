import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import NotFound from './NotFound';

const GridGif = ({ gifArray, search, loading }) => {
  useEffect(() => {}, [loading, gifArray]);
  if (gifArray.length === 0) {
    return <NotFound />;
  }
  return (
    <Container fluid='true'>
      <h2 className='text-left'>
        {search ? `Resultado para es"${search}" ` : 'Top Gifs'}
      </h2>
      <Row className='p-2'>
        {gifArray.map((gifItem, index) => (
          <Col sm={2} key={index}>
            <Image src={gifItem.images.downsized.url} thumbnail />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridGif;
