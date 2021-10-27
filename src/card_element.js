
class CardElement {
    constructor(name, Xoffset = 0, Yoffset = 0){
        this.name = name;
        this.Xoffset = Xoffset;
        this.Yoffset = Yoffset;
        CardElement.all.push(this)
    }

  }



  CardElement.all = [];