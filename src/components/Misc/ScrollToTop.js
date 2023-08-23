import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroll_inst } from '../../utils';

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        scroll_inst.scroll(0, 1000);
    }, [pathname]);
};

export default ScrollToTop;
