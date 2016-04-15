import {Model} from "mongoose";
import {schema} from "./schema";
import {IUser} from "./interface.ts";
import {conn} from "../../connections/connection";

export const userModel: Model<IUser> = conn.model<IUser> ("User", schema);
