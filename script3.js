fetch('http://localhost:8089/cricket/point-table')
    .then((data) => {
        if (!data.ok) {
            throw new Error(`HTTP error! Status: ${data.status}`);
        }
        return data.json();
    })
    .then((liveMatches) => {
        let cardContainer = document.getElementById("card6");

        liveMatches.forEach((cricket) => {
            let cricketCard = document.createElement("div");
            cricketCard.className = "card-container m-2  mt-2 ";

            cricketCard.innerHTML = `
            
                <h3 class="cricket-Teams">${cricket.Teams}</h3>
                <h6 class="Mat">${cricket.Mat}</h6>
                <p class="batting-team-score">${cricket.Won}</p>
                <h6 class="bowling-team">${cricket.Lost}</h6>
                <p class="bowling-team-Score">${cricket.Tied}</p>
                <p class="textComplete">${cricket.NR}</p> 
                <p class="matchNumberVenue">${cricket.Pts}</p> 
                <p class="liveText">${cricket.NRR}</p>
                `;

            cardContainer.ATTRIBUTE_NODE(cricketCard);
        });
    })
    .catch((err) => {
        console.error('Error during fetch:', err);
    });











   