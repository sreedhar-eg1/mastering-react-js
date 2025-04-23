import { Children, createContext, useState } from "react";
import TodoModel from "../models/todo";

const TodosContext = createContext<{
  items: TodoModel[];
  addtodoItem: (newTodo: string) => void;
  removeTodoItem: (id: string) => void;
}>({
  items: [],
  addtodoItem: (newTodo: string) => {},
  removeTodoItem: (id: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addNewTodoHandler = (newTodo: string) => {
    setTodos((prevTodos) => [...prevTodos, new TodoModel(newTodo)]);
  };

  const onRemoveTodoItemHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const todosCtxValue: {
    items: TodoModel[];
    addtodoItem: (newTodo: string) => void;
    removeTodoItem: (id: string) => void;
  } = {
    items: todos,
    addtodoItem: addNewTodoHandler,
    removeTodoItem: onRemoveTodoItemHandler,
  };

  return (
    <TodosContext.Provider value={todosCtxValue}>{props.children}</TodosContext.Provider>
  );
};

export default TodosContext;
