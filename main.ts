import './css/main.scss';
import 'bootstrap';
import {BehaviorSubject, fromEvent, Observable} from 'rxjs';

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

const source$ = (() => {
    const tmp$ = new BehaviorSubject<number>(1);
    fromEvent(document.querySelector('#incrementBy1'), 'click')
        .subscribe(() => {
            tmp$.next(1);
        });
    fromEvent(document.querySelector('#incrementBy2'), 'click')
        .subscribe(() => {
            tmp$.next(2);
        });
    return tmp$.asObservable();
})();

function createCounter(selector: string, stepObservable$: Observable<number>): void {
    const display: HTMLInputElement = document.querySelector(selector);
    let counter = 0;
    let step = 1;

    stepObservable$.subscribe((data) => step = data);
    setInterval(() => {
        counter = counter + step;
        display.value = String(counter);
    }, 1000);
}

createCounter('#counter', source$);