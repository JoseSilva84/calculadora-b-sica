let clickPosterior = [
                        [7, 78, 9], 
                        [9, 7, 12]
];


const clickPosterior2 = clickPosterior.flat().reduce((acc, curr) => acc + curr, 0);
console.log(clickPosterior2);

const total1 = clickPosterior[0].reduce((acc, curr) => acc + curr, 0);
const total2 = clickPosterior[1].reduce((acc, curr) => acc + curr, 0);

const clickTotal = () => {
    for (item in clickPosterior) {
        return clickPosterior[item].reduce((acc, curr) => acc + curr, 0);
    }
};

const clickTotal2 = () => {
    for (let i = 0; i < clickPosterior.length; i++) {
        let somaTotal = 0;
        somaTotal += clickPosterior[i].reduce((acc, curr) => acc + curr, 0);
        return somaTotal;
    }
};

// console.log(total1 + total2);
// console.log(clickTotal());
// console.log(clickTotal2());
// console.log(clickPosterior.length);
