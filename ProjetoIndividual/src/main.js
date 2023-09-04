import { Bebidas } from "./classes/Bebidas.js";
import { Lanches } from "./classes/Lanches.js";
import { Porcoes } from "./classes/Porcoes.js";
import { adicionarNovoProduto, cancelarPedido, iniciarPedido, removerProduto } from "./pedido.js";
import { BD, popularBD } from "./popularBD.js";

const lanches = document.getElementById("lanches");
const porcoes = document.getElementById("porcoes");
const bebidas = document.getElementById("bebidas");

function init() {
  try {
    popularBD();

    // Criando a lista de produtos
    const listarProdutosPorClasse = (classe) => {
      const Lista = BD.filter(produto => produto instanceof classe);
      if (Lista.length == 0) {
        return "Nenhum produto encontrado";
      }
      return Lista;
    }

    const listaLanches = listarProdutosPorClasse(Lanches);
    const listaPorcoes = listarProdutosPorClasse(Porcoes);
    const listaBebidas = listarProdutosPorClasse(Bebidas);

    const montarLista = (lista) => {
      return lista.map((produto) => {
        return (`
          <li key=${produto.id} class="list-group-item produto p-4">
            <h3 class=" text-info">${produto.nome} - R$ ${(produto.preco).toFixed(2)} </h3>
            <p class="fs-5">${produto.ingredientes ? produto.ingredientes : produto.peso ? produto.peso : `${produto.tamanho} - ${produto.embalagem}`}</p >
            <div class="contador">
              <img src="./src/assets/sinal-de-menos.png" class="me-1 icones i-menos">
              <input type="text" class="quantidade fs-5 m-0 p-1 " value="${produto.quantidade}"> 
              <img src="./src/assets/mais.png" class="ms-1 icones i-mais">  
            </div>     
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

    //Adicionando evento que ativa modal do pedido
    const btnConfirmar = document.getElementById('sidebarToggle');
    const btnCancelarPedido = document.getElementById('btnCancelarPedido');

    btnConfirmar.addEventListener('click', () => {
      const nomeCliente = document.getElementById('customer-name').value;

      if (!nomeCliente) {
        throw new Error('Nome inválido ou vazio!');
      }
      document.getElementById('sidebar').classList.toggle('active');
      document.body.classList.toggle('menu-activated');
      document.querySelectorAll('.contador').forEach(element => element.classList.add('active'));
      iniciarPedido(nomeCliente);
    });

    btnCancelarPedido.addEventListener('click', () => {
      document.querySelectorAll('.contador').forEach(element => element.classList.remove('active'));
      cancelarPedido();
    });

    document.querySelectorAll('.produto').forEach(element => {

      element.addEventListener('click', (event) => {

        if (event.target.matches('.i-mais')) {

          const liParent = event.target.closest('li');
          const input = liParent.querySelector('.quantidade');
          const key = liParent.getAttribute('key');

          const produto = BD.find(prod => prod.id == key);

          const quantidade = adicionarNovoProduto(produto);
          input.value = quantidade;
        } else if (event.target.matches('.i-menos')) {

          const liParent = event.target.closest('li');
          const input = liParent.querySelector('.quantidade');
          const key = liParent.getAttribute('key');

          const produto = BD.find(prod => prod.id == key);
          const quantidade = removerProduto(produto)
          console.log(quantidade);
          input.value = quantidade;

        }

      });
    });
  } catch (error) {
    console.log(error.message);
  }
}

init();











