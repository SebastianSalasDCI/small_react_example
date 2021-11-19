import React, {useState, useEffect} from 'react'

export default function Home() {

  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter+1)
  }

  useEffect(() => {
    console.log("The component has mounted");

    return () => console.log("The component was unmounted");
    
  }, [])

  useEffect(() => {
    console.log("The component has rendered");
  }, [counter])

  return (
    <div>
      <h1>Home</h1>
      <div className="counterClass">
        {counter}
        <button onClick={increaseCounter} >Increase</button>
      </div>
    </div>
  )
}
