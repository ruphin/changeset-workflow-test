import { sum } from "test-changeset-sum";

console.log(`${sum} === 88`);

if (sum !== 88) {
  throw "fail";
}
