import CompD from "./CompD"

function CompC(props) {
  return (
     <div className="box">
      <h1>Comp C</h1>
      <CompD user={props.user}></CompD>
    </div>
  )
}

export default CompC
