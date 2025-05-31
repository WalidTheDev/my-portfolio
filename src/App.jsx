import { useState } from "react"
function App() {

const [name , setName] = useState("");
  return (
    <>
     <h1>Hello {name} !</h1>
    </>
  )
}

export default App
