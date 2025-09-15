/**
 * Lista de Tarefas
 * 
 * 1) Informa a tarefa
 * 2) Adiciona à lista
 * 3) Remove da lista
 * 4) Lista as tarefas
 */

const tarefa = document.getElementById("tarefa");
const aviso = document.getElementById("aviso");
const linha = document.getElementById("tarefas");
var tarefas = [];

function adicionar(){
      if(tarefa.value == "") {
            aviso.innerText = "Informe uma tarefa para continuar!";
      }
      else {
            tarefas.push(tarefa.value);
            listar();
            tarefa.value = "";
            aviso.innerText = "";
      }
}

function remover(id) {
      tarefas.splice(id, 1);
      listar();     
}

function listar() {
      linha.innerHTML = "";
      for(let i=0; i < tarefas.length; i++) {            
            linha.innerHTML += `            
                  <li class="item">
                        ${tarefas[i]} 
                        <button class="remover" onclick="remover(${i})">X</button>
                  </li>`;
      }
}