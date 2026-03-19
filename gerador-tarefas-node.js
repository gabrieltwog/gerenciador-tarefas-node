const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tarefas = [];

function mostrarTarefas() {
  console.log("\nLista de tarefas:");
  tarefas.forEach((tarefa, i) => {
    let cor;
    if (tarefa.prioridade === "alta") cor = "\x1b[31m"; // vermelho
    else if (tarefa.prioridade === "media") cor = "\x1b[33m"; // amarelo
    else cor = "\x1b[32m"; // verde
    console.log(`${cor}${i + 1}. ${tarefa.nome}\x1b[0m`);
  });
}

function adicionarTarefa() {
  rl.question("Digite a tarefa: ", (nome) => {
    rl.question("Prioridade (alta/media/baixa): ", (prioridade) => {
      tarefas.push({ nome, prioridade });
      console.log("\x1b[36mTarefa adicionada com sucesso!\x1b[0m");
      mostrarTarefas();
      adicionarTarefa(); // continua pedindo novas tarefas
    });
  });
}

console.log("=== Gerenciador de Tarefas ===");
adicionarTarefa();