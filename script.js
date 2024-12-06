const PI = 3.14;
let circunferencia;
let raio;

document.getElementById("meuBotao").onclick = function(e){
    raio = document.getElementById("meuTexto").value;
    raio = Number(raio);
    circunferencia = 2 * PI * raio;
    document.getElementById("meuResultado").textContent = circunferencia + " cm!";
}