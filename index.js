const express = require("express");

const app = express();
const articleRoute = require("./routes/article.route")
app.use(express.json());

app.use("/api/articles", articleRoute);

const PORT = 7777;

app.listen(PORT, ()=>{
    console.log("listening on port...")
})