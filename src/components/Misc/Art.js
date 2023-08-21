import React from 'react';

const Art = (props) => {
    return (
        <div className={`artwork artwork-${props.type}`}>
            <img src={props.art} alt="artwork" />
        </div>
    );
};

export default Art;
