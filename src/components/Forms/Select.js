import React, { useRef, useState, useEffect } from 'react';

import $ from 'jquery';

import 'overlayscrollbars/css/OverlayScrollbars.min.css';
import OverlayScrollbars from 'overlayscrollbars';
import 'bootstrap-select';

export const Select = (props) => {
    const selectRef = useRef(null);
    const [value, setValue] = useState(props.value != null ? props.value : props.options[0].value);

    useEffect(() => {
        $(selectRef.current).selectpicker();

        const handleSelectRendered = () => {
            const item = selectRef.current.parentElement.querySelector('.dropdown-menu:not(.inner)');
            if (item == null) return;
            OverlayScrollbars(item, {
                className: 'select-os',
                scrollbars: {
                    visibility: 'auto',
                    autoHide: 'never',
                    autoHideDelay: 800,
                    dragScrolling: true,
                    clickScrolling: true,
                    touchSupport: true,
                    snapHandle: false,
                },
            });
        };

        handleSelectRendered();
    }, []);

    return (
        <select className="select-picker" ref={selectRef} value={value} onChange={(e) => { setValue(e.target.value); props.onChange(e.target.value); }}>
            {props.options.map((option, index) => {
                return <option value={option.value} key={index}>{option.label}</option>;
            })}
        </select>
    );
};
