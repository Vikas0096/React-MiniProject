import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, vi] = useState(15)

let addCounter = ()=>{
 vi(counter+1)
};

let remCounter = ()=>{
  vi(counter-1)
};

return (
    <>
    <h1>Hook Learning</h1>
    <h2>Counter value: {counter} </h2>
    <button onClick={addCounter}>Add value:{counter}</button> <br />
    <button onClick={remCounter}>Remove value:{counter}</button>
    </>
        )
}

export default App
