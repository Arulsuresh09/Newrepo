import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";


const ToDo=()=>{

    const [list,setList]=useState([]);
    const [name,setName]=useState('');

    const changeHandler=(e)=>{
       console.log(name)
       setName(e.target.value);       
    }

    const submitHandler=(e)=>{
        console.log(e.target.name.value)
        e.preventDefault();
        // console.log(name)
        setList([...list,{id:list.length+1,name:name}])
        setName('');
    }

    const deleteHandler=(id)=>{
        console.log('test',id)
        const newList = list.filter((ob) => ob.id!==id);
        setList(newList);
    }

    return <div>
        {/* <p className='display-5'>HOTEL PRIME</p> */}

        <div>
        <Navbar expand="lg" className="bg-body-secondary">
            <Container>
                <Navbar.Brand href="#">HELLO TODO</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <p>Take a Note</p>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        <br/>

    <Card style={{width:'40rem',height:'10rem',left:'24rem',right:'15rem',backgroundColor:'lightgrey'}}>
        <Card.Body>
            
            <form onSubmit={(e)=>submitHandler(e)}>
                
                <div>
                    <label><b>Write Down Here</b></label><br/>
                    <input type="text" placeholder="Enter your Name" onChange={(e)=>changeHandler(e)} name="name" value={name} required/>
                </div>
                {/* <div>
                    <label>EMAIL</label>
                    <input type="email" placeholder="Enter your Email" />
                </div> */}

                <br/>   
                
                <Button variant="outline-success" type="submit">Add Note</Button>

                


            </form>
                
                            
        </Card.Body>
    </Card>
    {/* <li>{JSON.stringify(list)}</li> */}
    <p><b>Here's Your Plans</b></p>
    {name===name ?<div></div>:<div>No data</div>}
    {list.map((ob)=>{
        return <li key={ob.id}>{ob.name} <Button variant="outline-danger"  onClick={()=>deleteHandler(ob.id)}>Remove</Button></li>
    })}


    </div>

    



}
export default ToDo;