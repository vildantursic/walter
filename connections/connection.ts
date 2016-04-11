import * as mongoose from "mongoose";
import {Connection} from "mongoose";

mongoose.connect("mongodb://ds064188.mlab.com:64188/walter");

let db: Connection = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("we are connected");
});

export const conn: Connection = db;