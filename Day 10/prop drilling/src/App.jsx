//props Drilling = Props Drilling is when you pass data (props) from a top-level component down to deeply nested components — even if some middle components don’t need that data — just to get the data to a child.

//problem = Gets messy with many levels , Causes unnecessary re-renders in middle components.

// Alternatives :- 

  // To avoid props drilling, use:

  // 1. useContext – React hook to access context values directly inside functional components.

  // 2. Context API – share data globally without passing manually.

  // ( State management libraries like ) 

  //   1. Redux

  //   2. Zustand

  //   3. Recoil

  // 3. React Query / TanStack Query – for remote data state.


import CompA from "./Components/CompA.jsx"

function App() {
  return (
    <div>
      <CompA></CompA>
    </div>
  )
}

export default App
