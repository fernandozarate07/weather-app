(()=>{"use strict";var n={704:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,"@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css);"]),o.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root {\n  --white-soft: #f1f1f1;\n  --black-soft: #333333;\n  --day-gradient: linear-gradient(to bottom, #f9d423, #f6ab39, #f37c3a, #50b9d6, #5ccbf3, #9bd7fc);\n  --night-gradient: linear-gradient(to bottom, #1e3a8a, #375899, #4a74ad, #5a8bc2, #6ca3d7, #80bbea);\n  --black-transparent: rgba(0, 0, 0, 0.2);\n  --semi-transparent-white: rgba(255, 255, 255, 0.7);\n}\n","",{version:3,sources:["webpack://./src/styles/general.css"],names:[],mappings:"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,gGAAgG;EAChG,kGAAkG;EAClG,uCAAuC;EACvC,kDAAkD;AACpD",sourcesContent:['@import url("https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n:root {\n  --white-soft: #f1f1f1;\n  --black-soft: #333333;\n  --day-gradient: linear-gradient(to bottom, #f9d423, #f6ab39, #f37c3a, #50b9d6, #5ccbf3, #9bd7fc);\n  --night-gradient: linear-gradient(to bottom, #1e3a8a, #375899, #4a74ad, #5a8bc2, #6ca3d7, #80bbea);\n  --black-transparent: rgba(0, 0, 0, 0.2);\n  --semi-transparent-white: rgba(255, 255, 255, 0.7);\n}\n'],sourceRoot:""}]);const A=o},159:(n,e,t)=>{t.d(e,{A:()=>A});var r=t(354),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,'.body {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10vh 1fr 5vh;\n\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n\n  color: var(--white-soft);\n  background-color: var(--black-soft);\n}\n/* header */\n.header {\n  padding-inline: 10vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n\n  background-color: var(--black-transparent);\n}\n.header__logo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.header__logo-name {\n  margin: 0;\n  font-family: "Knewave", cursive;\n  font-size: 2rem;\n  letter-spacing: 3px;\n}\n.header__search-form {\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.header__input {\n  width: 400px;\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid var(--white-soft);\n  background-color: transparent;\n  outline: none;\n  background-color: var(--black-transparent);\n}\n.header__btn {\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid var(--white-soft);\n  background-color: var(--white-soft);\n  cursor: pointer;\n}\n.header__i {\n  color: var(--black-soft);\n}\n.header__error-container {\n  padding: 5px;\n  position: absolute;\n  top: 40px;\n  left: 0px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n\n  visibility: hidden;\n  opacity: 0;\n\n  border: 2px solid red;\n  background-color: var(--white-soft);\n  border-radius: 10px;\n}\n.header__error-form {\n  font-size: 1rem;\n  color: red;\n}\n.header__error-container i {\n  padding: 5px 12px;\n\n  font-size: 1rem;\n  color: red;\n  border: 2px solid red;\n  border-radius: 50%;\n}\n\n/* main */\n.main {\n  padding-inline: 10vw;\n\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__info-container {\n  padding: 10px;\n  width: 800px;\n  height: 600px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 3fr 1fr 1fr;\n  gap: 2px;\n\n  border-radius: 50px;\n  overflow: hidden;\n}\n.item-grid {\n  border-radius: 20px;\n  background-color: var(--black-transparent);\n  backdrop-filter: blur(10px);\n  font-family: "Orbitron", sans-serif;\n  font-weight: 400;\n}\n/* name of place */\n.main__place {\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__city {\n  font-size: 2rem;\n}\n/* status condition */\n.main__status-img {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__icon {\n  position: absolute;\n  font-size: 80px;\n  animation: carousel 10s linear infinite;\n\n  font-size: 10rem;\n}\n@keyframes carousel {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  50% {\n    transform: translateX(150%);\n    opacity: 0;\n  }\n  51% {\n    transform: translateX(-150%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.main__status-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__condition {\n  font-size: 2rem;\n}\n/* temperature */\n.main__temperature-container {\n  padding: 40px;\n\n  grid-row: 2 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.main__celcius {\n  padding-inline: 10px;\n  font-size: 3rem;\n  align-self: flex-start;\n}\n.main__temperature {\n  font-size: 7rem;\n}\n/* date and descriptions */\n.main__date-and-time {\n  padding: 10px;\n  grid-column: 1 / 3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: flex-start;\n  align-items: center;\n}\n/* loader */\n.loader-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  background-color: var(--black-transparent);\n  display: none;\n}\n.loader {\n  width: 100px;\n  height: 100px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* footer */\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--black-transparent);\n}\n.temperature-font {\n  font-family: "Orbitron", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  color: #ff6f00;\n}\n\n/* dinamicos */\n.body-day {\n  background: var(--day-gradient);\n}\n.body-night {\n  background: var(--night-gradient);\n}\n.visible {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.5s ease;\n}\n',"",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"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",sourcesContent:['.body {\n  width: 100vw;\n  height: 100vh;\n\n  display: grid;\n  grid-template-rows: 10vh 1fr 5vh;\n\n  font-family: "Poppins", sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n\n  color: var(--white-soft);\n  background-color: var(--black-soft);\n}\n/* header */\n.header {\n  padding-inline: 10vw;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n\n  background-color: var(--black-transparent);\n}\n.header__logo-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.header__logo-name {\n  margin: 0;\n  font-family: "Knewave", cursive;\n  font-size: 2rem;\n  letter-spacing: 3px;\n}\n.header__search-form {\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n.header__input {\n  width: 400px;\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid var(--white-soft);\n  background-color: transparent;\n  outline: none;\n  background-color: var(--black-transparent);\n}\n.header__btn {\n  padding: 5px;\n  border-radius: 10px;\n  border: 2px solid var(--white-soft);\n  background-color: var(--white-soft);\n  cursor: pointer;\n}\n.header__i {\n  color: var(--black-soft);\n}\n.header__error-container {\n  padding: 5px;\n  position: absolute;\n  top: 40px;\n  left: 0px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n\n  visibility: hidden;\n  opacity: 0;\n\n  border: 2px solid red;\n  background-color: var(--white-soft);\n  border-radius: 10px;\n}\n.header__error-form {\n  font-size: 1rem;\n  color: red;\n}\n.header__error-container i {\n  padding: 5px 12px;\n\n  font-size: 1rem;\n  color: red;\n  border: 2px solid red;\n  border-radius: 50%;\n}\n\n/* main */\n.main {\n  padding-inline: 10vw;\n\n  position: relative;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__info-container {\n  padding: 10px;\n  width: 800px;\n  height: 600px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 3fr 1fr 1fr;\n  gap: 2px;\n\n  border-radius: 50px;\n  overflow: hidden;\n}\n.item-grid {\n  border-radius: 20px;\n  background-color: var(--black-transparent);\n  backdrop-filter: blur(10px);\n  font-family: "Orbitron", sans-serif;\n  font-weight: 400;\n}\n/* name of place */\n.main__place {\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__city {\n  font-size: 2rem;\n}\n/* status condition */\n.main__status-img {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__icon {\n  position: absolute;\n  font-size: 80px;\n  animation: carousel 10s linear infinite;\n\n  font-size: 10rem;\n}\n@keyframes carousel {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  50% {\n    transform: translateX(150%);\n    opacity: 0;\n  }\n  51% {\n    transform: translateX(-150%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.main__status-text {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main__condition {\n  font-size: 2rem;\n}\n/* temperature */\n.main__temperature-container {\n  padding: 40px;\n\n  grid-row: 2 / 4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.main__celcius {\n  padding-inline: 10px;\n  font-size: 3rem;\n  align-self: flex-start;\n}\n.main__temperature {\n  font-size: 7rem;\n}\n/* date and descriptions */\n.main__date-and-time {\n  padding: 10px;\n  grid-column: 1 / 3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: flex-start;\n  align-items: center;\n}\n/* loader */\n.loader-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  background-color: var(--black-transparent);\n  display: none;\n}\n.loader {\n  width: 100px;\n  height: 100px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* footer */\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--black-transparent);\n}\n.temperature-font {\n  font-family: "Orbitron", sans-serif;\n  font-weight: 400;\n  font-size: 2rem;\n  color: #ff6f00;\n}\n\n/* dinamicos */\n.body-day {\n  background: var(--day-gradient);\n}\n.body-night {\n  background: var(--night-gradient);\n}\n.visible {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.5s ease;\n}\n'],sourceRoot:""}]);const A=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(a," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],A=0;A<n.length;A++){var s=n[A],c=r.base?s[0]+r.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var f=t(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var C=a(p,r);r.byIndex=A,e.splice(A,0,{identifier:l,updater:C,references:1})}o.push(l)}return o}function a(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var A=t(i[o]);e[A].references--}for(var s=r(n,a),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),a=t.n(r),i=t(825),o=t.n(i),A=t(659),s=t.n(A),c=t(56),d=t.n(c),l=t(540),f=t.n(l),p=t(113),C=t.n(p),u=t(704),m={};m.styleTagTransform=C(),m.setAttributes=d(),m.insert=s().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=f();a()(u.A,m);u.A&&u.A.locals&&u.A.locals;var E=t(159),B={};B.styleTagTransform=C(),B.setAttributes=d(),B.insert=s().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=f();a()(E.A,B);E.A&&E.A.locals&&E.A.locals;const g=[];function b(n){g.forEach((e=>{e(n)}))}async function y(n){const e=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&key=7GJBTC4HB5EX8LYURPUN3CZEY`;document.querySelector(".loader-container").style.display="flex";const t=await fetch(e),r=await t.json();return document.querySelector(".loader-container").style.display="none",r}var h;console.log("Webpack Template Initialized!"),async function(){try{const n=await y("buenos aires");console.log(n),b(n)}catch(n){console.error("Error al inicializar el clima predeterminado:",n)}}(),h=function(n){const e=document.querySelector(".body");e.classList.remove("body-day","body-night");const t=n.currentConditions.datetime;t<=n.currentConditions.sunset&&t>=n.currentConditions.sunrise?e.classList.add("body-day"):e.classList.add("body-night"),document.querySelector(".main__city").textContent=n.address.toUpperCase(),document.querySelector(".main__celcius").textContent="°C",document.querySelector(".main__temperature").textContent=n.currentConditions.temp;const r=document.querySelector(".main__icon"),a=n.currentConditions.icon;switch(r.classList.remove("fa-solid","fa-moon","fa-sun","fa-cloud","fa-cloud-rain","fa-snowflake","fa-bolt","fa-wind","fa-question-circle","fa-cloud-sun","fa-cloud-moon"),a){case"clear-night":r.classList.add("fa-solid","fa-moon");break;case"clear-day":r.classList.add("fa-solid","fa-sun");break;case"cloudy":r.classList.add("fa-solid","fa-cloud");break;case"rain":r.classList.add("fa-solid","fa-cloud-rain");break;case"snow":r.classList.add("fa-solid","fa-snowflake");break;case"thunder":r.classList.add("fa-solid","fa-bolt");break;case"wind":r.classList.add("fa-solid","fa-wind");break;case"partly-cloudy-day":r.classList.add("fa-solid","fa-cloud-sun");break;case"partly-cloudy-night":r.classList.add("fa-solid","fa-cloud-moon");break;default:r.classList.add("fa-solid","fa-question-circle")}document.querySelector(".main__condition").textContent=n.currentConditions.conditions,document.querySelector(".main__day-date").textContent=n.days[0].datetime,document.querySelector(".main__descriptions").textContent=n.description},g.push(h),console.log(g);document.querySelector(".header__search-form").addEventListener("submit",(n=>{n.preventDefault();const e=document.querySelector(".header__input"),t=e.value.trim(),r=document.querySelector(".header__error-form"),a=document.querySelector(".header__error-container");""!==t&&isNaN(t)?(r.textContent="",a.classList.remove("visible"),e.value="",y(t).then((n=>{b(n),console.log(n)})).catch((()=>{r.textContent="Error, invalid city",a.classList.add("visible"),console.error("Ciudad no disponible")}))):(console.error("invalid option"),r.textContent="Please choose a valid option",a.classList.add("visible"))}))})();
//# sourceMappingURL=bundle.js.map