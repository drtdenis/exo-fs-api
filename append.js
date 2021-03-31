/*node append.js src1.txt src2.txt src3.txt dst.txt

Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt

Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas.*/


const fs = require('fs');
const { readFileSync, writeFileSync } = require('fs');


if (process.argv.length > 5) {
  console.log('usage: node ls.js directory');
  process.exit(1);
}

if (!fs.existsSync(process.argv[2, 3, 4])) {
  console.log(`Error: ${process.argv[2, 3, 4]} does not exist`);
  process.exit(1);
}
const txt = process.argv[process.argv[2, 3, 4]];
writeFileSync('./dst2.txt', txt)