const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schemas/Schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { db } = require("./data/db");

// Create the ApolloServer
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
    },
    context: {
        db,
    },
});

// Start the server
server.listen().then(({ url }) => {
    console.log(`Server is running on ${url}`);
});




















































// Server.js - This file is the initial starting point for the Node/Express server.
// const { ApolloServer, gql } = require("apollo-server");

// const typeDefs = gql` 
//   type Query { 
//     hello: String
//   }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "I'm a GraphQL server!",
//   },
// };

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });