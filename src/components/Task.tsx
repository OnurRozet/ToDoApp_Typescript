import { MapType } from "../type/TaskType";

export default function Task(props: MapType) {

    const deleteItem=(id:number)=>{
        props.delete(props.id);
    }
  return (
    <div className="col-md-4 mb-4 contentDivArea">
      <div className="contentDiv">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="btn btn-danger" onClick={()=>deleteItem(props.id)}>Sil</button>
      </div>
    </div>
  );
}
