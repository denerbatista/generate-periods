function gerarNumerosOrdenados() {
  const numeros = new Set(); // Usando um Set para garantir unicidade

  while (numeros.size < 12) {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * 60); // Gera um número aleatório entre 0 e 59
    } while (numeros.has(numeroAleatorio)); // Verifica se o número já existe no conjunto
    numeros.add(numeroAleatorio);
  }

  // Converter o conjunto para um array
  const numerosOrdenados = Array.from(numeros);

  // Ordenando o array de números ordenados
  numerosOrdenados.sort((a, b) => a - b);
  console.log(numerosOrdenados)

  return numerosOrdenados;
}


function gerarHorarios() {
  const horaSelecionada = document.getElementById("hora").value;
  if(horaSelecionada > 23){
    alert("Hora inválida")
    return
  }
  const horariosGerados = [];
  const minutosGerados = gerarNumerosOrdenados();

  for (let i = 0; i < 12; i++) {
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
  setTimeout(() => {
    clipboard();
  }, 500);
}

function clipboard() {
  try {
    const divHorarios = document.getElementById("horarios-gerados");
    const textoHorarios = Array.from(divHorarios.querySelectorAll("pre"))
      .map((pre) => pre.textContent.trim())
      .join("\n\n");
    navigator.clipboard.writeText(textoHorarios);
    alert("Horários copiados para área de transferência!");
  } catch (error) {
    console.log(error);
  }
}
