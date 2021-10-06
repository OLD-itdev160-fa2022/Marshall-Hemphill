// Greeting Message
var user = 'Professor! ';
var salutations = 'Hey, '
var greetings = salutations + user + 'Here are the latest Lenovo Reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greetings;

// Product Price
var price = 800,
    studentDiscount = .20,
    studentPrice = price - (price * studentDiscount),
    PriceEl = document.getElementById('price'),
    StudentPriceEl = document.getElementById('student-price');

    PriceEl.textContent = "Price: " + price.toFixed(2);
    StudentPriceEl.textContent = "Student Price: " + studentPrice.toFixed(2);