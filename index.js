const fs = require('fs')
const readline = require('readline')

console.log("Welcome")

let imgArr = []
let fileName = 'data'

readDir(fileName)

function readDir(fileName){
    fs.readdir(fileName,(err, data) => {
        console.log()
        for (let i=0; i<data.length; i++){
            let index = i + 1
            console.log(index + " " + data[i])
        }
        imgArr = data
        pressEnter()
    })
}

function loadFile(input) {
    let txtLink = `data/${imgArr[input-1]}`
    fs.readFile(txtLink, 'utf-8', (err, data) => {
    console.log(data)
    enterComment()  
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

function enterComment(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.question('Please enter some comments: ', function (input) {
        rl.close()
        console.log("Your comment: " + input)

    // Call any functions you like here. For example:
        uploadComment(input)
    })
}

function uploadComment(input){
    fs.readFile('tests/test.txt', 'utf-8', (err, data) =>{
        data += `\n${input}`
        fs.writeFile('tests/test.txt', data, (err) => {
            //console.log(err)
        }) 
    }) 
}

module.exports = {
    loadFile,
    readDir,
    pressEnter
}