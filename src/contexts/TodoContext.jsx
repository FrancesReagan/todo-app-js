// todo context manages task list and actions (add, toggle, etc.)//

import { createContext, useState, useContext, useEffect }  from "react";

const TodoContext = createContext(null);
// export const useTodos = ()  => useContext (TodoContext)//


export function TodoProvider({children}){  
  const [todos, setTodos] = useState(() => {   
    try {     
      return JSON.parse(localStorage.getItem("todos") || "[]");   
    } catch (error) {     
      console.error("Failed to parse todos:", error);     
      return [];   
    } 
  }); 
  
  

useEffect(()=>{
  try {
    localStorage.setItem("todos",JSON.stringify(todos));
  } catch (error) {
      console.error("Failed to save todos:", error);
  }
}, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
        id:crypto.randomUUID(),
        text,
        completed:false,
      },
      ]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo)=>
        todo.id === id?{...todo,completed: !todo.completed}:todo
    )
  );
};

const deleteTodo = (id) => {
  setTodos(todos.filter((todo)=>todo.id!==id));
};

const editTodo = (id,newText) => {
  setTodos(
    todos.map((todo) => 
      todo.id === id?{...todo,text:newText }:todo
  )
  );
};

const clearCompleted = () => {
  setTodos(todos.filter(todo=> !todo.completed));
};

const value = {todos,addTodo,toggleTodo,deleteTodo, editTodo, clearCompleted};

return<TodoContext.Provider value={value}>{children}</TodoContext.Provider>;

export function useTodoContext(){
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}

