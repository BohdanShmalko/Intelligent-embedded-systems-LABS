const Perceptron = (dots: Array<Array<number>>, P: number, setResult32W: React.Dispatch<React.SetStateAction<string>>, setResult32V: React.Dispatch<React.SetStateAction<string>>, rowSigma: string, rowTime: string, rowIterations : string) => {
    let Ws : Array<number> = [0,0],
        sigma = Number(rowSigma),
        time = Number(rowTime),
        iterations = Number(rowIterations)

    if(isNaN(time) && isNaN(iterations)) {
        setResult32W('incorrect data (select iterations or time)')
        return Ws
    }

    let delta = 0


    const calculateDelta = (dotNum : number) => {
        delta = P - (Ws[0]*dots[dotNum][0] + Ws[1]*dots[dotNum][1])
        if (delta <= 0) return 'more'
        return 'less'
    }

    const calculateWs = (dotNum : number) => {
        Ws[0] = Ws[0] + delta*dots[dotNum][0]*sigma
        Ws[1] = Ws[1] + delta*dots[dotNum][1]*sigma
    }


    let start = new Date().getTime(),
        currentIteration = 0
    while (new Date().getTime() - start < time || currentIteration < iterations){
        calculateDelta(currentIteration % 4)
        calculateWs(currentIteration % 4)
        currentIteration++
    }
    setResult32W(`W1 = ${Ws[0]} W2 = ${Ws[1]}`)
    setResult32V(`A - ${calculateDelta(0)} B - ${calculateDelta(1)} C - ${calculateDelta(2)} D - ${calculateDelta(3)}`)
    return Ws
}

export default Perceptron