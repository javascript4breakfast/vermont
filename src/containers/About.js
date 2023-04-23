import React from 'react';
import { FcVlc } from 'react-icons/fc';

function UnderConstruction() {
    return (
        <div className='under-construction'>
            <div className='under-construction-item'>
                <h1>
                    <FcVlc/>
                </h1>
            </div>
            <div className='under-construction-item'>
                <h1>Under Construction</h1>
            </div>
            <div className='under-construction-item'>
                <h2>Please check back later...</h2>
            </div>
        </div>
    );
}

export default function About() {
    return <UnderConstruction />
}