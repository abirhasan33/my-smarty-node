const express = require('express');
const cors = require("cors");
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from my Smarty vover and pant!!!! Whit auto start")
});

const users = [
    {id: 1, name: "shabana", email: "sabana@gmail.com", phone: "0174449732"},
    {id: 2, name: "shabnur", email: "sabnur@gmail.com", phone: "0174449732"},
    {id: 3, name: "shubnorshutita", email: "shubnorshutita@gmail.com", phone: "0174449732"},
    {id: 4, name: "Jomeja", email: "Jomeja@gmail.com", phone: "0174449732"},
    {id: 5, name: "saboni", email: "saboni@gmail.com", phone: "0174449732"},
    {id: 6, name: "shila", email: "shila@gmail.com", phone: "0174449732"},
    {id: 7, name: "Sabila", email: "Sabila@gmail.com", phone: "0174449732"},
]

app.get("/user", (req, res)=> {
    // console.log('quiry', req.query);
    if(req.query.name){
        const search = res.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }else{

        res.send(users)
    }
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.listen(port, () => {
    console.log("Lisetnig to port", port);
});