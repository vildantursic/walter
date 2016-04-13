import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IEntity} from "./interface.ts";
import {conn} from "../../connections/connection";

export const entityModel: Model<IEntity> = conn.model<IEntity> ("Entity", schema);