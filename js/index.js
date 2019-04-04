const router = require('./roter.js');
var app = router(3412);

var operadoras = [
    {nome: "Oi", codigo: 14},
    {nome: "Vivo", codigo: 15},
    {nome: "Tim", codigo: 41}
];

var contatos  = [
    { nome: "Gustavo",  telefone: "985309446" },
    { nome: "Moisés",   telefone: "989456123" },
    { nome: "Sônia",    telefone: "985448567" },
    { nome: "José",     telefone: "934343416" },
    { nome: "Pedro",    telefone: "991114534" }
];

app.interceptor(function(require, response, next){
    response.setHeader('Acces-Control-Allow-Origin', '*');
    next();
});

app.get('/operadoras', function(require, response){
    response.write(JSON.stringify(operadoras));
    response.end();
});
app.get('/contatos', function(require, response){
    response.write(JSON.stringify(contatos));
    response.end();
});

app.post('/contatos', function(require, response){
    response.end();
});