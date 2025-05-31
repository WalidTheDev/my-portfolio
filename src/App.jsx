import { useState } from "react"
function App() {

const [name , setName] = useState("");

function handleChange(){
  setName
}
  return (
    <>
     <h1>Hello akil !</h1>
     {/* <input type="text" onChange={handleChange} /> */}
    </>
  )
}

export default App
