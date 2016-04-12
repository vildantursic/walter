/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IEntity extends Document {
    _id: string;
    name: string;
    address: string;
    location: Array<Object>;
}
