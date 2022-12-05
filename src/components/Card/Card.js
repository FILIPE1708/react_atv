import React from "react";
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';

const CardNew = (props) => {
    return (
        <Card>
            <CardHeader>{props.titulo}</CardHeader>
            <CardBody>
                <CardText>{props.descricao}</CardText>
            </CardBody>
            <CardFooter></CardFooter>
        </Card>
    )
}

export default CardNew;