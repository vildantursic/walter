import {schema} from "./schema";
import {IObject, IObjectModel} from "./interface.ts";
import {conn} from "../../connections/connection";

export const objectModel: IObjectModel = <IObjectModel>conn.model<IObject> ("Object", schema);
