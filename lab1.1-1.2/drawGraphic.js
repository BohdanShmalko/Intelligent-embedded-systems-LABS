const drawEmpty = (canvas, ctx, max, N, OX = 't', OY = 'x', drawNumber = true) => {
    const cnvWidth = canvas.width
    const cnvHeight = canvas.height
    const iH = num => cnvHeight - num
    const empt = cnvWidth/50
    const heigthSticks = 50

    ctx.beginPath()
    ctx.moveTo(0, iH(0))
    ctx.lineTo(0, iH(cnvHeight))
    ctx.moveTo(0, iH(0)/2)
    ctx.lineTo(cnvWidth, iH(0)/2)

    ctx.font = `${cnvWidth/70}px serif`
    
    if(drawNumber){
        const stickW = cnvWidth/N
        for(let i = 0; i < N; i++){
        ctx.moveTo(stickW*i, iH(0)/2 - empt/3)
        ctx.lineTo(stickW*i, iH(0)/2 + empt/3)
        ctx.fillText(`${i}`, stickW*i - empt/2, iH(0)/2 + empt)
    }
    }
    
    const stickH = cnvHeight/heigthSticks
    const stickMax = max/heigthSticks*2
    for(let i = 0; i < heigthSticks; i++){
        ctx.moveTo(0, iH(stickH*i))
        ctx.lineTo(empt/3, iH(stickH*i))
        ctx.fillText(`${Math.floor((i*stickMax-max)*1000)/1000}`, empt/2, iH(stickH*i))
    }

    ctx.stroke()
    ctx.font = `${cnvWidth/50}px serif`
    ctx.fillText(OY, empt*2, iH(cnvHeight) + empt)
    ctx.fillText(OX, cnvWidth - empt, iH(0)/2 - empt) 
}

const drawer = (canvas, ctx, arr, scale = 1, color = 'black') => {
    const cnvWidth = canvas.width
    const cnvHeight = canvas.height
    const iH = num => cnvHeight - num
    const stickW = cnvWidth/arr.length
    ctx.beginPath()
    // ctx.moveTo(0, iH(arr[0][0]) + cnvHeight / 2)
    // for(let i = 0; i < N; i++){
    //     for(let j = 0; j < n; j++){
    //         ctx.lineTo(stickW*i, iH(arr[j][i] + cnvHeight / 2))
    //     }
    // }
    ctx.strokeStyle = color;
    for(let i = 0; i < arr.length; i++){
        i === 0 ? ctx.moveTo(0, iH(arr[i]* scale + cnvHeight / 2)) :
        ctx.lineTo(stickW*i, iH((arr[i]* scale + cnvHeight / 2 )))
    }

    // for(let i = 0; i < arr.length; i++){
    //     ctx.fillRect(stickW*(i % N),iH(arr[i] + cnvHeight / 2),3,3)
    // }

    // ctx.moveTo(0, iH(arr[0] + cnvHeight / 2))
    //     for(let j = 1; j < n; j++){
    //         ctx.lineTo(stickW*j, iH(arr[j*N - 1] + cnvHeight / 2 ))
    //     }
    ctx.stroke()
    ctx.strokeStyle = 'black';
}

const drawLine = (canvas, ctx, value, text = '', color = 'black', scale = 1) => {
    const cnvWidth = canvas.width
    const cnvHeight = canvas.height
    const iH = num => cnvHeight - num

    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.moveTo(0, iH(value* scale + cnvHeight / 2))
    ctx.lineTo(cnvWidth, iH(value* scale + cnvHeight / 2))
    ctx.stroke()
    ctx.strokeStyle = 'black';

    ctx.fillStyle = color
    ctx.font = `${cnvWidth/70}px serif`
    ctx.fillText(text, cnvWidth/3, iH(value* scale + cnvHeight / 2))
    ctx.fillStyle = 'black'
}

const drawText = (canvas, ctx, line, text) => {
    const cnvWidth = canvas.width
    const cnvHeight = canvas.height
    const iH = num => cnvHeight - num

    ctx.font = `${cnvWidth/60}px serif`
    ctx.fillText(text, cnvWidth/3, iH(cnvHeight - line * cnvWidth/60))
}

const drawMax = (canvas, ctx, arr, color = 'black', scale = 1) => {
    const cnvWidth = canvas.width
    const cnvHeight = canvas.height
    const iH = num => cnvHeight - num
    const stickW = cnvWidth/arr.length

    ctx.beginPath()
    ctx.strokeStyle = color;

    let max = arr[0]
    ctx.moveTo(0, iH(arr[0]* scale + cnvHeight / 2))
    for(let i = 1; i < arr.length; i++){
        if(max < arr[i]){
            ctx.lineTo(stickW*i, iH((arr[i]* scale + cnvHeight / 2 )))
            max = arr[i]
        } 
    }

    ctx.stroke()
    ctx.strokeStyle = 'black';
}