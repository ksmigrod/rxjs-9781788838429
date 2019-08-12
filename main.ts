import './css/main.css';
import {range} from "rxjs";

const source$ = range(0, 20);

source$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);