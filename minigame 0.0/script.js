import ObjectCanvas from './Classes/ObjectCanvas.js'
import GameArea from './Classes/GameArea.js'

import { createRandomPosition } from './Modules/utils.js'

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
        let x = gameArea.canvas.width

        let { height, gap } = createRandomPosition(20, 200, 50, 200)

        obstacles.push(new ObjectCanvas(10, height, 'white', x, 0, gameArea.context))

        obstacles.push(new ObjectCanvas(10, (x - height - gap), 'white', x, (height + gap), gameArea.context))
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