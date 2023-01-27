import React from "react";
import { BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
const Mainpage = () =>{
    return(
        <div className="data-routing">
            <Router>
                <Link to ="/home">home</Link><br/>
                <Link to ="/about">about</Link>
                <Routes>
                  <Route path = "/home" element={<Homepage/>}/> 
                  <Route path ="/about" element={<Aboutpage/>}/> 
                </Routes>
            </Router>
           

        </div>
    )
}
const Homepage = () =>{
    return(
        <div>
            <h1>Home page</h1>
            <p>this is home page</p>
        </div>
    )
}
const Aboutpage = () =>{
    return(
        <div>
            <h1>About page</h1>
            <p>this is about page</p>
        </div>
    )
}
export default Mainpage;