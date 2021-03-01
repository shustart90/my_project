function makeProduct (name, price, id) { //конструктор для создания продуктов
			this.name = name;
			this.price = price;
			this.id = id;
	}
let harryPotter = new makeProduct ("Гарри Поттер", 1000, 1);
let hobbit = new makeProduct ("Хоббит", 800, 2);
let lotr = new makeProduct ("Властелин Колец", 2400, 3);
let witcher = new makeProduct ("Ведьмак", 400, 4);
let bible = new makeProduct ("Библия", 60, 5);
let greenMile = new makeProduct ("Зеленая Миля", 999, 6);
let products = [harryPotter, hobbit, lotr, witcher, bible, greenMile]; 
const renderProduct = (name, price, id) => {
    return `<div class="product-item" id="item_${id}">
    			<img src="img/small/${id}.jpg" alt="">
                <h3 class="product-name">${name}</h3>
                <p class="product-price">${price} руб.</p>
                <button class="buy-btn" id="add-${id}">Добавить в корзину</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.name, item.price, item.id));
    //document.querySelector('#catalog').innerHTML = productsList;
    productsList.forEach(item => document.querySelector('#catalog').innerHTML += item);
};
renderPage(products);
let busket = document.createElement("div");
busket.id = "min-busket";
let busketMoney = document.createElement("div");
busketMoney.innerText = "Корзина пуста";
let bodyCont = document.querySelector("body");
let butToBuskForm = document.createElement("form");
let butToBusk = document.createElement("button");
butToBuskForm.action = "busket.html";
butToBusk.innerText = "Перейти в корзину";
butToBuskForm.appendChild(butToBusk);
busket.appendChild(busketMoney);
busket.appendChild(butToBuskForm);
bodyCont.appendChild(busket);