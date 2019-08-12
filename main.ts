import './css/main.css';
import {interval, Observable} from 'rxjs';

const source$ = interval(500);

let subscription = source$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);

setTimeout(() => {
    subscription.unsubscribe()
}, 4002);