import token from './token';
import Compiler, { GetValueFunction, Node } from './compiler';
export default function evaluate(context: any, expr: string, option?: {
    getValue: GetValueFunction;
}): any;
export { Compiler, token, Node };
