/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    address: {
        required: true,
        type: String
    },
    location: [{
        lat : String,
        lng : String
    }],
    name: String
});
