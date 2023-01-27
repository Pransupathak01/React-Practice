import React,{useState, useEffect} from "react";
import axios  from "axios";
//import { json } from "react-router-dom";

const Axiosapi= () =>{
    const[apidata,setApidata]=useState([])
    const[id,setId] = useState(1)
    //const mainposts ="https://jsonplaceholder.typicode.com/posts";
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        //.then(res => res.json()) this code is for fetch() not needed in axios 
        .then((response) =>  {
            console.log(response)
            setApidata(response.data)  
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    const Postdata = () =>{
       // axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
       axios.post("https://jsonplaceholder.typicode.com/posts/", {
        title: "Hello World!",
        body: "This is a new post."
      })
        .then((response) =>  {
            console.log(response)
            setApidata([response.data])  
        })
        .catch((err)=>{
            console.log(err)
        })
        //setId(id+1);
    }
    const Getdata = () =>{
          axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
         .then((response) =>  {
            console.log(response)
            setApidata([response.data])  
        })
        .catch((err)=>{
            console.log(err)
        })
        setId(id+1);
    }
    const Putdata =() =>{
        axios.put("https://jsonplaceholder.typicode.com/posts/2",{
            title: "Hello Pran!",
            body: "This is a new post."
        })
        .then((response) =>  {
            console.log(response)
            setApidata([response.data])  
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const Deletedata =() =>{
        axios.put("https://jsonplaceholder.typicode.com/posts/2")
        .then((response) =>  {
            console.log(response)
            alert("data is deleted")
            setApidata([response.data])  
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   
    return(
        <div>
            <p>For new data click on below button</p>
            <button onClick={Postdata}>click Get</button><br/>
            <p>click below buttons for specific data</p>
            <button onClick={Getdata}>click for {id}</button>
            <button onClick = {Putdata}>click update</button>
            <button onClick={Deletedata}>click delete</button>
            <ul>{
            apidata.map((data) => (
             <li key={data.id}>
                {data.id}
                {data.title}
                {data.body} 
             </li>  
        ))}
        </ul>
       
        </div>
        
    )
}
export default Axiosapi;