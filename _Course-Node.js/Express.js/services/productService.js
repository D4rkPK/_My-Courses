const faker = require("faker");

class ProductService {

    constructor() {
        this.products = [];
        this.generate();
    }

    generate() {
        const limit = 100;
        for (let i = 0; i < limit; i++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseFloat(faker.commerce.price(), 10),
                image: faker.image.image(),
            });
        }
    }

    create() {

    }

    find() {
        return this.products;
    }

    findOne(id) {
        return this.products.find(item => item.id === id);
    }

}

module.exports = ProductService;