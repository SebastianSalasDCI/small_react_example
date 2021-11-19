import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

import React, { useState } from 'react'

export default function Landing() {
  const [test,setTest] = useState("hiii")

  let jum = "jum"

  const onClickButton = () => {
    setTest("hello its me")
  }

  const onClickButton2 = () => {
    console.log("This is before changing",jum);
    jum = "Martin";
    console.log("This is after changing",jum);
  }

  return (
    <div>
      <h1>Landing</h1>
      {test}
      <br />
      {jum}
      <br />
      <button onClick={onClickButton}>1</button>
      <br />
      <button onClick={onClickButton2}>2</button>
    </div>
  )
}