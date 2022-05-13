import express from 'express'
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import postRoutes from './routes/posts.js'
const app = express();



app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use('/posts', postRoutes)


const CONNECTION_URL = "mongodb+srv://maxinger:11HMjP69Jzy39Rnv@cluster0.bk9lk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

