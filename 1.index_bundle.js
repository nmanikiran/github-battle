(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{63:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),u=n(58),i=n.n(u);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y={avatar:{width:"50px",borderRadius:"50%"}},b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}(this,s(t).call(this,e))).state={username:"",value:"",autocompleteData:[]},n.onChange=n.onChange.bind(p(p(n))),n.onSelect=n.onSelect.bind(p(p(n))),n.getItemValue=n.getItemValue.bind(p(p(n))),n.renderItem=n.renderItem.bind(p(p(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"retrieveDataAsynchronously",value:function(e){var t=this;Object(a.c)(e).then(function(e){t.setState({autocompleteData:e})})}},{key:"onChange",value:function(e){this.setState({value:e.target.value}),this.retrieveDataAsynchronously(e.target.value),console.log("The Input Text has changed to ",e.target.value)}},{key:"onSelect",value:function(e,t){this.setState({value:""}),this.props.onSelect(t),console.log("Option from 'database' selected : ",e)}},{key:"renderItem",value:function(e,t){return o.a.createElement("div",{key:e.id,style:{background:t?"lightgray":"white"}},o.a.createElement("img",{src:e.avatar_url,style:y.avatar})," ",e.login)}},{key:"getItemValue",value:function(e){return e.login}},{key:"render",value:function(){return o.a.createElement("div",{className:"column w100"},o.a.createElement(i.a,{inputProps:{placeholder:"add github username"},getItemValue:this.getItemValue,items:this.state.autocompleteData,renderItem:this.renderItem,value:this.state.value,onChange:this.onChange,onSelect:this.onSelect}))}}]),t}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,g(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.onReset;return o.a.createElement("div",null,o.a.createElement("div",{className:"column"},o.a.createElement("img",{className:"avatar",src:t.image,alt:"Avatar for "+t.name}),o.a.createElement("h2",{className:"username"},"@",t.name)),o.a.createElement("button",{className:"reset",onClick:function(e){return n(t.id)}},"Reset"))}}]),t}(),O=n(29);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){_(e,t,n[t])})}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,C(t).call(this,e))).state={userList:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,r["Component"]),function(e,t,n){t&&k(e.prototype,t),n&&k(e,n)}(t,[{key:"handleSubmit",value:function(e){var t=this;this.setState(function(){var n={};return n.id=Date.now(),n.name=e.login,n.image="https://github.com/".concat(e.login,".png?size=200"),E({},t.state,{userList:j(t.state.userList).concat([n])})})}},{key:"batterString",value:function(){return this.state.userList.map(function(e){return e.name}).join(",")}},{key:"handleReset",value:function(e){var t=this;this.setState(function(){var n=t.state.userList.filter(function(t){return t.id!==e});return E({},t.state,{userList:n})})}},{key:"render",value:function(){var e=this,t=this.props.match;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(b,{onSelect:function(t){return e.handleSubmit(t)}})),o.a.createElement("div",{className:"row"},this.state.userList.map(function(t){return o.a.createElement(w,{user:t,onReset:function(t){return e.handleReset(t)},key:t.id})})),this.state.userList.length>1?o.a.createElement(O.a,{className:"button",to:{pathname:t.url+"/results",search:"?names="+this.batterString()}},"Battle"):"")}}]),t}();t.default=R}}]);