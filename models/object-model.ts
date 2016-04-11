import {model} from "mongoose";
import {object} from "../models/object/object";

import IObject = require("../models/object/i_object");

const _objectModel = model <IObject> ("Object", object);

export const objectModel = _objectModel;