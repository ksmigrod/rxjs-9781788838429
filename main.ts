import './css/main.css';
import {AsyncSubject} from 'rxjs';

const source$ = new AsyncSubject<number>();
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