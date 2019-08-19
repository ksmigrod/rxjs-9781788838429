import './css/main.css';
import {pipe, range} from 'rxjs';
import {filter, map} from "rxjs/operators";

// ****
//
// Welcome to your rxjs scratch pad 🤗
// 
// ****

const source$ = range(0, 10);

const doubleValue = map((x: number) => x * 2);
const filterMoreThan5 = filter((x: number) => x <= 5);

const customOperator = pipe(
    doubleValue,
    filterMoreThan5,
);

source$.pipe(customOperator).subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);