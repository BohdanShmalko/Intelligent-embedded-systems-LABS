 const Ferma = (rawN : string, setResult :  React.Dispatch<React.SetStateAction<string>>) => {
    let n = Number(rawN)
    if (isNaN(n)) {
        setResult("incorrect input data")
        return
    }
    if (n % 2 === 0) {
        setResult(`first number = 2 and second number = ${n / 2}`)
        return
    }
    let b, a = Math.ceil(Math.sqrt(n))
    if (a ** 2 === n) {
        setResult(`first number = ${a} and second number = ${a}`)
        return
    }
    while (true) {
        let tmp = a ** 2 - n;
        b = Math.ceil(Math.sqrt(tmp))
        if (b ** 2 === tmp) break
        a++
    }
     setResult(`first number = ${a - b} and second number = ${a + b}`)
}

 export default Ferma