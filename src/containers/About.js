import React from 'react';
import { BsConeStriped } from 'react-icons/bs';

export default function About() {
    return (
        <div className='under-construction'>
            <div className='under-construction-item'>
                <h1>
                    <BsConeStriped className='cone' />
                </h1>
            </div>
            <div className='under-construction-item'>
                <h1>Under Construction</h1>
            </div>
            <div className='under-construction-item'>
                <h2>Please check back later...</h2>
            </div>
        </div>
    )
}