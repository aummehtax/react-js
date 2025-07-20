import { useState } from "react"

function Todo() {

let savedTasks = JSON.parse(localStorage.getItem("taskList")) || [];   

let [inputValue , setValue] = useState("")
let [task , setTask] = useState(savedTasks)

let [filterValue , setFilter] = useState("all")

let saveToLocal = (data) => {
localStorage.setItem("taskList", JSON.stringify(data));
};


let handleInput = (e) => {
    setValue(e.target.value)
}

let handleAdd = () => {
    if (inputValue.trim() === "") return;

    let updatedTasks = [...task, { text: inputValue, completed: false }];
    setTask(updatedTasks);
    setValue("");

    saveToLocal(updatedTasks); 
}

//toggle check / uncheck
let handleCheck = (index) => {
    let updated = [...task]
    updated[index].completed = !updated[index].completed
    setTask(updated)

    saveToLocal(updated);
}

let handleAll = () => {
    setFilter("all")
}

let handleCompleted = () => {
    setFilter("completed")
}

let handlePending = () => {
    setFilter("pending")
}

// filter task 
let filteredTask = task.filter((t) => {
    if(filterValue == "completed"){
        return t.completed
    }
    if (filterValue == "pending") {
        return !t.completed
    }
    return true //"all"
})

//clear completed task
let handleClearCompleted = () => {
    let filtered = task.filter((t) => !t.completed)
    setTask(filtered)
    saveToLocal(filtered);
}

//count how many completed
let completeCount =  task.filter((t) => t.completed).length


    return(
            <div className="bg-black w-full min-h-screen flex justify-center items-center p-4 dot-text">
            <div className="box w-full max-w-md bg-[#1a1a1a] rounded-2xl px-4 py-6 flex flex-col gap-4 shadow-lg">
                <h1 className="text-white text-center text-3xl">Todo list</h1>

                <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Add task.."
                    value={inputValue}
                    onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleAdd();
                    }
                    }}
                    onChange={handleInput}
                    className="bg-[#3d3d3d] rounded-2xl flex-1 h-[50px] text-white text-lg border-0 outline-0 px-3"/>
                <button
                    onClick={handleAdd}
                    className="bg-[#3d3d3d] rounded-2xl w-[70px] h-[50px] active:scale-90 duration-200 text-white text-sm cursor-pointer">
                    Add
                </button>
                </div>

                <div className="flex justify-between gap-2">
                <div
                    onClick={handleAll}
                    className="bg-[#3d3d3d] rounded-2xl flex-1 h-[40px] flex justify-center items-center cursor-pointer hover:scale-95 duration-200 text-white">
                    All
                </div>
                <div
                    onClick={handleCompleted}
                    className="bg-[#3d3d3d] rounded-2xl flex-1 h-[40px] flex justify-center items-center cursor-pointer hover:scale-95 duration-200 text-white">
                    Completed
                </div>
                <div
                    onClick={handlePending}
                    className="bg-[#3d3d3d] rounded-2xl flex-1 h-[40px] flex justify-center items-center cursor-pointer hover:scale-95 duration-200 text-white">
                    Pending
                </div>
                </div>

                <div className="data w-full max-h-60 overflow-y-scroll">
                <ul className="text-white space-y-2">
                    {filteredTask.map((taskValue, index) => (
                    <li key={index} className="flex gap-3 items-center">
                        <input
                        type="checkbox"
                        checked={taskValue.completed}
                        onChange={() => handleCheck(index)}
                        className="cursor-pointer"
                        />
                        <span className={taskValue.completed ? "line-through text-gray-400" : ""}>
                        {taskValue.text}
                        </span>
                    </li>
                    ))}
                </ul>
                </div>

                <div className="footer w-full flex justify-between items-center pt-2">
                <div className="text-white text-sm">
                    ✅ Completed: {completeCount}/{task.length}
                </div>
                <button
                    onClick={handleClearCompleted}
                    className="bg-red-600 text-white rounded-2xl w-[40%] text-sm h-[35px] hover:scale-95 duration-200">
                    Clear Completed
                </button>
                </div>
            </div>
            </div>

    )
}

export default Todo