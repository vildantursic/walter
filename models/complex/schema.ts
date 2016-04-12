/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    complex: {
        name: String,
        address: String,
        location: [{
            lat : String,
            lng : String
        }],
        _id: String
    }
});

// export const complex: Schema = schema;