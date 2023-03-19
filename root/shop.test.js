const { Shop } = require("./shop");

const suffix = ".00 UAH";

const shop = new Shop(10000, 100, 100);

describe("testing functions getCountOfWaterInStock and getCountOfCoffeeInStock", () => {
  test("function getCountOfWaterInStock must return a string ending in ' liters'", () => {
    expect(shop.getCountOfWaterInStock()).toMatch(/ liters/);
  });
  test("function getCountOfCoffeeInStock must return a string ending in ' cups'", () => {
    expect(shop.getCountOfCoffeeInStock()).toMatch(/ cups/);
  });
});

describe("testing getPrice", () => {
  test("function getPriceForCoffee should return 30.00 UAH", () => {
    expect(shop.getPriceForCoffee()).toBe(30 + suffix);
  });
  test("function getPriceForWater should return 12.00 UAH", () => {
    expect(shop.getPriceForWater()).toBe(12 + suffix);
  });
});

describe("testing buyWater", () => {
  test("buyWater 5 liters should return '60 UAH'", () => {
    expect(shop.buyWater(5)).toMatch(/60.00 UAH/);
  });
  test("buyWater 1000 liters must contain words 'there are only'", () => {
    expect(shop.buyWater(1000)).toMatch(/there are only/);
  });
});

describe("testing sellWater", () => {
  test("sellWater 50 liters should return '500.00 UAH was spent on the purchase of water'", () => {
    expect(shop.sellWater(50)).toBe(
      500 + suffix + " was spent on the purchase of water"
    );
  });
  test("sellWater 5000 liters must contain words 'the store cannot buy so many liters of water'", () => {
    expect(shop.sellWater(5000)).toMatch(
      /the store cannot buy so many liters of water/
    );
  });
});

describe("testing buyCoffee", () => {
  test("buyCoffee 4 cups should return '-to pay 120.00 UAH'", () => {
    expect(shop.buyCoffee(4)).toBe("-to pay " + 120 + suffix);
  });
  test("buyCoffee 2000 cups must contain words 'there are only'", () => {
    expect(shop.buyCoffee(2000)).toMatch(/there are only/);
  });
});

describe("testing sellCoffee", () => {
  test("sellCoffee 20 cups should return '500.00 UAH was spent on the purchase of coffee'", () => {
    expect(shop.sellCoffee(20)).toBe(
      500 + suffix + " was spent on the purchase of coffee"
    );
  });
  test("sellCoffee 5000 cups must contain words 'the store cannot buy so many cups of coffee'", () => {
    expect(shop.sellCoffee(5000)).toMatch(
      /the store cannot buy so many cups of coffee/
    );
  });
});
