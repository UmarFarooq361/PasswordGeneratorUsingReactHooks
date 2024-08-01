import React, { useState, useCallback } from 'react'

const App = () => {

const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password, setPassword] = useState("")

const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "Umar"
  if (numberAllowed) {
    str += "0123456789"
  }
  if (charAllowed) {
    str += "!@#$%"
  }

  for (let index = 1; index <= str.length; index++) {
    pass += str.charAt(Math.floor(Math.random() * str.length))
    
  }
  setPassword(pass)
}, [length, numberAllowed, charAllowed])


  return (
    // <>
    // <div className="w-full max-w-md mx-auto  my-8 px-2 py-3 text-orange-400 bg-gray-800 rounded-lg"> 
    // <h1 className='text-4xl text-center my-3'>Password Generetor</h1>

    //   <div className="flex overflow-hidden mb-3 shadow-md rounded-lg">

    //     <input 
    //       type="text" 
    //       className="py-1 px-2 outline-none" 
    //       placeholder='Password'
    //       value={password}
    //       readOnly
    //     />
    //   </div>
    // </div>
    // </>
    <div className="w-full max-w-md mx-auto my-8 px-2 py-3 text-orange-400 bg-gray-800 rounded-lg">
  <h1 className="text-4xl text-center my-3">Password Generator</h1>

  <div className="flex overflow-hidden mb-3 shadow-md rounded-lg">
    <input
      type="text"
      className="py-1 px-2 outline-none w-full bg-gray-700 text-white"
      placeholder="Password"
      value={password}
      readOnly
    />
    <button className="outline-none py-1 px-2 bg-blue-600 text-white shrink-0"> Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-3">
      <input 
        type="range" 
        className="cursor-pointer" 
        min={6}
        max={50}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      
      />
      <label >Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-3">
      <input 
        type="range" 
        className="cursor-pointer" 
        min={6}
        max={50}
        value={length}
        onChange={(e) => setLength(e.target.value)}
      
      />
      <label >Length: {length}</label>
    </div>
  </div>
</div>

  )
}

export default App