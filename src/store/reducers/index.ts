import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos';

export const rootReducer = combineReducers({
    todosReducer
});

export type RootState = ReturnType<typeof rootReducer>
