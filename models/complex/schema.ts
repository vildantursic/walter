/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    name: String,
    address: {
        type: String,
        required: true
    },
    location: [{
        lat : String,
        lng : String
    }]
});