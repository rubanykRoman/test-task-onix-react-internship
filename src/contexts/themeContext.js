import { createContext,useState,useCallback,useMemo } from 'react';

export const themeContext = createContext('light');

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const changeTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
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
            <div className={theme}>
                {children}
            </div>
        </themeContext.Provider>
    );
}