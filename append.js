/*node append.js src1.txt src2.txt src3.txt dst.txt

Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt

Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas.*/


const fs = require('fs');

// verif du nombre d'arguments
if (process.argv.length < 3) {
  console.log('usage: node ls.js directory');
  process.exit(1);
}
// verif si le chemin existe
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`);
  process.exit(1);
}

                  // correction Sarah B

let Text = '';
//length -1 pour select le dernier de la liste
for (let i = 2; i < process.argv.length - 1; ++i) {
  Text += fs.readFileSync(process.argv[i], 'utf-8') + '\n';
}
const last = process.argv[process.argv.length - 1];
fs.writeFileSync(last, Text);