//Exemplo 1:
const condicão1 = true;
const condicão2 = false;

if (condicão1 && condicão2) {
    console.log("verdadeiro");

} else {
    console.log("falso");

}


// Exemplo 2:
const opcao = 1;
switch (opcao) {
    case 1:
        console.log("opcão 1");
        break;

    case 2:
        console.log("opcão 2");
        break;

    default:
        console.log("opcao padrao");
        break;
}


//Exemplo 3:
function principal(mensagem) {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(mensagem);
}

principal("finalizado!!!");