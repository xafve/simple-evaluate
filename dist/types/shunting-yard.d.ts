/**
 * Shunting-yard algorithm
 * @see https://en.wikipedia.org/wiki/Shunting-yard_algorithm
 */
export declare const evaluate: (context: any, expr: string) => any;
export default class ShuntingYard {
    private values;
    private operations;
    private token;
    constructor(token: string[]);
    parse(context: object): any;
    private calc;
    private evaluate;
    private getValue;
    private pushOperationStask;
}
