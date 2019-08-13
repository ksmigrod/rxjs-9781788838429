import './css/main.css';
import {ConnectableObservable, interval} from "rxjs";
import {publishReplay, take} from "rxjs/operators";

const intervalSource$ = interval(1000);
const hotBufferedSource$ = intervalSource$.pipe(take(6), publishReplay(2)) as ConnectableObservable<number>;

hotBufferedSource$.subscribe(
    (data) => console.log('Hot buffered observer 0', data),
    console.warn,
    () => console.log('complete 0')
);

hotBufferedSource$.connect();

setTimeout(() => {hotBufferedSource$.subscribe(
    (data) => console.log('Hot buffered observer 1', data),
    console.warn,
    () => console.log('complete 1')
);}, 1050);

setTimeout(() => {hotBufferedSource$.subscribe(
    (data) => console.log('Hot buffered observer 2', data),
    console.warn,
    () => console.log('complete 2')
);}, 2050);

setTimeout(() => {hotBufferedSource$.subscribe(
    (data) => console.log('Hot buffered observer 3', data),
    console.warn,
    () => console.log('complete 3')
);}, 3050);

setTimeout(() => {hotBufferedSource$.subscribe(
    (data) => console.log('Hot buffered observer 4', data),
    console.warn,
    () => console.log('complete 4')
);}, 4050);

