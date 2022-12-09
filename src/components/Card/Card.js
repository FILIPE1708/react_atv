import React from "react";
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap';

const CardNew = (props) => {
    return (
        <Card className={props.borda}>
            <CardHeader className={props.cort}>{props.titulo}</CardHeader>
            <CardBody>
                <CardText>{props.descricao}</CardText>
            </CardBody>
            <CardFooter className={props.corf}></CardFooter>
        </Card>
    )
}

export default CardNew;