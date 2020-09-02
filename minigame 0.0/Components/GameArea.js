export default class GameArea {
    constructor(){
        this.canvas = document.createElement("canvas")
    }
    start(intervalFunction){
        this.canvas.setAttribute('id', 'game-area')
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])

        this.interval = setInterval(intervalFunction, 20)
    }
    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}