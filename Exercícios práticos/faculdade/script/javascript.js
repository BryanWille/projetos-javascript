elNome = document.getElementById("nome");
nomeP = document.getElementById("nomeP");
function nome(){
    nomeP.innerText = `Digite o sálario de ${String(elNome.value)}`;
}