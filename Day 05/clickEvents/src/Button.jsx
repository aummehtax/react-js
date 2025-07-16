
function Button (){
    
    // let handleEvent = () => {
    //     console.log("you clicked");
    // }

    // let handleEvent2 = (name) => { // to write with parameter
    //     console.log(`${name}`);
        
    // }

    let handleEvent3 = (e) => { //event object
        e.target.textContent = "ouchh! 🤕"
        
    }

    return(
        <>
         {/* <button className="btn" onClick={() => handleEvent2("aum")}>Click me 😀</button> //have to use arrow function coz other wise it immediately call without click */}
         <button className="btn" onClick={(e) => handleEvent3(e)}>Click me 😀</button>  
        </>
    )
}

export default Button