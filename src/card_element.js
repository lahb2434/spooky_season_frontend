
class CardElement {
    

    constructor(name, xOffset, yOffset, imageSize, active = false){
        this.name = name;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.imageSize = imageSize
        this.active = active
        CardElement.all.push(this)
    }

    moveElement(img) {
       
        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let target = this;
        

        img.addEventListener("mousedown", dragStart, false);
        img.addEventListener("mouseup", dragEnd, false);
        img.addEventListener("mousemove", drag, false);
        
        function dragStart(e) {
        
          this.style.position = ''
          active = true;
          initialX = e.clientX - target.xOffset;
          initialY = e.clientY - target.yOffset;
   
        }
        
        function drag(e) {
            if (active) {
              e.preventDefault();
              
              currentX = e.clientX - initialX;
              currentY = e.clientY - initialY;
            
    
              target.xOffset = currentX;
              target.yOffset = currentY;
    
              setTranslate(currentX, currentY, this);
          }
        }
   
        function setTranslate(xPos, yPos, element) {
          element.style.transform = "translate(" + xPos + "px, " + yPos + "px)";
        }
        
        function dragEnd() {
          active = false;
        }
    }
    
    resizeCardElement(container, less, more){
        let resizeElement;
        let cardDiv = container
        let minus = less
        let plus = more
        console.log(plus)
        console.log(minus)
        console.log(cardDiv)
        cardDiv.addEventListener('click', (e) => {
            resizeElement = e.target
          })
        
        plus.addEventListener('click', (e) => { resizeElement.style.height = `${parseInt(resizeElement.style.height.replace('px', ''))+10}px`})
    
        minus.addEventListener('click', () =>{
            resizeElement.style.height = `${parseInt(resizeElement.style.height.replace('px', ''))-10}px`
        })
        
    }
    

  }

  CardElement.all = [];

  