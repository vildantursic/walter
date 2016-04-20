import {Document, Model} from "mongoose";

export interface IComplex extends Document {
    address: string;
    name: string;
}

export interface IComplexModel extends Model<IComplex> {
    bulkInsert(): Function;
    insertMany(obj?: Array<any>): Function;
}
