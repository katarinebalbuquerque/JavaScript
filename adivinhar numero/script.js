/**
 * Adivinhe o número entre 1 e 100.
 */

const palpite = document.getElementById("palpite");
const mensagem = document.getElementById("mensagem");
const numero = Math.floor(Math.random() * 100) + 1;

function adivinhar() {
      let palpites = parseInt(palpite.value);
      if (palpites === numero) {
        mensagem.innerText = `Você acertou!`;
      }
      else if (palpites < numero) {
        mensagem.innerText = "O número é maior!";
      }
      else if (palpites > numero) {
        mensagem.innerText = "O número é menor!";
      }
}