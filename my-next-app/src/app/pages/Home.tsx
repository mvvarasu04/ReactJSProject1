import React,{useState} from "react" ;


const App = () =>
{
    const [num,setNum]= useState(1);
    

    const HandleAdd = () =>
    {
        setNum((currValue)=>
        {
            return currValue+1;
        });
    };

    return(
        <div> 
            <h1>{num}</h1>
            <button onClick={HandleAdd}>Add</button>
        </div>
    )
};
export default App;