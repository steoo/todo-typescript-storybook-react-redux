import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme'
import { BodyContainer } from './components/body-container/bodyContainer';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BodyContainer />
        </ThemeProvider>
    );
}

export default App;
