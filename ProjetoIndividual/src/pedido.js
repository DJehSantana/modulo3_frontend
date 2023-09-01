// Definindo as informações do pedido
const pedido = {
  id: 1,
  cliente: "Fulano de Tal",
  telefone: "(11) 9999-9999",
  endereço: "Rua da Paz, 123",
  produtos: [
    {
      id: 1,
      quantidade: 2,
    },
    {
      id: 2,
      quantidade: 1,
    },
  ],
  total: 55.00,
};

// Salvando o pedido no banco de dados
const database = new ListaPedidos();
database.salvarPedido(pedido);
