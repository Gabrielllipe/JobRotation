// Calcular sequência fibonacci e checar
function fibonacci(){
    var valor = parseInt(document.getElementById("numero").value);
    var penultimo = 0, ultimo = 1, numero = 0;

    while(numero < valor){
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
    }

    if(valor != numero){
        resposta.innerHTML = "O número " + valor + " não pertence a sequência Finonacci.";
    }
    else{
        resposta.innerHTML = "O número " + valor + " pertence a sequência Finonacci.";
    }
}

// Ler arquivo JSON e calcular
function distribuidora(){
    fetch("dados.json")
        .then(response => response.json())
        .then(data => {
        const faturamentos = data; 
        const mediaMensal = faturamentos.reduce((acc, { valor }) => acc + valor, 0) / faturamentos.length;

        console.log(mediaMensal);

        let menorFaturamento = Number.MAX_VALUE;
        let maiorFaturamento = Number.MIN_VALUE;
        let diasAcimaMedia = 0;
        
        for (let i = 0; i < faturamentos.length; i++) {
            const faturamento = faturamentos[i];
            if (faturamento.valor < menorFaturamento) {
            menorFaturamento = faturamento.valor;
            }
            if (faturamento.valor > maiorFaturamento) {
            maiorFaturamento = faturamento.valor;
            }
            if (faturamento.valor > mediaMensal) {
            diasAcimaMedia++;
            }
        }
        
        menorValor.innerHTML = "Menor valor de faturamento: " + menorFaturamento;
        maiorValor.innerHTML = "Maior valor de faturamento: " + maiorFaturamento.toFixed(2);
        mediaAcima.innerHTML = "Número de dias com faturamento acima da média mensal: " + diasAcimaMedia;
        })
}

// Calcular porcentagem do faturamento
function faturamento(){
    const SP = 67836.43, RJ = 36678.66, MG = 29229.88, ES = 27165.48, Outros = 19849.53;
    const total = SP + RJ + MG + ES + Outros;

    SPpercentual = (SP / total) * 100;
    RJpercentual = (RJ / total) * 100;
    MGpercentual = (MG / total) * 100;
    ESpercentual = (ES / total) * 100;
    OutrosPercentual = (Outros / total) * 100;

    SPvalor.innerHTML = "SP - R$67.836,43 | " + SPpercentual.toFixed(2) + "%";
    RJvalor.innerHTML = "RJ - R$36.678,66 | " + RJpercentual.toFixed(2) + "%";
    MGvalor.innerHTML = "MG - R$29.229,88 | " + MGpercentual.toFixed(2) + "%";
    ESvalor.innerHTML = "ES - R$27.165,48 | " +  ESpercentual.toFixed(2) + "%";
    OutrosValores.innerHTML = "Outros - R$19.849,53 | " + OutrosPercentual.toFixed(2) + "%";
}

//Inverter texto
function inverter(){
    var texto = document.getElementById("texto").value;
    var textoReverso = "";

    for (let i = texto.length - 1; i >= 0; i--){
        textoReverso += texto[i];
    }

    textoInvertido.innerHTML = textoReverso;
}