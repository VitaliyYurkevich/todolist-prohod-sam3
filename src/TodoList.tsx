import React from 'react';
import {v1} from "uuid";
import {FilterType} from "./App";

export type TodolistType = {
    title: string
    tasks: TasksType[]
    ChangeTasks: (id: string) => void
    FilteredTask: (value: FilterType) => void
    AddTask: (title: string) => void
}
console.log('asd')
export type TasksType ={
    id: string
    title: string
    isDone: boolean
}


function TodoList(props: TodolistType)  {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button onClick={()=>{props.AddTask('')}}>+</button>
            </div>
            <ul>
                {props.tasks.map((t)=>{
                    return(
                        <li id={v1()}>
                            <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                            <button onClick={()=>{props.ChangeTasks(t.id)}}>X</button>
                    </li>
                    )
                    })
                }
            </ul>
            <div>
                <button onClick={()=>{props.FilteredTask('all')}}>All</button>
                <button onClick={()=>{props.FilteredTask('active')}}>Active</button>
                <button onClick={()=>{props.FilteredTask('completed')}}>Completed</button>
            </div>
        </div>
    )
}


export default TodoList