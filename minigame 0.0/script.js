import ObjectCanvas from './Components/ObjectCanvas.js'
import GameArea from './Components/GameArea.js'

var character, obstacles = []
var gameArea = new GameArea()

function startGame() {
    gameArea.start(updateGameArea)
    
    character = new ObjectCanvas(30, 30, "#cecece", 10, 470, gameArea.context) 
}

function updateGameArea() {

    for (let index = 0; index < obstacles.length; index++) {
        if(character.crashWith(obstacles[index])){
            gameArea.stop()
        }
    }
    gameArea.clear()
    
    gameArea.frameNo++

    if(gameArea.frameNo == 1 || verifyInterval(150)){
        let x = gameArea.canvas.width, y = gameArea.canvas.height - 200

        obstacles.push(new ObjectCanvas(10, 200, 'white', x, y, gameArea.context))
    }

    for(let obstacle of obstacles){
        obstacle.speedX = -1

        obstacle.updatePosition()
        obstacle.updateObject()
    }

    character.speedX = 0
    character.speedY = 0 

    if(gameArea.keys){
        if(gameArea.keys[37]) { character.speedX = -1 }
        if(gameArea.keys[38]) { character.speedY = -1 }
        if(gameArea.keys[39]) { character.speedX = 1 }
        if(gameArea.keys[40]) { character.speedY = 1 }
    }  

    character.updatePosition()
    character.updateObject()
    
}
function verifyInterval(n){
    if((gameArea.frameNo / n) % 1 == 0)
        return true

    return false
}


startGame()