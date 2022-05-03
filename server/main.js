const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

function getBlink() {
  var sys = require("util"),
    spawn = require("child_process").spawn,
    dummy = spawn("python", ["blink.py"]);

  dummy.stdout.on("data", function (data) {
    const ans = data.toString();
    console.log(ans);
  });
}

app.get("/blinkcount", (req, res) => {
  var sys = require("util"),
    spawn = require("child_process").spawn,
    dummy = spawn("python", ["blink.py"]);

  dummy.stdout.on("data", function (data) {
    const ans = data.toString();
    console.log(ans);
    setTimeout(() => {
      res.send(ans);
    }, 2000);
  });
});

app.post("/upload", (req, res) => {
  const newpath = __dirname + "/files/";
  const file = req.files.file;
  const filename = file.name;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    getBlink();
  });
});

const PORT = 5500;

app.listen(PORT, () => console.log(`Server Running at ${PORT} `));
