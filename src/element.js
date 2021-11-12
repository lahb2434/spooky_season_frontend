class Element {
    constructor(elementAttributes){
        this.id = elementAttributes.id
        this.name = elementAttributes.name
        this.image_url = elementAttributes.image_url

        Element.all.push(this)
    }

    renderElementSelection(){
        let selection = document.createElement('h3')
        selection.id = this.id
        selection.classList = 'element'
        selection.innerHTML = Element.formatName(this)
        this.selectElement(selection, this)
        return selection
    }
    
    selectElement(selection, source){
      selection.addEventListener('click', () => {Element.createCardElement(source)}
       )
   }

   static createCardElement(element) {
     console.log(element)
    let counter = 0;
    let cardContainer = document.querySelector('.card_container')
    let minus = document.getElementById('decrease')
    let plus = document.getElementById('increase')
    let cardElem
    // [{"xPosition":397,"yPosition":148,"element_id":7,"xOffset":384,"yOffset":512,"imageSize":190,"name":"freddy_krueger_0"}
    let img = document.createElement('img')
      img.style.width = "auto" 
      img.className = 'element'
  
    if(element.xOffset){
      img.src = Element.all.find(elem => elem.id === element.element_id).image_url 
      img.style.height = element.imageSize+"px"
      img.id = element.name
      cardContainer.appendChild(img)
      Element.setTranslate(element.xOffset,element.yOffset,img)
      cardElem = new CardElement(img.id, element.xOffset, element.yOffset, element.xPosition, element.yPosition, img.height)
    }else{
      img.src = element.image_url
      img.style.height = "150px"
      img.id = `${element.name}_${counter}`
      counter += 1;
      cardContainer.appendChild(img)
      let imagePosition = img.getBoundingClientRect()
      let offset = Element.solve(imagePosition.left, imagePosition.top)
      Element.setTranslate(offset.x,offset.y,img) 
      cardElem = new CardElement(img.id, offset.x, offset.y, imagePosition.left, imagePosition.top, img.height)
    }

    cardElem.moveElement(img)
    cardElem.resizeCardElement(cardContainer, minus, plus)

   }
   
   static formatName = (obj) => (
    obj.name.replaceAll("_", " ").toUpperCase()
  )
   
  static solve (xNum, yNum) {
    let x = (533 - xNum)
    let y = (226 - yNum)
    return {x: x, y: y}
  }

  static setTranslate(xPos, yPos, el) {
    el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
  }
}
Element.all = []