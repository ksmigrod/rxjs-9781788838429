import './css/main.css';
import {ReplaySubject} from 'rxjs';

const source$ = new ReplaySubject<number>(2);
let counter = 0;

setInterval(() => source$.next(counter++), 500);

setTimeout( () => source$.complete(), 3050);

source$.subscribe(
    (data) => console.log('Subscription 0', data),
    console.warn,
    () => console.log('complete')
);

setTimeout(() => source$.subscribe(
    (data) => console.log('Subscription 1', data),
    console.warn,
    () => console.log('complete')
), 1070);

setTimeout(() => source$.subscribe(
    (data) => console.log('Subscription 2', data),
    console.warn,
    () => console.log('complete')
), 2070);

setTimeout(() => source$.subscribe(
    (data) => console.log('Subscription 3', data),
    console.warn,
    () => console.log('complete')
), 3070);
