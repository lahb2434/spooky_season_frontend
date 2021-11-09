class Card {

    static cardSaveToApi() {
      let save = document.getElementById('save')
      let cardName = document.querySelector('input') //cardName.value
      
      save.addEventListener('mousedown', cardPost)
      save.addEventListener('mouseup', () => {document.querySelector('input').value = ''})
      function cardPost() {
       
        let background = getBackground()
        const bodyData = {card: {name: cardName.value, background: background, card_elements: CardElement.all }  }
        console.log(bodyData)
        fetch("http://127.0.0.1:3000/cards", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(json => {
          getCardLoadout(json)
        })
      }

     function getBackground(){
      let background = document.querySelector('.card_container').style.backgroundImage
      background = background.replace('url("', '').replace('")', '')
      background = Background.all.find(back => back.image_url === background)
      return background.id
     }
    }
}