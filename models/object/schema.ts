/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";
import {_complexModel, _entityModel} from "../models";

export let schema: Schema = new Schema({
    // _id: Schema.Types.ObjectId,
    guid: {
        type: String,
        require: true
    },
    complex: {
        type: Object,
        ref: "Complex",
        required: true
    },
    entity: {
        type: Object,
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

// export const object: Schema = schema;