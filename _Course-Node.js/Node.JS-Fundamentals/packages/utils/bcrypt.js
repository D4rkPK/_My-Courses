const bcrypt = require('bcrypt');

const password = '123456';

bcrypt.hash(password, 5, function(err, hash) {
  console.log(hash);

  bcrypt.compare(password, hash, function(err, result) {
    console.log(result);
  });
});