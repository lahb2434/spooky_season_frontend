const elementDatabase = "http://127.0.0.1:3000/elements"
const backgroundDatabase = "http://127.0.0.1:3000/backgrounds"
const cardDatabase = "http://127.0.0.1:3000/cards"

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded');
  
  getCardItems(elementDatabase, createElements)
  getCardItems(backgroundDatabase, createBackgrounds)
  getCardItems(cardDatabase, getCardLoadout)
  Card.cardSaveToApi()
  showCardsPanel()

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
  let loadDiv = document.querySelector('.card_list_container')
  let p = document.createElement('p')
  p.id = `${card.name}_${card.id}`
  p.innerHTML = card.name

  p.addEventListener('click', () => {
    fetch(`http://127.0.0.1:3000/cards/${p.id.slice(-1)}`)
      .then(response => response.json())
      .then(item => {
        let cardContainer = document.querySelector('.card_container')
        cardContainer.innerHTML = ''
        CardElement.all = []

        let findBckGrnd = item.backgrounds[0]
        let setBckGrnd = Background.all.find(background => background.id === findBckGrnd.id)
        Background.setBackground(setBckGrnd)
        
        for(let element of item.element_positions){
          Element.createCardElement(element)
          console.log(element)
        }
      })
  })

  loadDiv.appendChild(p)

}

function  showCardsPanel(){
  let load = document.getElementById('load')
  let cardList = document.querySelector(".card_list_container"); 
  load.addEventListener('click', loadCardsPanel)
  function loadCardsPanel(){
     
      if(cardList.style.display === "") {  
         cardList.style.display ="block";  
      } 
      else { 
        cardList.style.display ="";
        }     
  }
      
}
