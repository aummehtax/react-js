//What is HOC (higher order components) in React ?
// * A Higher Order Component (HOC) is just a function that takes a component and gives back a new one with extra features.

// How it works ?
// * You pass your component into an HOC.
// * The HOC creates a new component.
// * This new component can add state, logic, or props and then render your original component with those extras.

// In short: HOC = a wrapper that adds reusable logic to components.

import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"

const App = () => {
  return (
    <div>
      <Counter1></Counter1>
      <Counter2></Counter2>
    </div>
  )
}

export default App
