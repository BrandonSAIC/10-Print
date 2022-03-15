const w = process.stdout.columns
const RESET = '\x1b[0m'
const blocks = //['╔','╗','╚','╝']
['*','•',]
const colors = ['\x1b[31m','\x1b[34m','\x1b[37m'


]

function draw () {
  setTimeout(draw, 1000/5)
 let output = ''
 for (let i = 0; i < w; i++) {
   let r= Math.floor(Math.random() * blocks.length)
   let c= Math.floor(Math.random() * colors.length)
   output += blocks[r]
   output += colors[c] + blocks [r]
 }

  console.log(output)
}
draw()
