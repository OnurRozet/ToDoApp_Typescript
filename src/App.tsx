import { useState } from "react";
import "./App.css";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import { MapType, TaskType } from "./type/TaskType";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const addTask = (newTask: TaskType) => {
    setTasks((prevTask: TaskType[]) => {
      return [...prevTask, newTask];
    });
  };

  const deleteItem=(id:number):void=>{

    setTasks(
      tasks.filter((task,index)=>{
        return index !=id;
      })
    )
    
  }
  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />

      <div className="container">
        <div className="row">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                title={taskItem.title}
                content={taskItem.content}
                id={index}
                delete={deleteItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
