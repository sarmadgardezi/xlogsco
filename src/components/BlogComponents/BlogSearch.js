import React, { useState } from 'react';

function BlogSearch() {
    const [search, setSearch] = useState();

    return (
        <li className="widget widget_search">
            <div className="search">
                <form>
                    <input
                        type="text"
                        placeholder="Search"
                        id="search"
                        name="s"
                        className="input-field"
                        value={search}
                        required=""
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </li>
    );
}

export default BlogSearch;
