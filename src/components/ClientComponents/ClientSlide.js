import React from 'react';
import { Link } from 'react-router-dom';

function ClientSlide(props) {
    return (
        <Link to={props.url} className="client-image">
            <img src={props.image.src} alt={props.image.alt} />
        </Link>
    );
}

export default ClientSlide;
