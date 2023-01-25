/* index.js */
import { wait } from "./helpers.js";

console.log("A");

wait()
  .then(() => {
    console.log("B");
  })
  .catch(() => {
    console.error('Something went wrong!')
  })

console.log("C");