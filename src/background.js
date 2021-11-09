class Background {
    constructor(backgroundAttributes){
        this.id = backgroundAttributes.id
        this.name = backgroundAttributes.name
        this.image_url = backgroundAttributes.image_url

        Background.all.push(this)
    }

    renderBackgroundSelection(){
        let selection = document.createElement('h3')
        selection.id = this.id
        selection.className = 'background'
        selection.innerHTML = Element.formatName(this)
        this.selectBackground(selection)
        return selection
    }

    selectBackground(selection){
        selection.addEventListener('click', () => { 
           Background.setBackground(this)
        })
    }

    static setBackground(background){
        let cardContainer = document.querySelector('.card_container')
        cardContainer.style.backgroundImage = `url(${background.image_url})`
    }
}

Background.all = []