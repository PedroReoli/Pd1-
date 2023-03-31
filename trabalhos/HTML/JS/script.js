let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 5000)

function nextImage(){
  count++;
  if (count>3){
    count = 1;
  }

  document.getElementById("radio"+count).checked = true;

}






const buyButtons = document.querySelectorAll(".buy-button"); // seleciona todos os botões de compra
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // recupera os itens do carrinho salvos no localStorage, ou cria um array vazio

// define a função que será executada quando o botão "Comprar" for clicado
function addToCart(event) {
  const product = event.target.parentElement; // seleciona o elemento pai do botão "Comprar", que é o item da lista de produtos
  const productName = product.querySelector("h3").textContent; // seleciona o nome do produto
  const productPrice = product.querySelector(".price").textContent; // seleciona o preço do produto

  const cartItem = { // cria um objeto com os dados do produto
    name: productName,
    price: productPrice
  };

  cartItems.push(cartItem); // adiciona o objeto à lista de itens do carrinho

  // salva os itens do carrinho no localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  alert("Item adicionado ao carrinho:", cartItem);

  // Exibe os itens no carrinho
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

  //atualiza o valor total da compra 
  document.querySelector('p').textContent = `Total da compra: R$ ${totalPrice.toFixed(2)}`;
}

// adiciona o evento de clique a cada botão de compra
buyButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// exibe os itens no carrinho
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

//atualiza o valor total da compra 
document.querySelector('p').textContent = `Total da compra: R$ ${totalPrice.toFixed(2)}`;

