const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.use('/src', express.static('src'));
app.use('/public', express.static('public'));
app.use('/shaders', express.static('shaders'));
app.use('/images', express.static('images'));

app.get('/', (req, res)=>{
    res.send('<h1>Vea esta serie esta en crunchy roll: https://animeflv.net/anime/5534/kaguyasama-wa-kokurasetai-tensaitachi-no-renai-zunousen<h1/>');
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

app.get('/externalfile', (req, res)=>{
    res.sendFile(`${__dirname}/public/externalFile.htm`);
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

app.get('/spriteani', (req, res)=>{
    res.sendFile(`${__dirname}/public/spritesheetapp.htm`);
});

app.get('/square-triangles-strip', (req, res)=>{
    res.sendFile(`${__dirname}/public/square-triangles-strip.htm`);
});

app.get('/square-triangles', (req, res)=>{
    res.sendFile(`${__dirname}/public/square-triangles.htm`);
});

app.get('/texture', (req, res)=>{
    res.sendFile(`${__dirname}/public/textureapp.htm`);
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

app.listen(port, console.log(`listening at http://localhost:${port}`));