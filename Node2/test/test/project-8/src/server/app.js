require("dotenv").config();

const express = require("express");
const PORT = process.env.PORT || 3000;

const errorMiddleware = require("./controllers/middlewares/error-middleware");
const setUpConnection = require("../db/database");

const routes = require("./routers");

const app = express();

async function creatServer() {
    await setUpConnection();

    app.use(require("body-parser").json());

    await app.use(require("cookie-parser")());
    app.use(require("cors")());


    app.use("/api", routes.routesUser)


    app.use(errorMiddleware);

    app.listen(PORT, () => {
        console.log(`server works on [<<<${process.env.HOST}:${PORT}>>>]`)
    });

}

creatServer().catch(console.log)