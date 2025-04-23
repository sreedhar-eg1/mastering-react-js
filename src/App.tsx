import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import Todo from "./components/Todo";
import TodoModel from "./models/todo";
import NewTodo from "./components/NewTodo";
import TodosContext, { TodosContextProvider } from "./store/todo-context";

function App() {
  // const [todos, setTodos] = useState<TodoModel[]>([]);

  // const addNewTodoHandler = (newTodo: string) => {
  //   setTodos((prevTodos) => [...prevTodos, new TodoModel(newTodo)]);
  // };

  // const onRemoveTodoItemHandler = (id: string) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  // };


  return (
    <div>
        {/* without context API */}
      {/* <NewTodo addNewTodo={addNewTodoHandler} />
      <Todo items={todos} onRemoveTodoItem={onRemoveTodoItemHandler} /> */}
      <TodosContextProvider >
        <NewTodo />
        <Todo />
      </TodosContextProvider>
    </div>
  );
}

export default App;
