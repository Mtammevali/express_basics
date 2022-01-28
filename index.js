const express = require('express');
//require path
const path = require('path');
const app = express();

//add public directiory
app.use(express.static('public'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));

//add views template engine
app.set('view engine', 'ejs');


app.get('/questions', (req, res) => {

    let questions = [
        {title: "what is node.js?", user : "Kadi", votes: "10"},
        {title: "what is express.js?", user : "Mihkel", votes: "7"}
    ]

    res.render('index', {questions:questions});
});



app.listen(3000, () => {
    console.log(`Server started on http://localhost:3000/questions`);
})