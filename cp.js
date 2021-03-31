const  { readFileSync , writeFileSync }  =  require ( 'fs' )


// Lire le contenu du fichier src.txt et l'assigner à txt
const txt = readFileSync('./file.txt', 'utf-8')

// verifier la cmd line

if (process.argv.length != 4) {
  console.log(`usage: node cp.js readFileSync writeFileSync`)
  process.exit(1) 
}


// check if file exists



// Ecrire le contenu de la variable txt dans dst.txt
writeFileSync('./file3.txt', txt)


let name = process.argv[2]
console.log(`ok fichiercopié`)


// node cp.js readFileSync writeFileSync