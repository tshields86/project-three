import { Router } from 'express';
import db from '../db.js';
import { ObjectID } from 'mongodb';

export default function() {
  const api = Router();
  const collection = db.get().collection('tasks');

  api.get('/task/:name', (req, res) => {
    console.log('api.post /task');
    // create a new task
    collection.insert(req.body, (err, result) => {
      res.json(result);
    });
  });

  api.get('/tasks', (req, res) => {
    console.log('hitting tasks');
    collection.find().toArray((err, docs) => {
      res.json({ tasks : 'docs' });
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
