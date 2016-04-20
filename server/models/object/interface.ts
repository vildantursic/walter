/// <reference path="../../typings/main.d.ts" />

import {Document, Model} from "mongoose";

export interface IObject extends Document {
    address: string;
    category: string;
    checkouts: Object;
    complex: String;
    entity: String;
    geometry: Array<Object>;
    guid: string;
    group: string;
    level: string;
    location: Array<Object>;
    material: Array<Object>;
    model: string;
    name: string;
    projects: Array<Object>;
    space: string;
}

export interface IObjectModel extends Model<IObject> {
    bulkInsert(): Function;
    insertMany(): Function;
}
