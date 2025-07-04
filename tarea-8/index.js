import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log("servidor andando");
});
// GET
app.get('/habitos', function(req,res){
    console.log(res)
    res.json({mensaje: 'Esta es la ruta de GET para habitos'});
});

// POST
app.post('/habitos', function(req,res){
    res.send({mensaje: 'Esta es la ruta de POST para habitos'});
});
// PUT
app.put('/habitos', function(req,res){
    res.send({mensaje:'Esta es la ruta de PUT para habitos'});
});
// DELETE
app.delete('/habitos', function(req,res){
    res.send({mensaje: 'Esta es la ruta de DELETE para habitos'});
});