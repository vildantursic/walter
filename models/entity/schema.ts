/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    entity: {
        name: String,
        address: String,
        _id: String
    }
});

// export const entity: Schema = schema;