function Comp (props){

    if (props.isLogged) {
        return(
            <h1>Logged in successfully {props.username}</h1>
        )
    }
    else{
        return(
            <h1>pls Log in {props.username}</h1>
        )
    }
}

export default Comp