const geterateValues = (n, N, omega, topA, topFi) => {
    const allX = []
    let currentOmega, A, Fi
    for(let i = 0; i < n; i++){
        allX[i] = []
        currentOmega = omega/n * (i + 1)
        A = Math.floor(Math.random() * Math.floor(topA))
        Fi = Math.floor(Math.random() * Math.floor(topFi))
            
        for(let j = 0; j < N; j++){
            allX[i][j] = A * Math.sin(currentOmega * j + Fi)
        }
    }

    return allX
}

const averageOfArrays = (arr) => {
    const finalData = []
    let suma
    for(let i = 0; i < arr[0].length; i++){
        suma = 0
        for(let j = 0; j < arr.length; j++){
            suma += arr[j][i]
        }
        finalData.push(suma)
    }
    return finalData
}