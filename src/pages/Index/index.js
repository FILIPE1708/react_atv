import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <Container className='pt-5'>
            <h3>Seja Bem Vindo</h3>
            <Row>
                <Col md={12}>
                    <p>Utilize a barra de navegação para uma movimentação rápida entre as páginas</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;