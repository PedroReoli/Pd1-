let count = 1;
document.getElementById("radio1").checked = true;
setInterval( 
  function(){
    nextImage();
  },6000)
function nextImage(){
  count++;
  if (count>3) {
    count = 0
  }
}
document.getElementById("radio"+count).checked = true;

// Cria um array vazio para armazenar os produtos
const produtos = [];

// Seleciona todos os botões de compra
const botoesCompra = document.querySelectorAll('.buy-button');

// Adiciona um listener de clique em cada botão de compra
botoesCompra.forEach(botao => {
  botao.addEventListener('click', () => {
    // Seleciona o nome e preço do produto correspondente
    const nome = botao.parentNode.querySelector('h3').textContent;
    const preco = botao.parentNode.querySelector('.price').textContent;

    // Adiciona o produto ao array
    produtos.push({ nome, preco });

// Verifica se o produto foi adicionado com sucesso e exibe o alerta
if (produtos.length > 0 && produtos[produtos.length - 1].nome === nome && produtos[produtos.length - 1].preco === preco) {
  console.log("Produto adicionado");
}
// Armazena os produtos no local storage
localStorage.setItem('produtos', JSON.stringify(produtos));

    // Imprime o array de produtos no console para verificar
    console.log(produtos);
  });

});
