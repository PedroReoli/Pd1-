const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // seu código de validação de formulário aqui

  const email = document.querySelector('#emailaddress').value;
  const senha = document.querySelector('#password').value;

  // adicione os dados do usuário a um objeto e salve no armazenamento local
  const usuario = {
    email: email,
    senha: senha
  };
  
  
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.push(usuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
  alert("Usuário cadastrado com sucesso!");

  // redirecione para a página de login com os dados de usuário armazenados como parâmetros de consulta
  window.location.href = "login.html?email=" + encodeURIComponent(email) + "&senha=" + encodeURIComponent(senha);
});

const cadastrarBtn = document.getElementById("cadastrar");
cadastrarBtn.addEventListener("click", function() {
  form.submit();
});
