const generateTasks = (number) => {
    const result = []
    for (let i = 0; i < number; i++){
        const start = Math.floor(Math.random() * number)
        result.push({name: "" + i, start, deadline: start + 3, task: "correlation", period: 10})
    }
    return result

}