function grupos(rend, N, K) {
    let col = new Array(N);
    let res = []// new Array(N);
    for (let i = 0; i < N; i++) {
        let total = 0;
        if (i < K) {
            col[i] = maxRendimiento(rend, 0, i);
            res[i] = [[0, i]];

        } else {
            let totalParcial = [];
            let totalAnteriorParcial = [];
            for (let j = 0; j < K; j++) {
                let maxR = maxRendimiento(rend, i - j, i) + col[i - j - 1];
                if (maxR > total) {
                    total = maxR;
                    totalParcial = [[i - j, i]];
                    totalAnteriorParcial = res[i - j - 1]
                }

            }
            col[i] = total;

            res[i] = totalAnteriorParcial.concat(totalParcial);
        }
    }
    console.log('distribución: ', res[res.length - 1]);
    console.log(`rendimiento: ${[col[col.length - 1]]}`);
    return res[res.length - 1];
}

function maxRendimiento(rend, indiceinicial, n) {
    if (indiceinicial == n)
        return rend[n];
    let arregloNuevo = rend.slice(indiceinicial, n + 1);
    let maxrendimiento = Math.max(...arregloNuevo) * arregloNuevo.length;
    return maxrendimiento
}

module.exports = { grupos }