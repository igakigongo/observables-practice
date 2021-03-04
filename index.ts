import { interval } from "rxjs";
import { throttleTime } from "rxjs/operators";

const source = interval(1000);
/*
  emit the first value, then ignore for 5 seconds. repeat...
*/
const example = source.pipe(throttleTime(1000));
// output: 0...6...12
const subscribe = example.subscribe(val => console.log(val));
