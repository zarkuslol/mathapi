import express, {Request, Response, Router} from "express";
import operators from "../components/operators";

const router = Router();
router.use(express.json());

// Sum
router.post("/sum", (req: Request, res: Response) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.sum(n1, n2));
});

// Subtract
router.post("/subtract", (req: Request, res: Response) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.subtract(n1, n2));
});

// Multiply
router.post("/multiply", (req: Request, res: Response) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.multiply(n1, n2));
});

// Divide
router.post("/divide", (req: Request, res: Response) => {
    const { n1 } = req.body;
    const { n2 } = req.body;

    return res.json(operators.divide(n1, n2));
});

// Square
router.post("/square", (req: Request, res: Response) => {
    const { n1 } = req.body;

    return res.json(operators.square(n1));
});

export default router;
