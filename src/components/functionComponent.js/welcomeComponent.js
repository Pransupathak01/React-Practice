import React,{useEffect, useState} from "react";
//import React from "react";

const Welcome = (props) =>{ //send the data from one component to another component.
    //let name = "pransu"
     const [name,setName] = useState("atul")
     const [count ,setCount] = useState(0)
     useEffect(() =>{
        document.title=` candidate name no. =${count}`;
        //setCount(count+1)
        console.log(count)

     },);
     
     const updateName = () =>{
        setName("Pransu Pathak")
     } 
    
    // state is a data container such as variable( we can't update vaiable directly)
    console.log(props.name)
    return(
        <div className="welcome">
            <p > hello {name} from {props.address},welcome to the page</p>
            <button  onClick={updateName}> change  </button>
            <button onClick={()=>setCount(count+1)}>effect</button>
            
        </div>
    )
}
export default Welcome;