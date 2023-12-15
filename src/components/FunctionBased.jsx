import { useState } from "react"
import {v4 as uuidv4} from "uuid";
// import TestApps from "./TestApps";
// import Object from "./Object";
const State=()=>{
    // const [sname ,setName]=useState('');

    //iterate value an array and using uuid
    // return(
    //     <div className="State">
    //        <p>
    //             {sname.map((name,i)=>{
    //                 return<li key={uuidv4()}>{name}</li>
    //             })}
    //        </p>
    //     </div>
    // )

    //button handler
    // const buttonHandler=()=>{
    //     setName('arul')
    // }

    //submithandler reload attribute
    // const submitHandler=(a)=>{
    //     a.preventDefault();
    //     alert("its reloaded")
    // }


    //function parameter
    // const functionHandler = (name)=>{
    //     alert(name);
    // }
    

    //buttonhandler and submithandler
    let arr=['arul','sathish','mouli','lakshana','jeffry','priya'];
    return(
        <div className={'State'}>
           {/* {sname && <p>{sname}</p>}
           {sname==='arul' ?<p></p>:<p>unknown</p>}
           <button onClick={buttonHandler}  style={{backgroundColor:'green'}}>Enter</button> */}

           {/* <form onSubmit={submitHandler}>
                <input type="text"/>
                <button>submit</button>
           </form> */}


           {/*functionparameter
                <button onClick={() => functionHandler('fullstack')}>submit</button>*/}


            
            {/*one component to another component
            <TestApps nameArr={obj} /> */}


            {/* <Object str={arr}/> */}

            </div>
    )
}
export default State;