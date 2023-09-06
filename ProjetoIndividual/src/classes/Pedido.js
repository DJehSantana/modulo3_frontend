import { Produtos } from "./Produtos.js";

export class Pedido {
  static ultimoId = 0;

  constructor(nomeCliente) {
    this.id = ++Pedido.ultimoId;
    this.nomeCliente = nomeCliente;
    this.produtos = [];
    this.valorTotal = 0;
  }

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
  removerProduto(produto) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    let result;
    index != -1 ? result = this.produtos.splice(index, 1) : result = 'produto não encontrado';
    return result;
  }

  buscarProdutoPorId(id) {
    const produto = this.produtos.find(p => p.id === id);
    if (!produto) {
      return null;
    }
    return produto;
  }

  existeProdutoLista(id) {
    const index = this.produtos.findIndex(p => p.id === id);
    if (index == -1) {
      return false;
    }
    return true;
  }
}

