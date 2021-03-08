class ProductsList{
    constructor(container = '#catalog'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    } 
	_fetchProducts(){
	        this.goods = [
	        {id: 1, title: 'Гарри Поттер', price: 1000},
            {id: 2, title: 'Хоббит', price: 200},
            {id: 3, title: 'Властелин Колец', price: 400},
            {id: 4, title: 'Ведьмак', price: 2050},
            {id: 5, title: 'Библия', price: 50},
            {id: 6, title: 'Зеленая Миля', price: 850},];
    } 
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    productsSum () {
    	let goodsSum = 0;
    	for(let product of this.goods){
            const productObj = new ProductItem(product);
            goodsSum += productObj.price;
        }
        return goodsSum;
    }
    
}


class ProductItem{
	constructor(product, img = 'https://placehold.it/200x150'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		 return `<div class="product-item" id="item-${this.id}">
    			<img src="img/small/${this.id}.jpg" alt="">
                <h3 class="product-name">${this.title}</h3>
                <p class="product-price">${this.price} руб.</p>
                <button class="buy-btn" id="add-${this.id}">Добавить в корзину</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();

class BusketList {
	constructor (container = '#busket'){
		this.container = container;
	}
	SumInBusket() {

	}
	render() {

	}
}

class BusketItem {
	constructor {

	}
	render() {

	}
}

console.log(list.productsSum ());