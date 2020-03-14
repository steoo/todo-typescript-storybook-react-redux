import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';

import { rootReducer } from './store/reducers';
import { theme } from './constants/theme';
import { ADD_TODO } from './store/actions/todos';
import { BodyContainer } from './components/body-container/bodyContainer';

const store = createStore(
    rootReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(ADD_TODO({
    id: 1,
    completed: true,
    text: 'yoyo'
}));

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BodyContainer/>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
