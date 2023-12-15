import { useEffect, useState } from "react";
const Test =() =>{

    const [state,setstate]=useState(0);

    useEffect( ()=>{
        console.log("mounting phase")
    },[])

    useEffect( () =>{
        console.log("updating phase")

        return( )=>{
            console.log("ummounting phase")
        }
        
    },[state])

    const clickHandler =()=>{
        setstate(state+1);
    }

    return(
        <div>
            <button onClick={clickHandler} style={{background:'Green'}}>Click here</button>
            {state}
        </div>
        
    )

}
export default Test;