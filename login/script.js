/**
 * Tela de Login
 * 
 * Cadatra e efetua login.
 * Verifica se há dados cadastrados.
 * Verifica se o campo está preenchido.
 * Efetua uma busca pelo dado inserido.
 * Limpa campos do cadastro.
 * Emite mensagens informativas.
 * 
 */


const addUsuario = document.getElementById("addUsuario");
const addSenha = document.getElementById("addSenha");

const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

const mensagem = document.getElementById("mensagem");

let dados = [];

function limparAdd() {
      addUsuario.value = "";
      addSenha.value = "";
}

function limparMensagem() {
      mensagem.innerHTML = "";
}

function adicionar() {
      mensagem.innerHTML = "";

      if (addUsuario.value !== "" && addSenha.value !== "") {
            dados.unshift({ user: addUsuario.value, password: addSenha.value });
            mensagem.innerHTML = `<h3 id="msg">Usuário cadastrado com sucesso!</h3>`;
            limparAdd();
      } else {
            mensagem.innerHTML = `<h3 id="msg">Informe os dados para continuar!</h3>`;
      }
}

function logar() {
      mensagem.innerHTML = "";

      if (usuario.value === "" || senha.value === "") {
            mensagem.innerHTML = `<h3 id="msg">Informe os dados para continuar!</h3>`;
            return;
      }

      if (dados.length === 0) {
            mensagem.innerHTML = `<h3 id="msg">Não há dados cadastrados!</h3>`;
            return;
      }

      const encontrado = dados.find(d => d.user === usuario.value && d.password === senha.value);

      if (encontrado) {
            mensagem.innerHTML = `<h3 id="msg">Parabéns! Você está logado.</h3>`;
      } else {
            mensagem.innerHTML = `<h3 id="msg">Usuário ou senha incorretos!</h3>`;
      }
}
