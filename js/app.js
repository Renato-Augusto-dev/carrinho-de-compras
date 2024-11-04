let valorTotalDoCarrinho = 0;
let mostrarCarinho = document.querySelector('#lista-produtos');
let valorDoCarinho = document.querySelector('.carrinho__total');


function adicionar(){
    let produtoNoCarinho = document.querySelector('#produto').value;
    let nomeDoProduto = produtoNoCarinho.split('-')[0];
    let valorDoProduto = produtoNoCarinho.split('R$')[1];   
    let quantidadeDeProduto = document.querySelector('#quantidade').value;
    
    let mostrarCarinho = document.querySelector('#lista-produtos');
    let precoDoProduto = valorDoProduto * quantidadeDeProduto;
    valorTotalDoCarrinho = valorTotalDoCarrinho + precoDoProduto;
    

    mostrarCarinho.innerHTML += ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeDeProduto}</span> ${nomeDoProduto} <span class="texto-azul">R$${precoDoProduto}</span>
        </section>`;
    
    valorDoCarinho.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${valorTotalDoCarrinho}</span>`;
   
}
function limpar(){
    mostrarCarinho.innerHTML = '';
    valorDoCarinho.innerHTML = 'Total: <span class="texto-azul" id="valor-total">R$</span>';

}
