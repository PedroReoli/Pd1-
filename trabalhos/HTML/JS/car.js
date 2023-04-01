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

alert(mensagem);

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

document.querySelector('#buy-cart').addEventListener('click', () => {
  const w = window.open('', '_blank', 'width=800,height=600');
  w.document.write(`
    <html>
      <head>
        <title>Finalizar Compra</title>
        <link rel="stylesheet" href="/trabalhos/CSS/car.css">
      </head>
      <body>
        <h1>Finalizar Compra</h1>
        <form>
          <label for="name">Nome:</label>
          <input type="text" id="name" name="name"><br><br>
          
          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email"><br><br>
          
          <label for="address">Endereço:</label>
          <textarea id="address" name="address"></textarea><br><br>
          
          <label for="card-number">Número do Cartão:</label>
          <input type="text" id="card-number" name="card-number"><br><br>
          
          <label for="card-expiry">Data de Expiração:</label>
          <input type="text" id="card-expiry" name="card-expiry" placeholder="MM/YY"><br><br>
          
          <label for="card-cvv">CVV:</label>
          <input type="text" id="card-cvv" name="card-cvv"><br><br>
          
          <button type="submit">Confirmar Compra</button>
        </form>
      </body>
    </html>
  `);
});