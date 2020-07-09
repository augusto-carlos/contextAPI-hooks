import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './styles.css';

const Header = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className="header" style={{ background: theme.bg, color: theme.color }}>
            <h1>My book list</h1>
        </div>
    )
}

export default Header;
