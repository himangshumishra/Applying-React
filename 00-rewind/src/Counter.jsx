import { useState } from "react";

function Counterproject() {
    let [counter,setCounter]=useState(10)

    let adder=()=>{
        setCounter(++counter)
    }
    
    return(
        <>
            <h1 className=" bg-gray-500">Value={counter}</h1>
            <button onClick={adder} className=" bg-pink-600 rounded-2xl w-40 p-3 block m-auto my-1">
             Click me   {counter}
            </button>


        </>



    )
}

export default Counterproject