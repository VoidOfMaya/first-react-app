import photo from'../../../public/battleship480x360.png';
import './card.css';

function CreateCard(){
    const card = document.createElement('div');
    const screenshot = document.createElement('img');
    const title = document.createElement('h2')
    const about = document.createElement('p');








    about.innerHTML="random info goes here, lurom ipsum darium fucjing idk man";
    about.style.justifySelf="center";
    about.style.alignSelf="start";
    about.style.margin= '5px';
    about.style.fontSize = "20px"; 

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
 export{
    CreateCard
 }