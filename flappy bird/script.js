import ObjectCanvas from './Classes/ObjectCanvas.js'
import GameArea from './Classes/GameArea.js'

import { createRandomPosition } from './Modules/utils.js'

var character, score, background, obstacles = []
var gameArea = new GameArea(updateGameArea)

function startGame() { 
    gameArea.start()

    background = new ObjectCanvas(800, 500, './Images/background.jpg', 0, 0, gameArea, 'background') 

    character = new ObjectCanvas(30, 30, './Images/flappy-bird.svg', 10, 225, gameArea, 'img') 

    character.gravity = 0.05

    score = new ObjectCanvas('30px', 'Consolas', 'black', 500, 40, gameArea, 'text')   
}

function updateGameArea() {

    obstacles.forEach(obstacle => {
        if(character.crashWith(obstacle)){
            gameArea.stop()
        }
    })

    gameArea.clear()

    background.speedX = -1

    background.updatePosition()
    background.updateObject()
    
    gameArea.frameNo++

    character.score = Math.floor(gameArea.frameNo / 10)


    if(gameArea.frameNo == 1 || verifyInterval(150)){
        let x = gameArea.canvas.width, y = gameArea.canvas.height

        let { height, gap } = createRandomPosition(30, 200, 50, 200)

        obstacles.push(new ObjectCanvas(10, height, 'black', x, 0, gameArea))

        obstacles.push(new ObjectCanvas(10, (y - height - gap), 'black', x, (height + gap), gameArea))
    }

    score.text = `SCORE: ${character.score}`
    score.updateObject()

    obstacles.forEach(obstacle => {
        obstacle.speedX = -1

        obstacle.updatePosition()
        obstacle.updateObject()

        console.log(obstacle.height)
    })

    character.speedX = 0
    character.speedY = 0 

    if(gameArea.keys){
        if(gameArea.keys[37]) { character.speedX = -1 }
        if(gameArea.keys[38]) { character.speedY = -1 }
        if(gameArea.keys[39]) { character.speedX = 1 }
        if(gameArea.keys[32]) { accelerateCharacter(-0.2) }
    } 
    
    
    character.updatePosition()
    character.updateObject()

    accelerateCharacter(0.05)
}
function verifyInterval(n){
    if((gameArea.frameNo / n) % 1 == 0)
        return true

    return false
}
function accelerateCharacter(speed){
    if(!gameArea.interval){
        gameArea.interval = setInterval(updateGameArea, 20)
    }

    character.gravity = speed
}


startGame()