import * as elements from "typed-html";

let counter = 0;

export function GET() {
  return counter;
}

export function POST() {
  counter += 1;
  return counter;
}
