// Lista com os nomes dos 19 alunos
const alunos = [
  "Aluno 1", "Aluno 2", "Aluno 3", "Aluno 4", "Aluno 5",
  "Aluno 6", "Aluno 7", "Aluno 8", "Aluno 9", "Aluno 10",
  "Aluno 11", "Aluno 12", "Aluno 13", "Aluno 14", "Aluno 15",
  "Aluno 16", "Aluno 17", "Aluno 18", "Aluno 19"
];

// Função para embaralhar os alunos (algoritmo Fisher-Yates)
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função que gera os grupos
function gerarGrupos() {
  // Copiar a lista de alunos para não alterar a original
  let copia = [...alunos];
  embaralhar(copia);

  // Criar grupos de 3 (alguns podem ficar com 4, pois são 19 alunos)
  let grupos = [];
  for (let i = 0; i < copia.length; i += 3) {
    grupos.push(copia.slice(i, i + 3));
  }

  // Caso o último grupo fique pequeno demais, ajustar
  if (grupos[grupos.length - 1].length === 1) {
    grupos[grupos.length - 2].push(grupos[grupos.length - 1][0]);
    grupos.pop();
  }

  // Exibir os grupos no HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // limpar antes de mostrar

  grupos.forEach((grupo, index) => {
    const divGrupo = document.createElement("div");
    divGrupo.classList.add("grupo");

    divGrupo.innerHTML = `<h3>Grupo ${index + 1}</h3><ul>` +
      grupo.map(aluno => `<li>${aluno}</li>`).join("") +
      `</ul>`;

    resultado.appendChild(divGrupo);
  });
}
