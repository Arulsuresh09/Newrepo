import { useEffect, useState } from "react"

const Component=()=>{
    const [state,setState]=useState({});

    
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=()=>{
        fetch("https://api.chucknorris.io/jokes/random")
        .then(Response => Response.json())
        .then((res)=>setState(res))
        .catch((err)=>console.log(err));
    }

    const jokeHandler=()=>{
        fetchData();
    }

    // return <div>
    //     {JSON.stringify(state)}
    // </div>
    
    return(
        
        <div >
            <p>Welcome to <b>chucknorris</b> jokes</p>
            <h1>if you want joke, just click <b>JOKE</b></h1>
            <p>{state.value}</p>
            <button onClick={jokeHandler} style={{backgroundColor:'blue'} }>Joke</button>
        </div>
    )
}
export default Component;