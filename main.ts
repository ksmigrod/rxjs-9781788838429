import './css/main.css';
import {range} from "rxjs";
import {map} from "rxjs/operators";

// ****
//
// Welcome to your rxjs scratch pad 🤗
// 
// ****

//
// const source$: Observable<number> = Observable.create((observer) => {
//     let i = 1;
//     const id = setInterval(() => {
//         observer.next(i++);
//     }, 1000);
// });

const source$ = range(0,2);

const mappedSource$ = source$.pipe(
    map((x) => x - 1),
);

mappedSource$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);