/// <reference path="../typings/main.d.ts" />

import {Request, Response, Router} from "express";
const router: Router = Router();

// not working with router.route(....)
const api = router.route("/api/:entity");

api.get((req, res) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "get"
  });

});
api.post((req, res) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "post"
  });
});

api.put((req, res) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "put"
  });

});
api.delete((req, res) => {

  let entity: string = req.params.entity;
  res.send({
    entity: entity,
    method: "delete"
  });

});

export const comment = router;
