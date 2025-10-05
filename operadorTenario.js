const btnMais = false;
const btnMenos = false;
const btnMultiplicacao = false;
const btnDivisao = true;

let operacao = btnDivisao;

const operador = operacao === btnMais ? "+" 
                : operacao === btnMenos ? "-" 
                : operacao === btnMultiplicacao ? "x" 
                : operacao === btnDivisao ? "/" 
                : " ";

console.log(operador);