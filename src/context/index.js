import React from 'react';
export const AppContext = React.createContext([{}, () => {}]);

const initialState = {
    theme:  localStorage.getItem('appTheme') || 'dark',
    scale:  localStorage.getItem('appScale') || 'medium',
}
export default function AppContextProvider(props) {
    const [state, setState] = React.useState({ ...initialState });

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};