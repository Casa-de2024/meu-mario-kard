// --- CONFIGURAÇÃO INICIAL ---

// Usar constantes para os atributos evita erros de digitação e centraliza a informação.
const ATTRIBUTES = {
  VELOCIDADE: "VELOCIDADE",
  MANOBRABILIDADE: "MANOBRABILIDADE",
  PODER: "PODER",
};

// Usar constantes para os tipos de pista torna o código mais legível e seguro.
const TRACK_TYPES = {
  RETA: "RETA",
  CURVA: "CURVA",
  CONFRONTO: "CONFRONTO",
};

// A corrida agora é baseada em um array de jogadores. Adicionar um novo jogador é tão simples quanto adicionar um novo objeto aqui.
const players = [
  {
    NOME: "Mario",
    [ATTRIBUTES.VELOCIDADE]: 4,
    [ATTRIBUTES.MANOBRABILIDADE]: 3,
    [ATTRIBUTES.PODER]: 3,
    PONTOS: 0,
  },
  {
    NOME: "Luigi",
    [ATTRIBUTES.VELOCIDADE]: 3,
    [ATTRIBUTES.MANOBRABILIDADE]: 4,
    [ATTRIBUTES.PODER]: 4,
    PONTOS: 0,
  },
  {
    NOME: "Peach",
    [ATTRIBUTES.VELOCIDADE]: 3,
    [ATTRIBUTES.MANOBRABILIDADE]: 4,
    [ATTRIBUTES.PODER]: 2,
    PONTOS: 0,
  }
];

// --- FUNÇÕES AUXILIARES (Lógica Pura) ---

// Removido 'async' pois não há operações de I/O ou promessas. É uma função síncrona.
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomBlock() {
  const random = Math.random();
  if (random < 0.35) return TRACK_TYPES.RETA;
  if (random < 0.70) return TRACK_TYPES.CURVA;
  return TRACK_TYPES.CONFRONTO;
}

// Mapeia o tipo de pista ao atributo correspondente. Isso elimina a necessidade de 'if/else' repetitivos.
const blockAttributeMap = {
  [TRACK_TYPES.RETA]: ATTRIBUTES.VELOCIDADE,
  [TRACK_TYPES.CURVA]: ATTRIBUTES.MANOBRABILIDADE,
  [TRACK_TYPES.CONFRONTO]: ATTRIBUTES.PODER,
};

// --- MOTOR DA CORRIDA (Lógica Principal) ---

function runRace(players) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Rodada ${round}`);
    const block = getRandomBlock();
    console.log(`Bloco: ${block}`);

    const attribute = blockAttributeMap[block];
    let roundResults = [];

    // Calcula o resultado para cada jogador na rodada
    for (const player of players) {
      const diceResult = rollDice();
      const totalSkill = diceResult + player[attribute];
      console.log(
        `${player.NOME} 🎲 rolou ${diceResult} + ${player[attribute]} (${attribute.toLowerCase()}) = ${totalSkill}`
      );
      roundResults.push({ name: player.NOME, skill: totalSkill });
    }

    // Lógica de CONFRONTO (separada para maior clareza)
    if (block === TRACK_TYPES.CONFRONTO) {
      console.log("🥊 Disputa de poder!");
      handleConfrontation(players, roundResults);
    } else {
      // Lógica de RETA e CURVA (unificada)
      handleStandardRound(players, roundResults);
    }

    console.log("_______________________________________________");
  }
}

function handleStandardRound(players, results) {
  // Encontra o maior valor de habilidade na rodada
  const winnerSkill = Math.max(...results.map(result => result.skill));
  
  // Filtra para encontrar todos os que alcançaram esse valor (para tratar empates)
  const winners = results.filter(result => result.skill === winnerSkill);

  // Se houver apenas um vencedor, ele ganha um ponto. Se houver empate, ninguém pontua.
  if (winners.length === 1) {
    const winnerName = winners[0].name;
    const winnerPlayer = players.find(p => p.NOME === winnerName);
    winnerPlayer.PONTOS++;
    console.log(`\n🏆 ${winnerName} venceu a rodada e marcou 1 ponto!`);
  } else {
    console.log("\nEmpate na rodada! Ninguém pontuou.");
  }
}

function handleConfrontation(players, results) {
    const winnerSkill = Math.max(...results.map(result => result.skill));
    const winners = results.filter(result => result.skill === winnerSkill);
    const loserSkill = Math.min(...results.map(result => result.skill));
    const losers = results.filter(result => result.skill === loserSkill);

    if (winners.length === 1) { // Apenas um vencedor claro
        const winnerName = winners[0].name;

        // O perdedor (com menor pontuação) perde 1 ponto
        if (losers.length === 1) {
            const loserName = losers[0].name;
            const loserPlayer = players.find(p => p.NOME === loserName);
            if (loserPlayer.PONTOS > 0) {
                console.log(`\n💥 ${winnerName} venceu o confronto! ${loserName} perdeu 1 ponto. 🐢`);
                loserPlayer.PONTOS--;
            } else {
                console.log(`\n💥 ${winnerName} venceu o confronto! ${loserName} não tinha pontos para perder.`);
            }
        }
    } else {
        console.log("\nConfronto empatado! Ninguém perdeu pontos.");
    }
}


function declareWinner(players) {
  console.log("\n\n--- Resultado Final ---");

  // Ordena os jogadores por pontos para exibir um ranking
  const sortedPlayers = [...players].sort((a, b) => b.PONTOS - a.PONTOS);

  for (const player of sortedPlayers) {
    console.log(`${player.NOME}: ${player.PONTOS} ponto(s)`);
  }

  const winner = sortedPlayers[0];
  const isTie = sortedPlayers.length > 1 && sortedPlayers[1].PONTOS === winner.PONTOS;

  if (isTie) {
    console.log("\n🏆 A corrida terminou em empate!");
  } else {
    console.log(`\n🎉 O grande vencedor é ${winner.NOME}! Parabéns! 🎉`);
  }
}

// --- FUNÇÃO DE AUTO-EXECUÇÃO ---

(function main() {
  console.log("🏁🚨 Corrida começando...\n");
  runRace(players);
  declareWinner(players);
})();