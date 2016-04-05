/// <reference path="typings/tsd.d.ts" />

import * as express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello from Me'));

app.get('/api/:entity', (req, res) => {

  let entity:string = req.params.entity
  res.send({
    entity: entity,
    method: "get"
  });

});

app.post('/api/:entity', (req, res) => {

  let entity:string = req.params.entity
  res.send({
    entity: entity,
    method: "post"
  });

});

app.put('/api/:entity', (req, res) => {

  let entity:string = req.params.entity
  res.send({
    entity: entity,
    method: "put"
  });

});

app.delete('/api/:entity', (req, res) => {

  let entity:string = req.params.entity
  res.send({
    entity: entity,
    method: "delete"
  });

});

const server = app.listen(3000, "localhost", () => {
   const port = server.address().port;
   console.log('Listening on http://localhost:' + port);
});
