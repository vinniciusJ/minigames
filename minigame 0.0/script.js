import ObjectCanvas from './Components/Object.js'

var character

function startGame() {
    gameArea.start()
    character = new ObjectCanvas(30, 30, "red", 10, 120, gameArea.context) 
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.setAttribute('id', 'game-area')
        this.context = this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.interval = setInterval(updateGameArea, 20)
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}


function updateGameArea() {
    gameArea.clear()

    character.x++
    character.update()
}

startGame()