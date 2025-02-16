const express = require('express');

const { PORT } = require('./config/serverConfig');

const bodyParser = require('body-parser');
const app = express();
const UserRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',UserRoutes);


function prepareAndStartServer() {

    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
       
    })

}
prepareAndStartServer();