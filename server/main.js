const express = require("express");
const cors = require("cors");
const fs = require("fs");
const fileupload = require("express-fileupload");
const { PythonShell } = require("python-shell");
const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	cors({
		origin: "*",
		credentials: true,
		optionSuccessStatus: 200,
	})
);


// Funtion That Executes The Script In Backend and gets blinkCount result
let blinkCount = 0;
function getBlink() {
	let pyshell = new PythonShell("blink.py");
	pyshell.send("hello");

	pyshell.on("message", function (message) {
		blinkCount = message;
	});
}
//Get Blink Count Result
app.get("/blinkcount", (req, res) => {
	getBlink();
	setTimeout(() => {
		console.log(blinkCount);
		res.send(blinkCount);
	}, 3000);
});

//upload file from client
app.post("/upload", (req, res) => {
	if (!fs.existsSync("./files")) {
		fs.mkdirSync("./files");
	}
	const newpath = __dirname + "/files/";
	const file = req.files.file;
	const filename = file.name;

	file.mv(`${newpath}${filename}`, (err) => {
		if (err) {
			console.log(err);
			return;
		}
	});
});





let diseaseResult = " ";
function checkDisease(person) {
	let pyshell = new PythonShell("disease.py");
	pyshell.send(JSON.stringify(person));

	pyshell.on("message", function (message) {
		console.log(message);
		diseaseResult = message;
	});
}

app.post("/disease", (req, res) => {
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
	};
	console.log(person);
	checkDisease(person);
	setTimeout(() => res.send(diseaseResult), 2000);
});

const PORT = 5500;

app.listen(PORT, () => console.log(`Server Running at ${PORT} `));
