const express = require('express');
const router = express.Router(); 
const db = require('../db.js');


router.get('/', (req, res) => {
    return res.send("index router working");
});

router.get('/movies', (req, res) => {
    return res.send(db);
    
});

router.get('/movies/id/:id', (req, res) => {
    const id = req.params.id
    return res.send(db[id]);
    
});

router.get('/movies/title/:title', (req, res) => {
    const title = req.params.title;
    //console.log(title);
    
    db.forEach( (item ) => {
        //console.log("item title",item.title);
        if(item.title.toLowerCase() == title.toLowerCase()){     
            console.log("item",item)
            return res.send(item);
        }
    })
    return res.send("movie not found");

});

router.get('/movies/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    
    db.forEach( (item ) => {
        if(item.genre.toLowerCase() == genre.toLowerCase()){        
            return res.send(item);
        }   
    })
    return res.send("genre not found");
});


module.exports = router;


