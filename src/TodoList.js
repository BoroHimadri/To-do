import React from "react";
import "./TodoList.css";
import List from "./List";
const TodoList = (props) => {

    const renderTodolist = props.lists.map((list) =>{
        return(
            <List list={list}/>
        );
    });
    return(
        <div className="ui celled list">
            {renderTodolist}
        </div>
    );

};

export default TodoList;