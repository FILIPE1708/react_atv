import React from 'react';
import { Alert } from 'reactstrap';


const AlertPrimary = (props) => {
    return (
        <div>
            <Alert color="primary">
                {props.texto}
            </Alert>
        </div>
    )
}

export default AlertPrimary;