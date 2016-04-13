/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    category: String,
    checkouts: {
        projects: { type: Array , "default": {} }
    },
    complex: {
        ref: "Complex",
        required: true,
        type: String
    },
    entity: {
        ref: "Entity",
        required: true,
        type: String
    },
    geometry: { type: Array , "default": {} },
    group: String,
    guid: {
        require: true,
        type: String
    },
    level: String,
    material: { type: Array , "default": {} },
    model: String,
    space: String
});
