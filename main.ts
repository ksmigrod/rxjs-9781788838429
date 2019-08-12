import './css/main.css';
import {defer, from, Observable, throwError} from 'rxjs';

const errorSource$ = throwError('error message');

errorSource$.subscribe(
    console.log,
    console.warn,
    () => console.log('complete')
);