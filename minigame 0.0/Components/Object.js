export default class ObjectCanvas {
    constructor(width, height, color, x, y, context){
        this.width = width
        this.height = height

        this.x = x
        this.y = y
        this.speedX = 0
        this.speedY = 0

        this.color = color
        this.context = context
    }
    updateObject(){
        this.context.fillStyle = this.color

        if((this.x + this.width) >= this.context.canvas.width){
            this.x = 0
        }

        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
    updatePosition(){
        this.speedX += this.speedX
        this.speedY += this.speedY
    }

}