"use strict";
const express_1 = require("express");
const router = express_1.Router();
const api = router.route("/api/:entity");
api.get((req, res) => {
    let entity = req.params.entity;
    let heroes = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco 2" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];
    res.json(heroes);
});
api.post((req, res) => {
    let entity = req.params.entity;
    let reqObject = req.body;
    res.json(reqObject);
});
api.put((req, res) => {
    let entity = req.params.entity;
    let reqObject = req.body;
    res.json(reqObject);
});
api.delete((req, res) => {
    let entity = req.params.entity;
    res.json({
        entity: entity,
        method: "delete"
    });
});
exports.apiRoute = router;
