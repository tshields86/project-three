import { Router } from 'express';
import db from '../db.js';
import { ObjectID } from 'mongodb';

export default function() {
  const api = Router();
  const collection = db.get().collection('tasks');

  api.get('/tasks', (req, res) => {

    collection.find().toArray((err, docs) => {
      res.json({ tasks : docs });
    });
  });



  api.post('/task', (req, res) => {
    // create a new task
    collection.insert(req.body, (err, result) => {
      res.json(result);
    });
  });

  return api;
}
