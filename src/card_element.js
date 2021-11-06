
class CardElement {
    

    constructor(name, xOffset, yOffset, xPosition, yPosition, imageSize ){
        this.name = name;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.imageSize = imageSize
        this.xPosition = xPosition
        this.yPosition = yPosition
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

              let elementPosition = e.target.getBoundingClientRect()
              target.xPosition = elementPosition.x 
              target.yPosition = elementPosition.y

              target.imageSize = e.target.height
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
        let elementObject;
        
        cardDiv.addEventListener('click', (e) => {
          elementObject = CardElement.all.find(elementObject => elementObject.name === e.target.id)
          resizeElement = e.target
          })
        
        plus.addEventListener('click', (e) => { 
          resizeElement.style.height = `${parseInt(resizeElement.style.height.replace('px', ''))+10}px`
          elementObject.imageSize = resizeElement.height
        })
    
        minus.addEventListener('click', () =>{
            resizeElement.style.height = `${parseInt(resizeElement.style.height.replace('px', ''))-10}px`
            elementObject.imageSize = resizeElement.height
        })

    }
    

  }

  CardElement.all = [];

  