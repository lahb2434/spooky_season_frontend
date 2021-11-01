class Card {

    static cardCompiler() {
      let save = document.getElementById('save')
      let cardName = document.querySelector('input') //cardName.value
      
      save.addEventListener('click', getCardElements)

      function getCardElements(){
        let elements = document.querySelectorAll('.element')
        for(let element of elements) {
            let elementObject = CardElement.all.find(elementObject => elementObject.name === element.id)
            console.log(element.id, element.x, element.y, elementObject.yOffset, elementObject.xOffset)
            
        }
      }
    }
}