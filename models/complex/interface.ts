/// <reference path="../../typings/main.d.ts" />

import {Document} from "mongoose";

export interface IComplex extends Document {
    _id: string;
    name: string;
    address: string;
    entity: Object;
}
