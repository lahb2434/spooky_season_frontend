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
        selection.innerHTML = this.formatName()
        return selection
    }

    formatName = () => (
        this.name.replaceAll("_", " ").toUpperCase()
    )
}
Element.all = []