// Query.js - This file contains the resolver functions for the queries defined in the schema.
// Query Events and Organizers
exports.Query = {
    events: (parent, args, { db }) => db.events,
    event: (parent, { id }, { db }) => db.events.find(event => event.id === id),
};
