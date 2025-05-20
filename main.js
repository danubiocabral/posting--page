// Seletores dos campos de entrada e renderização
const form = document.querySelector("#form-postagem");
const tituloInput = document.querySelector("#titulo");
const conteudoInput = document.querySelector("#conteudo");
const tituloRenderizar = document.querySelector("#renderizador-titulo");
const conteudoRenderizar = document.querySelector("#renderizador-conteudo");

// Evento de envio do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    title: tituloInput.value,
    body: conteudoInput.value,
    userId: 1
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      // Renderizar o post na tela
      tituloRenderizar.innerHTML = data.title;
      conteudoRenderizar.innerHTML = data.body;

      // Limpar os campos
      tituloInput.value = "";
      conteudoInput.value = "";
    })
    .catch((error) => {
      console.error("Erro ao enviar a postagem:", error);
      alert("Erro ao publicar a postagem. Tente novamente.");
    });
});
