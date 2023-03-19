class Shop {
  #balance; //current balance of the shop
  #percentage = 20; //markup on goods

  #water = {
    price: 10,
    amount: 0,
  };

  //for simplicity, we will count the amount of coffee in cups
  #coffee = {
    price: 25,
    amount: 0,
  };

  constructor(balanceOfShop, amountWater, amountCoffee) {
    this.#balance = balanceOfShop;
    this.#water.amount = amountWater;
    this.#coffee.amount = amountCoffee;
  }

  //the private method calculates the markup on the product
  #calclatePercentage(price) {
    return (price / 100) * this.#percentage;
  }

  //show current balance of the shop
  getBalance() {
    return this.#balance.toFixed(2) + " UAH";
  }

  getCountOfWaterInStock() {
    return this.#water.amount + " liters";
  }

  //for simplicity, we will count the amount of coffee in cups
  getCountOfCoffeeInStock() {
    return this.#coffee.amount + " cups";
  }

  getPriceForCoffee() {
    return (
      (
        this.#coffee.price + this.#calclatePercentage(this.#coffee.price)
      ).toFixed(2) + " UAH"
    );
  }

  getPriceForWater() {
    return (
      (this.#water.price + this.#calclatePercentage(this.#water.price)).toFixed(
        2
      ) + " UAH"
    );
  }

  //a method for conducting the operation of selling water to store customers
  buyWater(countOfLiters = 1) {
    if (countOfLiters > this.#water.amount) {
      return `-there are only ${this.#water.amount} liters of water in stock`;
    }
    this.#water.amount -= countOfLiters;
    let toPay = countOfLiters * this.#water.price;
    toPay += this.#calclatePercentage(toPay);
    this.#balance += toPay;
    return `-to pay ${toPay.toFixed(2)} UAH`;
  }

  //method for the purchase of water for the store warehouse
  sellWater(countOfLiters = 100) {
    let toPay = countOfLiters * this.#water.price;
    if (toPay > this.#balance) {
      return `the store cannot buy so many liters of water, ${(
        toPay - this.#balance
      ).toFixed(2)} UAH is not enough for the purchase`;
    }
    this.#water.amount += countOfLiters;
    this.#balance -= toPay;
    return `${toPay.toFixed(2)} UAH was spent on the purchase of water`;
  }

  //a method for conducting the operation of selling coffee to store customers
  buyCoffee(countOfCups = 1) {
    if (countOfCups > this.#coffee.amount) {
      return `-there are only ${this.#coffee.amount} cups of coffee in stock`;
    }
    this.#coffee.amount -= countOfCups;
    let toPay = countOfCups * this.#coffee.price;
    toPay += this.#calclatePercentage(toPay);
    this.#balance += toPay;
    return `-to pay ${toPay.toFixed(2)} UAH`;
  }

  //method for the purchase of coffee for the store warehouse
  sellCoffee(countOfCups = 100) {
    let toPay = countOfCups * this.#coffee.price;
    if (toPay > this.#balance) {
      return `the store cannot buy so many cups of coffee, ${(
        toPay - this.#balance
      ).toFixed(2)} UAH is not enough for the purchase`;
    }
    this.#coffee.amount += countOfCups;
    this.#balance -= toPay;
    return `${toPay.toFixed(2)} UAH was spent on the purchase of coffee`;
  }
}

const shop = new Shop(10000, 100, 100);

console.log("current balance of the shop: ", shop.getBalance());
console.log("1 liter of water, please...", shop.buyWater(1));

console.log("2 cups of coffee, please...", shop.buyCoffee(2));

console.log("current balance of the shop: ", shop.getBalance());

console.log("purchase of water for storage ", shop.sellWater(100));
console.log("purchase of coffee for storage ", shop.sellCoffee(100));

console.log("current balance of the shop: ", shop.getBalance());

console.log("price for 1 liter of water is ", shop.getPriceForWater());
console.log("price for 1 cup of coffee is ", shop.getPriceForCoffee());

module.exports = {
  Shop,
};
