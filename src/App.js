import "./App.css"

import { useState } from "react"


function App() { 

  let total = 0
  
  // This sets the value of numOne and numTwo to be "0" and gives me the function 
  // setNumOne & setNumTwo to be able to change that value

  const [numOne, setNumOne] = useState("0")
  const [numTwo, setNumTwo] = useState("0")

  // This sets the value of aritmetic to the starting state of "+" and gives me the function 
  // setArithmetic to be able to change that value to whatever comes back from the onClick function

  const [arithmetic, setArithmetic] = useState("+")

  // This function takes the onClick arg and then sets the
  // value of newNumOne to be the output of the function addNumber which 
  // takes the arguments of the current number (numOne which is initialised
  // at "0") and the number that was clicked and then calls setNumOne 
  // with the newNumOne value which is either current if it's zero or 
  // it's the new number pressed if not zero

  const setDisplay1 = (num) => {
    const newNumOne = addNumber(numOne, num)
    setNumOne(newNumOne)
  }

  const setDisplay2 = (num) => {
    const newNumTwo = addNumber(numTwo, num)  
    setNumTwo(newNumTwo)
  }
  
  // This function is used to work out if the number from onClick should be
  // added to the page or the current number shold be returned if the 
  // click was on zero. This is then called by the functions linked to the
  // onClick events linked to each button

  const addNumber = (current, next) => {
    if (current === "0") {
      if (next === "0") {
        return current
      }
      return next
    }
    return (current + next)
  }

  // Calculate the totals

 if (arithmetic === "+") {
   total = Number(numOne) + Number(numTwo)
 }

 if (arithmetic === "-") {
   total = Number(numOne) - Number(numTwo)
 }

 if (arithmetic === "*") {
   total = Number(numOne) * Number(numTwo)
 }

 if (arithmetic === "/") {
   total = Number(numOne) / Number(numTwo)
 }
  
  return (
    <div className="calculator">
        <div className="panel">
          <p>{numOne}</p>
          <div className="numbers">
            <button onClick={() => setDisplay1("1")}>1</button>
            <button onClick={() => setDisplay1("2")}>2</button>
            <button onClick={() => setDisplay1("3")}>3</button>
            <button onClick={() => setDisplay1("4")}>4</button>
            <button onClick={() => setDisplay1("5")}>5</button>
            <button onClick={() => setDisplay1("6")}>6</button>
            <button onClick={() => setDisplay1("7")}>7</button>
            <button onClick={() => setDisplay1("8")}>8</button>
            <button onClick={() => setDisplay1("9")}>9</button>
            <button onClick={() => setDisplay1("0")}>0</button>
            <button onClick={() => setNumOne("0")}>Clear</button>
          </div>
        </div>
        
        <div className="panel">
          <p>{arithmetic}</p>
          <div className="numbers">
            <button onClick={() => setArithmetic("+")}>+</button>
            <button onClick={() => setArithmetic("-")}>-</button>
            <button onClick={() => setArithmetic("*")}>*</button>
            <button onClick={() => setArithmetic("/")}>/</button>
          </div>
        </div>

        <div className="panel">
          <p>{numTwo}</p>
          <div className="numbers">
          <button onClick={() => setDisplay2("1")}>1</button>
            <button onClick={() => setDisplay2("2")}>2</button>
            <button onClick={() => setDisplay2("3")}>3</button>
            <button onClick={() => setDisplay2("4")}>4</button>
            <button onClick={() => setDisplay2("5")}>5</button>
            <button onClick={() => setDisplay2("6")}>6</button>
            <button onClick={() => setDisplay2("7")}>7</button>
            <button onClick={() => setDisplay2("8")}>8</button>
            <button onClick={() => setDisplay2("9")}>9</button>
            <button onClick={() => setDisplay2("0")}>0</button>
            <button onClick={() => setNumTwo("0")}>Clear</button>
          </div>
        </div>
        <div className="panel answer">
          <p>{total}</p>
        </div>
    </div>
  )
}

export default App
