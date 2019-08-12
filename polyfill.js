import 'normalize.css';

console.log('polyfill');
var log = document.querySelector('#log');
['log','debug','info','warn','error'].forEach(function (verb) {
    console[verb] = (function (method, verb, log) {
        return function () {
            method.apply(console, arguments);
            var msg = document.createElement('div');
            msg.classList.add(verb);
            msg.textContent = verb + ': ' + Array.prototype.slice.call(arguments).map(o => {
                if (typeof o === 'object') {
                    return JSON.stringify(o);
                } else {
                    return o;
                }
            }).join(' ');
            log.appendChild(msg);
        };
    })(console[verb], verb, log);
});