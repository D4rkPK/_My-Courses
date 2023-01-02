const faker = require("faker");

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
      });
    }
  }

  create() {}

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
}

module.exports = UsersService;
