var totalEntrada = 0; 
var totalSaida = 0;
var botao = document.getElementById("botao"); /*conecta o html com o js*/

botao.addEventListener("click", function() {
/*pega a informação do usuário, input*/

    var descricao = document.getElementById("descricao").value;
    var valor = Number(document.getElementById("valor").value);
    var tipo = document.getElementById("tipo").value;
    var lista = document.getElementById("lista");
   /*historico de movimentação da pagina*/
    lista.innerHTML += descricao + " - R$ " + valor + " - " + tipo + "<br>";

    if (tipo === "entrada") {
        totalEntrada += valor;
    } else {
        totalSaida += valor;
    }
document.getElementById("entradaTotal").innerText =
"R$ " + totalEntrada; /* atualiza o valor de  entrada*/

document.getElementById("saidaTotal").innerText =
"R$ " + totalSaida; /*saida*/

document.getElementById("saldo").innerText =
"R$ " + (totalEntrada - totalSaida);
});
