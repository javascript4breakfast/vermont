import React from 'react';
import {
    Dialog,
    DialogTrigger,
    Heading,
    Divider,
    Content,
    ActionButton,
    ButtonGroup,
    Button,
} from '@adobe/react-spectrum';

import { meetingData } from "../api/meetingData";

export default function MeetingDialog() {
    const openPage = (url, closeModal) => {
        closeModal();
        setTimeout(() => {
            window.open(url, '_blank')
        }, 500);
    };

    return (
        <DialogTrigger>
            <Button variant='cta'>Schedule Meeting</Button>
            {(close) => (
                <Dialog>
                    <Heading>Select Meeting Duration</Heading>
                    <Divider />
                    <Content>
                        <div className='meeting-links'>
                            {meetingData.map(meeting => (
                                <div key={meeting.id}>
                                    <ActionButton onPress={() => openPage(meeting.link, close)}>
                                        {meeting.label}
                                    </ActionButton>
                                </div>
                            ))}
                        </div>
                    </Content>
                    <ButtonGroup>
                        <Button variant="accent" onPress={close} autoFocus>Cool</Button>
                    </ButtonGroup>
                </Dialog>
            )}
        </DialogTrigger>
    );
}