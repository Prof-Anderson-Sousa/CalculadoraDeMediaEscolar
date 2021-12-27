// Selecionando Botão e Área do Resultado //
const button = document.querySelector(".click");
const result1 = document.querySelector(".result1");
const result2 = document.querySelector(".result2");
let resultado = document.querySelector("#output");
const aprovado = document.querySelector(".aprovado");
const reprovado = document.querySelector(".reprovado");


button.addEventListener('click', function() {

    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);
    let nota4 = parseInt(document.getElementById("nota4").value);
    
    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

    let situacao = "";

    if(media >= 7) {
        situacao = "Aprovado";
        console.log(media);
        console.log("Aprovado");

        aprovado.style.display = "block"
        reprovado.style.display = "none"
        result1.textContent = `Sua Media foi: ${media}`;
        result2.textContent = `Resultado: ${situacao}`;
    resultado.appendChild(result1);
    } else {
        situacao = "Reprovado";
        console.log(media);
        console.log("Reprovado")

        aprovado.style.display = "none"
        reprovado.style.display ="block";
        result1.textContent = `Sua Media foi: ${media}`;
        result2.textContent = `Resultado: ${situacao}`;
    resultado.appendChild(result2); 
    } 
});
