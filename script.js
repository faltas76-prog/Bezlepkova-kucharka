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

// Nákupní seznamy pro 2 osoby (dle dokumentu)
const shoppingListData = {
    week1: [
        { category: "Maso a ryby", items: "Kuřecí prsa – cca 1,45 kg · Hovězí maso na guláš – 300 g · Lososový filet – 300 g · Treska – 300 g · Mleté krůtí maso – 300 g" },
        { category: "Vejce a mléčné výrobky", items: "Vejce – 20 ks · Tvaroh polotučný – 1 kg · Řecký jogurt (light) – 400 g · Mléko polotučné – 400 ml · Sýr strouhaný (light) – 30 g · Sýr halloumi – 200 g · Sýr feta – 50 g · Cottage sýr – 1050 g" },
        { category: "Obiloviny, luštěniny, přílohy", items: "Rýže – 750 g · Pohankové vločky – 100 g · Bezlepkové ovesné vločky – 60 g · Bezlepkové müsli – 60 g · Červená čočka – 200 g · Sladké brambory – 400 g · Brambory – 1,2 kg · Kukuřičný škrob – 1 balení" },
        { category: "Ovoce a zelenina", items: "Borůvky – 200 g · Jablka – 4 ks · Banány – 2 ks · Cibule – 4 ks · Paprika – 2 ks · Špenát čerstvý – 200 g · Cherry rajčata – 250 g · Brokolice – 200 g · Okurka – 2 ks · Cuketa – 1 ks · Mrkev – 2 ks · Celer – 1 kus · Petrželka – 1 svazek · Mix salátu – 1 balení · Citron – 3 ks · Ovoce ke svačině (jablka/hrušky) – 7 ks" },
        { category: "Ostatní", items: "Med · Skořice · Rýžové nudle – 100 g · Vlašské ořechy – 20 g · Mandle – 140 g · Bezlepkový chléb – 2 plátky · Olivový olej · Balsamico ocet · Dýňová semínka – 30 g · Bezlepkový vývar (kostky/instantní) · Sladká paprika, kmín, majoránka – koření" }
    ],
    week2: [
        { category: "Maso a ryby", items: "Kuřecí prsa – cca 1 kg · Krevety – 900 g · Vepřová panenka – 300 g · Hovězí maso – 300 g · Krůtí prsa – 300 g · Šunka bez lepku – 200 g · Tuňák konzerva – 2 ks" },
        { category: "Vejce a mléčné výrobky", items: "Vejce – 24 ks · Tvaroh – 500 g · Bílý jogurt – 900 g · Mozzarella (light) – 300 g · Mléko – 400 ml · Kefír – 2 l" },
        { category: "Obiloviny, luštěniny, přílohy", items: "Rýže – 750 g · Rýžová mouka – 200 g · Bezlepkové vločky – 100 g · Quinoa – 100 g · Cizrna (vařená/konzerva) – 600 g · Brambory – 1,1 kg · Dýně hokkaido – 400 g" },
        { category: "Ovoce a zelenina", items: "Rajčata – 1 kg · Cukety – 4 ks · Paprika – 3 ks · Brokolice – 300 g · Mrkev – 2 ks · Celer – kousek · Batáty – 2 ks · Cibule – 4 ks · Fazolky – 300 g · Mix salátu – 2 balení · Okurka – 2 ks · Banány – 4 ks · Mražené lesní plody – 200 g · Jahody – 700 g · Jablka – 2 ks · Zelenina ke svačině (mrkev)" },
        { category: "Ostatní", items: "Med · Skořice · Kukuřičný škrob · Tamari (bezlepková sójová omáčka) · Zázvor, česnek · Kari koření · Bezlepkový vývar · Olivy · Petrželka · Rozmarýn · Bazalka · Chilli · Olivový olej · Mandle – 175 g · Bezlepkový džem" }
    ]
};

// Zobrazení jídel
function renderMeals() {
    const week = document.getElementById('weekSelect').value;
    const day = document.getElementById('daySelect').value;
    const container = document.getElementById('mealContainer');
    
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

    // Aktualizuj text tlačítka a vygeneruj nákupní seznam na pozadí
    document.getElementById('toggleListBtn').innerText = `🛒 Zobrazit nákupní seznam pro ${week === 'week1' ? 'Týden 1' : 'Týden 2'}`;
    renderShoppingList(week);
}

// Zobrazení nákupního seznamu
function renderShoppingList(week) {
    const container = document.getElementById('shoppingListContainer');
    container.innerHTML = '';

    const lists = shoppingListData[week];
    if (lists) {
        lists.forEach(category => {
            const title = document.createElement('div');
            title.className = 'category-title';
            title.innerText = category.category;

            const items = document.createElement('div');
            items.className = 'category-items';
            items.innerText = category.items;

            container.appendChild(title);
            container.appendChild(items);
        });
    }
}

// Logika rozbalení / sbalení nákupního seznamu
document.getElementById('toggleListBtn').addEventListener('click', function() {
    const listContainer = document.getElementById('shoppingListContainer');
    if (listContainer.classList.contains('hidden')) {
        listContainer.classList.remove('hidden');
        this.innerText = "❌ Skrýt nákupní seznam";
    } else {
        listContainer.classList.add('hidden');
        const week = document.getElementById('weekSelect').value;
        this.innerText = `🛒 Zobrazit nákupní seznam pro ${week === 'week1' ? 'Týden 1' : 'Týden 2'}`;
    }
});

// Změna selectů skryje seznam (aby uživatel nebyl zmatený) a překreslí jídla
document.getElementById('weekSelect').addEventListener('change', () => {
    document.getElementById('shoppingListContainer').classList.add('hidden');
    renderMeals();
});
document.getElementById('daySelect').addEventListener('change', renderMeals);

window.onload = renderMeals;
