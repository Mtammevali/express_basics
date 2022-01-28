const express = require('express');
//require path
const path = require('path');
const app = express();

//add public directiory
app.use(express.static('public'));
//add views directory path
app.set('view', path.join(__dirname, 'view'));

//add views template engine
app.set('view engine', 'ejs');


app.get('/user/:username', (req, res) => {

    let user = req.params.username;
    res.render('index.ejs', {username: user});
});







app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000`);
})