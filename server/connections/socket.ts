import {socketIO} from "../app";
import Socket = SocketIO.Socket;

let complex: SocketIO.Namespace = socketIO.of("/complex");
let entity: SocketIO.Namespace = socketIO.of("/entity");
let object: SocketIO.Namespace = socketIO.of("/object");

let complexIO = complex.on("connection", (stream: Socket) => {
});
let entityIO = entity.on("connection", (stream: Socket) => {
});
let objectIO = object.on("connection", (stream: Socket) => {
});

export {complexIO, entityIO, objectIO};
