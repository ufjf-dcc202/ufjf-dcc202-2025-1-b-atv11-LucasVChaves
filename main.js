import { getLista, limpaLista, adicionaNaLista, removeDaLista} from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const btnRemover = document.querySelector("#remover");

btnLimpar.addEventListener('click', () => {
    limpaLista();
    atualizarLista();
});

btnAdicionar.addEventListener('click', () => {
    const novoItem = pEntrada.textContent;
    adicionaNaLista(novoItem);
    atualizarLista();
});

btnRemover.addEventListener('click', () => {
    const idx = parseInt(pEntrada.textContent);
    removeDaLista(idx);
    atualizarLista();
});

atualizarLista();

function atualizarLista() {
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}
