import { useCallback, useEffect, useRef, useState } from "react"

function PasswordGenerator() {
    
    const [length, setlength] = useState(8)
    const [numberAllowed, setNumberAllowed]=useState(false)
    const [charAllowed, setCharAllowed]=useState(false)
    const [password, setPassword]=useState("")

    // use ref hook
    // const passwordRef=useRef(null)

    // const passwordMaker= useCallback(()=>{
    //     let pass=""
    //     let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //     if (numberAllowed) str+="1234567890"
    //     if(charAllowed) str+="!@#$%&_-="

    //     for (let i =1; i <= length; i++) {
    //         let char = Math.floor(Math.random()*str.length+1)
    //         pass +=str.charAt(char)
            
    //     }
    //     setPassword(pass)
    
    // }, [length,charAllowed,numberAllowed,setPassword])

const passwordMaker = useCallback(() => {
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str+="1234567890"
        if(charAllowed) str+="!@#$%&_-="


        for(let i=1;i<=length;i++){
           let char=Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)

        }
        setPassword(pass)

}, [length,charAllowed,numberAllowed,setPassword])


 useEffect(() => {
    passwordMaker()
 }, [length,charAllowed,numberAllowed,passwordMaker])



    return(
        <>
        <h1 className=" text-white bg-blue-600 text-center my-1 rounded-md">password generator</h1>
        <div className=" bg-teal-400 text-black text-center">
          <div>
            <input type="text"
            placeholder="password"
            value={password} 
            readOnly
            />
            <button className=" bg-black text-white rounded-lg py-2 px-3 m-3" >copy</button>
            </div>
            <div>
                <input type="checkbox" />
            </div>
            <input type="range" 
            min={8}
            max={16}
            value={length}
            onChange={(e)=>{setlength(e.target.value)}}      
            />
            <label >Length={length}</label>
        </div>

        </>
    )

}
export default PasswordGenerator