const DiscretFourier = x => {
    const N = x.length
    const result = []
    const table = []
    let Freal, Fimage
	for (let i = 0; i < N/2; i++){
		let arg = -2*Math.PI*i/N
		table[i] = [Math.cos(arg), Math.sin(arg)]
		table[i + N/2] = [-table[i][0], -table[i][1]]
	}
    for(let p = 0; p < N; p++){
        Freal = 0, Fimage = 0
        for(let k = 0; k < N; k++){
            Freal += x[k] * table[p*k % N][0]
            Fimage += x[k] * table[p*k % N][1]
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

// const demo = x => {
    // const N = x.length
    // const result = []
    // let Fi
    // for(let p = 0; p < N; p++){
        // Fi = 0
        // for(let k = 0; k < N; k++){
            // Fi += x[k]*Math.cos(2*Math.PI*p*k/N) + x[k]*Math.sin(2*Math.PI*p*k/N)
        // }
        // result.push(Math.abs(Fi))
    // }
    // return result
// }