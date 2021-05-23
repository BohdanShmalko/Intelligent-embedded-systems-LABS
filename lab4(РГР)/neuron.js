const neuron = (dots, P, sigma, time, iterations) => {
    let Ws = [0, 0];
    let delta = 0;
    const calculateDelta = (dotNum) => {
        delta = P - (Ws[0] * dots[dotNum][0] + Ws[1] * dots[dotNum][1]);
        if (delta <= 0)
            return 'more';
        return 'less';
    };
    const calculateWs = (dotNum) => {
        Ws[0] = Ws[0] + delta * dots[dotNum][0] * sigma;
        Ws[1] = Ws[1] + delta * dots[dotNum][1] * sigma;
    };
    let start = new Date().getTime(), currentIteration = 0;
    while (new Date().getTime() - start < time || currentIteration < iterations) {
        calculateDelta(currentIteration % 4);
        calculateWs(currentIteration % 4);
        currentIteration++;
    }
    return Ws;
};