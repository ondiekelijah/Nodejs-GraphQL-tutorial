# Pieces-GraphQL-tutorial

## Playground Queries & Mutations.

### 1. createEvent Operation

```GraphQL
mutation {
  createEvent(input: {
      title: "PyCon KE"
      description: "The Pycon Edition of Kenya brings together software devs, startups, students, learning instutions and people passionate about python and its ecosystem."
      date: "2022-04-01"
      location: "Nairobi, Kenya"
      organizers: ["Python Nairobi"]
      time: "8:00"
      venue: "USIU, Nairobi"
    }
  ) {
    id
    title
    description
    date
    location
    time
    venue
    organizers
  }
}
```

### 2. events Operation

```GraphQL
query QueryEvents {
  events {
    id
    title
    description
    date
    time
    venue
  }
}
```

### 3. event Operation

```GraphQL
query QueryEvent($eventId: ID!) {
 event(id: $eventId) {
    id
    title
    description
    date
    time
    venue
 }
}
```
Variables

```JSON
{
  "eventId": "your event ID"
}
```

### 4. updateEvent Operation

```GraphQL

mutation {
  updateEvent(id: "57bf825f-7fe2-469a-91ff-61d56eb0cc07", input: {
      title: "PyCon KE 2022"
    }
  ) {
    title
  }
}
```

### 5. deleteEvent Operation
```GraphQL
mutation {
  deleteEvent(id: "f6f205b1-1475-4ab8-8f42-804b477ca78a"
  ) 
}
```
