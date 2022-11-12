let express = require('express')
let app = express()
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:l9lWrqljtrNgpIYE@deliciouss.whfpyzi.mongodb.net/recruitment?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

var port = process.env.PORT || 8080

let apiRoutes = require('./src/route/api-routes')
app.use('/api', apiRoutes)


app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, function () {
    console.log("Running REST-API on port " + port);
});