import CompC from "./CompC"

function CompB(props) {
  return (
    <div className="box">
      <h1>Comp B</h1>
      <CompC user={props.user}></CompC>
    </div>
  )
}

export default CompB
