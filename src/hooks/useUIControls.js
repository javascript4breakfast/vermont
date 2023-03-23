import React from 'react';
import { AppContext } from '../context';

const themeMap = {
    dark: 'light',
    light: 'dark',
};

const scaleMap = {
    medium: 'large',
    large: 'medium',
};

export default function useUIControls() {
    const [state, setState] = React.useContext(AppContext);
    const toggleTheme = () => {
        const theme = themeMap[state.theme];
        setState(prevState => ({
            ...prevState,
            theme,
        }));
        localStorage.setItem('appTheme', theme);
    };

    const toggleScale = () => {
        const scale = scaleMap[state.scale];
        setState(prevState => ({
            ...prevState,
            scale,
        }));
        localStorage.setItem('appScale', scale);
    };

    return {
        toggleTheme,
        toggleScale,
    };
}