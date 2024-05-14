function gerarNumerosOrdenados() {
  const numeros = new Set(); // Usando um Set para garantir unicidade
  const numerosOrdenados = [];

  while (numeros.size < 12) {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * 60); // Gera um número aleatório entre 0 e 59
    } while (numeros.has(numeroAleatorio) || numerosOrdenados.includes(numeroAleatorio)); // Verifica se o número já existe no conjunto ou no array de números ordenados
    numeros.add(numeroAleatorio);
    numerosOrdenados.push(numeroAleatorio);
  }

  // Ordenando o array de números ordenados
  numerosOrdenados.sort((a, b) => a - b);

  return numerosOrdenados;
}


function gerarHorarios() {
  const horaSelecionada = document.getElementById("hora").value;
  const horariosGerados = [];

  for (let i = 0; i < 12; i++) {
    const minutosGerados = gerarNumerosOrdenados();
    const horarioGerado = `${horaSelecionada
      .toString()
      .padStart(2, "0")}:${minutosGerados[i].toString().padStart(2, "0")}`;
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
      const linha = `${horariosGrupo[j]} - ${horariosGrupo[j + 1]} - ${
        horariosGrupo[j + 2]
      } - ${horariosGrupo[j + 3]}\n`;
      divHorario.textContent += linha;
    }

    divHorarios.appendChild(divHorario);
  }

  clipboard();
}

function clipboard() {
  try {
    const divHorarios = document.getElementById("horarios-gerados");
    const textoHorarios = Array.from(divHorarios.querySelectorAll("pre"))
      .map((pre) => pre.textContent.trim())
      .join("\n\n");
    navigator.clipboard.writeText(textoHorarios);
    alert("Texto copiado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
