import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const NotFound = () => {
  return (
    <Container fluid='true'>
      <h2 className='text-center'>Sin resultados</h2>
      <Row className='p-2'>
        <Col sm={4} className='auto'>
          <Image
            src='https://media1.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy-downsized.gif?cid=02c787efrl33uzyxfp0fh8vicmmlnux0isfd8ezhe8fcxoa1&rid=giphy-downsized.gif'
            thumbnail
          />
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
