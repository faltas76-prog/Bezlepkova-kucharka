// Databáze jídelníčku z dokumentu
const dietData = {
    week1: {
        "Pondělí": [
            { type: "Snídaně", name: "Tvarohová kaše s ovocem (420 kcal)" },
            { type: "Oběd", name: "Kuřecí prsa na paprice s rýží (650 kcal)" },
            { type: "Večeře", name: "Kuřecí polévka s rýžovými nudlemi (520 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ],
        "Úterý": [
            { type: "Snídaně", name: "Omeleta se špenátem a sýrem (430 kcal)" },
            { type: "Oběd", name: "Zapečený losos se sladkými bramborami (660 kcal)" },
            { type: "Večeře", name: "Grilovaný halloumi se zeleninovým salátem (560 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ],
        "Středa": [
            { type: "Snídaně", name: "Jogurtový pohár s müsli a jablkem (400 kcal)" },
            { type: "Oběd", name: "Čočkové kari s rýží (630 kcal)" },
            { type: "Večeře", name: "Pečená treska se zeleninou z plechu (530 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ],
        "Čtvrtek": [
            { type: "Snídaně", name: "Pohanková kaše s banánem (410 kcal)" },
            { type: "Oběd", name: "Hovězí guláš s bramborem (670 kcal)" },
            { type: "Večeře", name: "Míchaná vejce s avokádem (550 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ],
        "Pátek": [
            { type: "Snídaně", name: "Tvarohová kaše s ovocem (420 kcal)" },
            { type: "Oběd", name: "Quinoa salát s kuřecím masem (640 kcal)" },
            { type: "Večeře", name: "Krůtí burgery s pečenými hranolky (570 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ],
        "Sobota": [
            { type: "Snídaně", name: "Omeleta se špenátem a sýrem (430 kcal)" },
            { type: "Oběd", name: "Kuřecí prsa na paprice s rýží (650 kcal)" },
            { type: "Večeře", name: "Grilovaný halloumi se zeleninovým salátem (560 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ],
        "Neděle": [
            { type: "Snídaně", name: "Jogurtový pohár s müsli a jablkem (400 kcal)" },
            { type: "Oběd", name: "Zapečený losos se sladkými bramborami (660 kcal)" },
            { type: "Večeře", name: "Pečená treska se zeleninou z plechu (530 kcal)" },
            { type: "Svačiny", name: "Ovoce s mandlemi + Cottage sýr se zeleninou" }
        ]
    },
    week2: {
        "Pondělí": [
            { type: "Snídaně", name: "Míchaná vejce se šunkou a rajčaty (420 kcal)" },
            { type: "Oběd", name: "Kuřecí špízy s bramborem a zeleninou (650 kcal)" },
            { type: "Večeře", name: "Zapečená cuketa s mozzarellou (540 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ],
        "Úterý": [
            { type: "Snídaně", name: "Smoothie bowl s lesním ovocem (410 kcal)" },
            { type: "Oběd", name: "Krevety na česneku s rýží (630 kcal)" },
            { type: "Večeře", name: "Kuřecí polévka se zeleninou a rýží (520 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ],
        "Středa": [
            { type: "Snídaně", name: "Tvarohové lívance (430 kcal)" },
            { type: "Oběd", name: "Vepřová panenka s pečenou dýní (660 kcal)" },
            { type: "Večeře", name: "Tuňákový salát s vejcem a fazolkami (550 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ],
        "Čtvrtek": [
            { type: "Snídaně", name: "Quinoa kaše se skořicí a jablkem (400 kcal)" },
            { type: "Oběd", name: "Cizrnové kari s rýží (620 kcal)" },
            { type: "Večeře", name: "Krůtí steaky s letním salátem (560 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ],
        "Pátek": [
            { type: "Snídaně", name: "Míchaná vejce se šunkou a rajčaty (420 kcal)" },
            { type: "Oběd", name: "Hovězí nudličky s brokolicí a rýží (650 kcal)" },
            { type: "Večeře", name: "Pečené batáty plněné cizrnou (550 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ],
        "Sobota": [
            { type: "Snídaně", name: "Smoothie bowl s lesním ovocem (410 kcal)" },
            { type: "Oběd", name: "Kuřecí špízy s bramborem a zeleninou (650 kcal)" },
            { type: "Večeře", name: "Zapečená cuketa s mozzarellou (540 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ],
        "Neděle": [
            { type: "Snídaně", name: "Tvarohové lívance (430 kcal)" },
            { type: "Oběd", name: "Krevety na česneku s rýží (630 kcal)" },
            { type: "Večeře", name: "Kuřecí polévka se zeleninou a rýží (520 kcal)" },
            { type: "Svačiny", name: "Kefír s jahodami + Mandle a mrkev" }
        ]
    }
};

// Funkce pro zobrazení jídelního lístku
function renderMeals() {
    const week = document.getElementById('weekSelect').value;
    const day = document.getElementById('daySelect').value;
    const container = document.getElementById('mealContainer');
    
    // Vyčištění kontejneru
    container.innerHTML = '';
    
    const meals = dietData[week][day];
    
    if (meals) {
        meals.forEach(meal => {
            const mealCard = document.createElement('div');
            mealCard.className = 'meal-card';
            
            mealCard.innerHTML = `
                <div class="meal-type">${meal.type}</div>
                <div class="meal-name">${meal.name}</div>
            `;
            container.appendChild(mealCard);
        });
    }
}

// Přidání posluchačů událostí na selecty
document.getElementById('weekSelect').addEventListener('change', renderMeals);
document.getElementById('daySelect').addEventListener('change', renderMeals);

// Inicializace při načtení
window.onload = renderMeals;
