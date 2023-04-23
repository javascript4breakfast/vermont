import {
    Button,
    ButtonGroup,
    Checkbox,
    Content,
    Dialog,
    DialogTrigger,
    Divider,
    Heading
} from '@adobe/react-spectrum';
import React from 'react';
import { useTrail, animated } from '@react-spring/web';
import Exam from '../components/Exam';

function ExamDialog() {
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
                    <animated.div key={index} className='exam-button' style={props}>
                        <DialogTrigger>
                            <Button variant='cta'>Download Resume</Button>
                            {(close) => (
                                <Dialog>
                                    <Heading>Download Resume</Heading>
                                    <Divider />
                                    <Content>
                                        <Exam onClose={close} />
                                    </Content>
                                    <ButtonGroup>
                                        <Button variant="accent" onPress={close} autoFocus>Close</Button>
                                    </ButtonGroup>
                                </Dialog>
                            )}
                        </DialogTrigger>
                    </animated.div>
            ))}
        </>
    );
}

const initialState = {
    isRecruiter: false,
    isTestPassed: false,
};

export default function ResumeDialog() {
    const [state, setState] = React.useState({ ...initialState })
    const setRecruiter = () => {
        setState(prevState => ({
            ...prevState,
            isRecruiter: !state.isRecruiter,
        }));
    };

    return (
        <section className='download-section'>
            <div>
                <Checkbox isEmphasized isSelected={state.isRecruiter} onChange={setRecruiter}>
                    I am a technical recruiter
                </Checkbox>
            </div>
            <div>
                {state.isRecruiter && (<ExamDialog />)}
            </div>
        </section>
    );
}