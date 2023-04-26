export type TaskType={
    title:string,
    content:string
    
}

export type AddType={
    onAdd(task:TaskType):void
}

export type MapType={
    id:number,
    key:number,
    title:string,
    content:string
    delete(id:number):void

}