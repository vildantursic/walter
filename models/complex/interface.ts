/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IObject extends Document {
    _id: string;
    name: string;
    address: string;
    entity: Object;
}
