import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardNew from '../../components/Card/Card';

function Home() {


    return (
        <Container className='pt-5'>
        <h3 className="text-danger">Gêneros</h3>
        <Row>

            {window.geners.map((genero) => (
                <Col md={4} className="mt-3">
                    <CardNew borda="border-danger" cort="bg-danger" corf="bg-danger"  titulo="" descricao={genero.nome}/>
                </Col>
            ))}

        </Row>
      </Container>
    )
}

export default Home;