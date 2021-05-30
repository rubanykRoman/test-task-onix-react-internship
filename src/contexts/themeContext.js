import { createContext, useState, useCallback, useMemo } from 'react';
import { themes } from '../constants/theme'

export const themeContext = createContext(themes.light);

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.light)

    const changeTheme = useCallback(() => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }, [theme]);

    const contextValue = useMemo(
        () => ({
            theme,
            changeTheme,
        }),
        [theme]
    );

    return (
        <themeContext.Provider value={contextValue}>
            <div style={theme}>
                {children}
            </div>
        </themeContext.Provider>
    );
}

export default ThemeProvider;