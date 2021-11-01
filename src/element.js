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
        selection.innerHTML = Element.formatName(this)
        this.selectElement(selection, this)
        return selection
    }
    
    selectElement(selection, source){
    //   let counter = 0;
    //   let cardContainer = document.querySelector('.card_container')
    //   let minus = document.getElementById('decrease')
    //   let plus = document.getElementById('increase')

      selection.addEventListener('click', () => {Element.createCardElement(source)}
        // let img = document.createElement('img')
        // img.src = this.image_url
        // img.style = "width auto; height: 150px;"
        // img.id = `${this.name}_${counter}`
        // img.className = 'element'
        // counter += 1;
        // cardContainer.appendChild(img)
        // let getofst = img.getBoundingClientRect()
        // let ofst = this.solve(getofst.left, getofst.top)
        
        // this.setTranslate(ofst.x,ofst.y,img)
        // let cardElem = new CardElement(img.id, ofst.x, ofst.y)
        // cardElem.moveElement(img)
        // cardElem.resizeCardElement(cardContainer, minus, plus)
       )
   }

   static createCardElement(selection) {
    let counter = 0;
    let cardContainer = document.querySelector('.card_container')
    let minus = document.getElementById('decrease')
    let plus = document.getElementById('increase')
    
    let img = document.createElement('img')
    img.src = selection.image_url
    img.style = "width auto; height: 150px;"
    img.id = `${selection.name}_${counter}`
    img.className = 'element'
    counter += 1;
    cardContainer.appendChild(img)

    let getofst = img.getBoundingClientRect()
    let ofst = Element.solve(getofst.left, getofst.top)
    Element.setTranslate(ofst.x,ofst.y,img) 

    let cardElem = new CardElement(img.id, ofst.x, ofst.y)

    cardElem.moveElement(img)
    cardElem.resizeCardElement(cardContainer, minus, plus)
   }
   
   static formatName = (obj) => (
    obj.name.replaceAll("_", " ").toUpperCase()
  )
   
  static solve (xNum, yNum) {
    let x = (73 - xNum)
    let y = (13 - yNum)
    return {x: x, y: y}
  }

  static setTranslate(xPos, yPos, el) {
    el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
  }




}
Element.all = []