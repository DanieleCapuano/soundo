!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.soundo=e():t.soundo=e()}(self,(()=>(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){var e="function"==typeof Map?new Map:void 0;return n=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return o(t,arguments,c(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),i(n,t)},n(t)}function o(t,e,r){return o=u()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&i(o,r.prototype),o},o.apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function f(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var a=function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(b,n);var o,a,l,p,s,y=(p=b,s=u(),function(){var e,n=c(p);if(s){var o=c(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return r(e)}(this,e)});function b(){var t,e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b);for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return e=r(t=y.call.apply(y,[this].concat(u))),!0,(n=f(n="running"))in e?Object.defineProperty(e,n,{value:true,enumerable:!0,configurable:!0,writable:!0}):e[n]=true,t.port.onmessage=function(e){t.running=e.data},t}return o=b,l=[{key:"parameterDescriptors",get:function(){return[{name:"amount",defaultValue:.5,minValue:0,automationRate:"k-rate"}]}}],(a=[{key:"process",value:function(t,e,r){var n=e[0],o=(t[0]||[])[0]||[],u=(t[1]||[])[0]||[];return n.forEach((function(t){for(var e=0;e<t.length;e++){var n=r.amount.length>1?r.amount[e]:r.amount[0],i=o[e]||0,c=u[e]||0;n=isNaN(n)?.5:Math.max(0,Math.min(1,n)),t[e]=Math.max(-1,Math.min(1,i*(1-n)+c*n))}})),this.running}}])&&e(o.prototype,a),l&&e(o,l),Object.defineProperty(o,"prototype",{writable:!1}),b}(n(AudioWorkletProcessor));return registerProcessor("linear-crossfading-processor",a),{}})()));