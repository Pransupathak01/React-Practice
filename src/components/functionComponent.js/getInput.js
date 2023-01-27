import React,{useState} from "react";
const GetInput = () =>{
    const [data,setData] =useState();
    const [print,setPrint] = useState()
    const getData = (val) =>{
        setData(val.target.value);
        setPrint(false);//hide show
        console.log(val.target.value);
        console.log(print)
    }
    return(
        <div className="get-input">
           {
             print?
             <h1>{data}</h1> 
             :null
           }
            <input type="text" onChange={getData}/>
            <button type="button" onClick={()=>setPrint(true)}> print data </button>
        </div>

    )
}
export default GetInput;