import React, { createContext } from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = props => {
    const theme = {
        isLightTheme: true,
        light: { ui: '#eee', bg: '#ddd', color: '#444' },
        dark: { ui: '#555', bg: '#444', color: '#eee' }
    }

    return (
        <ThemeContext.Provider value={{ theme }}>
            {props.children}
        </ThemeContext.Provider>
    );

}

export default ThemeContextProvider;
