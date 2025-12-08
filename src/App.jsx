
import { SayHi} from './assets/Components/Greeting'
import './App.css'
import { useState } from 'react'
//rendering conditionals can be use with terenary operators example: {!props.animals ? (<div>Loading...</div>)
//also with the && operator as a cascading conditional      example: {!props.animals && <div>Loading...</div>}
function List(props){
    if(!props.animals){
        return <div>Loading</div>
    }
    if(props.animals.length === 0){
        return <div>there are no animals in this list!</div>
    }
    return(
        <ul>
            {props.animals.map((animal)=>{
                return <li key={animal}>{animal}</li>
            })}
        </ul>
    )
}
function App() {
  //const animals = ['cat', 'chicken', 'dog' ,'bird'];
    const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;
