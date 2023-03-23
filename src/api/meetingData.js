import { v4 as uuidv4 } from 'uuid';

const fullDate = new Date();
const month = fullDate.getMonth() + 1;
const year = fullDate.getFullYear().toString();
const formattedMonth = month < 10 ? `0${month.toString()}` : `${month.toString()}`;
const baseUrl = 'https://calendly.com/javascript4breakfast/';
const generateMeetingLink = time => {
    return `${baseUrl}${time}?back=1&month=${year}-${formattedMonth}`;
};

export const meetingData = [
    { id: uuidv4(), label: '15 Minutes', link: generateMeetingLink('15min') },
    { id: uuidv4(), label: '30 Minutes', link: generateMeetingLink('30min') },
    { id: uuidv4(), label: '60 Minutes', link: generateMeetingLink('60min') },
];