const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello from my Smarty vover and pant!!!! Whit auto start")
});

app.listen(port, () => {
    console.log("Lisetnig to port", port);
});