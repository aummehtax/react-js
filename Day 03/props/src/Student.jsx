import PropTypes from "prop-types";

function Student(props) {
  console.log(props);
  
  return (
    <div className="student">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Human : {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}; //propTypes used to work in older version of vite + react but now they often dont show warning in modern setup               

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}//defaultProps is not work in modern vite + react

//you can use default parameter

export default Student;
