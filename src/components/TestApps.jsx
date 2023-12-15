import React from "react";
// import { v4  } from "uuid";

// export const Testapps=()=>{
//     return<React.Fragment>
//         <div>this is div1 test</div>
//         <div>this is div2 test</div>
//         <div>this is div3 test</div>
//     </React.Fragment>

// } 
// export const Testapps1=()=>{
//     return<React.Fragment>
//         <div>this is div1 test2</div>
//         <div>this is div2 test2</div>
//         <div>this is div3 test2</div>
    // </React.Fragment>


    const TestApps=({nameArr})=>{
        // console.log(props)
        return(
            <div>
            {nameArr.name} 
            {/*{props.num.map(n => <li key={n}>{n}</li>)} */}
        </div>
        ) 
        
    }

    

// } 
export default TestApps;

