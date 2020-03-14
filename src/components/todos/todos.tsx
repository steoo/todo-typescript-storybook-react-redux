import * as React from 'react';
import { TodosContainer as Container } from './style';
import { PropTypes } from './todos.container';
import TodoItem from './todo-item/todoItem';

export const TodosContainer = (props: PropTypes) => (
    <Container>
        {props.todosReducer.map((todo) => (
            <TodoItem id={todo.id}/>
        ))}
    </Container>
);
