import { useState } from "react";
import { AddType, TaskType } from "../type/TaskType";

export default function CreateTask(props:AddType) {
  const [task, setTask] = useState<TaskType>({
    title: "",
    content: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> &
      React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTask((prevTask: TaskType) => {
      return {
        ...prevTask,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleClick = (event:any) =>{
    event.preventDefault();
    props.onAdd(task);
    setTask({
        title:"",
        content:""
    })
    console.log(task);
    
  }

  return (
    <div className="todoDivArea">
      <form className="todoDiv">
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Giriniz."
          className="form-control todoInput"
        />
        <textarea
          name="content"
          value={task.content}
          onChange={handleChange}
          className="form-control todoInput"
          rows={3}
          placeholder="Açıklama Giriniz"
        ></textarea>
        <button className="btn btn-primary todoButton" onClick={handleClick}>Ekle</button>
      </form>
    </div>
  );
}
