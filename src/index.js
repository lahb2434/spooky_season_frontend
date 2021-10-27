const elementDatabase = "http://127.0.0.1:3000/elements"
let options;


document.addEventListener('DOMContentLoaded', () => {
  console.log('dom is loaded');
  getElements()
  
})

function getElements() {
  let elementContainer = document.querySelector('.element_container')
  fetch(elementDatabase)
  .then(response => response.json())
  .then(elements => {
    for (const element of elements) {
      let newElement = new Element(element)
      elementContainer.appendChild(newElement.renderElementSelection()) 
    } 
  })
}

options = document.getElementsByClassName('elements')

// function selectElements(options) {
//   for(let option of options){
//       option.addEventListener('click',  (event) => { 
//         let imgSource = Element.all.find(element => element.id === ~~event.target.id)
//         console.log(imgSource)
  // let img = document.createElement('img')
  // img.src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c3db.png"  
  // img.style = "width auto; height: 150px;"
  // img.id = `${name}_${counter}`
  
  
  // cardDiv.appendChild(img)
  // let getofst = img.getBoundingClientRect()
  // let ofst = solve(getofst.left, getofst.top)
  // setTranslate(ofst.x,ofst.y,img)
  // let cardElem = new CardElementsOffsets(img.id)
  // cardElem.Xoffset = ofst.x
  // cardElem.Yoffset = ofst.y
//     })
//   } 


console.log(options)