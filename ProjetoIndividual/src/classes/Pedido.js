import { Produtos } from "./Produtos.js";

export class Pedido {
  static ultimoId = 0;

  constructor(nomeCliente) {
    this.id = ++Pedido.ultimoId;
    this.nomeCliente = nomeCliente;
    this.produtos = [];
    this.valorTotal = 0;
  }

  // calcularValorTotal() {
  //   let valorTotal = 0;
  //   if (this.produtos.length != 0) {
  //     valorTotal = this.produtos.reduce((acc, prod) => {
  //       return acc + prod.preco
  //     }, 0)
  //   }
  //   return valorTotal;
  // }

  adicionarProduto(produto) {
    try {
      if (produto instanceof Produtos) {
        this.produtos.push(produto);
      } else {
        throw new Error('Produto inválido!');
      }
    } catch (error) {
      console.log(error.message);
    }

  }
  removerProduto(pedido, produto) {
    const index = pedido.produtos.findIndex(p => p.id === produto.id);
    let result;
    index != -1 ? result = pedido.produtos.splice(index, 1) : result = 'produto não encontrado';
  }

  buscarProdutoPorId(pedido, id) {
    const produto = pedido.produtos.find(p => p.id === id);
    if (!produto) {
      return null;
    }
    return produto;
  }

  existeProdutoLista(pedido, id) {
    const index = pedido.produtos.findIndex(p => p.id === id);
    if (index == -1) {
      return false;
    }
    return true;
  }
}

