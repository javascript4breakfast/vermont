import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './About';
import Landing from './Landing';
import Resume from './Resume';
export default function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>
    );
}