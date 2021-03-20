const Check = (Ws : Array<number>, N : Array<string>, P : number, setResult32N : React.Dispatch<React.SetStateAction<string>>) => {
    let X = Number(N[0]),
        Y = Number(N[1])

    if (isNaN(X) || isNaN(Y)) setResult32N('incorrect input')

    let delta = P - (Ws[0]*X + Ws[1]*Y)
    if (delta <= 0) return setResult32N(`N - more`)
    return setResult32N(`N - less`)
}

export default Check