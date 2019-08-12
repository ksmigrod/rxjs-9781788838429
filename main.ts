import './css/main.css';
import {Observable} from 'rxjs';

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

const source$ = new Observable<number>((observer) => {
    let i = 1;
    setInterval(() => {
        observer.next(i++);
        if (i == 20) {
            observer.complete();
        }
    }, 1000);
});

source$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);