function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function createRandomPosition(minHeight, maxHeight, minGap, maxGap){
    
    let height = generateRandomNumber(minHeight, maxHeight)
    let gap = generateRandomNumber(minGap, maxGap)

   
    return {height, gap}
}