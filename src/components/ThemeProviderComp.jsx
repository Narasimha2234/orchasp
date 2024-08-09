// import React, { createContext, useContext, useMemo, useState } from 'react';
// import { darkTheme, lightTheme } from './theme/Themes';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const themeContext = createContext();
// export const useTheme = () => useContext(themeContext);

// const ThemeProviderComp = ({ children }) => {
//     const [theme, setTheme] = useState("light");
//     const themeMode = useMemo(() => ({
//         toggleTheme: () => {
//             setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
//         },
//         mode: theme,
//     }), [theme]);
//     const currentTheme = theme === "light" ? lightTheme : darkTheme;
//     return (
//         <themeContext.Provider value={themeMode}>
//             <ThemeProvider theme={currentTheme}>
//                 <CssBaseline />
//                 {children}
//             </ThemeProvider>
//         </themeContext.Provider>
//     );
// }

// export default ThemeProviderComp;
