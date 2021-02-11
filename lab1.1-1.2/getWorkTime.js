const getWorkTime = (iterations, callback) => {
    const times = []
    let start, end
    for(let i = 1; i <= iterations; i++){
        start = new Date().getTime()
        callback(i)
        end = new Date().getTime()
        times.push(end - start)
    }
    return times
}