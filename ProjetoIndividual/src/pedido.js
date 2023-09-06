import { ListaPedidos } from "./classes/ListaPedidos.js";
import { Pedido } from "./classes/Pedido.js";
import { Produtos } from "./classes/Produtos.js";

const sidebar = document.getElementById('sidebar');
const listaProdutos = document.getElementById('listaProdutos');
const cliente = document.getElementById('cliente');
const taxaEntrega = document.getElementById('entrega');
const total = document.getElementById('total');
const botaoConfirmar = document.getElementById('liveToastBtn');

export const iniciarPedido = (nomeCliente) => {
  const pedido = new Pedido(nomeCliente);
  pedido.valorTotal = 5;
  ListaPedidos.salvarPedido(pedido);
  cliente.innerHTML = `${nomeCliente}`;
  taxaEntrega.innerText += ' R$ 5.00';
}

const montarPedido = (jaListado, adicionar, produto) => {
  if (jaListado) {
    const item = document.querySelector(`.item-${produto.id}`);
    item.querySelector(`.qtde`).innerHTML = ` x ${produto.quantidade}`;
    if (!adicionar) {
      if (produto.quantidade == 0) {
        listaProdutos.removeChild(item);
      }
    }
  } else {
    //Caso novo produto, só será chamado o método se for para adicionar, cria um novo elemento   
    const newProd = document.createElement('li');
    const quantidade = document.createElement('span');

    quantidade.classList.add('qtde');
    newProd.classList.add('list-group-item', 'fs-5', 'p-1', `item-${produto.id}`);

    //Montando conteúdo do elemento
    newProd.innerHTML = `
    ${produto.nome} - R$ ${(produto.preco).toFixed(2)} 
    `;
    quantidade.innerHTML = ` x ${produto.quantidade}`;

    //Adicionando elementos
    newProd.appendChild(quantidade);
    listaProdutos.appendChild(newProd);

  }
}

export const adicionarProduto = (produto) => {
  try {
    const pedido = ListaPedidos.recuperarUltimoPedido();
    console.log(pedido);

    if (pedido && produto instanceof Produtos) {
      produto.quantidade++;
      const produtoJaExiste = pedido.existeProdutoLista(produto.id);

      if (produtoJaExiste) {
        montarPedido(true, true, produto);
      } else {
        botaoConfirmar.style = 'display: inline-block;';
        montarPedido(false, true, produto);
      }
      pedido.valorTotal += produto.preco;
      pedido.adicionarProduto(produto);

      total.innerText = `R$ ${(pedido.valorTotal).toFixed(2)}`;

      return produto.quantidade;
    } else {
      throw new Error('Erro ao adicionar produto!');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export const removerProduto = (produto) => {
  try {
    const pedido = ListaPedidos.recuperarUltimoPedido();
    console.log(pedido);
    if (pedido && produto instanceof Produtos) {
      //caso produto não exista no pedido exibe erro no console
      const produtoJaExiste = pedido.existeProdutoLista(produto.id);
      if (!produtoJaExiste) {
        throw new Error('Erro ao remover produto!');
      }

      produto.quantidade--;
      montarPedido(true, false, produto);

      pedido.valorTotal -= produto.preco;
      pedido.removerProduto(produto);

      total.innerText = `R$ ${(pedido.valorTotal).toFixed(2)}`;

      return produto.quantidade;

    } else {
      throw new Error('Erro ao remover produto!');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export const cancelarPedido = () => {

  const pedido = ListaPedidos.recuperarUltimoPedido();
  ListaPedidos.deletarPedido(pedido);

  document.querySelectorAll('.contador').forEach(element => element.classList.remove('active'));
  sidebar.classList.toggle('active');
  document.body.classList.toggle('menu-activated');

  setTimeout(() => {
    location.reload();
  }, 5000);
}



