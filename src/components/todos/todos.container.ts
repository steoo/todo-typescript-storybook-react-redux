import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers';
import { TodosContainer } from './todos';

export type PropTypes = { todosReducer: Array<any> };

const mapStateToProps = (state: RootState) => ({
    todosReducer: state.todosReducer
});

export default connect(mapStateToProps)(TodosContainer);
