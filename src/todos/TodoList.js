import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { displayAlert, loadTodos } from './thunk';
import { completeTodo, removeTodo } from './actions';
import { connect } from 'react-redux';
import './TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading todos...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed}/>)}
        </div>
    )
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);