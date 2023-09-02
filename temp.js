// var exec = require("child_process").exec

// String.prototype.replaceAll = function(str1, str2, ignore) 
// {
//     return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
// }

// var p = " 66 "
// exec("python3 main.py", function (error, stdout, stderr) {
//     if (error !== null) { console.log("exec error: " + error) }

//     let result = stdout.replaceAll("'", '"')

//     const obj = JSON.parse(result)
//     console.log(obj) //     obj["0"]   -    obj["0"].processName
// })



const os = require('os');

// Take the first CPU, considering every CPUs have the same specs
// and every NodeJS process only uses one at a time.
const cpu = os.cpus()[0];
const total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);

// Accumulate every CPU times values

const usage = process.cpuUsage();

const currentCPUUsage = (usage.user + usage.system) * 1000;
const perc = currentCPUUsage / total * 100;
console.log(`CPU Usage (%): ${perc}`);

// Find out the percentage used for this specific CPU