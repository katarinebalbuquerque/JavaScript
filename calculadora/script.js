/**
 * Caculadora
 * 
 * Adiciona no máximo 12 dígitos no display,
 * limpa e calcula o valor digitado.
 * 
 * Para o cálculo é utilizado a função Eval.
 */

const display = document.getElementById("display");

function adicionar(valor) {
      if(valor == "*") {
            valor = "x";
      }
      let v = display.value += valor;
      if(v.length <= 12) {            
            return v;    
      }
      else {
            limparDisplay();
      }
}

function limparDisplay() {
      display.value = "";
}

function calcular() {
      try {
            let expressao = display.value.replace(/x/g, "*");
            display.value = eval(expressao);
      } catch {
            display.value = "Erro";
      }
}