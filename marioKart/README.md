<table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

🚀 Funcionalidades

🎲 Sistema de dados aleatório para gerar imprevisibilidade.

🛣️ Tipos variados de pista que permitem diferentes habilidades.

🧠 Lógica de empate e confrontos com penalização.

🏆 Pontuação por rodada e classificação final.

✨ Estrutura modular e fácil de expandir com novos jogadores.

🧪 Como Funciona

O jogo é composto por 5 rodadas. A cada rodada:

Um tipo de pista é escolhido aleatoriamente:

RETA → avalia a VELOCIDADE

CURVA → avalia a MANOBRABILIDADE

CONFRONTO → avalia o PODER (com decidir ao perdedor)

Cada jogador rola um dado (1 a 6) e soma o valor com seu atributo relevante.

O jogador com maior valor vence a rodada e ganha 1 ponto.

No caso de confronto:

O perdedor perde 1 ponto (se tiver).

Empates não resultam em perda ou ganho.

Ao final, o jogador com mais pontos é declarado vencedor.

👩‍💻 Tecnologias Utilizadas Linguagem: JavaScript (ES6+)

Execução: Pode ser rodado diretamente no navegador ou no terminal via Node.js.

Dependências: Nenhuma – código 100% puro.

📁 Estrutura do Código Constantes: Usadas para atributos (VELOCIDADE, PODER, MANOBRABILIDADE) e tipos de pista.

Jogadores: Armazenados em uma variedade de objetos com suas habilidades e pontuações.

Funções principais:

rollDice() – gera um número de 1 a 6.

getRandomBlock() – escolhe aleatoriamente o tipo de pista.

runRace() – executa a lógica principal do jogo.

handleStandardRound() – lida com rodadas de reta ou curva.

handleConfrontation() – lida com rodadas de confronto.

declareWinner() – mostra a classificação final.

🎮 Como Jogar ✔️ Pré-requisitos Node.js instalados na máquina (opcional se quiser rodar no navegador)

▶️Rodando no terminal Salve o arquivo como corrida.js

Execute com o Node:

bash Copiar Editar node corrida.js ✏️ Exemplo de Saída text Copiar Editar 🏁🚨 Corrida começando...

🏁 Rodada 1 Bloco: RETA Mário 🎲 rolou 4 + 4 (velocidade) = 8 Luigi 🎲 rolou 3 + 3 (velocidade) = 6 Pêssego 🎲 rolou 5 + 3 (velocidade) = 8

Empate na rodada! Ninguém pontudo. ... 🎉 O grande vencedor é Mário! Parabéns! 🎉 👨‍🔧 Como Personalizar Adicionar jogadores: Basta incluir um novo objeto no array players com os atributos:

js Copiar Editar { NOME: "Yoshi", VELOCIDADE: 4, MANOBRABILIDADE: 3, PODER: 2, PONTOS: 0 } Mudar número de rodadas: Altere o valor no laço para dentro da função runRace():

js Copiar Editar for (let round = 1; round <= 5; round++)