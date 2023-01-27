import React from "react";
//import { Container } from "react-dom";
import pran from './Pran.json';

const Fetchdata = () =>{
    return(
      <div className="fetchdata">
        <table className="table-data">
          <thead>

            <tr>
              <th>Sr no.</th>
              <th>Name</th>
              <th>Email</th>
              <th>address</th>
            </tr>
           
          </thead>
        {
          pran.map((Pran)=>{
            return(
              
              /*<div key={Pran.id}>
                { Pran.id } .  "
                {Pran.name  } "  , "
                {Pran.email  }"   ,"
                {Pran.add}"

              </div>*/
              <tbody key={Pran.id}> 

                <tr key={Pran.id}> 
                  <td> {Pran.id}</td>
                  <td> {Pran.name}</td>
                  <td> {Pran.email}</td>
                  <td> {Pran.add}</td>
                </tr>

              </tbody>  
            )
          })
        }
        </table>
      </div>    
    )
}
export default Fetchdata;