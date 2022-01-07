const fs = require('fs')
const readline = require('readline')

console.log("Welcome")

let imgArr = []

fs.readdir('data',(err, data) => {
    console.log()
    for (let i=0; i<data.length; i++){
        let index = i + 1
        console.log(index + " " + data[i])
    }
    imgArr = data
    pressEnter()
})

function loadFile(input) {
    let txtLink = `data/${imgArr[input-1]}`
    fs.readFile(txtLink, 'utf-8', (err, data) => {
    console.log(data)
    })          
}

function pressEnter() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
        
    rl.question('Which file should I load? ', function (input) {
        rl.close()

        console.log("You entered :" + input)

    // Call any functions you like here. For example:
        loadFile(input)
    })
}

