import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import MeetingDialog from '../components/MeetingDialog';
import Footer from '../components/Footer';
import defaultPicture from '../clientlibs/img/joortiz_default.jpg';

export default function Landing() {
    const [trails] = useTrail(
        1,
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            delay: 250,
        }),
        []
    );

    return (
        <>
            {trails.map((props, index) => (
                <animated.div key={index} style={props}>
                    <div className='landing-wrapper'>
                        <div className='img-cropper'>
                            <img alt='jonathan ortiz' className='landing-img' src={defaultPicture} />
                        </div>
                        <div className='landing-title'>
                            <div>
                                <h1>
                                    Make it an experience.
                                </h1>
                            </div>
                            <div>
                                <h4>Jonathan Ortiz - Sr. Frontend Engineer</h4>
                            </div>
                        </div>
                        <div className='landing-detail'>
                            <p>
                                Currently, I'm a Sr. Front-End Software Engineer at Apple.
                                Helping organizations improve user experiences.
                                Specializing in React, TypeScript, and Single Page Application frameworks.
                                I also help engineers and junior software developers take their career to the next level.
                            </p>
                        </div>
                        <div className='landing-btn'>
                            <MeetingDialog />
                        </div>
                    </div>
                </animated.div>
            ))}
            <Footer />
        </>
    );
}