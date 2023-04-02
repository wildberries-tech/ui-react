import{r as a}from"./index-f1f749bf.js";var p={},c={get exports(){return p},set exports(e){p=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var i={}.hasOwnProperty;function r(){for(var n=[],s=0;s<arguments.length;s++){var t=arguments[s];if(t){var u=typeof t;if(u==="string"||u==="number")n.push(this&&this[t]||t);else if(Array.isArray(t))n.push(r.apply(this,t));else if(u==="object"){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var o in t)i.call(t,o)&&t[o]&&n.push(this&&this[o]||o)}}}return n.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(c);const f=p;function b(e,i,r){return a.useMemo(()=>{if(i){if(typeof i=="object"&&!Array.isArray(i)){if(r)return f.bind({...e,...i});const n={...e};for(const[s,t]of Object.entries(i))n[s]=n[s]?`${n[s]} ${i[s]}`:t;return f.bind(n)}if(typeof i=="string"){const n={...e},s=Object.keys(n),t=n[s[0]];return s[0]&&t&&(n[s[0]]=`${t} ${i}`),f.bind(n)}}return f.bind(e)},[e,i,r])}export{b as u};
//# sourceMappingURL=index-464e8f3b.js.map
