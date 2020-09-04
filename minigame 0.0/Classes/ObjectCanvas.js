export default class ObjectCanvas {
    constructor(width, height, color, x, y, context, type){
        this.width = width
        this.height = height

        this.x = x
        this.y = y
        
        this.speedX = 0
        this.speedY = 0

        this.color = color
        this.context = context
        this.type = type || ' '
    }
    updateObject(){
        if(this.type === 'text'){
            this.context.font = `${this.width} ${this.height}`
            this.context.fillStyle = this.color

            this.context.fillText(this.text, this.x, this.y)
        }   
        else {
            this.context.fillStyle = this.color

            this.context.fillRect(this.x, this.y, this.width, this.height)
        } 
    }
    updatePosition(){
        this.x += this.speedX
        this.y += this.speedY  
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

}