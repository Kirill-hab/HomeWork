import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from "graphql";

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLInt },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    }),
});

const FilmType = new GraphQLObjectType({
    name: "Film",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },

        directors: {type: Array},
        actors: {type: Array},
        grade: {type: Number}
    }),
})

const CountriesType = new GraphQLObjectType({
    name: "Countries",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        code: {type: GraphQLString}
    }),
})

const StudioType = new GraphQLObjectType({
    name: "Studio",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        code: {type: GraphQLString},
        price: {type: GraphQLString}
    }),
})


const RootUser = new GraphQLObjectType({
    name: "RootUser",
    fields: {
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return userData;
            },
        },
    },
});

export {
    UserType,
    FilmType,
    CountriesType,
    StudioType
}