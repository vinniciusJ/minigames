import ObjectCanvas from './Components/Object.js'
import GameArea from './Components/GameArea.js'

var character
var obstacle

var gameArea = new GameArea()

function startGame() {
    gameArea.start(updateGameArea)
    
    obstacle = new ObjectCanvas(10, 200, "white", 300, 120, gameArea.context)
    character = new ObjectCanvas(30, 30, "#cecece", 10, 120, gameArea.context) 
}

function updateGameArea() {
    gameArea.clear()

    character.speedX = 0
    character.speedY = 0

    if(gameArea.keys){
        if(gameArea.keys[37]) { character.speedX = -1 }
        if(gameArea.keys[38]) { character.speedY = -1 }
        if(gameArea.keys[39]) { character.speedX = 1 }
        if(gameArea.keys[40]) { character.speedY = 1 }
    }

    obstacle.updateObject()

    character.updatePosition()
    character.updateObject(gameArea)
}


startGame()