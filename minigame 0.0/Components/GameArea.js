export default class GameArea {
    constructor(){
        this.canvas = document.createElement("canvas")
    }
    start(intervalFunction){
        this.canvas.setAttribute('id', 'game-area')
        this.canvas.width = 480
        this.canvas.height = 270

        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])

        this.interval = setInterval(intervalFunction, 20)

        window.addEventListener('keydown', event => {
            this.keys = (this.keys || [])
            this.keys[event.keyCode] = true
        })
        window.addEventListener('keyup', event => {
            this.keys[event.keyCode] = false
        })
    }
    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}
