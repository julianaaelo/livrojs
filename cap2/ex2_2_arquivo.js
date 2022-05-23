function converterDuracao() {
    var nomeDoFilme = document.getElementById("inTitulo").value;
    var duracao = document.getElementById("inDuracao").value;
    document.getElementById("outTitulo").textContent = nomeDoFilme;
    document.getElementById("outDuracao").textContent = Math.floor(duracao/60) + ' Hora(s) e '+ duracao % 60 + ' minuto(s) ';
};

// função Math.floor() => Arredonda o valor para baixo;