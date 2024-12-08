const timeInputs = document.querySelectorAll('input[name="timeframes"]');
const cards = document.querySelectorAll('.card');

let selectedChoice = document.querySelector('input[name="timeframes"]:checked').id;

fetch('/data.json') // Load data from JSON file
.then((response) => {
    if (!response.ok) return console.log('Oops! Something went wrong.');

    return response.json();
})
.then((data) => {
    
    // Load initial values ​​(for example, "daily")
    const defaultTimeframe = selectedChoice;
    updateCards(data, defaultTimeframe);

    timeInputs.forEach(input => {
        input.addEventListener('change', () => {
            selectedChoice = input.id;
            //console.log(`The user has selected: ${selectedChoice}`); //daily, weekly, monthly
            updateCards(data, selectedChoice); // We update the cards with the data and the selected time
        });
    });

});

function updateCards(data, timeframe) {

    cards.forEach((card) => {
        //getting data from html
        const title = card.querySelector('strong').innerText;
        const currentHrs = card.querySelector('.currentHrs');
        const previousHrs = card.querySelector('.previousHrs');

        // Find the current title data
        const cardData = data.find((item) => item.title === title); //Cannot read properties of undefined (reading 'find')
        if(!cardData) {
            console.warn(`No data found for title card: ${title}`)
            return
        }
        
        // Get the time frame data
        const timeframeData = cardData.timeframes[timeframe];
        if(!timeframeData) {
            console.warn(`No data found for the time frame: ${timeframe}`)
            return;
        }

        // Update card content
        currentHrs.innerText = `${timeframeData.current}hrs`;
        switch (timeframe) {
            case 'daily':
                previousHrs.innerText = `Yesterday - ${timeframeData.previous}hrs`;
                break;
            case 'monthly':
                previousHrs.innerText = `Last Month - ${timeframeData.previous}hrs`;
                break;

            case 'weekly':
                previousHrs.innerText = `Last Week - ${timeframeData.previous}hrs`;
                break;
        }

    })
}
