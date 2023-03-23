import React from 'react';
import { Text, Button, Link, Well } from '@adobe/react-spectrum';
import { useSpring, animated } from '@react-spring/web'
import { resume } from '../api/resume';

function MainInfo({ mainInfo }) {
    return (
        <div className='main-info'>
            <div>
                <h1>{mainInfo.name}</h1>
            </div>
            <div>
                <h2>{mainInfo.roleTitle}</h2>
            </div>
            <div>
                <h2>{mainInfo.locale}</h2>
            </div>
            <div>
                <Text>{mainInfo.website}</Text>
            </div>
            <div>
                <Text>{mainInfo.email}</Text>
            </div>
            <div>
                <Link>
                    <a rel='noreferrer' href={`https://${mainInfo.linkedIn}`} target='_blank'>
                        {mainInfo.linkedIn}
                    </a>
                </Link>
            </div>
            <div>
                <Text>{mainInfo.mobile}</Text>
            </div>
        </div>
    );
}

function TechSummary({ techSummary }) {
    return (
        <div className='tech-summary-items'>
            <div className='tech-summary-title'>
                <h1>{techSummary.title}</h1>
            </div>
            <div className='tech-summary-desc'>
                <p>{techSummary.description}</p>
            </div>
        </div>
    );
}

function JourneyItem({ journeyItem }) {
    return (
        <div className='journey-item'>
            <div className='journey-details'>
                <div>
                    <h3>
                        {journeyItem.icon}
                    </h3>
                </div>
                <div>
                    <h4>
                        {journeyItem.company}
                    </h4>
                </div>
                <div>
                    <p>
                        {journeyItem.timeline}
                    </p>
                </div>
            </div>
            <div className='job-title'>
                <h2>
                    {journeyItem.jobTitle}
                </h2>
            </div>
            <div className='journey-desc-items'>
                {journeyItem.descriptionItems.map((item, index) => (
                    <div key={index}>
                        <p>
                            <span>・</span>{item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Journey({ journey }) {
    const { title, items } = journey;
    return (
        <div className='journey-wrapper'>
            <div className='journey-title'>
                <h1>{title}</h1>
            </div>
            <div>
                {items.map((journeyItem, index) => (
                    <JourneyItem key={index} journeyItem={journeyItem} />
                ))}
            </div>
        </div>
    );
}

function TechnicalSkills({ techSkills }) {
    return (
        <div className='tech-skills'>
            <div>
                <h1>Technical Skills</h1>
            </div>
            <div className='tech-skills-grid'>
                {techSkills.map((skill, index) => (
                    <div className='skills-grid-item' key={index}>
                        <p>{skill}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function Resume() {
    const { journey, mainInfo, techSummary, techSkills } = resume;
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 50,
    });

    return (
        <animated.div style={springs}>
            <MainInfo mainInfo={mainInfo} />
            <TechSummary techSummary={techSummary} />
            <Journey journey={journey} />
            <TechnicalSkills techSkills={techSkills} />
            <DownloadAsPdf />
        </animated.div>
    );
}

function DownloadAsPdf() {
    return (
        <div className='download-pdf'>
            <Button variant='cta'>Download PDF</Button>
        </div>
    );
}