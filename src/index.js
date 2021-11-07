const elementDatabase = "http://127.0.0.1:3000/elements"
const backgroundDatabase = "http://127.0.0.1:3000/backgrounds"
const cardDatabase = "http://127.0.0.1:3000/cards"

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded');
  
  getCardItems(elementDatabase, createElements)
  getCardItems(backgroundDatabase, createBackgrounds)
  getCardItems(cardDatabase, getCardLoadout)
  Card.cardCompiler()
  loadCardsPanel()

})

function getCardItems(database,func) {
  fetch(database)
  .then(response => response.json())
  .then(items => {
    for (const item of items) {
      func(item) 
    } 
  })
}

function createElements(element){
    let elementContainer = document.getElementById('elements')
    let newElement = new Element(element)
    elementContainer.appendChild(newElement.renderElementSelection()) 
}

function createBackgrounds(background){
    let backgroundContainer = document.getElementById('backgrounds')
    let newBackground = new Background(background)
    backgroundContainer.appendChild(newBackground.renderBackgroundSelection()) 
}

function getCardLoadout(card) {
  console.log(card)
  let loadDiv = document.querySelector('.card_list_container')
  let p = document.createElement('p')
  p.innerHTML = card.name
  loadDiv.appendChild(p)
}

function  loadCardsPanel(){
  let load = document.getElementById('load')

  load.addEventListener('click', loadCardsPanel)

  function loadCardsPanel(){
    let cardList = document.querySelector(".card_list_container");  
         if(cardList.style.display === "none") {  
            cardList.style.display ="block";  
         } else {  
            cardList.style.display ="none";  
         }   
      } 
      console.log('it worked')
  }
