type resultType = {
    x1 : number
    x2 : number
    x3 : number
    x4 : number
    fitness ?: number
    time ?: number
}

type genType = {
    gen : Array<number>
    fitness : number
    likelihood : number
}

type populationType = Array<genType>

const geneticAlgoritm = (a: number, b: number, c: number, d: number, y: number) => {
    let result : resultType = {
        x1 : 0,
        x2 : 0,
        x3 : 0,
        x4 : 0,
        time : 0
    }
    const MAX_POPULATION = 300
    const ITERATIONS = 200
    let population : populationType = []


    const calculateFitness = () => {
        for(let i = 0; i < MAX_POPULATION; i++) {
            let total = a * population[i].gen[0] + b * population[i].gen[1] + c * population[i].gen[2] + d * population[i].gen[3];
            population[i].fitness = Math.abs(total - y)
            if (population[i].fitness === 0) {
                return i;
            }
        }
        return -1;
    }

    const chooseBest = () => {
        let best = Infinity
        let who = 0;
        for(let i = 0; i < MAX_POPULATION; i++) {
            if(population[i].fitness < best) {
                best = population[i].fitness
                who = i
            }
        }
        return who
    }

    const calculateLikelihoods = () => {
        let total = 0
        for(let i = 0; i < MAX_POPULATION; i++) {
            total += 1/population[i].fitness
        }
        for(let i = 0; i < MAX_POPULATION; i++) {
            population[i].likelihood = (1/population[i].fitness)/total
        }
    }

    const chooseParent = () => {
        const allChances = []
        for(let i = 0; i < MAX_POPULATION; i++) {
            allChances[i] = Math.floor(Math.random() * population[i].fitness * 1000)
        }
        let best = -Infinity
        let who = 0;
        for(let i = 0; i < MAX_POPULATION; i++) {
            if(allChances[i] > best) {
                best = allChances[i]
                who = i
            }
        }
        return who
    }

    const generateChildren = () => {
        const populationChildren : populationType = []

        for(let i = 0; i < MAX_POPULATION; i++) {
            let dad = chooseParent()
            let mum = chooseParent()
            populationChildren[i] = {gen : [], fitness : Infinity, likelihood : 0}
            populationChildren[i].gen = [
                population[dad].gen[0],
                population[dad].gen[1],
                population[mum].gen[2],
                population[mum].gen[3],
            ]
        }

        population = populationChildren
    }

    let start = new Date().getTime()
    let fitness

    for(let i = 0; i < MAX_POPULATION; i++) {
        population[i] = {gen : [], fitness : Infinity, likelihood : 0}
        for (let j = 0; j < 4; j++) {
            population[i].gen[j] = Math.floor(Math.random() * y)
        }
    }

    fitness = calculateFitness()
    console.log(fitness)
    if (fitness !== -1) {
        let end = new Date().getTime()
        result.x1 = population[fitness].gen[0]
        result.x2 = population[fitness].gen[1]
        result.x3 = population[fitness].gen[2]
        result.x4 = population[fitness].gen[3]
        result.time = end - start
        return result;
    }

    let iterations = 0
    while (iterations < ITERATIONS) {
        calculateLikelihoods()
        generateChildren()
        fitness = calculateFitness()
        if (fitness !== -1) {
            let end = new Date().getTime()
            result.x1 = population[fitness].gen[0]
            result.x2 = population[fitness].gen[1]
            result.x3 = population[fitness].gen[2]
            result.x4 = population[fitness].gen[3]
            result.time = end - start
            return result;
        };
        iterations++;
    }

    let best = chooseBest()
    let end = new Date().getTime()
    result.x1 = population[best].gen[0]
    result.x2 = population[best].gen[1]
    result.x3 = population[best].gen[2]
    result.x4 = population[best].gen[3]
    result.fitness = population[best].fitness
    result.time = end - start
    return result;
}

const Genetic = (rawA: string, rawB: string, rawC: string, rawD: string, rawY: string, setResult :  React.Dispatch<React.SetStateAction<string>>) => {
    const a = Number(rawA),
        b = Number(rawB),
        c = Number(rawC),
        d = Number(rawD),
        y = Number(rawY)
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(y)) {
        setResult("incorrect input data")
        return
    }

    const res = geneticAlgoritm(a,b,c,d,y)

    if (res.fitness !== 0 && res.fitness){
        setResult(`not accurate result : x1 = ${res.x1}, x2 = ${res.x2}, x3 = ${res.x3}, x4 = ${res.x4}, time = ${res.time}ms, fitness = ${res.fitness}`)
        return
    }
    setResult(`exact result : x1 = ${res.x1}, x2 = ${res.x2}, x3 = ${res.x3}, x4 = ${res.x4}, time = ${res.time}ms`)
}

export default Genetic