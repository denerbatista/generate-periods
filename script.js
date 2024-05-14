function gerarNumerosOrdenados() {
  // Gera um array vazio para armazenar os números
  const numeros = [];

  // Gera 12 números aleatórios
  for (let i = 0; i < 12; i++) {
    let numeroAleatorio;

    // Gera um número aleatório entre 0 e 59
    for (let tentativas = 0; tentativas < 100; tentativas++) {
      do {
        numeroAleatorio = Math.floor(Math.random() * 60);
      } while (numeros.includes(numeroAleatorio));
    }
    numeros.push(numeroAleatorio);
  }

  // Ordena o array em ordem crescente
  numeros.sort((a, b) => a - b);

  return numeros;
}

function gerarHorarios() {
  const horaSelecionada = document.getElementById("hora").value;
  const horariosGerados = [];

  for (let i = 0; i < 12; i++) {
    const minutoGerado = gerarNumerosOrdenados();

    const horarioGerado = `${horaSelecionada
      .toString()
      .padStart(2, "0")}:${minutoGerado[i].toString().padStart(2, "0")}`;

    horariosGerados.push([horarioGerado]);
  }

  exibirHorarios(horariosGerados.sort((a, b) => a - b));
}

function exibirHorarios(horarios) {
  const divHorarios = document.getElementById("horarios-gerados");
  divHorarios.innerHTML = ""; // Limpar horários anteriores

  const divHorario = document.createElement("pre");
  divHorario.classList.add("horario");
  divHorario.textContent = `
    ${horarios[0]} - ${horarios[1]} - ${horarios[2]} - ${horarios[3]}    

    ${horarios[4]} - ${horarios[5]} - ${horarios[6]} - ${horarios[7]}    

    ${horarios[8]} - ${horarios[9]} - ${horarios[10]} - ${horarios[11]}    
    `;

  divHorarios.appendChild(divHorario);
}
