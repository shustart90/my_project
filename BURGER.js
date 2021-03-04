class bigBurger {
	constructor () {
		this.cal = 40;
		this.price = 100;
	}
	addTopping (topping) {
		if (topping == "spice") {
			this.cal += 0;
			this.price += 15;
			return this;
		}
		else if (topping == "miones") {
			this.cal += 5;
			this.price += 20;
			return this;
		}
		else {
			this.cal += 0;
			this.price += 0;
			return this;
		}
	}
}

class smallBurger {
	constructor () {
		this.cal = 20;
		this.price = 50;	
	}
	addTopping (topping) {
		if (topping == "spice") {
			this.cal += 0;
			this.price += 15;
			return this;
		}
		else if (topping == "miones") {
			this.cal += 5;
			this.price += 20;
			return this;
		}
		else {
			this.cal += 0;
			this.price += 0;
			return this;
		}

	}
}

class bigBurgerCheese extends bigBurger{
	constructor () {
		super(); 
		this.cal += 20;
		this.price += 10;
	}
}

class smallBurgerCheese extends smallBurger{
	constructor () {
		super(); 
		this.cal += 20;
		this.price += 10;
	}
}

class bigBurgerSalad extends bigBurger{
	constructor () {
		super(); 
		this.cal += 5;
		this.price += 20;
	}
}

class smallBurgerSalad extends smallBurger{
	constructor () {
		super(); 
		this.cal += 5;
		this.price += 20;
	}
}

class bigBurgerPotato extends bigBurger{
	constructor () {
		super(); 
		this.cal += 15;
		this.price += 10;
	}
}

class smallBurgerPotato extends smallBurger{
	constructor () {
		super(); 
		this.cal += 15;
		this.price += 10;
	}
}

let newBurger = new smallBurgerPotato().addTopping("spice");
console.log(newBurger);