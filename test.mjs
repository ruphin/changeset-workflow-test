import { sum } from "test-changeset-sum";
import { answer } from "test-changeset-answer";

console.log(`${sum} === ${answer + answer}`);

if (sum !== answer + answer + 1) {
  throw "fail";
}
