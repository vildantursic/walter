import * as express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello from Vildan'));

app.get('/app/:entity', (req, res) => {

  let entity = req.params.entity

  const funn = {
    "get": () => { return {method: "get"}},
    "post": () => { return {method: "post"}},
    "put": () => { return {method: "put"}},
    "del": () => { return {method: "delete"}}
  }

  try{
    res.send(funn[entity]())
  }
  catch(e){
    res.send("no such function");
  }

});

const server = app.listen(3000, "localhost", () => {
   const {address, port} = server.address();
   console.log('Listening on http://localhost:' + port);
});
