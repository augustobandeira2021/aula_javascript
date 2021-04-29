
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
window.open("https://globo.com"); //nova janela
//window.location.href = "https://globo.com"; mesma janela
}

function trocar(elemento){
    //document.getElementById("mousenovo").innerHTML = "<b>Trocar 1</b>";
    elemento.innerHTML = "Trocar 1";
}

function voltar(elemento){
    //document.getElementById("mousenovo").innerHTML = "<b>Voltar 1</b>";
    elemento.innerHTML = "Voltar 1";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function validarIdade(idade){
    return idade >= 18 ? true : false;;
}

var idade = prompt("Qual sua idade?");

console.log(validarIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getDate());
*/
/*
var count = 0;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count < 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if(idade >= 18)
{
    alert("maior de idade");
}
else{
    alert("menor de idade");
};
*/


/*var nome = "Augusto Bandeira";
var n1 = 33;
var n2 = 10
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos");
//alert(idade+idade2);
console.log(nome);
console.log(n1+n2);
console.log(n1*n2);
console.log(frase.replace("Japão", "EUA"));*/

/*
var lista = ["maça", "uva", "limao"];
lista.push("mamao");
lista.pop("uva");

console.log(lista[0]]);
console.log(lista.join(" - "));*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);
*/
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/