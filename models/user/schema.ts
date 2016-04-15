/// <reference path="../../typings/main.d.ts" />

import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    guid: String,
    secret: String,
    username: String
});
