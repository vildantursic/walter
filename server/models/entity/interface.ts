import {Document, Model} from "mongoose";

export interface IEntity extends Document {
    address: string;
    name: string;
}

export interface IEntityModel extends Model<IEntity> {
    bulkInsert(): Function;
    insertMany(obj?: Array<any>): Function;
}
