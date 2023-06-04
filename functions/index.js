const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

admin.initializeApp();

const app = express();

// Endpoint to list all documents
app.get('/events', (req, res) => {
  const eventsRef = admin.firestore().collection('events');

  eventsRef
    .get()
    .then((snapshot) => {
      const eventsList = [];
      snapshot.forEach((doc) => {
        eventsList.push(doc.data());
      });
      res.json(eventsList);
    })
    .catch((error) => {
      res.status(500).send('Error retrieving events: ' + error);
    });
});

// Endpoint to list a specific document
app.get('/events/:eventId', (req, res) => {
  const eventId = req.params.eventId;
  const eventRef = admin.firestore().collection('events').doc(eventId);

  eventRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        const eventData = {
          ID: doc.data().ID,
          College: doc.data().College,
          Latitude: doc.data().Latitude,
          Longitude: doc.data().Longitude,
          North: doc.data().North,
          East: doc.data().East,
          West: doc.data().West,
          South: doc.data().South,
          Ratings: doc.data().Ratings,
          Level: doc.data().Level,
          Genre: doc.data().Genre,
          Workshop: doc.data().Workshop,
          Description: doc.data().Description,
          Images: doc.data().Images
        };
        res.json(eventData);
      } else {
        res.status(404).send('Event not found.');
      }
    })
    .catch((error) => {
      res.status(500).send('Error retrieving event: ' + error);
    });
});

// Cloud Function deployment
exports.api = functions.https.onRequest(app);
