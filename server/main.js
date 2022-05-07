const express = require("express");
const cors = require("cors");
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




let blinkCount = 0;
function getBlink() {
	let pyshell = new PythonShell("blink.py");
	pyshell.send("hello");

	pyshell.on("message", function (message) {
		blinkCount = message;
	});
}

app.get("/blinkcount", (req, res) => {
	getBlink();
	setTimeout(() => {
		console.log(blinkCount);
		res.send(blinkCount);
	}, 3000);
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
	});
});

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
	console.log(
		age +
			" " +
			gender +
			" " +
			blinkrate +
			" " +
			redness +
			" " +
			burning_sensation +
			" " +
			screen_time +
			" " +
			scratchy_level +
			" " +
			blurred_vision +
			" " +
			dryness
	);
});

const PORT = 5500;

app.listen(PORT, () => console.log(`Server Running at ${PORT} `));
