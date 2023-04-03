function validateForm() {
    // Validação do CEP
    var cep1 = document.forms["myForm"]["cep1"].value;
    var cep2 = document.forms["myForm"]["cep2"].value;
    if (isNaN(cep1) || isNaN(cep2) || cep1.length != 5 || cep2.length != 3) {
        document.getElementById("cepError").innerHTML = "CEP inválido";
        return false;
    }
    else 
        alert("CEP válido!Preço do frete : R$100,00")

    // Validação da quantidade de produtos
    var quantity = document.forms["myForm"]["quantity"].value;
    if (isNaN(quantity) || quantity < 1 || quantity > 9) {
        document.getElementById("quantityError").innerHTML = "Quantidade inválida";
        return false;
    }
    
}