import {animated, useTrail} from '@react-spring/web';
import React from 'react';

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    const [trails] = useTrail(
        1,
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: 500,
        }),
        []
    );

    return (
        <>
            {trails.map(props => (
                <animated.div style={props}>
                    <div className='landing-footer'>
                        © {year} javascript4breakfast - All Rights Reserved
                    </div>
                </animated.div>
            ))}
        </>
    );
}
