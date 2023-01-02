const sharp = require('sharp');


/* reducir el peso de la imagen */
sharp('original.webp')
    .resize(200, 200)
    .toFile('image.webp');


