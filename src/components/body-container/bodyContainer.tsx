import * as React from 'react';
import { Container } from './style';
import  TodosContainer from '../todos/todos.container';
import { Header } from '../header/header';


export const BodyContainer = () => {
    return (
        <Container>
            <Header></Header>
            <TodosContainer></TodosContainer>
        </Container>
    );
};
