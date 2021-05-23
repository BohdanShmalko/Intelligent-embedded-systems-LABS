const findName = (all, name, period, data) => {
    let isFind = false

    for (let i = 0; i < all.length; i++){
        if(all[i].name === name){
            if(data)
                all[i].times.push(data)
                all[i].period = period
            isFind = true
            break
        }
    }
    if(!isFind){
        let times = []
        if(data) times.push(data)
        all.push({
            name,
            times,
            period,
            color: getColor()
        })
    }
}

const basic = (tasks, algorithm) => {
    const result = []
    const statistic = {taskCount: 0, failCount: 0, idle: []}
    const tasksTurn = []
    const tasksCopy = [...tasks]
    const start = new Date().getTime()
    let end = new Date().getTime()
    let deleteCount = 0;
    let idleStart = 0;
    while (tasksCopy.length !== deleteCount || tasksTurn.length !== 0) {
        //algorithm
        switch (algorithm){
            case "FIFO" : {
                for (let i = 0; i < tasksCopy.length; i++) {
                    if (tasksCopy[i] && end - start > tasksCopy[i].start) {
                        const {task, start, deadline, name, period} = tasksCopy[i]
                        tasksTurn.unshift({task, deadline: start + deadline, name, period})
                        tasksCopy[i] = undefined
                        deleteCount++
                    }
                }
                break
            }
            case "EDF" : {
                for (let i = 0; i < tasksCopy.length; i++) {
                    if (tasksCopy[i] && end - start > tasksCopy[i].start) {
                        const {task, start, deadline, name, period} = tasksCopy[i]
                        for (let j = 0; j <= tasksTurn.length; j++){
                            if(!tasksTurn[j] || tasksTurn[j].deadline >= start + deadline){
                                tasksTurn.splice(j, 0, {task, deadline: start + deadline, name, period});
                                break
                            }
                        }
                        tasksCopy[i] = undefined
                        deleteCount++
                    }
                }
                break;
            }
            case "RM" : {
                for (let i = 0; i < tasksCopy.length; i++) {
                    if (tasksCopy[i] && end - start > tasksCopy[i].start) {
                        const {task, start, deadline, name, period} = tasksCopy[i]
                        for (let j = 0; j <= tasksTurn.length; j++){
                            if(!tasksTurn[j] || tasksTurn[j].period >= period){
                                tasksTurn.splice(j, 0, {task, deadline: start + deadline, name, period});
                                break
                            }
                        }
                        tasksCopy[i] = undefined
                        deleteCount++
                    }
                }
                break;
            }
        }
        //idle
        if (tasksTurn.length === 0 && idleStart === 0) {
            idleStart = new Date().getTime()
        } else if (tasksTurn.length !== 0 && idleStart !== 0) {
            statistic.idle.push(new Date().getTime() - idleStart)
            idleStart = 0
        }
        //if deadline is end
        if (tasksTurn[0] && tasksTurn[0].deadline < end - start) {
            findName(result, tasksTurn[0].name, tasksTurn[0].period)
            tasksTurn.shift()
            statistic.failCount++
            statistic.taskCount++
        //calculate result
        } else if (tasksTurn[0]) {
            switch (tasksTurn[0].task) {
                case "correlation" : {
                    const allX = geterateValues(n, N, omega, topA, topFi)
                    const finalDataX = averageOfArrays(allX)
                    const Mx = mathematicalExpectation(finalDataX)
                    dispersion(finalDataX, Mx)
                    correlation(finalDataX, Mx)
                    FastFourier(finalDataX)
                    break
                }
                case "factorization" : {
                    ferma(191835338283)
                    break
                }
                case "neuron" : {
                    neuron([[1, 2], [3, 4], [5, 6], [7, 8]], 4, 0.001, 50, 1000)
                    break
                }
            }
            findName(result, tasksTurn[0].name, tasksTurn[0].period, {
                start: end - start,
                end: new Date().getTime() - start
            })
            tasksTurn.shift()
            statistic.taskCount++
        }

        end = new Date().getTime()
    }
    result.unshift()
    return {result, statistic, time: end - start}
}