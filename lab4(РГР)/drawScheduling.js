const sumTime = (arr, isStart) => {
    let sum = 0;
    arr.forEach(timeObj => {
        if(isStart) sum += timeObj.start
        else sum += timeObj.end
    })
    return sum
}

const drawEmptyScheduling = (canvas, ctx, index, tasks, tacksCount, Us, name, statistic, time) => {
    const cnvWidth = canvas.width
    const cnvHeight = canvas.height / tacksCount - 30
    const iH = num => canvas.height - (num + index * 80)
    const wLine = cnvWidth / 25;

    ctx.beginPath()
    ctx.lineWidth = 2;
    ctx.font = '10px serif'

    ctx.moveTo(3, iH(10))
    ctx.lineTo(3, iH(cnvHeight))
    ctx.moveTo(3, iH(10))
    ctx.lineTo(cnvWidth, iH(10))

    for (let i = 0; i < wLine; i++) {
        ctx.moveTo(i * 25 + 3, iH(10))
        ctx.lineTo(i * 25 + 3, iH(7))
        ctx.fillText(i, i * 25, iH(0))
    }


    tasks.forEach(task => {
        const color = task.color
        ctx.fillStyle = color
        task.times.forEach(({start, end}) => {
            (end - start) % 2 !== 0 ?
                ctx.fillRect((start) * 25 + 3, iH(60), (end - start) * 25, 50) :
                ctx.fillRect((start) * 25 + 3, iH(60), (end - start) * 25, 50);
        })

    })
    ctx.fillStyle = "black"
    if (name) {
        ctx.fillText(name, 5, iH(cnvHeight - 10))
        ctx.fillText(`lambda = ${Math.floor(statistic.taskCount / time * 100) / 100}`, 5, iH(cnvHeight - 20))
        ctx.fillText(`%fail = ${Math.floor(statistic.failCount / statistic.taskCount * 10000) / 100}%`, 5, iH(cnvHeight - 30))
        ctx.fillText(`average idle = ${Math.floor(statistic.idle.reduce((a, c) => a + c) / statistic.idle.length * 100) / 100}`, 5, iH(cnvHeight - 40))
        ctx.fillText(`U = ${Us.reduce((a, c) => a + c)}%`, 5, iH(cnvHeight - 50))
    } else{
        ctx.fillText(tasks[0].name, 5, iH(cnvHeight - 10))
        const endSum = sumTime(tasks[0].times, false)
        const startSum = sumTime(tasks[0].times, true)
        const  U = Math.floor((endSum - startSum) / tasks[0].period * 100)
        Us.push(U)
        ctx.fillText(`U = ${U}%`, 5, iH(cnvHeight - 20))
    }


    ctx.stroke()
}

const scheduling = (canvas, ctx, tasks, statistic, time) => {
    ctx.strokeStyle = 'black';
    const Us = []
    tasks.forEach((task, index) => {
        drawEmptyScheduling(canvas, ctx, index, [task], tasks.length, Us);
    })
    drawEmptyScheduling(canvas, ctx, tasks.length, tasks, tasks.length, Us, "scheduling", statistic, time);
}