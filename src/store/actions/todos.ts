import { createAction } from '@reduxjs/toolkit';

export interface TodoItem { id: string|number; text: string; completed: boolean; }

export const ADD_TODO = createAction<TodoItem, 'ADD_TODO'>('ADD_TODO');
export const REMOVE_TODO = createAction<TodoItem, 'REMOVE_TODO'>('REMOVE_TODO');
export const TOGGLE_TODO = createAction<TodoItem, 'TOGGLE_TODO'>('TOGGLE_TODO');
