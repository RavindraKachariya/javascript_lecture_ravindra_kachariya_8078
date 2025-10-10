// 1. Class — Blueprint of Object
{
    class Car {
        constructor(brand, color, price) {
            this.brand = brand;
            this.color = color;
            this.price = price;
        }

        start() {
            console.log(`${this.brand} is Starting...`);
        }

        stop() {
            console.log(`${this.brand} Stopped.`);
        }
    }

    const car1 = new Car("BMW", "Black", 8000000);
    car1.start();
    car1.stop();
}

// 2. Restaurant System
{
    class Chef {
        constructor(name, speciality) {
            this.name = name;
            this.speciality = speciality;
        }

        cook(dish) {
            console.log(`${this.name} is cooking ${dish}`);
        }
    }

    class Waiter {
        constructor(name, chef) {
            this.name = name;
            this.chef = chef;
        }

        takeOrder(dish) {
            console.log(`${this.name} took order for ${dish}`);
            this.chef.cook(dish);
        }
    }

    const chef1 = new Chef("Raj", "Italian");
    const waiter1 = new Waiter("Aman", chef1);

    waiter1.takeOrder("Pasta");
}

// 3. E-commerce Product System
{
    class Product {
        constructor(name, price, stock) {
            this.name = name;
            this.price = price;
            this.stock = stock;
        }

        showDetails() {
            console.log(`${this.name} | ₹ ${this.price} | In Stock: ${this.stock}`);
        }

        buy(quantity) {
            if (quantity > this.stock) {
                console.log(`Not enough stock for ${this.name}`);
            }
            else {
                this.stock -= quantity;
                console.log(`You bought ${quantity} ${this.name}(s). Remaining Stock: ${this.stock}`);
            }
        }
    }

    const p1 = new Product("HP OMEN Laptop", 115000, 10);
    const p2 = new Product("Iphone 13", 40000, 5);

    p1.showDetails();
    p1.buy(3);
    p2.showDetails();
    p2.buy(2);
}