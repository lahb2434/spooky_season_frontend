
class CardElement {
    constructor(name, xOffset, yOffset){
        this.name = name;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        CardElement.all.push(this)
    }

    moveElement(img) {
        let dragItem;
        let active = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let target = this;
        console.log(target)
        //cardDiv.addEventListener('mousedown', (e) => (dragItem = document.getElementById(e.target.id)))
        img.addEventListener("mousedown", dragStart, false);
        img.addEventListener("mouseup", dragEnd, false);
        img.addEventListener("mousemove", drag, false);
        
        function dragStart(e) {
        //   until card div
        //   dragItem = document.getElementById(e.target.id)
        
          img.style.position = ''
        //   target = CardElementsOffsets.all.find(element => element.name === e.target.id)
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
        
        function dragEnd(e) {
          active = false;
        }
    }

  }



  CardElement.all = [];