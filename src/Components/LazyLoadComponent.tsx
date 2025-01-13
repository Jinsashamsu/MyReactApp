import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './NavigationRouter/Home.tsx';

// Lazy load the component
const About = React.lazy(() => import('../Components/NavigationRouter/About.tsx'));
const Contact = React.lazy(() => import('../Components/NavigationRouter/Contact.tsx'));
 
const LazyComponents: React.FC = () => {
  return (
<BrowserRouter>
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/Contact">Contact</Link>
</nav>
<Suspense fallback={<div>Loading...</div>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</Suspense>
</BrowserRouter>
  );
};


export default LazyComponents;