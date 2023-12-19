import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Button';
import CardBody from "react-bootstrap/esm/CardBody";


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
            <Card style={{width:'20rem',height:'20rem',backgroundColor:'gray'}}>
               <CardBody>
                <p>{state.value}</p>
               </CardBody>
            </Card> 
            <br/>  <br/>
            <Button variant="outline-success" type="submit" onClick={jokeHandler}>Joke</Button>          
        </div>
       
    )
}
export default Component;