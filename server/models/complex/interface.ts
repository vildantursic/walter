/// <reference path="../../typings/main.d.ts" />

import {Document, Model} from "mongoose";

export interface IComplex extends Document {
    address: string;
    location: Array<Object>;
    name: string;
}

export interface IComplexModel extends Model<IComplex> {
    bulkInsert(): Function;
    InsertMany(): Function;
}
