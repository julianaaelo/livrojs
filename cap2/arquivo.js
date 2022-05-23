function mostrarOla() {
    //variável nome armazena o valor do input digitado pelo usuário;
    var nome = document.getElementById("nome").value;
    //retorna ao usuário através da tag <p/> com Id resposta;
    document.getElementById("resposta").textContent = "Olá" + nome;
}

//getElementById esse método permite referenciar qualquer elemento da página, através de um id;