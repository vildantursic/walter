import {Schema} from "mongoose";

export let schema: Schema = new Schema({
        address: {
                required: true,
                type: String
        },
        name: String
});
