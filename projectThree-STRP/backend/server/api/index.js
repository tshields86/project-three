import { Router } from 'express';
import db from '../db.js';
import { ObjectID } from 'mongodb';

export default function() {
  const api = Router();
  const collection = db.get().collection('tasks');

// get all tasks
  api.get('/tasks', (req, res) => {
    console.log('show me tasks');
    collection.find().sort({date: -1, time: -1}).toArray((err, docs) => {
      res.json({ tasks : docs });
    });
  });

//gets one task by id
  api.get('/task', (req, res) => {
    // create a new task
    collection.findOne({"_id": ObjectID(req.body._id)}, (err, collection) => {
      res.json(collection);
    });
  });

  api.post('/task', (req, res) => {
    console.log('api.post /task');
    // create a new task
    collection.insert(req.body, (err, result) => {
      res.json(result);
    });
  });

  // api.put('/task', (req, res) => {
  //   console.log('api.post /task');
  //   // create a new task
  //   collection.insert(req.body, (err, result) => {
  //     res.json(result);
  //   });
  // });

  api.delete('/task', (req, res) => {
    console.log('api.post /task');
    // create a new task
    collection.remove({"_id": ObjectID(req.body._id)}, (err, result) => {
      res.json(result);
    });
  });

  return api;
}

console.log('foo');
