import express from "express";


let configViewEngine = (app) => {
    //câu static này nghĩa là khi lấy ảnh chỉ dc lấy ảnh từ thư mục public
    app.use(express.static("./src/public"));
   //thư viện ejs tương tự như jsp trong java và blade trong php cho phép gõ logic trong html
    app.set("view engine", "ejs");
    //
    app.set("views", "./src/views");
}

module.exports = configViewEngine;