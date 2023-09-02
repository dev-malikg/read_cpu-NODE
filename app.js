const express = require('express')
const cors = require('cors')
var exec = require("child_process").exec

const process = require('process');
const usage = process.cpuUsage();
console.log(usage);



// FUNCTIONS
String.prototype.replaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 

// EXPRESS
const app = express()
app.set('view-engine', 'ejs')
app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false })) 

// ROUTES
app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/cpu', (req, res) => {
    res.render('meter.ejs')
})

app.post('/api', async (req, res) => {

    var exec = require("child_process").exec
    exec("python3 main.py", function (error, stdout, stderr) {

        if (error !== null) { console.log("exec error: " + error) }
        let result = stdout.replaceAll("'", '"')
        const output = JSON.parse(result)

        // obj["0"]  -  obj["0"].processName
        res.send(output)
    })
})

// PORT
app.listen(3000, console.log("[>server] lisstning on port 3000 !!"))
