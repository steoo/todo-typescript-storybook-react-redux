import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, TodoItem } from '../actions/todos';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';

type State = Array<any>;
type TodoActionType = PayloadAction<TodoItem>;
const initialState: State = [];

export const todosReducer = createReducer<State>(initialState, {
        [ADD_TODO.type]: (state: State, action: TodoActionType) => [ ...state, {
            id: action.payload.id, text: action.payload.text, completed: action.payload.completed
        } ],
        [REMOVE_TODO.type]: (state: State, action: TodoActionType) => state.filter(todo => todo.id !== action.payload.id),
        [TOGGLE_TODO.type]: (state: State, action: TodoActionType) => state.map(todo => todo.id === action.payload.id ? todo.completed = !todo.completed : todo)
    }
);
