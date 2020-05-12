const express = require('express');
const app = express();

const port = 3000;

app.use('/src', express.static('src'));
app.use('/public', express.static('public'));

app.get('/', (req, res)=>{
    res.send('<h1>Hello World node <h1/>');
});

app.get('/basic-context', (req, res)=>{
    res.sendFile(`${__dirname}/public/basic-context.htm`);
});

app.get('/basic-shader', (req, res)=>{
    res.sendFile(`${__dirname}/public/basic-shader.htm`);
});

app.get('/circule-triangle-fan', (req, res)=>{
    res.sendFile(`${__dirname}/public/circule-triangle-fan.htm`);
});

app.get('/matrices', (req, res)=>{
    res.sendFile(`${__dirname}/public/projectionModelViewMatrix.htm`);
});

app.get('/color-animation', (req, res)=>{
    res.sendFile(`${__dirname}/public/color-animation.htm`);
});

app.get('/rotate', (req, res)=>{
    res.sendFile(`${__dirname}/public/rotate.htm`);
});

app.get('/scale', (req, res)=>{
    res.sendFile(`${__dirname}/public/scale.htm`);
});

app.get('/square-triangles-strip', (req, res)=>{
    res.sendFile(`${__dirname}/public/square-triangles-strip.htm`);
});

app.get('/square-triangles', (req, res)=>{
    res.sendFile(`${__dirname}/public/square-triangles.htm`);
});

app.get('/translate', (req, res)=>{
    res.sendFile(`${__dirname}/public/translate.htm`);
});

app.get('/triangles', (req, res)=>{
    res.sendFile(`${__dirname}/public/triangles.htm`);
});

app.get('/vertex-color', (req, res)=>{
    res.sendFile(`${__dirname}/public/vertex-color.htm`);
});

app.listen(port, console.log(`listening at http://localhost:${port}`))