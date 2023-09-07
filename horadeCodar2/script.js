//Exercício 5 

function media(){

// Programa para calcular a média de 6 valores informados pelo usuário

// Solicita ao usuário que informe os valores
let valores = [];
for (let i = 0; i < 6; i++) {
  valores[i] = Number.parseFloat(prompt(`Informe o valor ${i + 1}: `));
}

// Calcula a soma dos valores
let soma = 0;
for (let i = 0; i < valores.length; i++) {
  soma += valores[i];
}

// Exibe a soma dos valores
document.write(`<h4>Somando: ${valores.join(', ')}.</h4> <h4>Resulta em ${soma}.</h4>`);

// Calcula a média
let media = soma / valores.length;

// Exibe a média
document.write(`<h4>A média entre os números é: ${media.toFixed(1).replace('.',',')}</h4>`);
}

//Exercício 6

function calcularex6() {
    //6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes)
    // Primeiro, criamos um array vazio chamado 'valores' para armazenar os números que o usuário irá informar

  let valores = [];
  // Usamos um loop 'for' para solicitar ao usuário que informe 4 números
  for (let contador = 0; contador < 4; contador++) {
    // Cada número é convertido para um número inteiro usando 'Number.parseInt' e armazenado no array 'valores'
    valores[contador] = Number.parseInt(prompt(`Informe o valor ${contador + 1}`));
  }

  // O primeiro número é simplesmente o primeiro elemento do array
  let primeiroValor = valores[0];

  // O último número é o último elemento do array
  let ultimoValor = valores[valores.length - 1];

  // Para encontrar o maior número, usamos a função 'Math.max' juntamente com o operador de espalhamento ('...') para passar todos os elementos do array como argumentos
  let maiorValor = Math.max(...valores);

  // Finalmente, exibimos o primeiro número, o último número e o maior número
  window.alert(`O primeiro número é ${primeiroValor}\nO último valor é ${ultimoValor}\nE o maior de todos os números é ${maiorValor}`);

}

// Exercício 7
function somaInferiores() {
  //7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. 
    let numeros = [];
    
    for ( let i = 0; i < 6; i++) {
      numeros[i] = Number.parseInt(prompt(`Informe o número ${i + 1}`));
    }
    let soma = 0;
    for( let i = 0; i < numeros.length; i++){
      if (numeros[i] < 72) {
      soma += numeros[i];  
    }
  }
  window.alert(`Os valores que o usuário informou foram: ${numeros.join(', ')}`);
  window.alert(`O valor final da soma dos números é: ${soma}!`);
}

// Exercício 8

//8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente"

function calculeex8 () {
  let numeroN = [];
  for ( let i = 0; i < 4; i++) {
    numeroN[i] = Number.parseFloat(prompt(`Digite o número ${i + 1}`));
  }
  soma = 0;
  for(let i = 0; i < numeroN.length; i++) {
    if (numeroN[i]> 0 && numeroN[i] < 10) {
      soma += numeroN[i];
    }
  }
    let media = soma/numeroN.length;
    if (media > 5) {
      window.alert(`Sua média foi de: ${media.toFixed(1)}\nVocê passou no teste!`);
    } else {
      window.alert(`Sua média foi de: ${media.toFixed(1)}\nTente Novamente.`);
  }
}

// Exercício 9

//9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).

function eleicao() {
  const anoAtual = 2023;
  let anoNasc = Number.parseInt(prompt(`Digite o seu ano de Nascimento para saber se você pode votar: `));
  if(anoNasc > anoAtual) {
    window.alert(`Ano inválido, tente novamente!`);
  } else {
    let idade = anoAtual - anoNasc;
    if ( idade >= 16 ) {
        window.alert(`Você tem ${idade} anos, pode votar!`);
    } else {
      window.alert(`Você tem ${idade} anos, não poderá votar!`);
    }
  }
}

// Exercício 10

//10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

function peso() { 
    let sexo = prompt(`Informe 1 ou 2 para indicar seu sexo: \n1.Mulher \n2.Homem`);
  if (sexo == 1) {
    window.alert(`O cálculo para o seu peso ideal é da seguinte forma: (62.1 * h (h é Altura)) - 44.7`);
    let h = Number.parseFloat(prompt(`Informe a sua Altura: `));
    let peso = (62.1 * h) - 44.7;
    window.alert(`(62.1 * ${h}) - 44.7 = ${peso}\nSeu peso ideal é: ${peso.toFixed(1)}`);
  } else if (sexo == 2){
    window.alert(`O cálculo para o seu peso ideal é da seguinte forma: (72.7 * h (h é Altura)) - 58`);
    let h = Number.parseFloat(prompt(`Informe a sua Altura: `));
    let peso = (72.7 * h) - 58;
    window.alert(`(72.7 * ${h}) - 58 = ${peso}\nSeu peso ideal é: ${peso.toFixed(1)}`);
  } else {
    window.alert(`Por favor, escolha uma opção entre 1 e 2!`);
  }
}

//Exercício 11

//11. Uma micro calculadora. Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação). O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações

function microCalc(){
  let calc = Number.parseInt(prompt(`Micro-Calculadora\n\nEscolha a operação matemática que deseja utilizar de acordo com os números 1(+), 2(-), 3(*) e 4(/) : `));
  let num1;
  let num2;

  switch(calc) {
    case 1:
      window.alert(`Adição`);
   num1 = Number.parseFloat(prompt(`Informe o número 1: `));
    num2 = Number.parseFloat(prompt(`Informe o número 2: `));
   let soma = num1 + num2;
    window.alert(`${num1} + ${num2} = ${soma} `);
    break;
    case 2:
      window.alert(`Subtração`);
     num1 = Number.parseFloat(prompt(`Informe o número 1: `));
     num2 = Number.parseFloat(prompt(`Informe o número 2: `));
   let sub = num1 - num2;
    window.alert(`${num1} - ${num2} = ${sub} `);
    break;
    case 3:
      window.alert(`Multiplicação`);
     num1 = Number.parseFloat(prompt(`Informe o número 1: `));
     num2 = Number.parseFloat(prompt(`Informe o número 2: `));
   let mult = num1 * num2;
    window.alert(`${num1} * ${num2} = ${mult} `);
    break;
    case 4:
      window.alert(`Divisão`);
     num1 = Number.parseFloat(prompt(`Informe o número 1: `));
     num2 = Number.parseFloat(prompt(`Informe o número 2: `));
     if (num2 == 0) {
      window.alert(`Impossível fazer divisão por 0.`);
     } else {
   let divi = num1 / num2;
    window.alert(`${num1} / ${num2} = ${divi} `);
     }
    break;
    default:
      window.alert(`Por favor, escolha um número de 1 à 4!`);
      break;
  }
}