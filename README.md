# meu-mario-kard
🏎️ Mini Jogo de Corrida em JavaScript

📋 Descrição
Este é um mini jogo de corrida feito em JavaScript puro, que simula uma competição entre personagens clássicos como Mario, Luigi e Peach. Cada rodada representa um tipo de pista (reta, curva ou confronto) que exige um atributo diferente dos jogadores (velocidade, manobrabilidade ou poder). O jogo roda no terminal e exibe os resultados de cada rodada, declarando o vencedor ao final.

🚀 Funcionalidades
🎲 Sistema de dados aleatório para gerar imprevisibilidade.

🛣️ Tipos variados de pista que exigem diferentes habilidades.

🧠 Lógica de empate e confrontos com penalização.

🏆 Pontuação por rodada e classificação final.

✨ Estrutura modular e fácil de expandir com novos jogadores.

🧪 Como Funciona
O jogo é composto por 5 rodadas. A cada rodada:

Um tipo de pista é escolhido aleatoriamente:

RETA → avalia a VELOCIDADE

CURVA → avalia a MANOBRABILIDADE

CONFRONTO → avalia o PODER (com penalidade ao perdedor)

Cada jogador rola um dado (1 a 6) e soma o valor com seu atributo relevante.

O jogador com maior valor vence a rodada e ganha 1 ponto.

No caso de confronto:

O perdedor perde 1 ponto (se tiver).

Empates não resultam em perda ou ganho.

Ao final, o jogador com mais pontos é declarado vencedor.

👩‍💻 Tecnologias Utilizadas
Linguagem: JavaScript (ES6+)

Execução: Pode ser rodado diretamente no navegador ou no terminal via Node.js.

Dependências: Nenhuma – código 100% puro.

📁 Estrutura do Código
Constantes: Usadas para atributos (VELOCIDADE, PODER, MANOBRABILIDADE) e tipos de pista.

Jogadores: Armazenados em um array de objetos com suas habilidades e pontuação.

Funções principais:

rollDice() – gera um número de 1 a 6.

getRandomBlock() – escolhe aleatoriamente o tipo de pista.

runRace() – executa a lógica principal do jogo.

handleStandardRound() – lida com rodadas de reta ou curva.

handleConfrontation() – lida com rodadas de confronto.

declareWinner() – mostra a classificação final.

🎮 Como Jogar
✔️ Pré-requisitos
Node.js instalado na máquina (opcional se quiser rodar no navegador)

▶️ Rodando no terminal
Salve o arquivo como corrida.js

Execute com o Node:

bash
Copiar
Editar
node corrida.js
✏️ Exemplo de Saída
text
Copiar
Editar
🏁🚨 Corrida começando...

🏁 Rodada 1
Bloco: RETA
Mario 🎲 rolou 4 + 4 (velocidade) = 8
Luigi 🎲 rolou 3 + 3 (velocidade) = 6
Peach 🎲 rolou 5 + 3 (velocidade) = 8

Empate na rodada! Ninguém pontuou.
...
🎉 O grande vencedor é Mario! Parabéns! 🎉
👨‍🔧 Como Personalizar
Adicionar jogadores:
Basta incluir um novo objeto no array players com os atributos:

js
Copiar
Editar
{
  NOME: "Yoshi",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 2,
  PONTOS: 0
}
Mudar número de rodadas:
Altere o valor no laço for dentro da função runRace():

js
Copiar
Editar
for (let round = 1; round <= 5; round++) {
📌 Possíveis Melhorias Futuras
Interface gráfica (web) com animações.

Sistema de níveis e progressão de atributos.

Modo multiplayer com entrada via teclado.

Persistência de pontuação (localStorage ou backend).

🧠 Autor e Créditos
Criado por Gelson Bario
Inspirado nos jogos clássicos da Nintendo como Mario Kart.
