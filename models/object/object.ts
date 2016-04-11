/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

let schema: Schema = new Schema({
    _id: Schema.Types.ObjectId,
    guid: {
        type: String,
        require: true
    },
    complex: {
        name: String,
        address: String,
        location: [{
            lat : String,
            lng : String
        }],
        _id: String
    },
    entity: {
        name: String,
        address: String,
        _id: String
    },
    model: String,
    category: String,
    group: String,
    level: String,
    space: String,
    checkouts: {
        projects: { type: Array , "default": {} }
    },
    geometry: { type: Array , "default": {} },
    material: { type: Array , "default": {} }
});

export const object = schema;