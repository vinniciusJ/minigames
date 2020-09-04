function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function createRandomPosition(minHeight, maxHeight, minGap, maxGap){
    
    let height = generateRandomNumber(20, 200)
    let gap = generateRandomNumber(50, 200)

    return {height, gap}
}