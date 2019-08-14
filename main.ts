import './css/main.css';
import {Observable, Subject} from 'rxjs';

const source$ = new Subject<number>();
let counter = 0;

setInterval(() => source$.next(counter++), 1000);

setTimeout( () => source$.complete(), 6050);

source$.subscribe(
    (data) => console.log('Subscription 0', data),
    console.warn,
    () => console.log('complete')
);

setTimeout(() => source$.subscribe(
    (data) => console.log('Subscription 1', data),
    console.warn,
    () => console.log('complete')
), 1050);

setTimeout(() => source$.subscribe(
    (data) => console.log('Subscription 2', data),
    console.warn,
    () => console.log('complete')
), 2050);
