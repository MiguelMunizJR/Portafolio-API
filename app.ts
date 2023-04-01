const express = require("express");
const cors = require("cors");

//* init app
const app = express();

//* middlewares
app.use(cors());
app.use(express.json());

app.get("/api/v1/", (req, res) => {
	res.status(200).json({
		message: "🌐 Hello Music!",
	});
});

app.listen(9000, () => {
	console.log("✳️ Server online at port: 9000");
});