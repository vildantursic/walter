import {Model} from "mongoose";
import {schema} from "./schema";
import {IEntity, IEntityModel} from "./interface.ts";
import {conn} from "../../connections/connection";

export const entityModel: IEntityModel = <IEntityModel>conn.model<IEntity> ("Entity", schema);
