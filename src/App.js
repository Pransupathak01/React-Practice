import React from 'react';
//import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Welcome from './components/functionComponent.js/welcomeComponent';
import GetInput from './components/functionComponent.js/getInput';
import FormData from './components/functionComponent.js/formData';
//import Mainpage from './components/functionComponent.js/routerData';
import Fetchdata from './FetchjsonData';
import Axiosapi from './components/functionComponent.js/axiosApi';
//import Fetchapi from './components/functionComponent.js/fetchApi';
function App(){
  const Action = () =>{
    alert("No action required")
  }
 
  return(
    <div >
      <Header />
      <Welcome name={"Atul"} address={"Amarpur"} data={Action}/>
      <GetInput />
      <FormData />
      <Fetchdata />
      
      <Axiosapi />
      <Footer />
     
    </div>
  );
  
}
 
export default App;
