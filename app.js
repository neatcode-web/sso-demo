const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const apiResponse = require("./helpers/apiResponse");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//To allow cross-origin requests
app.use(cors());

//load client app
app.use(express.static(process.cwd()+"/client/dist/sso-demo/"));

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

// start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});