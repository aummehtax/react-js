//render list
//you can reuse List component just give data and it work 

import List from "./List.jsx"

function App() {

    let fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "mango", calories: 135 },
    { id: 4, name: "grapes", calories: 62 },
    { id: 5, name: "kiwi", calories: 42 },
    { id: 6, name: "watermelon", calories: 85 }
    ];

 let vegetables = [
  { id: 1, name: "carrot", calories: 41 },
  { id: 2, name: "broccoli", calories: 55 },
  { id: 3, name: "spinach", calories: 23 },
  { id: 4, name: "potato", calories: 77 },
  { id: 5, name: "cauliflower", calories: 25 },
  { id: 6, name: "bell pepper", calories: 31 }
];


  return (
    <>
      <List data={fruits} category="fruits"></List>
      <List data={vegetables} category="vegetables"></List>
    </>
  )
}

export default App
