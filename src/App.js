import './App.css';
import TodoForm from "./components/todo-form";
import TodoListFilter from "./components/todo-list-filter";
import Todo from "./components/todo";
import {useState} from "react";

function App() {

    const [tasks,setTasks] = useState([
        {name: "eat", completed: true},
        {name: "sleep", completed: true},
        {name: "repeat", completed: false}
    ])


    const tasklist = tasks.map((task) => <Todo name={task.name} state={task.completed}/>)
  return (
    <div className="todoapp">
      <TodoForm/>
      <TodoListFilter/>
      <h2 id="list-heading" tabIndex="-1">2 tasks remaining</h2>
        <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
            {tasklist}
        </ul>
    </div>
  );
}

export default App;
