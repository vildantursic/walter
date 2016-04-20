import {Model} from "mongoose";
import {schema} from "./schema";
import {IComplex, IComplexModel} from "./interface.ts";
import {conn} from "../../connections/connection";

export const complexModel: IComplexModel = <IComplexModel>conn.model<IComplex> ("Complex", schema);
