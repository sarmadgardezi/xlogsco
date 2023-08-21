import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <Link className={`button button-${props.type}`} to={`${props.link}`}>
            {props.content}
        </Link>
    );
}

export default Button;
