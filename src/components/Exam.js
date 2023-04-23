import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Radio, RadioGroup } from '@adobe/react-spectrum';
import {
    FcCellPhone, FcMultipleCameras, FcWebcam, FcShop,
} from 'react-icons/fc';

function DownloadButton({ onClose }) {
    const resLink = 'https://github.com/javascript4breakfast/vermont/raw/master/JOrtizResume2023.pdf';
    const close = () => onClose();
    return (
        <form className='flex-center' method='get' action={resLink}>
            <Button onPress={close} variant='primary' type='submit'>Download PDF</Button>
        </form>
    );
}

const examsArray = [
    {
        id: uuidv4(),
        correctAnswer: 'cell phone',
        icon: <FcCellPhone className='icon-large' />,
        options: ['tablet', 'cell phone', 'television'],
    },
    {
        id: uuidv4(),
        correctAnswer: 'store front',
        icon: <FcShop className='icon-large' />,
        options: ['mini mall', 'school', 'store front'],
    },
    {
        id: uuidv4(),
        correctAnswer: 'camera',
        icon: <FcMultipleCameras className='icon-large' />,
        options: ['telescope', 'radio', 'camera'],
    },
    {
        id: uuidv4(),
        correctAnswer: 'webcam',
        icon: <FcWebcam className='icon-large' />,
        options: ['webcam', 'cabinet', 'watch'],
    },
];
function getRandom (list) {
    return list[Math.floor((Math.random()*list.length))];
}

const initialState = {
    isComplete: false,
    exam: getRandom(examsArray),
    selected: '',
    message: '',
};

export default function Exam({ onClose }) {
    const [state, setState] = React.useState({...initialState});
    const handleSelected = x => {
        if (state.message) {
            setState((prevState) => ({
                ...prevState,
                message: '',
            }));
        }
        const selected = x;
        setState((prevState) => ({
            ...prevState,
            selected,
        }));
    };

    const handleSubmit = () => {
        const { selected, exam: { correctAnswer } } = state;
        if (selected === correctAnswer) {
            setState(prevState => ({
                ...prevState,
                isComplete: true,
                exam: getRandom(examsArray),
                selected: '',
                message: '',
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                exam: getRandom(examsArray),
                selected: '',
                message: 'Incorrect!',
            }));
        }
    }

    if (state.isComplete) {
        return (
          <div>
              <DownloadButton onClose={onClose} />
          </div>
        );
    }

    return (
        <div className='exam-grid'>
            <div style={{ textAlign: 'center' }}>
                {state.exam.icon}
            </div>
            <div>
                <p className='exam-title' style={{ textAlign: 'center' }}>
                    What best describes the icon above.
                </p>
            </div>
            <div className='radio-group-section'>
                <RadioGroup
                    isEmphasized
                    orientation='horizontal'
                    value={state.selected}
                    onChange={(e) => handleSelected(e)}
                >
                    {state.exam.options.map((item, index) => (
                        <Radio key={index} value={item}>
                            {item}
                        </Radio>
                    ))}
                </RadioGroup>
            </div>
            <div className='flex-center'>
                <Button onPress={handleSubmit} isDisabled={!state.selected} variant='primary'>
                    Submit
                </Button>
            </div>
            <div className='flex-center'>
                <span className='incorrect-msg'>{state.message}</span>
            </div>
        </div>
    );
}