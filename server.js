const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname, "my-app/public"))
    app.use(express.static(__dirname,  "public/index.html"))
}
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "/my-app/public/index.html"));
  });
const port = process.env.PORT || 4000;
app.listen(port, console.log(`engine running on ${port}`))