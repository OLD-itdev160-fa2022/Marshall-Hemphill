const foodArray = [
    {
        name: 'House Favorite',
        desc: 'Two eggs, any style, served with 1 pork chop season with salt.',
        price: 9.95,
    },
    {
        name: 'Chicken Fried Steak & Eggs',
        desc: 'Breaded and fried chicken topped with gravy, 2 eggs any style and toast.',
        price: 10.49,
    },
    {
        name: 'Mexican Omelette',
        desc: 'Made with chorizo sausage, onions, tomatoes, jalapeños, cheddar cheese and topped with salsa.',
        price: 10.25,
    },
    {
        name: 'Double Header',
        desc: 'Two pancakes or two slices of french toast, two eggs any style with your choice of bacon, ham, or sausage links.',
        price: 8.25,
    },
    {
        name: 'Cobb Salad',
        desc: 'Mixed greens, cheddar cheese, tomatoes, bacon, black olives, hard-boiled egg and chicken tender pieces with your choice of dressing.',
        price: 7.99,
    },
    {
        name: 'B.L.T',
        desc: 'Bacon, lettuce, tomato and mayo served on wheat toast.',
        price: 7.99,
    }
];

const beverageArray = [
    {
        name: 'Cappuccino',
        desc: 'Topped with whipped cream.',
        price: 1.80
    },
    {
        name: 'Hot Chocolate',
        desc: 'Topped with whipped cream.',
        price: 1.80
    },
];

const dessertArray = [
    {
        name: 'Cake',
        price: 2.25
    },
    {
        name: 'Tapioca',
        price: 1.99
    }
]

const foodMenu = document.querySelector('.food-menu');
const beverageMenu = document.querySelector('.beverage-menu');
const dessertMenu = document.querySelector('.dessert-menu');


// Loops through each array, appending new html code with item info
function displayMenu() {
    for (i = 0; i < foodArray.length; i++) {
        foodMenu.innerHTML += `
        <div class="food-item">
            <h3 class="food-name">${foodArray[i].name}</h3>
            <p class="food-desc">${foodArray[i].desc}</p>
            <p class="food-price">\$${foodArray[i].price}</p>
        </div>
    `
    };

    for (i = 0; i < beverageArray.length; i++) {
        beverageMenu.innerHTML += `
        <div class="beverage-item">
            <h3 class="beverage-name">${beverageArray[i].name}</h3>
            <p class="beverage-desc">${beverageArray[i].desc}</p>
            <p class="beverage-price">\$${beverageArray[i].price}</p>
        </div>
    `
    };

    for (i = 0; i < dessertArray.length; i++) {
        dessertMenu.innerHTML += `
        <div class="dessert-item">
            <h3 class="dessert-name">${dessertArray[i].name}</h3>

            <p class="dessert-price">\$${dessertArray[i].price}</p>
        </div>
    `
    };
}

displayMenu();