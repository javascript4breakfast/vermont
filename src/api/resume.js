import React from 'react';
import { SiApple, SiTunein, SiAdobe } from 'react-icons/si';
import { MdBusiness } from 'react-icons/md';

export const resume = {
    mainInfo: {
        name: 'Jonathan Ortiz',
        roleTitle: 'Sr. Front End Software Engineer',
        locale: 'San Francisco, California',
        email: 'jonathan@javascript4breakfast.com',
        linkedIn: 'www.linkedin.com/in/jonathanortiz31',
        mobile: '408-609-1239',
        website: 'www.javascript4breakfast.com',
    },
    techSummary: {
        title: 'Technical Summary',
        description: `A seasoned software engineer with more than six years of enterprise experience designing, building, testing and contributing to high level customer and internal facing web applications that solve various business needs and consumer experiences. Focusing on contributing as a team player that stays abreast of technology trends specifically within the NPM and JavaScript ecosystem. A fast learner who's efficient at resolving project issues, cross team communicating, and dedicated to meeting technical requirements and meeting deadlines.`
    },
    journey: {
        title: 'Professional Journey',
        items: [
            {
                company: 'Apple',
                timeline: 'November 2021 - Present Day',
                jobTitle: 'Sr. Software Engineer II',
                org: 'Marketing Communications',
                icon: <SiApple />,
                descriptionItems: [
                    'Contributed and developed user interfaces with Typescript and React.',
                    'Worked cross functionally with product and design teams to deliver world class user experiences.',
                    'Made contributions to applications that reached millions of consumers across the globe.',
                ]
            },
            {
                company: 'Suki.ai',
                timeline: 'February 2021 - November 2021',
                jobTitle: 'Sr. Software Engineer I',
                org: 'Growth / Research & Development',
                icon: <MdBusiness />,
                descriptionItems: [
                    'Developed integration tools to bridge application with third party clients.',
                    'Researched and developed authentication integration API`s with Node.js & GraphQL.',
                    'Helped with training, hiring and onboarding new team members domestically and offshore.',
                ]
            },
            {
                company: 'BusinessWire',
                timeline: 'October 2019 - February 2021',
                jobTitle: 'Front End Software Engineer III',
                org: 'Corporate Technology',
                icon: <MdBusiness />,
                descriptionItems: [
                    'Contributed to and developed various user interfaces to replace legacy web experiences.',
                    'Worked on high level press release portal using React, React Router and Redux.',
                    'Built Proof of Concept (POC) mobile application using React Native.',
                ]
            },
            {
                company: 'Adobe',
                timeline: 'August 2016 - October 2019',
                jobTitle: 'Intern/QA Automation Engineer/Front End Software Engineer II',
                org: 'Adobe Experience Cloud',
                icon: <SiAdobe />,
                descriptionItems: [
                    'Developed and implemented AEM (Adobe Experience Manager) front end components using React for www.adobe.com.',
                    'Worked with corporate stake holders to determine application features to meet world class design standards.',
                    'Developed "Buy Now" button that has trafficked over $1B in revenue for fiscal year 2020 (adobe.com/creativecloud/plans).',
                    'Developed internal tools to compare visual anomalies between product releases.',
                    'Wrote, implemented and developed dozens of automated test suites with Java, Ruby, Cucumber and Selenium WebDriver.',
                    'Maintained continuous integrated (CDCI) grid using Jenkins, Circle CI and RunDeck.',
                    'Contributed components that are still live on www.helpx.adobe.com using React and AEM.',
                    'Started out as an Intern.',
                ]
            },
            {
                company: 'TuneIn',
                timeline: 'January 2015 - August 2016',
                jobTitle: 'DevOps Engineer',
                org: 'Technical Operations',
                icon: <SiTunein />,
                descriptionItems: [
                    'Worked with various cloud technologies to help build and deploy releases.',
                    'Built dozens of internal facing dashboards to help monitor distributed systems.',
                    'Helped deliver "The Worlds Best Listening Experience".',
                ]
            },
        ],
    },
    techSkills: [
        'JavaScript',
        'TypeScript',
        'HTML5',
        'CSS3',
        'React',
        'Node.js',
        'AEM',
        'GraphQL',
        'React Native',
        'React Router',
        'Redux',
        'Ruby on Rails',
        'Mobile Development',
        'Ruby',
        'Java',
        'Selenium WebDriver',
        'Cucumber',
        'TDD',
        'Automation',
        'User Experience',
    ],
}