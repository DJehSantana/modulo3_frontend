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
    item.querySelector(`.qtde`).innerHTML = `${produto.quantidade}`;
    if (!adicionar) {
      if (produto.quantidade == 0) {
        listaProdutos.removeChild(item);
      }
    }
  } else {
    if (adicionar) {
      const newProd = document.createElement('li');
      const quantidade = document.createElement('p');
      quantidade.classList.add('qtde');

      newProd.classList.add('list-group-item', 'fs-5', `item-${produto.id}`);
      newProd.innerHTML = `
    ${produto.nome} - R$ ${(produto.preco).toFixed(2)} 
  `;
      quantidade.innerHTML = `${produto.quantidade}`;
      newProd.appendChild(quantidade);
      listaProdutos.appendChild(newProd);
    }
  }
}

export const adicionarProduto = (produto) => {
  try {
    const pedido = ListaPedidos.recuperarUltimoPedido();
    console.log(pedido);
    if (pedido && produto instanceof Produtos) {
      produto.quantidade++;

      const produtoJaExiste = pedido.existeProdutoLista(pedido, produto.id);
      console.log(produtoJaExiste);
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
      const produtoJaExiste = pedido.existeProdutoLista(pedido, produto.id);
      if (!produtoJaExiste) {
        throw new Error('Erro ao remover produto!');
      }
      console.log(produto.quantidade);
      produto.quantidade--;
      console.log(produto.quantidade);

      montarPedido(true, false, produto);

      pedido.valorTotal -= produto.preco;
      pedido.removerProduto(pedido, produto);

      total.innerText = `R$ ${(pedido.valorTotal).toFixed(2)}`;
      console.log(produto.quantidade);

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

  //remove todos os filhos da lista de produtos
  const children = listaProdutos.children;
  for (let i = children.length - 1; i >= 0; i--) {
    listaProdutos.removeChild(children[i]);
  }

  total.innerHTML = "Valor Total: ";
  taxaEntrega.innerHTML = "Taxa entrega: ";
  sidebar.classList.toggle('active');
  document.body.classList.toggle('menu-activated');
}



