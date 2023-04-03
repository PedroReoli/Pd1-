const produtosSelecionados = JSON.parse(localStorage.getItem('produtos'));
console.log(produtosSelecionados);
let mensagem = 'Produtos selecionados:\n';

if (produtosSelecionados && produtosSelecionados.length > 0) {
  produtosSelecionados.forEach(produto => {
    mensagem += '- ' + produto.nome + ' (' + produto.preco + ')\n';
  });
} else {
  mensagem = 'Nenhum produto selecionado';
}

console.log(mensagem);

// Seleciona o elemento da tabela onde serão inseridos os produtos
const tabela = document.querySelector('#cart-table');

// Adiciona uma linha para cada produto selecionado
produtosSelecionados.forEach(produto => {
  // Cria uma nova linha na tabela
  const linha = document.createElement('tr');
  
  // Cria uma célula para o nome do produto
  const celulaNome = document.createElement('td');
  celulaNome.textContent = produto.nome;
  
  // Cria uma célula para o preço do produto
  const celulaPreco = document.createElement('td');
  celulaPreco.textContent = produto.preco;
  
  // Adiciona as células à linha
  linha.appendChild(celulaNome);
  linha.appendChild(celulaPreco);
  
  // Adiciona a linha à tabela
  tabela.appendChild(linha);
});
// Calcula o total da compra
const totalCompra = produtosSelecionados.reduce((total, produto) => total + parseFloat(produto.preco.replace(',', '.').substring(3)), 0);

// Seleciona o elemento do total da compra
const totalCompraElemento = document.querySelector('p');

// Exibe o total da compra no elemento selecionado
totalCompraElemento.textContent = `Total da compra: R$ ${totalCompra.toFixed(2).replace('.', ',')}`;
// TESTANDO 
document.querySelector('#clear-cart').addEventListener('click', () => {
  localStorage.removeItem('produtos');
  location.reload();
});
const buyButton = document.querySelector('#buy-cart');
buyButton.addEventListener('click', () => {
  location.href = '/trabalhos/HTML/fin.html';
});