/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IObject extends Document {
    _id: string;
    guid: string;
    complex: String;
    name: string;
    address: string;
    location: Array<Object>;
    entity: String;
    model: string;
    category: string;
    group: string;
    level: string;
    space: string;
    checkouts: Object;
    projects: Array<Object>;
    geometry: Array<Object>;
    material: Array<Object>;
}
