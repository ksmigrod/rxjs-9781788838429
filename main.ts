import './css/main.css';
import {EMPTY} from 'rxjs';

const source$ = EMPTY;

source$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);