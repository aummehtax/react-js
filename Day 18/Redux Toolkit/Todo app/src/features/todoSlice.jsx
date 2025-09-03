import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todo:[],
    AllFilter: "all"
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState ,
    reducers: {

      addTodo: (state ,action) => {
        state.todo.push({
            id: nanoid(), 
            text: action.payload,
            completed : false,
        })
      },

      toggleTodo: (state , action) => {
          const todo = state.todo.find(t => t.id === action.payload) 
          if(todo){
            todo.completed = !todo.completed
          }
      },

      setFilter: (state , action) => {
        state.AllFilter =  action.payload
      },

      clearData: (state) => {
        state.todo = []
      }

    
    }
})

export const {addTodo , toggleTodo , setFilter , clearData} = todoSlice.actions

export default todoSlice.reducer