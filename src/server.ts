// Imports
import express, { Request, Response } from "express";
import mainRoutes from "./routes/index";

// Express
const server = express();
server.use(express.json());
server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada");
});

// Turn on the server
server.listen(8080, () => {
    return console.log("Server is running...");
});
