import React, { createContext, Component } from 'react';
import { render } from '@testing-library/react';

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: { ui: '#eee', bg: '#ddd', color: '#444' },
        dark: { ui: '#666', bg: '#555', color: '#eee' }
    }

    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }

}

export default ThemeContextProvider;
