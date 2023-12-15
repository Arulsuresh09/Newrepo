import react,{ useState,useEffect } from "react";
    const [state,setstate]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = () =>{
        fetch("https://jsonplaceholder.typicode.com/users");
            .then(Response => Response.json())
            .then((res)=>setstate(res));        
    };  

    return(
        <div>
            {state.map((res)=>{
                <li key={res.id}>{res.name}</li>
            })}
        </div>
    )
export default App;
