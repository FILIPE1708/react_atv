import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardNew from '../../components/Card/Card';

const Home = () => {
    return (
        <Container className='pt-5'>
        <h3>Início</h3>
        <Row>
          <Col md={4}>
              <CardNew titulo="titulo" descricao="meu texto"/>
          </Col>
          <Col md={4}>
              <CardNew titulo="titulo" descricao="meu texto"/>
          </Col>
          <Col md={4}>
              <CardNew titulo="titulo" descricao="meu texto"/>
          </Col>
        </Row>
      </Container>
    )
}

export default Home;