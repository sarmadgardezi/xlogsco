import React, { useEffect } from 'react';
import Heading from '../components/Headers/Heading';
import BlogContainer from '../components/BlogComponents/BlogContainer';
import CallToAction from '../components/Misc/CallToAction';
import BlogPagination from '../components/BlogComponents/BlogPagination';
import Isotope from 'isotope-layout';
import { Select } from '../components/Forms/Select';

import Art from '../components/Misc/Art';
import art from '../assets/images/art_3.png';


const filterOptions = [
    { value: '*', label: 'All', filter: '*' },
    { value: 'Company', label: 'Company', filter: '.company' },
    { value: 'Design', label: 'Design', filter: '.design' },
    { value: 'Development', label: 'Development', filter: '.development' },
    { value: 'Technology', label: 'Technology', filter: '.technology' }
];

function Bloggrid() {
    // init one ref to store the future isotope object
    const isotope = React.useRef();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*');

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope('.blog-list-container', {
            itemSelector: '.blog-list-item',
            layoutMode: 'fitRows',
        });
        // cleanup
        // cleanup
        return () => {
            if (isotope.current) {
                isotope.current.destroy();
                isotope.current = null;
            }
        };
    }, []);

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    return (
        <>
            <Heading 
                heading={<h1>Read from recent blog writings.</h1>}
                headingColumn="col-lg-8"
                headingClass="heading-very-large dark-1"
                WrapperComponent={(props) => {
                    return (
                        <div className="blog-heading">
                            <div className="container">
                                {props.children}
                            </div>
                        </div>
                    )
                }}
            />

            <div className="blog-section blog-section-grid">
                <div className="blog-section-wrapper">
                    <div className="blog-list blog-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    
                                    <ul className="filter filter-list">
                                        {filterOptions.map(option => {
                                            return (
                                                <li>
                                                    {/* eslint-disable-next-line */}
                                                    <a
                                                        href="#"
                                                        data-filter={option.filter}
                                                        className={filterKey === option.filter ? 'selected' : ''}
                                                        onClick={() => {
                                                            setFilterKey(option.value);
                                                        }}
                                                    >
                                                        {option.label}
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>

                                    <div className="source-select filter filter-select">
                                        <Select
                                            options={filterOptions}
                                            value={filterKey}
                                            onChange={(value) => {
                                                setFilterKey(value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <BlogContainer width="6" />
                            <BlogPagination />
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction 
                wrapperClass='bg-main'
                heading={
                    <>
                        Have an idea?
                        <br />
                        Let’s get it done right!
                    </>
                }
                buttonText="Let's Work Together"
                buttonLink="/Contact"
                buttonType="2"
                artwork={<Art art={art} type={'4'} />}
            />
        </>
    );
}

export default Bloggrid;
