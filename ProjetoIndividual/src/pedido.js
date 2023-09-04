import { ListaPedidos } from "./classes/ListaPedidos.js";
import { Pedido } from "./classes/Pedido.js";
import { Produtos } from "./classes/Produtos.js";

export const iniciarPedido = (nomeCliente) => {
  const pedido = new Pedido(nomeCliente);
  ListaPedidos.salvarPedido(pedido);
}

export const adicionarNovoProduto = (produto) => {
  try {
    const pedido = ListaPedidos.recuperarUltimoPedido();
    console.log(pedido);
    if (pedido && produto instanceof Produtos) {
      produto.quantidade++;
      const produtoJaExiste = pedido.existeProdutoLista(pedido, produto.id);
      console.log(produtoJaExiste);
      if (produtoJaExiste) {
        const prod = pedido.buscarProdutoPorId(pedido, produto.id);
        console.log(prod);
      }
      pedido.adicionarProduto(produto);
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

    if (pedido && produto instanceof Produtos) {
      const produtoJaExiste = pedido.existeProdutoLista(pedido, produto.id);

      if (produtoJaExiste) {
        const prod = pedido.buscarProdutoPorId(pedido, produto.id);
        produto.quantidade--;
        console.log(prod);
        pedido.removerProduto(pedido, prod);
      }

      return produto.quantidade;

    } else {
      throw new Error('Erro ao adicionar produto!');
    }
  } catch (error) {
    console.log(error.message);
  }
}

export const cancelarPedido = () => {
  const sidebar = document.getElementById('sidebar');
  //remove todos os filhos menos o primeiro e o último
  const children = sidebar.children;
  for (let i = children.length - 2; i > 0; i--) {
    sidebar.removeChild(children[i]);
  }
  sidebar.classList.toggle('active');
  document.body.classList.toggle('menu-activated');
}

