function createGame(player1, hour, player2) {
  return `
      <li> <!-- início card -->
        <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
      </li> <!-- fim card -->
  `
}

function createCard(date, day, games) {
  return `
      <div class="card"> <!-- início cartão 1 -->
      <h2> ${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div> <!-- fim cartão 1 -->
  `
}

document.querySelector("#app").innerHTML = `
  <header> <!-- início cabeçalho -->
    <img src="./assets/logo.svg" alt="logo da NLW">
  </header> <!-- fim cabeçalho -->

  <main id="cards"> <!-- início main -->
    ${createCard(
      "24/11",
      "quinta",
      createGame("suica", "7:00", "camaroes") +
        createGame("uruguai", "10:00", "coreiadosul") +
        createGame("portugal", "13:00", "gana") +
        createGame("brasil", "16:00", "servia")
    )}

    ${createCard(
      "28/11",
      "segunda",
      createGame("camaroes", "7:00", "servia") +
        createGame("coreiadosul", "10:00", "gana") +
        createGame("brasil", "13:00", "suica") +
        createGame("portugal", "16:00", "uruguai")
    )}

    ${createCard(
      "02/12",
      "sexta",
      createGame("coreiadosul", "12:00", "portugal") +
        createGame("gana", "12:00", "uruguai") +
        createGame("servia", "16:00", "suica") +
        createGame("camaroes", "16:00", "brasil")
    )}
  </main> <!-- fim main -->
`