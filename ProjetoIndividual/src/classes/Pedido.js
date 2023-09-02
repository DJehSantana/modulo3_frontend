import { Produtos } from "./Produtos.js";

export class Pedido {
  static ultimoId = 0;

  constructor(nomeCliente) {
    this.id = ++Pedido.ultimoId;
    this.nomeCliente = nomeCliente;
    this.produtos = [];
    this.valorTotal = 0;
  }

  calcularValorTotal() {
    let valorTotal = 0;
    if (this.produtos.length != 0) {
      valorTotal = this.produtos.reduce((acc, prod) => {
        return acc + prod.preco
      }, 0)
    }
    return valorTotal;
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
    index != -1 ? result = this.pedidos.splice(index, 1) : result = 'produto não encontrado';

    console.log(result);
  }
}

