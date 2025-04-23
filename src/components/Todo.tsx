import React, { useContext } from "react";
import TodoModel from "../models/todo";
import TodoItem from "./TodoItem";

import classes from './Todo.module.css'
import TodosContext from "../store/todo-context";

const Todo = () => {
    const todoContext = useContext(TodosContext)
  return (
    <ul className={classes.todos}>
      {todoContext.items.map((item) => (
        <TodoItem onRemove={todoContext.removeTodoItem} key={item.id} item={item}/>
      ))}
    </ul>
  );
};

export default Todo;
