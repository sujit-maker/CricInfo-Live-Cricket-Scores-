fetch('http://localhost:8089/cricket')
    .then((data) => {
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        return data.json();
    })
    .then((liveMatches) => {
        let cardContainer = document.getElementById("card5");

        liveMatches.forEach((cricket) => {
            let cricketCard = document.createElement("div");
            cricketCard.className = "card-container m-2  mt-2 ";

            cricketCard.innerHTML = `
            
                <h3 class="cricket-heading">${cricket.teamHeading}</h3>
                <h6 class="batting-team">${cricket.battingTeam}</h6>
                <p class="batting-team-score">${cricket.battingTeamScore}</p>
                <h6 class="bowling-team">${cricket.bowlTeam}</h6>
                <p class="bowling-team-Score">${cricket.bowlTeamScore}</p>
                <p class="textComplete">${cricket.textComplete}</p> 
                <p class="matchNumberVenue">${cricket.matchNumberVenue}</p> 
                <p class="liveText">${cricket.liveText}</p>
                `;

            cardContainer.appendChild(cricketCard);
        });
    })
    .catch((err) => {
        console.error('Error during fetch:', err);
    });



//Yeh matches ka hai bhai








   