const express = require('express');

const { PORT } = require('./config/serverConfig');


const app = express();

function prepareAndStartServer() {

    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
    })
}
prepareAndStartServer();