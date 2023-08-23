import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const pages = [ 1, 2 ];

function BlogPagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="pagination-container">
                        <ul className="page-numbers">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <Link
                                        to={'!#'}
                                        className={`page-numbers ${currentPage === page ? 'current' : ''}`}
                                        onClick={() => handlePageClick(page)}
                                    >
                                        {page}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPagination;
