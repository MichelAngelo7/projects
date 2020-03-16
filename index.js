const express = require('express');

const server = express();

server.use(express.json());

let countRequest=0;
server.use((req, res, next)=>{
    
    console.log(`Método: ${req.method}; URL: ${req.url}`);
    countRequest++;
    console.log(`Quantidade de Métodos chamados: ${countRequest}`);
    next();
});

const tasks = [{id:"1", title: "Novo Projeto", task:['Esta é uma tarefa de exemplo']}]

function checkTitleExists(req, res, next){
    if(!req.body.title){
        return res.status(400).json({error: 'Title is required'});
    }

    return next();
}

function checkTaskInArray(req, res, next){
    const task = tasks[req.params.id];
    if(!task){
        return res.status(400).json({error: 'Task does not found !'});
    }
    req.task = task;

    return next();
}


server.get('/projects', (req, res)=>{
    
   return res.json(tasks); 
});

server.get('/projects/:id', checkTaskInArray, (req, res)=>{
    return res.json(req.task);
});


server.post('/projects',checkTitleExists, (req, res)=>{
    const { id } = req.body;
    const { title } = req.body;

    
    tasks.push({id: id, title:title, tasks:[' '] });

    return res.json(tasks);

});




server.post('/projects/:id/tasks', (req, res)=>{
    const { id } = req.params;
    const { title } = req.body;
    const { task } = req.body;

    
    tasks.push({id: id, title:title, task:task})

    return res.json(tasks);
});



server.put('/projects/:id', checkTaskInArray, (req, res)=>{
    const { id } = req.params;
    const { title } = req.body;

    tasks[id].title = title;


    return res.json(tasks);
});

server.delete('/projects/:id', checkTaskInArray, (req, res)=>{
    const { id } = req.params;

    tasks.splice(id, 1);

    return res.send();

});




server.listen(3000);