//useRef() = "use reference" does not cause re-renders when its value changes when you want a Component to "remember" some information, but you don't want that information to trigger new renders.

//           1. accessing/interacting with DOM element 
//           2. handling focus , animations , and transitions
//           3. managing timers and intervals 


import { useRef , useEffect} from "react"

function Component (){

    useEffect(() => {
        console.log("Component render"); //Component render only once coz useRef() does not re-render when its value changes.
        
    })


    let input1 = useRef()
    let input2 = useRef()
    let input3 = useRef()


    let handleInput1 = () => {
        input1.current.focus()
    }

    let handleInput2 = () => {
        input2.current.focus()
    }

    let handleInput3 = () => {
        input3.current.focus()
    }

  return(
    <div>
        <div>
            <button onClick={handleInput1}>Click</button>
            <input type="text" ref={input1}/>
        </div>
      
        
        <div>
            <button  onClick={handleInput2}>Click</button>
            <input type="text" ref={input2}/>
        </div>


        <div>
            <button  onClick={handleInput3}>Click</button>
            <input type="text" ref={input3}/>
        </div>
    </div>
  )

}

export default Component