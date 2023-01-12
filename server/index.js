import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'; 

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Connecting to mongo

const CONNECTION_URL = 'mongodb+srv://BaileyFern:testing123@sei.tz0cct9.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

    // mongoose.set('strictQuery', true);
    
    // mongoose.set('useFindAndModify', false);--> Deprecated now, AKA  no longer necesary, using this instead:
// mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connected to Mongo')})