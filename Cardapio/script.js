// efeito simples no menu (não é essencial, mas deixei)
var a = document.querySelector("nav");

a.addEventListener('mousemove', mover);

function mover() {
    a.style.background = 'white'; // muda a cor quando passa o mouse
}



// pega todos os botões "Adicionar"
const botoesAdicionar = document.querySelectorAll(".adicionar");

// pega a lista onde vai mostrar os itens
const listaPedido = document.getElementById("lista-pedido");

// pega o total
const totalElemento = document.getElementById('total');

// variável que guarda o total
let total = 0;


// para cada botão adicionar
botoesAdicionar.forEach(function(botao){

    botao.addEventListener('click', function(){

        // pega o produto (pai do botão)
        const produto = botao.parentElement;

        // pega o nome
        const nome = produto.querySelector('h3').textContent;

        // pega o preço e transforma em número
        const preco = parseFloat(
            produto.querySelector('.preco').textContent.replace("R$","")
        );

        // cria item da lista
        const itemPedido = document.createElement("li");

        // texto do item (corrigido)
        itemPedido.textContent = nome + " - R$ " + preco.toFixed(2);
        
        // adiciona na lista
        listaPedido.appendChild(itemPedido);

        // soma no total
        total += preco;

        // atualiza total (corrigido)
        totalElemento.textContent = "Total: R$ " + total.toFixed(2);

    });
});


// botão finalizar pedido
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

botaoFinalizarPedido.addEventListener('click', function(){

    // mostra mensagem
    alert("Pedido finalizado! " + totalElemento.textContent);

    // limpa lista
    listaPedido.innerHTML = '';

    // zera total
    total = 0;

    // atualiza total
    totalElemento.textContent = "Total: R$ " + total.toFixed(2);
});