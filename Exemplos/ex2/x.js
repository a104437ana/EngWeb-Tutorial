var express = require('express');
var router = express.Router();
var axios = require('axios');

function now() {
    return new Date().toLocaleString('pt-PT', { hour12: false });
}

router.get('/', function(req, res, next) {
    axios.get('http://localhost:17000/books')
    .then(resp => {
        res.status(200).render("lista", {title: "Livros", date: now(), livros: resp.data});
    })
    .catch(error => {
        console.log(error);
        res.status(500).render('error',{title: "Erro", date: now(), error: error});
    })
});

router.get('/:id', function(req, res, next) {
    axios.get('http://localhost:17000/books/' + req.params.id)
    .then(resp => {
        res.status(200).render("ent", {title: "Livro de id " + req.params.id, date: now(), livro: resp.data});
    })
    .catch(error => {
        console.log(error);
        res.status(500).render('error',{title: "Erro", date: now(), error: error});
    })
});

router.get('/entidades/:idAutor', function(req, res, next) {
    axios.get('http://localhost:17000/books/')
    .then(resp => {
        let l = resp.data.filter(livro => 
            livro.author.includes(req.params.idAutor)
        );
        res.status(200).render("ent", {title: "Autor " + req.params.idAutor, date: now(), livros: l, autor: req.params.idAutor});
    })
    .catch(error => {
        console.log(error);
        res.status(500).render('error',{title: "Erro", date: now(), error: error});
    })
});

module.exports = router;
