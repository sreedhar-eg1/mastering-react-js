import { useContext, useRef } from "react";
import classes from './NewTodo.module.css'
import TodosContext from "../store/todo-context";

const NewTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoContext = useContext(TodosContext)

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = inputRef.current!.value;

    if (todoText.trim().length === 0) {
      return;
    }

    todoContext.addtodoItem(todoText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo-text">Todo Text</label>
      <input ref={inputRef} type="text" name="todo-text" id="todo-text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
