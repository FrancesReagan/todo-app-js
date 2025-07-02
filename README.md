__TODO APP with  React Context API__


<img width="453" alt="image" src="https://github.com/user-attachments/assets/49067bea-0577-4229-bff8-116973b42a89" />
___Light Theme___

----------------------------------------

<img width="513" alt="image" src="https://github.com/user-attachments/assets/b721e9c3-92fb-4fec-be98-99d0beef39a5" />
___Dark Theme___


<img width="540" alt="image" src="https://github.com/user-attachments/assets/caa6a95c-dfcd-4e23-9ee9-fc2efd951c16" />
___Completed Tasks shown Filtered___

------------------------------

<img width="632" alt="image" src="https://github.com/user-attachments/assets/532f79d5-61a6-4d7f-a0bd-46210bb9d05a" />
___Active Task shown filtered___

-------------------
___Simple and modern TODO APP built with React --- made to show React's Context API/State management.___
   -Features: 
   
    -Add new todos, Edit existing todos, Toggle completion, Delete todos, Filter todos, dark/light theme, and data persistance (theme and todos saved to localStorage).
    
   -Tech:
   
    -React--frontend library (framework some say:)), React Context API--state management, JavaScript (ES6+)--Programming language, Vite-build tool and development server,
     and localStorage for data persistance.
-----------------------------------------------------
__Project Structure__
<img width="138" alt="image" src="https://github.com/user-attachments/assets/a4091bc8-bf80-49fe-a795-bc2d4c632da4" />

-----------------------------------------------------
_Architecture_
-This app uses React Context API--with 3 main contexts:

 -TodoContext: manages the todo list and all Create/Read/Update/Delete operations.
 
 -FilterContext: controls which todos are displayed.
 
 -ThemeContext: handles light/dark mode theme switching.
 
_Note_
 -Each context provides its own custom hook for ease of use:
 
  -useTodoContext()
  
  -useFilterContext()
  
  -useThemeContext()
  
------------------------------------------------------------------------

_To Use_
 -Node.js (v14 or higher)
 -npm

_To install_
 -Clone or download project
  -git clone <https://github.com/FrancesReagan/todo-app-js>
  
  -cd todo-app-js

 -Install dependencies
  -npm install

 -Start development server
  -npm run dev

-Open browser
 -Navigate to http://localhost:5173
 -start adding todos

 -----------------------------------------
 _How to Use_
  -Add a todo- type in the input field and click `add todo` or press `enter`
  
  -mark as complete - click the checkbox next to any todo
  
  -edit a todo - click the `edit` button, modify the text, then click `save`

  -delete a todo - click `delete` button
  
  -filter todos - use the `all`, `active`, or `completed` buttons
  
  -switch themes - click the theme toggle button to switch between light and dark theme modes.
  
  -clear completed - click `clear completed` to remove all finished tasks.

  -----------------------------------------------------
  _Learning Concepts in this Todo App Context API project_
   -React Context API for state management without "prop drilling"
   -custom hooks for accessing context data.
   -localStorage- for data persistence of tasks and theme preferences.
   -useEffect - for side effects (saving to localStorage).
   -useState - with "lazy initialization"
   -component composition and resuability
   -error handling with try-catch blocks

   ------------------------------------------------------
_References and Learning Resources_

•	React Documentation - https://react.dev/ 
o	Context API Guide: https://react.dev/learn/passing-data-deeply-with-context
o	useState Hook: https://react.dev/reference/react/useState
o	useEffect Hook: https://react.dev/reference/react/useEffect
o	useContext Hook: https://react.dev/reference/react/useContext
•	Vite Documentation - https://vitejs.dev/ 
o	Getting Started: https://vitejs.dev/guide/
o	React Plugin: https://github.com/vitejs/vite-plugin-react

_Educational Platforms_

•	Module 10: React Project Development 
o	Context API fundamentals
o	State management patterns
o	Component composition
o	Custom hooks implementation

_Online Learning Resources_
•	React.dev Learn Section - https://react.dev/learn 
o	"Managing State" chapter
o	"Escape Hatches" for useEffect patterns
•	MDN Web Docs - https://developer.mozilla.org/ 
o	localStorage API: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
o	JSON methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

_Technical References_

•	React Patterns - https://reactpatterns.com/ 

_Code Examples and Inspiration_

•	React Examples Repository - Context API examples
•	Todo App Tutorials - Various implementations for comparison
•	React DevTools - For debugging and state inspection


_Browser APIs_
•	Web Storage API - https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API 
o	localStorage implementation
o	Error handling strategies
•	Crypto.randomUUID() - https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID 
o	Modern UUID generation

_Community Resources_
Forums and Q&A
•	Stack Overflow - https://stackoverflow.com/ 
o	React Context API questions
o	localStorage troubleshooting
o	Vite configuration issues

_Debugging and Development Tools_
VS Code Extensions
•	ES7+ React/Redux/React-Native snippets
•	Prettier - Code formatting
•	ESLint - Code linting and error detection

_Acknowledgments_
Course Materials
•	RTT-23 Bootcamp - Module 10 React Project Development
•	Instructor guidance (A.Tavarez an C.Wright) - Context API implementation strategies
•	Peer collaboration - Code review and problem-solving
Open Source Community
•	React Team - For creating and maintaining React
•	Vite Team - For the excellent build tool
•	MDN Contributors - For comprehensive web documentation
•	Stack Overflow Community - For troubleshooting support
________________________________________
