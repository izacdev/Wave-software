const express = require('express');
const path = require('path');
const app = exrpress();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

if(process.env.NODE_ENV === "production"){
    app.use(express.static("my-app"))
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`running on ${PORT}`))