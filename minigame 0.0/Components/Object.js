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

        this.context.fillRect(this.x, this.y, this.width, this.height)
    }
    updatePosition(){
        //console.log(this.speedX)
        this.x += this.speedX
        this.y += this.speedY  
    }
    

}