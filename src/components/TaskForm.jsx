import { useState } from "react"
import './Style.css' 
import { PlusCircle } from "lucide-react";

export default function TaskForm({addTask}) {
    let [task,setTask] = useState('');
    let [priority,setPriority] = useState("Medium");
    let [category,setCategory] = useState("General");

    const handleSubmit = (e)=> {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false}); // send data to add task method
        setTask("");
        setPriority("Medium")
        setCategory("General")
    }

    return(

        <form onSubmit={handleSubmit} className="task-form">
            <div id="inp">
                <input onChange={(e) => setTask(e.target.value)} value={task} placeholder="Enter Task"/> 
                <button>
                    <PlusCircle size={29} />
                </button>                     
            </div>

            <div id="buttons">
                <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                </select>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
           

        </form>
    )
}