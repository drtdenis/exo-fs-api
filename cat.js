const fs = require('fs')

// verifier la cmd line
if (process.argv.length !== 3) {
  console.log(`usage: node cat.js file.txt`)
  process.exit(1)
}

// check if file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

// est ce un fichier ?
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}

// lire le fichier
let text = fs.readFileSync(process.argv[2], 'utf-8')

console.log(text)

//node cat.js file.txt