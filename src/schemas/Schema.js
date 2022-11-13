const { gql } = require("apollo-server");

// Let's define the schema for our events
exports.typeDefs = gql`
    type Event {
        id: ID!
        title: String!
        description: String!
        date: String!
        time: String!
        location: String!
        organizers: [String!]!
        venue: String!
    }

    type Query {
        events: [Event!]!
        event(id: ID!): Event!
    }

    type Mutation {
    createEvent(input: addEvent!): Event!
    updateEvent(id: ID!, input: updateEvent!): Event!
    deleteEvent(id: ID!): Boolean!
    }

    input addEvent {
        title: String!
        description: String!
        date: String!
        time: String!
        location: String!
        organizers: [String!]!
        venue: String!
    }

    input updateEvent {
        title: String
        description: String
        date: String
        time: String
        location: String
        venue: String
    }
`;        