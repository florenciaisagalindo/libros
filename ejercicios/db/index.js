const mongoose = require ('mongoose');

const initMongo = () => 
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>console.log('Conectado a MONGO DB')
);

module.exports={
    initMongo
}

//uri es cuando es interna