import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from '@adobe/react-spectrum';
import { AppContext } from '../context';
import useUIControls from '../hooks/useUIControls';
import {
    CgMoon, CgSun, CgClose, CgMenuHotdog, CgArrowUpO, CgArrowDownO
} from 'react-icons/cg';

function MobileMenu({ showMenu, toggleShowMenu }) {
    const navigate = useNavigate();
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 50,
    });

    const navigateRoute = route => {
        if (showMenu) toggleShowMenu();
        navigate(route);
    };

    return (
        <animated.div style={springs}>
            <div className='nav-links-mobile-items'>
                <div className='nav-links-mobile-item'>
                    <ActionButton onPress={() => navigateRoute('/')}>
                        Home
                    </ActionButton>
                </div>
                <div className='nav-links-mobile-item'>
                    <ActionButton onPress={() => navigateRoute('/about')}>
                        About
                    </ActionButton>
                </div>
                <div className='nav-links-mobile-item'>
                    <ActionButton onPress={() => navigateRoute('/resume')}>
                        Resume
                    </ActionButton>
                </div>
            </div>
        </animated.div>
    );
}
export default function NavBar() {
    const navigate = useNavigate();
    const { toggleTheme, toggleScale } = useUIControls();
    const [state] = React.useContext(AppContext);
    const [showMenu, setShowMenu] = React.useState(false);
    const { scale, theme } = state;
    const toggleShowMenu = () => setShowMenu(!showMenu);
    const navigateRoute = route => {
        if (showMenu) toggleShowMenu();
        navigate(route);
    };

    React.useEffect(() => {
        function handleHideMenu() {
            if (showMenu) setShowMenu(false);
        }
        window.addEventListener('resize', handleHideMenu);

        return () => window.removeEventListener('resize', handleHideMenu);
    }, );

    return (
        <>
            <nav>
                <div className='nav-brand-link'>
                    <div>
                        <ActionButton isQuiet onPress={() => navigateRoute('/')}>
                            javascript4breakast.com
                        </ActionButton>
                    </div>
                </div>
                <div className='nav-links'>
                    <div className='nav-controls'>
                        <div className='nav-control-btn'>
                            <ActionButton isQuiet onPress={toggleScale}>
                                {scale === 'large' ? <CgArrowDownO /> : <CgArrowUpO />}
                            </ActionButton>
                        </div>
                        <div className='nav-control-btn'>
                            <ActionButton isQuiet onPress={toggleTheme}>
                                {theme === 'dark' ? <CgMoon /> : <CgSun />}
                            </ActionButton>
                        </div>
                    </div>
                    <div className='link-btn'>
                        <ActionButton isQuiet onPress={() => navigateRoute('/')}>
                            Home
                        </ActionButton>
                    </div>
                    <div className='link-btn'>
                        <ActionButton isQuiet onPress={() => navigateRoute('/about')}>
                            About
                        </ActionButton>
                    </div>
                    <div className='link-btn'>
                        <ActionButton isQuiet onPress={() => navigateRoute('/resume')}>
                            Resume
                        </ActionButton>
                    </div>
                </div>
                <div className='nav-links-mobile'>
                    <div className='nav-links-mobile-btn'>
                        <ActionButton onPress={toggleScale}>
                            {scale === 'large' ? <CgArrowDownO /> : <CgArrowUpO />}
                        </ActionButton>
                    </div>
                    <div className='nav-links-mobile-btn'>
                        <ActionButton onPress={toggleTheme}>
                            {theme === 'dark' ? <CgMoon /> : <CgSun />}
                        </ActionButton>
                    </div>
                    <div className='nav-links-mobile-btn'>
                        <ActionButton onPress={toggleShowMenu}>
                            {showMenu ? <CgClose /> : <CgMenuHotdog />}
                        </ActionButton>
                    </div>
                </div>
            </nav>
            {showMenu && <MobileMenu showMenu={showMenu} toggleShowMenu={toggleShowMenu} /> }
        </>
    );
}