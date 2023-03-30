document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // evitar que o formulário seja enviado

  // obter as informações de login inseridas pelo usuário
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // obter os usuários salvos no armazenamento local
  var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // adicionar o novo usuário à lista de usuários
  usuarios.push(usuario);

  // salvar a lista de usuários atualizada no armazenamento local
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  // verificar se há um usuário correspondente
  var usuarioCorrespondente = usuarios.find(function(usuario) {
    return usuario.email === email && usuario.senha === senha;
  });

  if (usuarioCorrespondente) {
    // redirecionar para o "index.html" se houver um usuário correspondente
    window.location.href = "index.html";
  } else {
    // exibir uma mensagem de erro se não houver um usuário correspondente
    alert("As informações de login inseridas não correspondem a um usuário existente.");
  }
});
