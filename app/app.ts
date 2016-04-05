/// <reference path="../typings/main.d.ts" />

import * as express from "express";
const router = express.Router();

router.route("/api/:entity")
  .get((req, res) => {

    let entity: string = req.params.entity;
    res.send({
      entity: entity,
      method: "get"
    });

  })
  .post((req, res) => {

    let entity: string = req.params.entity;
    res.send({
      entity: entity,
      method: "post"
    });

  })
  .put((req, res) => {

    let entity: string = req.params.entity;
    res.send({
      entity: entity,
      method: "put"
    });

  })
  .delete((req, res) => {

    let entity: string = req.params.entity;
    res.send({
      entity: entity,
      method: "delete"
    });

  });

export const comment = router;
