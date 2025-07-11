
// VIEJO DEL TRABAJO 8
// GET
app.get('/habitos', function(req,res){
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


// NUEVO DEL TRABAJO 9
let habitos  = "habitos";
app.get(`/${habitos}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`Esta es la ruta GET de mi entidad ${habitos} con el id: ${id}`
    });
});

app.post(`/${habitos}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`Esta es la ruta POST de mi entidad ${habitos} con el id: ${id}`
    });
});

app.put(`/${habitos}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`Esta es la ruta PUT de mi entidad ${habitos} con el id: ${id}`
    });
});

app.delete(`/${habitos}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`Esta es la ruta DELETE de mi entidad ${habitos} con el id: ${id}`
    });
});



let tarea = "tarea";
app.use(express.json());

app.get(`/${tarea}`, (req,res) => {
    res.send({
        mensaje:`Elementos de la entidad ${tarea}`
    });
});

app.get(`/${tarea}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`Id recibido ${id}`
    });
});

app.post(`/${tarea}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`Esta es la ruta POST de mi entidad ${tarea}`
    });
});

app.put(`/${tarea}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`El recibido en PUT es id: ${id}`
    });
});

app.delete(`/${tarea}/:id`, (req,res) => {
    const{id} = req.params;
    res.send({
        mensaje:`El recibido en DELETE es id: ${id}`
    });
});