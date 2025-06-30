

import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from "./components/TodoList;
import { TodoProvider } from './contexts/TodoContext';  


function AppContent(){
 return (
 <div>
  <TodoInput />
  <TodoList />
 </div>

 );

}
function App() {
  return (
<>
    <TodoProvider>
      <h1>Todo App</h1>
      <AppContent /> 
    </TodoProvider>

      </>
  
  );
}

export default App

