import ObjectCanvas from './Components/Object.js'
import GameArea from './Components/GameArea.js'

var character
var gameArea = new GameArea()

function startGame() {

    gameArea.start(updateGameArea)
    
    character = new ObjectCanvas(30, 30, "red", 10, 120, gameArea.context) 
}

/*var gameArea = {
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
*/


function updateGameArea() {
    gameArea.clear()

    character.updatePosition()
    character.updateObject()
}

function moveup() {
    character.speedY -= 1;
}
function movedown() {
    character.speedY += 1;
}
function moveleft() {
    character.speedX -= 1;
} 
function moveright() {
    character.speedX += 1;
}
function stopMove(){
    character.speedX = 0
    character.speedY = 0
}



startGame()