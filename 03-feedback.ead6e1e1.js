!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("1WSnx"),a={},l={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector("input"),textareaEl:document.querySelector("textarea")};l.formEl.addEventListener("input",(0,n.throttle)((function(e){a[e.target.name]=e.target.value,t=a,localStorage.setItem("feedback-form-state",JSON.stringify(t));var t}),500)),l.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),t="feedback-form-state",localStorage.removeItem(t);var t})),window.onload=function(){if(a=function(){try{var e=localStorage.getItem("feedback-form-state");if(e)return JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}return!1}())for(var e in l)a[l[e].name]&&(l[e].value=a[l[e].name]);else a={}}()}();
//# sourceMappingURL=03-feedback.ead6e1e1.js.map