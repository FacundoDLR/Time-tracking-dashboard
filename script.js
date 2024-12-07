const timeInputs = document.querySelectorAll('input[name="timeframes"]');
const cards = document.querySelectorAll('.card');
const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];


let selectedChoice = 'weekly';
timeInputs.forEach(input => {
    input.addEventListener('change', () => {
        selectedChoice = input.id;
        console.log(`The user has selected: ${selectedChoice}`); /* daily, weekly, monthly */
        updateCards();
    });
});

function updateCards() {
    cards.forEach((card) => {
        /* obteniendo datos del html */
        const title = card.querySelector('strong').innerText;
        const currentHrs = card.querySelector('#currentHrs');
        const previousHrs = card.querySelector('#previousHrs');
        
        const cardData = data.find((item) => item.title === title);
        /* console.log(cardData.timeframes) */
        const timeframeData = cardData.timeframes[selectedChoice];

        switch (selectedChoice) {
            case 'daily':
                currentHrs.innerText = `${timeframeData.current}hrs`;
                previousHrs.innerText = `Yesterday - ${timeframeData.previous}hrs`;
                break;
            case 'monthly':
                currentHrs.innerText = `${timeframeData.current}hrs`;
                previousHrs.innerText = `Last Month - ${timeframeData.previous}hrs`;
                break;
        
            default:
                currentHrs.innerText = `${timeframeData.current}hrs`;
                previousHrs.innerText = `Last Week - ${timeframeData.previous}hrs`;
                break;
        }
       
    })
}


/* fetch('/data.json').then((response) => {
    if (!response.ok) return console.log('Oops! Something went wrong.');

    return response.json();
}).then((data) => {
    console.log(data);
}); */