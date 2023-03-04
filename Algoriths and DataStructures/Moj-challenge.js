
class Product {
  constructor(code, name, price) {
    this.code = code;
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class FruitTea extends Product {
  getPrice() {
    return this.price / 2;
  }
}

class Strawberries extends Product {
  constructor(code, name, price) {
    super(code, name, price);
    this.count = 0;
  }

  getPrice() {
    this.count += 1;
    if (this.count >= 3) {
      return 4.5;
    }
    return this.price;
  }
}

class Checkout {
  constructor() {
    this.total = 0;
    this.products = {
      FR1: new FruitTea("FR1", "Fruit tea", 3.11),
      SR1: new Strawberries("SR1", "Strawberries", 5.0),
      CF1: new Product("CF1", "Coffee", 11.23),
    };
  }

  scan(code) {
    this.total += this.products[code].getPrice();
  }

  getTotal() {
    return this.total;
  }
}



// Example usage:
const checkout = new Checkout();
checkout.scan("FR1");
checkout.scan("SR1");
checkout.scan("SR1");
checkout.scan("FR1");
checkout.scan("CF1");
console.log(checkout.getTotal());
