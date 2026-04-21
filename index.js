function bemVindo(event) {
  event.preventDefault();
  var nome = document.getElementById("username").value;
  var senha = document.getElementById("password").value;
  const botao = document.getElementById("meuButonLog");
  if (!nome || !senha) {
    alert("Por favor, preencha todos os campos.");
    
    return;
  }
  botao.textContent = "Carregando...";
  botao.disabled = true;
  setTimeout(() => {
    botao.textContent = "Entrar";
    botao.disabled = false;

    // Cria ou mostra a div de boas-vindas
    let divBemVindo = document.getElementById("bemVindoDiv");
    if (!divBemVindo) {
      divBemVindo = document.createElement("div");
      divBemVindo.id = "bemVindoDiv";
      divBemVindo.style.marginTop = "20px";
      divBemVindo.style.fontSize = "22px";
      divBemVindo.style.color = "#000000ff";
      divBemVindo.style.width = "2000px";
      divBemVindo.style.textAlign = "center";
      document.getElementById("divLogin").appendChild(divBemVindo);
    }
    divBemVindo.textContent = `Bem-vindo, ${nome}!`;
  setTimeout(() => {
            window.location.href = "https://suporteti.unimedmaranhaodosul.coop.br/public/auth/signin";
        }, 1000);
    }, 2000);

}



function alterarTexto() {
  const divBemVindo = document.getElementById("trocaBemVindo");
  if (divBemVindo) {
    divBemVindo.textContent = "Por favor, faça login";
  }
}
