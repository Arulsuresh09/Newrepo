const Object = (props) =>{

    return(
        <div>
            {props.str.map( a => <li key={a}>{a}</li>)}
        </div>
    )
}
export default Object;