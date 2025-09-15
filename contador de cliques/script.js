/**
 * Contador de Cliques
 * Incrementa, decrementa e reseta o valor.
 * Máximo de 10 e Mínimo de 0.
 */

const display = document.getElementById("display");
const setColor = document.getElementById("color");

function incrementar() {
      let valor = Number(display.value);
      
      if (valor < 10) {
            display.value = valor + 1;
            color();
      }
}

function decrementar() { 
      let valor = Number(display.value);
      
      if (valor > 0) {
            display.value = valor - 1;
            color();
      }
}

function resetar() {
      display.value = 0;
}

function color() {
      let valor = Number(display.value);
   
      switch(valor) {
            case 0: {
                  setColor.style.backgroundColor = "#476EAE";
                  break;
            }
            case 1: {
                  setColor.style.backgroundColor = "#48B3AF";
                  break;
            }
            case 2: {
                  setColor.style.backgroundColor = "#A7E399";
                  break;
            }
            case 3: {
                  setColor.style.backgroundColor = "#F6FF99";
                  break;
            }
            case 4: {
                  setColor.style.backgroundColor = "#DC143C";
                  break;
            }
            case 5: {
                  setColor.style.backgroundColor = "#F75270";
                  break;
            }
            case 6: {
                  setColor.style.backgroundColor = "#F7CAC9";
                  break;
            }
            case 7: {
                  setColor.style.backgroundColor = "#FDEBD0";
                  break;
            }
            case 8: {
                  setColor.style.backgroundColor = "#FF2DD1";
                  break;
            }
            case 9: {
                  setColor.style.backgroundColor = "#4DFFBE";
                  break;
            }
            case 10: {
                  setColor.style.backgroundColor = "#63C8FF";
                  break;
            }                  
      }
}
