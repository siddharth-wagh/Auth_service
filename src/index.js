const express = require('express');

const { PORT, DB_SYNC } = require('./config/serverConfig');
const db = require('./models/index');
const bodyParser = require('body-parser');
const app = express();
const UserRoutes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',UserRoutes);


async function prepareAndStartServer() {

    app.listen(PORT,()=>{
        console.log(`Server Started at ${PORT}`);
       
    })

    if(DB_SYNC) {
        db.sequelize.sync({alter:true});
    }

   

}
prepareAndStartServer();