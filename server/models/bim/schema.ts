import {Schema} from "mongoose";

export let schema: Schema = new Schema({
    category :  {type: String},
    checkouts: Schema.Types.Mixed,
    complex: Schema.Types.Mixed,
    data: Schema.Types.Mixed,
    entity :  {type: String},
    geometry: Schema.Types.Mixed,
    group : {type: String},
    guid: {type: String},
    level : {type: String},
    material: Schema.Types.Mixed,
    model :  {type: String},
    space :  { type: String},
});
