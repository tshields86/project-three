import { Router } from 'express';
import db from '../db.js';
import { ObjectID } from 'mongodb';

export default function() {
  const api = Router();
  const collection = db.get().collection('tasks');

// get all tasks
  api.get('/tasks', (req, res) => {
    console.log('show me tasks');
    collection.find().sort({date: 1, time: 1}).toArray((err, docs) => {
      res.json({ tasks : docs });
    });
  });

//gets one task by id
api.get('/task/:id', (req, res) => {
   // create a new task
   console.log("req body!!!!", req.params.id);
   collection.findOne({"_id": ObjectID(req.params.id)}, (err, collection) => {
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

  api.put('/task', (req, res) => {
    console.log('put on!');
    let identifier = req.body.identifier.taskMongoid;
    let objTochange = req.body.objToChange;
    collection.update({"_id": ObjectID(identifier)}, objTochange , (err, result) => {
      console.log("result after put fxn", result);
      res.json(result);
    });
  });

  api.delete('/task/:id', (req, res) => {
    console.log("this is the delete promise req.params.id", req.params.id);
    // create a new task
    collection.remove({"_id": ObjectID(req.params.id)}, (err, result) => {
      res.json(result);
    });
  });

  return api;
}

console.log('foo');
