const sharp = require('sharp');

sharp('js-logo.png')
    .resize(80)
    .grayscale()
    .toFile('js-resized.png');