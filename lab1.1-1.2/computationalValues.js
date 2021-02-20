const mathematicalExpectation = arr => {
    let sum = 0
    arr.forEach(element => sum += element);
    return sum / arr.length
}

const dispersion = (arr, Mx) => {
    if(!Mx) Mx = mathematicalExpectation(arr)
    let sum = 0
    arr.forEach(elm => sum += (Mx - elm) ** 2)
    return sum / (arr.length - 1)
}

//автокореляція чи кореляція в залежності від кількості переданих параметрів
const correlation = (arrX, Mx, arrY = null, My = null) => {
    if(!arrY && !My){
        arrY = arrX
        My = Mx
    }
    if(!Mx) Mx = mathematicalExpectation(arrX)
    if(!My) My = mathematicalExpectation(arrY)
    let sum
    const result = []
    for(let i = 0; i < arrX.length/2; i++){
        sum = 0
        for(let j = 0; j < arrX.length/2; j++){
            sum += (arrX[i] - Mx)*(arrY[i+j] - My)
            
        }
        result.push(sum / (arrX.length/2 - 1))
    }
    return result
}
