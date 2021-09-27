import express from "express";
import {graphqlHTTP} from "express-graphql";
import {modelUser} from "../schema/schema.js";

const app = express();
const port = 5000;


app.use('/graphql', graphqlHTTP({
    schema: modelUser,
    graphiql: true
}));


app.listen(port, (err) => {
    err ? console.log(err) : console.log(`server works http://localhost:${port}`);
})


// import {graphqlHTTP} from 'express-graphql'; // @0.6.12
// import { buildSchema } from 'graphql'; // @1.13.2
// import express from 'express';
//
// const app = express();
// app.use('/graphql', graphqlHTTP({
//     'schema': buildSchema('type Query { hello: String }'),
//     'rootValue': { 'hello': () => 'Hello, world!' }
// }));
// app.listen(4000);