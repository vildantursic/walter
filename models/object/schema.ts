/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    guid: {
        type: String,
        require: true
    },
    complex: {
        type: String,
        ref: "Complex",
        required: true
    },
    entity: {
        type: String,
        ref: "Entity",
        required: true
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