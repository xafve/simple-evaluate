"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.Compiler = void 0;
var token_1 = require("./token");
exports.token = token_1.default;
var compiler_1 = require("./compiler");
exports.Compiler = compiler_1.default;
function evaluate(context, expr, option) {
    var tokenList = token_1.default(expr);
    var compiler = new compiler_1.default(tokenList, option && option.getValue);
    var astTree = compiler.parse();
    return compiler.calc(astTree, context);
}
exports.default = evaluate;
//# sourceMappingURL=simple-evaluate.js.map