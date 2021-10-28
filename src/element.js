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
        selection.className = 'element'
        selection.innerHTML = this.formatName()
        this.selectImage(selection)
        return selection
    }
    
    selectImage(selection){
      let counter = 0;
      let cardContainer = document.querySelector('.card_container')
      selection.addEventListener('click', () => { 
        let img = document.createElement('img')
        img.src = this.image_url
        img.style = "width auto; height: 150px;"
        img.id = `${this.name}_${counter}`
        counter += 1;
        cardContainer.appendChild(img)
        let getofst = img.getBoundingClientRect()
        let ofst = this.solve(getofst.left, getofst.top)
       
        this.setTranslate(ofst.x,ofst.y,img)
        let cardElem = new CardElement(img.id, ofst.x, ofst.y) 
        cardElem.moveElement(img)
       })
   }
   
   formatName = () => (
    this.name.replaceAll("_", " ").toUpperCase()
  )
   
  solve (xNum, yNum) {
    let x = (73 - xNum)
    let y = (13 - yNum)
    return {x: x, y: y}
  }

  setTranslate(xPos, yPos, el) {
    el.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
  }

}
Element.all = []