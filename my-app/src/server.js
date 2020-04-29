const express = require ('express');
const app = exprerss ();

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log('servidor en el pueto 3000');
});