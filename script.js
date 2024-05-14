function gerarNumerosOrdenados() {
  const numeros = new Set(); // Usando um Set para garantir unicidade
  const numerosOrdenados = [];

  while (numeros.size < 12) {
    let numeroAleatorio = Math.floor(Math.random() * 60); // Gera um número aleatório entre 0 e 59
    numeros.add(numeroAleatorio);
  }

  // Convertendo o Set para um array e ordenando
  numerosOrdenados.push(...Array.from(numeros).sort((a, b) => a - b));

  return numerosOrdenados;
}

function clipboard() {
  try {
    const divHorarios = document.getElementById("horarios-gerados");
    const textoHorarios = divHorarios.textContent;
    navigator.clipboard.writeText(textoHorarios);
    alert("Horários copiados para área de transferencia!");
  } catch (error) {
    console.log(error);
  }
}

function exibirHorarios(horarios) {
  const divHorarios = document.getElementById("horarios-gerados");
  divHorarios.innerHTML = ""; // Limpar horários anteriores

  const divHorario = document.createElement("pre");
  divHorario.classList.add("horario");

  for (let i = 0; i < horarios.length; i += 4) {
    const linha = `${horarios[i]} - ${horarios[i + 1]} - ${horarios[i + 2]} - ${
      horarios[i + 3]
    }\n`;
    divHorario.textContent += linha;
  }

  divHorarios.appendChild(divHorario);

  setTimeout(() => {
    clipboard();
  }, 1000);
}

function gerarHorarios() {
  const horaSelecionada = document.getElementById("hora").value;
  const horariosGerados = [];

  for (let i = 0; i < 12; i++) {
    const minutosGerados = gerarNumerosOrdenados();
    const horarioGerado = `${horaSelecionada.toString().padStart(2, "0")}:${minutosGerados[i].toString().padStart(2, "0")}`;
    horariosGerados.push(horarioGerado);
  }

  return horariosGerados;
}

function gerarVariosGrupos() {
  const divHorarios = document.getElementById("horarios-gerados");
  divHorarios.innerHTML = ""; // Limpar horários anteriores

  for (let i = 0; i < 5; i++) {
    const horariosGrupo = gerarHorarios();
    const divHorario = document.createElement("pre");
    divHorario.classList.add("horario");

    for (let j = 0; j < horariosGrupo.length; j += 4) {
      const linha = `${horariosGrupo[j]} - ${horariosGrupo[j + 1]} - ${horariosGrupo[j + 2]} - ${horariosGrupo[j + 3]}\n`;
      divHorario.textContent += linha;
    }

    divHorarios.appendChild(divHorario);
  }

  clipboard();
}

