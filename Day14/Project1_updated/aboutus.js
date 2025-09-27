const express = require('express')
const users = require('./MOCK_DATA.json')
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Hello From Express");
});

app.get('/user', (req, res) => {
    res.json(users)
});



app.get('/user/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, './aboutus.html'));
});


app.get('/user/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(
        user => user.id === id
    )
    return res.json(user)
})


app.post('/user', (req, res) => {
    const { first_name, last_name, email } = req.body;
    
    if (!first_name || !last_name || !email) {
        return res.status(400).send('Missing fields');
    }
    
    const maxId = users.reduce((max, user) => user.id > max ? user.id : max, 0);
    const newUser = {
        id: maxId + 1,
        first_name,
        last_name,
        email
    };
    
    users.push(newUser);
    
    res.status(201).json(newUser);
});


app.put('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const { first_name, last_name, email } = req.body;

    const user = users.find(u => u.id === id);
    if (!user) {
        return res.status(404).send('User not found');
    }

    if (first_name) user.first_name = first_name;
    if (last_name) user.last_name = last_name;
    if (email) user.email = email;

    res.json(user);
});




app.delete('/user/:id', (req, res) => {
    const id = Number(req.params.id);  // 15
    // console.log(id);
    const userIndex = users.findIndex(
        user => user.id === id
    )
    if (userIndex === -1)
        return res.status(404).send('Data not found');

    const deletedItem = users.splice(userIndex, 1);
    return res.json(user);
});


app.listen(1000)
console.log("From Start Script ");