/**
 * Organizar Estudos
 * 
 * 1) Informa o dia da semana e a disciplina
 * 2) Adiciona à lista
 * 3) Remove da lista
 * 4) Lista os dados
 */

const semana = document.getElementById("semana");
const disciplina = document.getElementById("disciplina");
const aviso = document.getElementById("aviso");
const linha = document.getElementById("tarefas");
var estudos = [];

function adicionar(){
      if(semana.value == "selecione" || disciplina.value == "") {
            aviso.innerText = "Informe os dados para continuar!";
      }
      else {
            estudos.push({semana: semana.value, disciplina: disciplina.value});
            listar();
            semana.value = "selecione";
            disciplina.value = "";
            aviso.innerText = "";
      }
}

function remover(id) {
      estudos.splice(id, 1);
      listar();     
}

function listar() {
      linha.innerHTML = "";
      for(let i=0; i < estudos.length; i++) {            
            linha.innerHTML += `            
                  <tr class="item">
                        <td>${estudos[i].semana}</td>
                        <td>${estudos[i].disciplina}</td>
                        <td><button class="remover" onclick="remover(${i})">X</button></td>
                  </tr>`;
      }
}