const elementDatabase = "http://127.0.0.1:3000/elements"


document.addEventListener('DOMContentLoaded', () => {
    console.log('dom is loaded');
    getElements();
})

function getElements() {
    let elementContainer = document.querySelector('.element_container')
    fetch(elementDatabase)
    .then(response => response.json())
    .then(elements => {
      for (const element of elements) {
          console.log(element)
          let newElement = new Element(element)
          elementContainer.appendChild(newElement.renderElementSelection()) 
      } 
    })
}