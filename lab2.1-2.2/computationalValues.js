const DiscretFourier = x => {
    const N = x.length
    const result = []
    const cache = [[1], [0]]
    let Freal, Fimage
    for(let p = 0; p < N; p++){
        Freal = 0, Fimage = 0
        for(let k = 0; k < N; k++){
            if(!cache[0][p*k % N]){
                cache[0][p*k % N] = Math.cos(2*Math.PI*p*k/N)
                cache[1][p*k % N] = -Math.sin(2*Math.PI*p*k/N)
            }
            Freal += x[k] * cache[0][p*k % N]
            Fimage += x[k] * cache[1][p*k % N]
        }
        
        result.push(Math.sqrt(Freal**2 + Fimage**2))
    }
    return result
}

const FastFourier = x => {
  const N = x.length
  const result = []
  const cache = [[],[]]
  for (let i = 0; i < N/2; i++){
    let arg = -2*Math.PI*i/N
    cache[0][i] = Math.cos(arg)
    cache[1][i] = Math.sin(arg)
    cache[0][i + N/2] = -cache[0][i]
    cache[1][i + N/2] = -cache[1][i]
}
  for(let p = 0; p < N/2; p++){
    let Freal0 = 0, Fimage0 = 0, Freal1 = 0, Fimage1 = 0
    for(let k = 0; k < N/2; k++){
          Freal0 += x[2*k] * cache[0][p*2*k % N]
          Fimage0 += x[2*k] * cache[1][p*2*k % N]
          Freal1 += x[2*k+1] * cache[0][p*(2*k+1) % N]
          Fimage1 += x[2*k+1] * cache[1][p*(2*k+1) % N]
        }
    result[p] = Math.sqrt((Freal0+Freal1)**2 + (Fimage0+Fimage1)**2)
    result[N/2 + p] = Math.sqrt((Freal0-Freal1)**2 + (Fimage0-Fimage1)**2)
}
return result
}