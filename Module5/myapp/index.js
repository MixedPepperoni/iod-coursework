const app = require('./app');
const port = 3000;



// import all calculator routes (up the top)


// const testRoutes = require("./routes/myTestRoutes.js"); //info like this should be at top of file

// const app = express(); //kept incase of issues



// app.use("/mytest", testRoutes); //binds it to mytestroutes code. js is to sepcify the file type.

// app.get('/', (req, res) => {
//   res.send('Hello World!')
//  })

// app.get("/*", (req, res) => {
//   // * is a catch all for non specifc url. Ex: 300678 = Nothing here//
//   res.send("Nothing here");
// });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
// app.use("/", express.static("public"));
//taskkill /f /im node.exe// to kill in use ports

