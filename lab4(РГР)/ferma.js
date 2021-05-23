const ferma = (n) => {
    if (n % 2 === 0) {
        return;
    }
    let b, a = Math.ceil(Math.sqrt(n));
    if (a ** 2 === n) {
        return;
    }
    let end;
    while (true) {
        end = new Date().getTime();
        let tmp = a ** 2 - n;
        b = Math.ceil(Math.sqrt(tmp));
        if (b ** 2 === tmp)
            break;
        a++;
    }
};