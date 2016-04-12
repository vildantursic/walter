/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IObject extends Document {
    _id: string;
    complex: Object;
    displayName: Object;
    name: string;
    address: string;
    location: Array<Object>;
}
