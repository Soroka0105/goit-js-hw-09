function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");let i;function u(t,n){const o=Math.random()>.3;i=new Promise(((e,r)=>{setTimeout((()=>{o?e({position:t,delay:n}):r({position:t,delay:n})}),n)})),i.then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}elements={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')},elements.form.addEventListener("submit",(function(e){e.preventDefault();let t=Number(elements.delay.value);const n=Number(elements.step.value),o=Number(elements.amount.value);for(let e=1;e<=o;e+=1)u(e,t),t+=n}));
//# sourceMappingURL=03-promises.fb792ce5.js.map
