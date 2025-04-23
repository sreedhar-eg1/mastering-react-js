import React from "react";
import TodoModel from "../models/todo";

import classes from './TodoItem.module.css'

const TodoItem: React.FC<{ item: TodoModel, onRemove: (id: string) => void }> = (props) => {
  return <li onClick={() => props.onRemove(props.item.id)} className={classes.item}>{props.item.text}</li>;
};

export default TodoItem;
