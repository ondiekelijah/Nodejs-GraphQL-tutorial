const { v4: uuidv4 } = require("uuid");

exports.Mutation = {
    createEvent: (parent, { input }, { db }) => {
        const id = uuidv4();
        const event = {
            id,
            ...input
        };
        db.events.push(event);
        return event;
    },
    // Update Event
    updateEvent: (parent, { id, input }, { db }) => {
        const eventIndex = db.events.findIndex((event) => event.id === id);
        if (eventIndex === -1) return false;
        db.events[eventIndex] = {
            ...db.events[eventIndex],
            ...input,
        };
        return db.events[eventIndex];
    },
    // Delete Event
    deleteEvent: (parent, { id }, { db }) => {
        const eventIndex = db.events.findIndex((event) => event.id === id);
        if (eventIndex === -1) return false;
        db.events = db.events.filter((event) => event.id !== id);
        return true;
    },
};
