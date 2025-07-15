/*
props =  read-only properties that are shared between components a parent components can send data to a child components <components key=value>

propTypes = a mechanism that ensures that the passed value is of correct datatype. (aqe : propTypes.number)
PropTypes: Used for runtime prop validation

defaultProps =  default values for props in case they are not passed from the parent components name: "Guest"
*/


import Student from "./Student.jsx"

function App() {
  return (
    <>
      <Student name="aum"  age={12} isStudent={true}></Student>
      <Student name="rahul"  age={22} isStudent={true}></Student>
      <Student name="robot"  age="hello" isStudent={false}></Student>
      <Student ></Student>
    </>
  )
}

export default App