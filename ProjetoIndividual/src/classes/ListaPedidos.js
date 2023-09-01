class ListaPedidos {
  constructor() {
    this.pedidos = [];
  }

  salvarPedido(pedido) {
    this.pedidos.push(pedido);
  }

  recuperarPedidos() {
    return this.pedidos;
  }
}
