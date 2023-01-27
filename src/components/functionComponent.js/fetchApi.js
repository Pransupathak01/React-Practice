import React,{useState,useEffect} from "react";

const Fetchapi = () =>{

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

        useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
           
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
              },
             
              (err) => {
                setIsLoaded(true);
                setError(err);
              }
            )
        }, [])
      
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div> continue Loading</div>;
        } else {
          return (
            <ul>
              {items.map(data => (
                <li key={data.id}>
                  {data.id}
                  {data.name} 
                </li>
              ))}
            </ul>
            
          );
        }
      }
      export default Fetchapi