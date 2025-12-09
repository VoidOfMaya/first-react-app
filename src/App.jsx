
import { SayHi} from './assets/Components/Greeting'
import { CreateCard } from './assets/Components/card'
import { Input } from './assets/Components/input'
import { User } from './assets/Components/user'
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
  const [inputValue, setInputValue] =useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Input handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
}

export default App;
