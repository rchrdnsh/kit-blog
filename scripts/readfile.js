import fs from 'fs';
let file = './scripts/file.txt';

fs.writeFile(file, 'Hola Tweeps!', function(error) {
  if(error) { 
    console . log ( err );
  } else { 
    console.log('The file was written successfully!');
  }
});

let contents = fs.readFileSync(file);

console.log(contents);