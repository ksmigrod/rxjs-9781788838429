import './css/main.css';
import {ConnectableObservable, interval} from "rxjs";
import {publish, take} from "rxjs/operators";

const intervalSource$ = interval(1000);
const hotUnbufferedSource = intervalSource$.pipe(take(6), publish()) as ConnectableObservable<number>;

hotUnbufferedSource.subscribe(
    (data) => console.log('Hot unbuffered observer 1', data),
    console.warn,
    () => console.log('complete')
);

setTimeout(() => {hotUnbufferedSource.subscribe(
    (data) => console.log('Hot unbuffered observer 2', data),
    console.warn,
    () => console.log('complete')
);}, 1001);

setTimeout(() => {hotUnbufferedSource.subscribe(
    (data) => console.log('Hot unbuffered observer 3', data),
    console.warn,
    () => console.log('complete')
);}, 2001);

hotUnbufferedSource.connect();