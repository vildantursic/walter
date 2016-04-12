/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    name: String,
    address: String,
    location: [{
        lat : String,
        lng : String
    }]
});

// export const complex: Schema = schema;