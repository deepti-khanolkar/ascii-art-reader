const lib = require('./index')

test ('Library', (done) => {
    let textFile = 'texts'
    lib.readDir(textFile)
    done()
})