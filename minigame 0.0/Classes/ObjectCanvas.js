export default class ObjectCanvas {
    constructor(width, height, color, x, y, gameArea, type){
        this.width = width
        this.height = height

        this.score = 0

        this.x = x
        this.y = y
        
        this.speedX = 0
        this.speedY = 0

        this.gravity = 0
        this.gravitySpeed = 0

        this.bounce = 0.6

        this.gameArea = gameArea
        this.context = this.gameArea.context
        this.color = color
        this.type = type || ' '

        if(this.type == 'img' || this.type == 'background'){
            this.image = new Image()
            this.image.src = this.color
        }
    }
    updateObject(){
        if(this.type === 'text'){
            this.context.font = `${this.width} ${this.height}`
            this.context.fillStyle = this.color

            this.context.fillText(this.text, this.x, this.y)
        }   
        else if(this.type === 'img' || this.type == 'background'){
            this.context.drawImage(this.image, this.x, this.y, this.width, this.height)

            if(this.type === 'background'){
                this.context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height)
            }
        }

        else {
            this.context.fillStyle = this.color

            this.context.fillRect(this.x, this.y, this.width, this.height)

               
        } 
    }
    updatePosition(){
        this.gravitySpeed += this.gravity;

        this.x += this.speedX
        this.y += this.speedY + this.gravitySpeed
        
        this.hitBottom()

        if(this.type == 'background'){
            if(this.x == -this.width){
                this.x = 0
            }
        }  
    }
    crashWith(object){
        let thisLeft = this.x, thisRight = this.x + this.width
        let thisTop = this.y, thisBottom = this.y + this.height

        let objectLeft = object.x, objectRight = object.x + object.width
        let objectTop = object.y, objectBottom = object.y + object.height

        let crash = true

        if((thisBottom < objectTop) || (thisTop > objectBottom) || (thisRight < objectLeft) || (thisLeft > objectRight)){
            crash = false
        }
        return crash
    }
    hitBottom(){
        let gameBottom = this.gameArea.canvas.height - this.height
        
        if(this.y > gameBottom){
            this.y = gameBottom
            this.gravitySpeed = -(this.gravitySpeed * this.bounce)
        }
    }

}