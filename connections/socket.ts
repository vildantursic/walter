import {socketIO} from "../app";

export class SocketService {

    constructor() {
        let nsp: SocketIO.Namespace = socketIO.of("/status");

        nsp.on("connection", (socket: SocketIO.Socket) => {
            socket.on("status", () => {
                socket.emit("status", {
                    connected: true,
                    date: new Date().toString()
                });
            });
        });

        let notifications: SocketIO.Namespace = socketIO.of("/notifications");

        notifications.on("connection", (socket: SocketIO.Socket) => {
            socket.emit("message", "Test notification: " + new Date().toString());
        });
    }

    static emit(name: string, object: {}): void {
        socketIO.of("/" + name).emit("message", object);
    }
}
