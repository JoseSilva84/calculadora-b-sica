const inputNumero =document.getElementById('inputNumero');

const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnX = document.getElementById('btnx');

const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btnMenos = document.getElementById('btn-');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btnMais = document.getElementById('btn+');

const btn0 = document.getElementById('btn0');
const btnVirgula = document.getElementById('btnvirgula');
const btnIgual = document.getElementById('btnigual');
const btnZerar = document.getElementById('btnZerar');

const painel = document.getElementById('painel');


let click = [];
let clickAnterior = null;
let clickPosterior = null;
let operacao = null;
let total = [];

const btnZero = btnZerar.addEventListener('click', () => {
    inputNumero.textContent = "";
    click = [];
});

const btnMais2 = btnMais.addEventListener('click', () => {
    inputNumero.textContent = click.concat(" + ").join("");
});

const btnMenos2 = btnMenos.addEventListener('click', () => {
    inputNumero.textContent = click.concat(" - ").join("");
});

const btnMultiplica = btnX.addEventListener('click', () => {
    inputNumero.textContent = click.concat(" x ").join("");
});

const btnVirgula2 = btnVirgula.addEventListener('click', () => {
    inputNumero.textContent = click.concat(",").join("");
});

const btnIgual2 = btnIgual.addEventListener('click', () => {
    inputNumero.textContent = click.concat(" = ").join("");
});

const botoes = {
            btn0,
            btn1,
            btn2,
            btn3,
            btn4,
            btn5,
            btn6,
            btn7,
            btn8,
            btn9,
            btnMais: btnMais2, 
            btnMenos: btnMenos2, 
            btnX: btnMultiplica, 
            btnVirgula: btnVirgula2, 
            btnIgual: btnIgual2,
            btnZerar: btnZero
};

let tela;
let tela2;

for (let i = 0; i <= 9; i++) {
    const botao = document.getElementById(`btn${i}`);
    botao.value = i;
    tela = botao.addEventListener('click', () => {
        
        inputNumero.innerHTML = i;
        click.push(i);

        // inputNumero.innerHTML = 
        // `${i}`;
        
    });
    
};

btnMais.addEventListener('click', () => {
    clickAnterior = Number(click.join(''));
    console.log(clickAnterior);
    operacao = '+';
    click = [];
    inputNumero.innerHTML =
        `${clickAnterior} ${operacao}`;
    inputNumero.style.marginLeft = '300px';
    btnZerar;
    painel.innerHTML = `${clickAnterior} ${operacao}`;
});

btnMenos.addEventListener('click', () => {
    clickAnterior = Number(click.join(''));
    console.log(clickAnterior);
    operacao = '-';
    click = [];
    inputNumero.innerHTML =
        `${clickAnterior} ${operacao}`;
    inputNumero.style.marginLeft = '300px';
    btnZerar;
});

let clique = 0;

btnX.addEventListener('click', () => {
    clique++;
    if (clique === 1) {
        clickAnterior = Number(click.join(''));
        console.log(clickAnterior);
        operacao = '*';
        click = [];
        inputNumero.innerHTML =
            `${clickAnterior} ${operacao}`;
        inputNumero.style.marginLeft = '300px';
        btnZerar;
    } else if (clique === 2) {
        clickAnterior = Number(click.join(''));
        console.log(clickAnterior);
        operacao = '/';
        click = [];
        inputNumero.innerHTML =
            `${clickAnterior} ${operacao}`;
        inputNumero.style.marginLeft = '300px';
        btnZerar;
    }

});

btnIgual.addEventListener('click', () => {
    clickPosterior = Number(click.join(''));
    // console.log(clickPosterior)
    let resultado = 0;
    
    inputNumero.innerHTML =
    `${clickAnterior} ${operacao} ${clickPosterior}`;
    inputNumero.style.marginLeft = '300px';
    painel.innerHTML = `${clickAnterior} ${operacao} ${clickPosterior}`;
    
    if (operacao === '+'){
        resultado = clickAnterior + clickPosterior;
        inputNumero.innerHTML = 
        `${clickAnterior} ${operacao} ${clickPosterior} = ${resultado}`;
        inputNumero.style.marginLeft = "230px";

        painel.innerHTML = `${clickAnterior} ${operacao} ${clickPosterior}  = ${resultado}`;

        click = [];
        clickAnterior = [];
        clickPosterior = [];
        console.log(resultado);
        btnZerar;
    } else if (operacao === '-'){
        resultado = clickAnterior - clickPosterior;
        inputNumero.innerHTML = 
            `${clickAnterior} ${operacao} ${clickPosterior} = ${resultado}`;
        inputNumero.style.marginLeft = "230px";
        click = [];
        clickAnterior = [];
        clickPosterior = [];
        btnZerar;
    } else if (operacao === '*'){
        resultado = clickAnterior * clickPosterior;
        inputNumero.innerHTML = 
            `${clickAnterior} ${operacao} ${clickPosterior} = ${resultado}`;
        inputNumero.style.marginLeft = "230px";
        click = [];
        clickAnterior = [];
        clickPosterior = [];
        btnZerar;
    } else if (operacao === '/') {
        resultado = clickAnterior / clickPosterior;
        inputNumero.innerHTML = 
            `${clickAnterior} ${operacao} ${clickPosterior} = ${resultado}`;
        inputNumero.style.marginLeft = "230px";
        click = [];
        clickAnterior = [];
        clickPosterior = [];
        btnZerar;
    }

});
