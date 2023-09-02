import { Pedido } from "./Pedido.js";

export class ListaPedidos {
  static pedidos = [];
  constructor() { }

  static salvarPedido(pedido) {
    try {
      if (pedido instanceof Pedido) {
        ListaPedidos.pedidos.push(pedido);
      } else {
        throw new Error('Pedido inválido!');
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  static deletarPedido(pedido) {
    const index = ListaPedidos.pedidos.findIndex(p => p.id === pedido.id);
    let result;
    index != -1 ? result = this.pedidos.splice(index, 1) : result = 'pedido não encontrado';

    return result;
  }

  static recuperarPedidos() {
    return ListaPedidos.pedidos;
  }

  static recuperarUltimoPedido() {
    return ListaPedidos.pedidos[ListaPedidos.pedidos.length - 1];
  }
}
