import photo from'../../../public/battleship480x360.png';
import './card.css';

function CreateCard(){


    return(
        <div className="card" style={{display: 'flex', flexDirection:'column'}}>
            <img className="photo" src='../../../public/battleship480x360.png' 
            alt='photo of game' 
            width="320px" 
            height="200px" />
            <h3 className="header">example card</h3>
            <p className="artical">random info goes here, lurom ipsum darium fucjing idk man</p>
        </div>
    )
}
/*
JSX rules:
1- element must be incapsulated in a container either <></> fragment or any markup container-return onle one root element
2- all elements must be closed off  <input> must be <input />
3- attributes with - separator shoud be declared in camelCase instead, storke-width should be strokeWidth
4- some attributes that are used in js might clash with the markup...instead of class="" use className=""
 */
function Test(){
    return(
        <>
            <h1>Test title</h1>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
            </svg>
            <form>
            <input type="text" />
            </form>
        </>
    );
}
 export{
    CreateCard,
    Test
 }