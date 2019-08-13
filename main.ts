import './css/main.css';
import {from, of} from "rxjs";

const arraySource$ = from([1, 2, 3]);

arraySource$.subscribe(
    (data) => console.log('arraySource$', data),
    console.warn,
    () => console.log('complete')
);

const observableSource$ = from(of(1,2,3));

arraySource$.subscribe(
    (data) => console.log('observableSource$', data),
    console.warn,
    () => console.log('complete')
);

const vPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

const promiseSource$ = from(vPromise);

promiseSource$.subscribe(
    (data) => console.log('promiseSource$', data),
    console.warn,
    () => console.log('complete')
);

const rejectedPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => reject("error"), 1000);
});

const rejectedPromiseSource$ = from(rejectedPromise);

rejectedPromiseSource$.subscribe(
    console.log,
    (errorMessage) => console.warn('rejectedPromiseSource$', errorMessage),
    () => console.log('complete')
);
