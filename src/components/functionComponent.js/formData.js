import React,{useState} from "react";
const FormData = ()=>{
    const [name ,setName] = useState(" pransu")
    const [area ,setArea] = useState("")
    const [condition, setCondition] = useState(false)
    const [error , setError] = useState(false)

    const Formsubmit = (val) =>{
        val.preventDefault();
        console.log(name,area,condition);

    }
    const Fixerror = (f) =>{
        //let item = f.target.value;
        if(f.target.value.length<3)
        {
            setError(true)
        } else{
            setError(false)
        }
        setName(f.target.value)

        console.log(f.target.value.length)
    }
    return(
        <div className="formdata">
        <br/><form onSubmit={Formsubmit}>
            <input type="text" placeholder="Enter Name" onChange={Fixerror} />{error? <span>invalid name</span>:null}<br/>
            <span>Enter Area </span>
            <select onChange={(a)=> setArea(a.target.value)}> 
                <option > no option </option>
                <option> sidhi </option>
                <option> rewa </option>
            </select><br/>
            <input type="checkbox" onChange={(c)=>setCondition(c.target.checked)}/><span>Accept condition</span><br/>
            <button type="submit">submit</button><br/>

        </form><br/>
        </div>
    )
}
export default FormData;