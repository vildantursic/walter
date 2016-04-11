/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

interface IObject extends Document {
    _id: string;
    guid: string;
    complex: Object;
    displayName: Object;
    name: string;
    address: string;
    location: Array<Object>;
    entity: Object;
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

export = IObject;