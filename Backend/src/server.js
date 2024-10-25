import express from "express";
// thư viện cho phép lấy tham số từ phía client vd /user?id=7 muốn lấy số 7 ra phải nhờ cái body-parser này
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
//import connectDB from './config/connectDB';
//import cors from 'cors';


require('dotenv').config();

let app = express();
//app.use(cors({ origin: true }));
//config app

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}))
//app.use(bodyParser.json({ limit: '50mb' }));
//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

viewEngine(app);
initWebRoutes(app);

//connectDB();

let port = process.env.PORT || 6969;
//port === undifined => port 6969

app.listen(port, () => {
    console.log("Backend nodejs is running on the port : " + port)
})