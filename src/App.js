import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme, Provider as SpectrumProvider } from '@adobe/react-spectrum';
import { AppContext } from './context';
import NavBar from './components/NavBar';
import Pages from './containers/Pages';
import './clientlibs/css/App.css';

function AppGrid() {
    return (
        <BrowserRouter>
            <NavBar />
            <Pages />
        </BrowserRouter>
    );
}

function App() {
    const [state] = React.useContext(AppContext);
    return (
        <SpectrumProvider theme={defaultTheme} scale={state.scale} colorScheme={state.theme}>
             <AppGrid />
        </SpectrumProvider>
    );
}

export default App;
