import {model, Model} from "mongoose";
import {schema} from "./schema";
import {IEntity} from "./interface.ts";

export const entityModel: Model<IEntity> = model<IEntity> ("Entity", schema);