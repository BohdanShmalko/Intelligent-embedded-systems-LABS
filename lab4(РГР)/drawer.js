const draw = (array) => {
    let result = "x;y\n"
    for (let i = 0; i < array.length; i++)
        result += `${array[i][0]};${array[i][1]}\n`
    return result
}

