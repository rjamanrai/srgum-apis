import { useEffect } from "react"; 
const { BASE_URL } = process.env

const baseUrl = BASE_URL || "http://localhost:3000/api/socketio"

import { io, Socket } from "socket.io-client";

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}


interface ClientToServerEvents {
    hello: () => void;
}

 

// please note that the types are reversed
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(baseUrl);

export default function Notifactions() {

    useEffect((): any => {
        // connect to socket server
        const clint = socket

        // log socket connection
        clint.on("connect", () => {
            console.log("clint CONNECTED!", clint.id); 
        });

        // update chat on new message dispatched
        // clint.on("message", (message: IMsg) => {
        //     chat.push(message);
        //     setChat([...chat]);
        // });

        // clint disconnet onUnmount if exists
        if (clint) return () => clint.disconnect();
    }, []);

    return <div></div>;
}
