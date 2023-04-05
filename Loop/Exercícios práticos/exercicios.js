/*1.	Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e 
continue pedindo até que o usuário informe um valor válido.


function pedenota(){
    let numero = parseFloat(prompt(`Qual foi a sua nota?`))

    if(numero > 10){
        alert(`A nota que informou é invalida!`)
        pedenota()
    } else{
        alert(`Sua nota foi ${numero}`)
    }
}

pedenota()

*/


/*2.	Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações. */

/*
function login(){    
    let usuario = prompt(`Qual é seu úsuário ?`)
    let senha = prompt(`Qual é sua senha?`)
    */
/*
    if(usuario === senha){
        alert(`Usuário e senha não pode ser igual!`)
        login()
        
    } else{
        alert(`Bem vinda ao sitema Eleve Digital`)
    }
    */
/*
while(usuario === senha){
 alert(`Usuário e senha não pode ser igual!`)
 usuario = prompt(`Qual é seu úsuário ?`)
 senha = prompt(`Qual é sua senha?`)
}
}

login()
*/

/*3.	Faça um programa que leia e valide as seguintes informações:
a.	Nome: maior que 3 caracteres;
b.	Idade: entre 0 e 150;
c.	Salário: maior que zero;
d.	Sexo: 'f' ou 'm';
e.	Estado Civil: 's', 'c', 'v', 'd';
Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let nome = prompt(`Qual o seu nome?`)
let idade = parseInt(prompt(`Qual a sua idade?`))
let salario = parseFloat(prompt(`Qual o seu salário??`))
let sexo = prompt(`Qual o seu sexo? Digite "m" para mascolino ou "f" feminino!`)


if(nome.length > 3){
    alert(`Nome Validado`)
}

if(idade <= 150){
    alert(`Idade Validado`)
}

if(salario >= 0 ){
    alert(`Salario Validado`)
}
if(sexo == "m" || sexo == "f"){
    alert(`Sexo Validado`)
}
*/

/* 4.	Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e escreva 
o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de 
crescimento. 

let populaçãoA = 80000
let taxaA = 3/100

let populaçãoB = 200000
let taxaB = 1.5/100


let ano = 1

while(populaçãoA < populaçãoB) {
    
    populaçãoA += populaçãoA*taxaA
    populaçãoB += populaçãoB*taxaB   

    ano++

    console.log(`${populaçãoA} , ${populaçãoB} , ${ano}`)
}
*/


/* 5.	Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais.
 Valide a entrada e permita repetir a operação. */
/*
 let popA = 0
 function validaPopulacaoA() {
    let populaçãoA = prompt(`Qual a população do pais A?`)

    if (populaçãoA <= 0) {
        alert(`Numero invalido`)
        validaPopulacaoA()
    } else {
        alert(`Número válido!`)
    }
    popA = populaçãoA
}
let popB = 0
function validaPopulacaoB() {
    let populaçãoB = prompt(`Qual a população do pais B?`)

    if (populaçãoB <= 0) {
        alert(`Numero invalido`)
        validaPopulacaoB()
    } else {
        alert(`Número válido!`)
    }
    popB = populaçãoB
}


validaPopulacaoA()
validaPopulacaoB()

console.log(popA)
console.log(popB)


let taxaA = 3 / 100
let taxaB = 1.5 / 100
let ano = 0

while (popA < popB) {

    popA += popA * taxaA
    popB += popB * taxaB

    ano++

    console.log(`${popA} , ${popB} , ${ano}`)
}
*/

/* 6.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. Depois modifique o programa para que 
ele mostre os números um ao lado do outro.
for(let i = 0 ; i <= 20 ; i++){
    document.write(`${i}`)
    console.log(i)
}

for(let i = 0 ; i <= 20 ; i++){
    document.write(`${i} <br>`)
    
}
*/

/*7.	Faça um programa que leia 5 números e informe o maior número.

let numeros = []

for (let i = 1; numeros.length < 5; i++) {
    let a = prompt(`Informe o ${i}º número!`)
    numeros.push(a)
}

numeros.sort()
console.log(numeros)
console.log(numeros[numeros.length-1])
*/

/*8.	Faça um programa que leia 5 números e informe a soma e a média dos números. 

let numeros = []
let soma = 0
let med = 0 

for (let i = 1; numeros.length < 5; i++) {
    let a = parseInt(prompt(`Informe o ${i}º número!`))
    numeros.push(a)
    soma = soma + a
    
}

med = soma / 5

console.log(soma)
console.log(med)
*/

/*9.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

for (let i = 1; i <= 50; i++) {

    if (i%2 != 0 ) {
        document.write(`${i} <br>`)
    }


}

*/

/*10.Faça um programa que receba dois números inteiros e gere os números inteiros que estão no intervalo compreendido por eles.*/


