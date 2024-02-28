function fetchLiveMatches() {
  fetch('http://localhost:8089/cricket')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(liveMatches => {
      const cardContainer = document.getElementById("card2");
      liveMatches.forEach(cricket => {
        const cricketCard = document.createElement("div");
        cricketCard.className = "card-container m-2  mt-2 ";
        cricketCard.innerHTML = `
          <h3 class="cricket-heading">${cricket.teamHeading}</h3>
          <h6 class="batting-team">${cricket.battingTeam.toUpperCase()}</h6>
          <p class="batting-team-score">${cricket.battingTeamScore}</p>
          <h6 class="bowling-team">${cricket.bowlTeam.toUpperCase()}</h6>
          <p class="bowling-team-Score">${cricket.bowlTeamScore}</p>
          <p class="textComplete">${cricket.textComplete}</p>
          <p class="matchNumberVenue">${cricket.matchNumberVenue}</p>
          <p class="liveText">${cricket.liveText}</p>
        `;
        cardContainer.appendChild(cricketCard);
      });
    })
    .catch(error => {
      console.error(error);
    });
}

fetchLiveMatches();
