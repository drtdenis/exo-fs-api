if (process.argv.length != 5) {
  console.log(`usage: node echo.js il faut 3 parametre`)
  process.exit(1) // exit the program mettre 3 parametre
}
/*let name = process.argv[2]
console.log(`hello hard fork`)*/

let string = ''

 for(let i = 2 ; i<process.argv.length ; i++) {
   string += ` ${process.argv[i]}`// result += 
 }
 //console.log(string.trim())

 console log(result)