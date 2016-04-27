import {Document, Model} from "mongoose";

export interface IBim extends Document {
    guid: string;
    complex: Object;
    entity: string;
    model:  string;
    category:  string;
    group: string;
    level: string;
    space: string;
    data:  Array<Object>;
    checkouts: {};
    geometry: Array<Object>;
    material: Array<Object>;
}

export interface IBimModel extends Model<IBim> {
    bulkInsert(): Function;
    insertMany(obj?: Array<any>): Function;
}
