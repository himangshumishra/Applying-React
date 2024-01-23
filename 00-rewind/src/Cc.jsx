import { useState } from 'react'

function Color() {
        const [color, setColor] = useState('black')
 
    return(
        <>

        <div className=" flex flex-col" style={{backgroundColor:color}}>
        <h1 className=" bg-blue-500 text-center">Color changer</h1>
        <button onClick={()=>setColor("red")}  className=' bg-red-500  m-5 p-10 rounded-xl border text-white'>Red</button>
        <button onClick={()=>setColor("blue")}  className=' bg-blue-500  m-5 p-10 rounded-xl border text-white'>blue</button>
        <button onClick={()=>setColor("green")}  className=' bg-green-500  m-5 p-10 rounded-xl border text-white'>green</button>
            
        </div>

        </>
    )

}


export default Color