
import { SayHi} from './assets/Components/Greeting'
import { CreateCard } from './assets/Components/card'
import React from 'react'
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
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>;
};

export default App;
