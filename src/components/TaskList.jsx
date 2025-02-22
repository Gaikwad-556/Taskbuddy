

export default function TaskList({tasks, updateTask, deleteTask}) {

    const toggle = (index)=>{
        const updatedtask = {...tasks[index], completed: !tasks[index].completed}
        updateTask(index, updatedtask);
    }
    return (
        <ul className="task-list">
            {tasks.map((task, index) => 
                <li className={task.completed ? "completed" : ""}>
                    <div>
                        <span> {task.text} </span>
                            <small>
                                {task.priority} {task.category}
                            </small>
                    </div>
                    <div>
                        <button onClick={()=>{toggle(index)}}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button onClick={()=>{deleteTask(index)}}>Delete</button>
                    </div>
                </li>
            )}
        </ul>
    )
}