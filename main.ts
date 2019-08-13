import './css/main.css';
import {of} from "rxjs";

const source$ = of(1, [2, 3, 4]);

source$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);