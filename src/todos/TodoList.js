import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { completeTodo, removeTodo } from './actions';
import { connect } from 'react-redux';
import './TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => {
    return(
        <>
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed}/>)}
        </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);