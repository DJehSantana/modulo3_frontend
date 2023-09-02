import { Bebidas } from "./classes/Bebidas.js";
import { Lanches } from "./classes/Lanches.js";
import { ListaPedidos } from "./classes/ListaPedidos.js";
import { Pedido } from "./classes/Pedido.js";
import { Porcoes } from "./classes/Porcoes.js";
import { Produtos } from "./classes/Produtos.js";
import { BD, popularBD } from "./popularBD.js";


const lanches = document.getElementById("lanches");
const porcoes = document.getElementById("porcoes");
const bebidas = document.getElementById("bebidas");

popularBD();

const listarProdutosPorClasse = (classe) => {
  const Lista = BD.filter(produto => produto instanceof classe);
  if (Lista.length == 0) {
    return "Nenhum produto encontrado";
  }
  return Lista;
}
// Criando a lista de produtos
const listaLanches = listarProdutosPorClasse(Lanches);
const listaPorcoes = listarProdutosPorClasse(Porcoes);
const listaBebidas = listarProdutosPorClasse(Bebidas);

const montarLista = (lista) => {
  return lista.map((produto) => {
    return (`
      <li key={produto.id} onclick="adicionar(produto)" class="list-group-item p-4">
        <h3 class=" text-info">${produto.nome} - R$ ${(produto.preco).toFixed(2)} </h3>
        <p class="fs-5">${produto.ingredientes ? produto.ingredientes : produto.peso ? produto.peso : `${produto.tamanho} - ${produto.embalagem}`}</p >
      </li > `
    )
  });
}

const exibirProdutos = () => {
  const resultadoLanches = montarLista(listaLanches);
  lanches.innerHTML += resultadoLanches.join("");

  const resultadoPorcoes = montarLista(listaPorcoes);
  porcoes.innerHTML += resultadoPorcoes.join("");

  const resultadoBebidas = montarLista(listaBebidas);
  bebidas.innerHTML += resultadoBebidas.join("");
}

exibirProdutos();

const iniciarPedido = () => {
  const nomeCliente = document.getElementById('customer-name').value;
  const pedido = new Pedido(nomeCliente);
  ListaPedidos.salvarPedido(pedido);
}

const adicionar = (produto) => {
  try {
    const pedido = ListaPedidos.recuperarUltimoPedido();
    if (pedido && produto instanceof Produtos) {
      pedido.adicionarProduto(produto);
    } else {
      throw new Error('Erro ao adicionar produto!')
    }
  } catch (error) {
    console.log(error.message);
  }

}


