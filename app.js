import http from "http";
import requestHandler from "./route.js";

const server = http.createServer(requestHandler);

server.listen(3000,()=>{
    console.log("Server Started");
});