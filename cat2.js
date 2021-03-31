const  fs = require ('fs')

if (process.argv.length < 3) {
  console.log(`usage: node cat.js file.txt file2.txt file3.txt`)
  process.exit(1)
}
// Correction Raphael
// Verification des fichiers
for (let elem of process.argv.slice(2)) {
  if (!(fs.existsSync(elem))) {
    console.log(`The file "${elem}" doesn't exist`)
    process.exit(1)
  }
  const stats = fs.statSync(elem)
  if (!stats.isFile()) {
    console.log(`error : "${elem}" is not a file.`)
    process.exit(1)
  }
}

// lire le fichier
let text = ''

 for (let elem of process.argv.slice(2)) {
  text += fs.readFileSync(elem, 'utf-8') + '\n'
} 
console.log(text)
