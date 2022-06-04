const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const { PythonShell } = require("python-shell");
const app = express();

if (!fs.existsSync("./files")) {
  fs.mkdirSync("./files");
}
if (!fs.existsSync("./images")) {
  fs.mkdirSync("./images");
}


app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "75mb" }));
app.use(bodyParser.urlencoded({ limit: "75mb", extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.get("/", (req, res) => {
  res.send("welcome to eog server");
  console.log(`Request was sent to ${req.url}`)
});



app.get("/blinkcount",(req,res)=>{
   console.log(`Request was sent to ${req.url}`)
   let pyshell = new PythonShell("./Core/blink.py");
   pyshell.send("hello");
   pyshell.on("message",function(message){
       console.log(message)
       res.status(200).send(message.toString())
   })
   pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
  });
})

app.get("/getchart", (req, res) => {
  console.log(`Request was sent to ${req.url}`)
  res.setHeader("Content-Type", "image/svg+xml");
  res.sendFile(__dirname + "/images/fig.svg");
});

//upload file from client
app.post("/upload", (req, res) => {
  console.log(`Request was sent to ${req.url}`)
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  console.log("File Received Successfully")
});


app.post("/disease", (req, res) => {
  console.log(`Request was sent to ${req.url}`)
  let pyshell = new PythonShell("./Core/disease.py");
  
  const {
    age,
    gender,
    blinkrate,
    redness,
    burning_sensation,
    screen_time,
    scratchy_level,
    blurred_vision,
    dryness,
    thready_mucus_discharge,
  } = req.body;
  const person = {
    iage: age,
    igender: gender,
    iblinkrate: blinkrate,
    iredness: redness,
    iburning_sensation: burning_sensation,
    iscreen_time: screen_time,
    iscratchy_level: scratchy_level,
    iblurred_vision: blurred_vision,
    idryness: dryness,
    ithready_mucus_discharge: thready_mucus_discharge,
  };
  console.log(person);
  pyshell.send(JSON.stringify(person));
  pyshell.on("message", function (message) {
    console.log(message);
    res.status(200).send(message)
  });
  pyshell.end(function (err,code,signal) {
    if (err) throw err;
    console.log('The exit code was: ' + code);
    console.log('The exit signal was: ' + signal);
    console.log('finished');
  });
});

const PORT = 5500;

app.listen(PORT, () => console.log(`Server Running at ${PORT} `));
