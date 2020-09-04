export default class GameArea {
    constructor(intervalFunction){
        this.canvas = document.createElement("canvas")
        this.intervalFunction = intervalFunction
    }
    start(intervalFunction){
        this.canvas.setAttribute('id', 'game-area')
        this.canvas.width = 800
        this.canvas.height = 500

        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])

        this.frameNo = 0 // Para contar os quadros por intervalo
        this.interval = setInterval(this.intervalFunction, 20)

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
    stop(){
        clearInterval(this.interval)
    }
}
