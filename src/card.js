class Card {

    static cardCompiler() {
      let save = document.getElementById('save')
      let cardName = document.querySelector('input') //cardName.value
      
      save.addEventListener('click', cardPost)

      function cardPost() {
        let background = getBackground()

        const bodyData = {card: {name: cardName.value, background: background, card_elements: CardElement.all }  }
      
        fetch("http://127.0.0.1:3000/cards", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(json => {
          // localStorage.setItem('jwt_token', json.jwt)
          // renderUserProfile()
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