// Imports
import express from "express";
import operators from "./components/operators.js";

// Express
const server = express();
server.use(express.json());

// Sum
server.post("/sum", (req, res) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.sum(n1, n2));
});

// Subtract
server.post("/subtract", (req, res) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.subtract(n1, n2));
});

// Multiply
server.post("/multiply", (req, res) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.multiply(n1, n2));
});


// Divide
server.post("/divide", (req, res) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.divide(n1, n2));
});

// Turn on the server
server.listen(3000, () => {
    return console.log("Server is running...");
});
