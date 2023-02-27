import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";

export type FilterType = 'all' | 'completed' | 'active'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false}
    ])
    console.log('sdfsf')
    let [filtered, setFiltered] = useState<FilterType>('all')

    let AddTask = (title:string) => {
        let task = {id: v1(), title: title, isDone: true}
        let newTask = [...tasks, task]
        setTasks(newTask)
    }


    let FilteredTask = (value:FilterType) => {
        setFiltered(value)
    }

    let ChangeTasks = (id: string) => {
        let filtTask = tasks.filter(t => t.id !== id)
        setTasks(filtTask)
    }

    let FilteredTasks = tasks
    if(filtered === 'completed'){
        FilteredTasks = tasks.filter(t=>t.isDone === true)
    }
    if(filtered === 'active'){
        FilteredTasks =  tasks.filter(t=>t.isDone === false)
    }


    return (
        <div className="App">
            <TodoList title={'What'}
                      tasks={FilteredTasks}
                      ChangeTasks={ChangeTasks}
                      FilteredTask={FilteredTask}
                      AddTask={AddTask}
            />
        </div>
    );
}

export default App;
