const operators = {

    sum: (x: number, y: number): number => {
        return x + y;
    },
    subtract: (x: number, y: number): number => {
        return x - y;
    },
    multiply: (x: number, y: number): number => {
        return x * y;
    },
    divide: (x: number, y: number): number => {
        return x / y;
    },
    square: (x: number): number => {
        return x * x;
    }

};

export default operators;
