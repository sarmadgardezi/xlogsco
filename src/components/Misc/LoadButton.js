import React from 'react';
import { Link } from 'react-router-dom';

function LoadButton() {
    return (
        <>
            <div className="load-more">
                {/* eslint-disable-next-line */}
                <Link to={"#"} className="button">
                    <span>Load More</span>
                </Link>
            </div>
        </>
    );
}

export default LoadButton;
