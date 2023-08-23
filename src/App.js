import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Outlet, Route } from 'react-router-dom';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/css/elementor_style.css';
import './assets/css/swiper-bundle.min.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/spartan.css';
import './assets/sass/style.scss';

// pages
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import Home1 from './Pages/Home1';
import Home2 from './Pages/Home2';
import Projects1 from './Pages/Projects1';
import Projects2 from './Pages/Projects2';
import ServicesDetailed from './Pages/ServicesDetailed';
import ServicesStyle1 from './Pages/ServicesStyle1';
import ServicesStyle2 from './Pages/ServiceStyle2';
import ProjectDetailed from './Pages/ProjectDetailed';
import Bloglist from './Pages/Bloglist';
import Bloggrid from './Pages/Bloggrid';
import BlogDetailed from './Pages/BlogDetailed';
import Preloader from './components/Misc/Preloader';
import Navbar from './components/Navs/Navbar';
import Footer from './components/Misc/Footer';
import { initializePage } from './utils';

import ScrollToTop from './components/Misc/ScrollToTop';

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home1 />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Services1" element={<ServicesStyle1 />} />
            <Route path="/Services2" element={<ServicesStyle2 />} />
            <Route path="/ServicesDetailed" element={<ServicesDetailed />} />
            <Route path="/Project1" element={<Projects1 />} />
            <Route path="/Project2" element={<Projects2 />} />
            <Route path="/ProjectDetailed" element={<ProjectDetailed />} />
            <Route path="/Bloggrid" element={<Bloggrid />} />
            <Route path="/Bloglist" element={<Bloglist />} />
            <Route path="/BlogDetailed" element={<BlogDetailed />} />
        </Route>
    ),
    {
        basename: "/slope-react",
    }
);

export default function App() {
    useEffect(initializePage, []);

    return (
        <div className="App">
            <Preloader />
            <RouterProvider router={router} />
        </div>
    );
}
