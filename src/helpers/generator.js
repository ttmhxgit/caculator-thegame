import { randomInt, pickArrayRandomly } from "./utils";
import * as allOperator from "./operator";

export default function(options = {}) {
  const opt = {
    initResult: randomInt(0, 10),
    numberOfMoves: randomInt(3, 5),
    numberOfOperators: randomInt(3, 5),
    operatorRange: [1, 9],
    ...options
  };

  // Make an array of all operators
  const operator = Object.values(allOperator);

  // Make a list of operators
  const operators = Array.from({ length: opt.numberOfOperators }, () => {
    const op = pickArrayRandomly(operator);
    return op(randomInt(...opt.operatorRange));
  });

  // Apply operators to initResult `numberOfMoves` times
  const goal = Array.from({ length: opt.numberOfMoves }).reduce(g => {
    const op = pickArrayRandomly(operators);
    return op.func(g);
  }, opt.initResult);
  return {
    goal,
    operators,
    currentResult: opt.initResult,
    initResult: opt.initResult,
    moves: opt.numberOfMoves
  };
}
