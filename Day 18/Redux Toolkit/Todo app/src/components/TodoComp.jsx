import { useEffect, useState , useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo , clearData, setFilter, toggleTodo } from "../features/todoSlice";

const TodoComp = () => {
  //useState & variable
    let [input, setInput] = useState("");
    const dispatch = useDispatch();
    const todoData = useSelector((state) => state.todo.todo);
    const AllFilterData = useSelector((state) => state.todo.AllFilter)
  //useState & variable


  let handleInputBtn = () => {
    if(!input.trim()){ return}
    dispatch(addTodo(input));
    setInput("");
  };

 let compTaskCount= useMemo(() => {
     return(todoData.filter(t => t.completed).length)
  }, [todoData])

  //filter todoData
  let filterTodo = todoData.filter((t) => {
         if(AllFilterData == "completed"){
           
           return t.completed
         }
         if(AllFilterData == "pending"){
            return !t.completed
         }
         return true
  })

  return (
    <div className="bg-black w-full min-h-screen flex justify-center items-center p-4 dot-text">
      <div className="box w-full max-w-md bg-[#1a1a1a] rounded-2xl px-4 py-6 flex flex-col gap-4 shadow-lg">
        <h1 className="text-white text-center text-3xl">Todo list</h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add task.."
            className="bg-[#3d3d3d] rounded-2xl flex-1 h-[50px] text-white text-lg border-0 outline-0 px-3"
          />
          <button
            onClick={handleInputBtn}
            className="bg-[#3d3d3d] rounded-2xl w-[70px] h-[50px] active:scale-90 duration-200 text-white text-sm cursor-pointer"
          >
            Add
          </button>
        </div>

        <div className="flex justify-between gap-2">
          <div onClick={() => dispatch(setFilter("all"))} className="bg-[#3d3d3d] rounded-2xl flex-1 h-[40px] flex justify-center items-center cursor-pointer hover:scale-95 duration-200 text-white">
            All
          </div>
          <div onClick={() => dispatch(setFilter("completed")) } className="bg-[#3d3d3d] rounded-2xl flex-1 h-[40px] flex justify-center items-center cursor-pointer hover:scale-95 duration-200 text-white">
            Completed
          </div>
          <div onClick={() => dispatch(setFilter("pending"))} className="bg-[#3d3d3d] rounded-2xl flex-1 h-[40px] flex justify-center items-center cursor-pointer hover:scale-95 duration-200 text-white">
            Pending
          </div>
        </div>

        <div className="data w-full max-h-60 overflow-y-scroll">
          <ul className="text-white space-y-2">
            {filterTodo.map((e) => {
              return (
                <div key={e.id} className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    checked={e.completed}
                    onChange={() => dispatch(toggleTodo(e.id))}
                    className="cursor-pointer"
                  />
                  <span className={e.completed ? "line-through text-gray-400" : ""}>
                    <h1>{e.text}</h1>
                  </span>
                </div>
              );
            })}
          </ul>
        </div>

        <div className="footer w-full flex justify-between items-center pt-2">
          <div className="text-white text-sm">
            {/* ✅ Completed: {completeCount}/{task.length} */}
            ✅ Completed: {compTaskCount}/{todoData.length}
          </div>
          <button onClick={() => dispatch(clearData())}  className="bg-red-600 text-white rounded-2xl w-[40%] text-sm h-[35px] hover:scale-95 duration-200">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoComp;
