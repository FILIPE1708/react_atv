import {Badge} from "reactstrap";
import React from "react";

const BadgePrimary = (props) => {
    return (
        <div>
            <Badge color="primary">{props.texto}</Badge>
        </div>
    )
}

export default BadgePrimary;