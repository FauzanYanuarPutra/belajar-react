import { useState } from "react"
import Button from "./Button"

export default function Counter({ initialValue }) {
  let [counter, setCounter] = useState(initialValue)
  let [counter2, setCounter2] = useState(initialValue)

  function handleClick(i) {
      setCounter(counter + i) 
  }

  function handleClick2() {
    setCounter2(x => {
      const a = x + 1
      return a
    })
    console.log(setCounter2)
  }
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <div className="flex gap-2">
          <Button onClick={() => handleClick(1)}>
            +1
          </Button>
          <Button onClick={() => handleClick(3)}>
            +3
          </Button>
        </div>
      </div>
      <div>
        <h1>{counter2}</h1>
        <div className="flex gap-2">
          <Button onClick={handleClick2}>
            +1
          </Button>
          <Button onClick={() => {
              handleClick2();
              handleClick2();
              handleClick2();
            }}>
            +3
          </Button>
        </div>
      </div>
    </div>
  )
}