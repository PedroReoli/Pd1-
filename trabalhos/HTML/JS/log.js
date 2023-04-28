const form = document.getElementById("login-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // obter as informações de login inseridas pelo usuário
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // obter os usuários salvos no armazenamento local
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // verificar se há um usuário correspondente
  const usuarioCorrespondente = usuarios.find(function(usuario) {
    return usuario.email === email && usuario.senha === senha;
  });

  if (usuarioCorrespondente) {
    // redirecionar para o "index.html" se houver um usuário correspondente
    window.location.href = "/index.html";
  } else {
    // exibir uma mensagem de erro se não houver um usuário correspondente
    alert("As informações de login inseridas não correspondem a um usuário existente.");
  }
});

// preencher o formulário de login com os dados de usuário armazenados como parâmetros de consulta
const params = new URLSearchParams(window.location.search);
const emailParam = params.get("email");
const senhaParam = params.get("senha");
if (emailParam && senhaParam) {
  document.getElementById("email").value = emailParam;
  document.getElementById("senha").value = senhaParam;
}
