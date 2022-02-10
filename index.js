/// three import thing you need to know for node js =>
// 1: npm install express (checking)
// 2: const a ={
// average:(a,b)=>{
// console.log((a+b) / 2);
// },
// percent:(a,b)=>{
// console.log((a/b)*100)        (file based)
// }
// }

// module.exports = a
///app.js
// const a = require('./index')
// a.average(10,20)
// a.percent(20,100)

// 1: file based
// 2:build In
// 3:third party

// 2:-> build in -----

// 1:for build in you need go in google then open node js doc then figerout the file system (fs)
// 2: you need to create a .txt file in your editor (sample.txt) then write any text like 'hello world'
// 3:(index.js) -> write code

// const fs = require("fs");

// 'read file' =========>

// const js = fs.readFileSync("./read.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });
// console.log(js);

/// write file ====
// const text = "hello world";
// const writeFile = fs.writeFileSync("./riaz.txt", text, (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
//   return data;
// });

// console.log(writeFile);

// const path = require("path");

// const pathname = path.extname("Node_JS_start/index.js");
// const pathname = path.basename("/Users/Hp/Desktop/Node_JS_start");
// const pathname = path.dirname("/Users/Hp/Desktop/Node_JS_start");
// const join = "/6packages";
// const pathname = path.join("/Users/Hp/Desktop/Node_JS_start" + join);

// console.log(pathname);

// const os = require("os");

// const mymem = os.freemem();
// const mymem = os.hostname();
// const mymem = os.cpus();
// console.log(mymem);

//// third-party packages build

// const pokemon = require("pokemon");
// const name = pokemon.random();
// const name = pokemon.all();
// const name = pokemon.languages;
// console.log(name);

////own server create

const http = require("http");
const fs = require("fs");
const PORT = 5000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>This is yours about page</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>This is yours about page</h1>");
  }
  if (req.url === "/service") {
    return res.end("<h1>This is yours service page</h1>");
  }
  if (req.url === "/blog") {
    return res.end("<h1>This is yours blog page</h1>");
  } else {
    return res.end("<h1>404 not found</h1>");
  }
});

server.listen(PORT, hostname, () => {
  console.log(`server is working on http://${hostname}:${PORT}`);
});

console.log(server);
