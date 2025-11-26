import photo from'../../../public/battleship480x360.png';
import './card.css';

function CreateCard(){


    return(
        <div class="card">
            <img class="photo" src='../../../public/battleship480x360.png' 
            alt='photo of game' 
            width="320px" 
            height="200px"></img>
            <h3 class="header">example card</h3>
            <p class="artical">random info goes here, lurom ipsum darium fucjing idk man</p>
        </div>
    )
}
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