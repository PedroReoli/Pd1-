// Recuperar itens do carrinho do localStorage ou criar um array vazio
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Função para exibir os itens no carrinho
function displayCartItems() {
  const cartTable = document.createElement('table');
  const headerRow = cartTable.insertRow();
  headerRow.innerHTML = '<th>Produto</th><th>Preço</th>';

  let totalPrice = 0;
  cartItems.forEach(item => {
    const itemRow = cartTable.insertRow();
    const nameCell = itemRow.insertCell(0);
    nameCell.textContent = item.name;
    const priceCell = itemRow.insertCell(1);
    priceCell.textContent = item.price;
    totalPrice += Number(item.price.replace(/[^0-9.-]+/g,"")); // converte o preço em um número e adiciona ao total
  });

  document.querySelector('#cart-table tbody').appendChild(cartTable);

  // Atualiza o valor total da compra
  document.querySelector('p').textContent = `Total da compra: R$ ${totalPrice.toFixed(2)}`;
}

displayCartItems();

// Limpar carrinho e atualizar itens do carrinho no localStorage
function clearCart() {
  cartItems = [];
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  displayCartItems();
}

// Adicionar evento de clique no botão de limpar carrinho
const clearButton = document.querySelector('#clear-cart');
clearButton.addEventListener('click', clearCart);

// Adicionar evento de clique no botão de finalizar compra
const buyButton = document.querySelector('#buy-cart');
buyButton.addEventListener('click', function() {
  if (cartItems.length > 0) {
    const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price.replace(/[^0-9.-]+/g,"")), 0);
    const url = `checkout.html?totalPrice=${totalPrice}`;
    window.location.href = url;
  } else {
    alert("Seu carrinho está vazio. Adicione itens para continuar com a compra.");
  }
});
