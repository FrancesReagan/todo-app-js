// todocontext is the main context for managing todo list and actions (add, toggle, etc.)//

import { createContext, useState, useContext, useEffect }  from "react";

const TodoContext = createContext(null);

const [todos, setTodos] = useState(() => {   
  try {     
    return JSON.parse(localStorage.getItem("todos") || "[]");   
  } catch (error) {     
    console.error("Failed to parse todos:", error);     
    return [];   
  } 
});
  
  
// effect to save todos to localStorage whenever todos change//
useEffect(()=>{
  try {
    localStorage.setItem("todos",JSON.stringify(todos));
  } catch (error) {
      console.error("Failed to save todos:", error);
  }
}, [todos]);

// function to add a new todo//
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

  // function to toggle todo completion status//
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo)=>
        todo.id === id?{...todo,completed: !todo.completed}:todo
    )
  );
};

// function to delete a todo//
const deleteTodo = (id) => {
  setTodos(todos.filter((todo)=>todo.id!==id));
};

// function to edit a todo//
const editTodo = (id,newText) => {
  setTodos(
    todos.map((todo) => 
      todo.id === id?{...todo,text:newText }:todo
  )
  );
};


// function to remove all completed todos//
const clearCompleted = () => {
  setTodos(todos.filter(todo=> !todo.completed));
};

// value object with all functions and state to share//
const value = {todos,addTodo,toggleTodo,deleteTodo, editTodo, clearCompleted};

return<TodoContext.Provider value={value}>{children}</TodoContext.Provider>;

export function useTodoContext(){
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}

