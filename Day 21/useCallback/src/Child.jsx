import { memo } from "react";

const Child = memo(({sayHi}) => {

    console.log("child rendered");

  return (
    <div>
      
      <button onClick={sayHi}>say hi</button>
    </div>
  )
})

export default Child
