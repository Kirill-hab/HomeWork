import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
} from "graphql";

const MovieType = new GraphQLObjectType({
    name: "Movie",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {

            }
        },
    }
})

const modelUser = new GraphQLSchema({
    query: Query,

});

export {
modelUser
}

