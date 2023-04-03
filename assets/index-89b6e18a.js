import{a as we,j as Oe}from"./jsx-runtime-68f49b4e.js";import{r as h}from"./index-f1f749bf.js";import{r as et}from"./index-96c5f47c.js";import{r as tt}from"./index-d0c61868.js";import{u as rt}from"./index-464e8f3b.js";function Se(e,u){for(var r=0;r<u.length;r++){var t=u[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function ae(e,u,r){return u&&Se(e.prototype,u),r&&Se(e,r),e}function R(){return R=Object.assign||function(e){for(var u=1;u<arguments.length;u++){var r=arguments[u];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},R.apply(this,arguments)}function ut(e,u){e.prototype=Object.create(u.prototype),e.prototype.constructor=e,ce(e,u)}function ce(e,u){return ce=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},ce(e,u)}function nt(e,u){if(e==null)return{};var r={},t=Object.keys(e),n,o;for(o=0;o<t.length;o++)n=t[o],!(u.indexOf(n)>=0)&&(r[n]=e[n]);return r}function ot(e,u){if(e){if(typeof e=="string")return Be(e,u);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Be(e,u)}}function Be(e,u){(u==null||u>e.length)&&(u=e.length);for(var r=0,t=new Array(u);r<u;r++)t[r]=e[r];return t}function U(e,u){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=ot(e))||u&&e&&typeof e.length=="number"){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pe(e){var u=h.useRef(null);function r(t){!t||t===u.current||(u.current=t,e(t))}return r}function it(e){var u=h.useRef(e);return h.useMemo(function(){function r(n){typeof n=="function"?u.current=n(u.current):u.current=n}function t(){return u.current}return[t,r]},[])}function at(){var e=h.useRef([]);return h.useMemo(function(){function u(){return e.current.length>0}function r(){for(var n=U(e.current),o;!(o=n()).done;){var i=o.value;i()}e.current=[]}function t(n){e.current.push(n)}return{hasEventSubscriptions:u,removeAllEventSubscriptions:r,addEventSubscription:t}},[])}var fe=typeof window<"u"?h.useLayoutEffect:h.useEffect;function st(e,u){var r=h.useRef(e);return u?(r.current=e,r):(r.current=null,r)}function K(e){return parseFloat(e.replace("px",""))}function de(e,u,r){return e<u?u:e>r?r:e}function Te(e){return e!=null}function ve(){for(var e=arguments.length,u=new Array(e),r=0;r<e;r++)u[r]=arguments[r];return function(t){for(var n=U(u),o;!(o=n()).done;){var i=o.value;i&&(typeof i=="function"?i(t):i.current=t)}}}function lt(e,u){if(!(typeof e>"u"))return u||e.ResizeObserver}function je(e,u){var r=[];if(!e||!u||e===document.body)return r;var t=u.getComputedStyle(e),n=t.overflow,o=t.overflowX,i=t.overflowY;return[n,o,i].some(function(a){return["auto","scroll"].includes(a)})&&r.push(e),[].concat(r,je(e.parentElement,u))}function ee(e){return"react-laag: Could not find a valid reference for the "+e+` element. There might be 2 causes:
   - Make sure that the 'ref' is set correctly on the `+e+` element when isOpen: true. Also make sure your component forwards the ref with "forwardRef()".
   - Make sure that you are actually rendering the `+e+" when the isOpen prop is set to true"}function ft(e){var u=e.enabled,r=e.onChange,t=e.environment,n=e.ResizeObserverPolyfill,o=e.overflowContainer,i=e.triggerOption,a=lt(t,n);h.useEffect(function(){},[a]);var f=h.useRef(null),s=!!i,c=it({scrollContainers:[],trigger:null,layer:null}),l=c[0],d=c[1],p=at(),v=p.hasEventSubscriptions,g=p.addEventSubscription,m=p.removeAllEventSubscriptions,y=h.useCallback(function(){var O=l(),T=O.layer,B=O.trigger,A=O.scrollContainers,L=A[0];if(!T)throw new Error(ee("layer"));if(!B&&!s)throw new Error(ee("trigger"));var V={top:0,left:0};if(L){var _=L.scrollLeft,Y=L.scrollTop;V={top:Y,left:_}}else{var q=t.scrollX,H=t.scrollY;V={top:H,left:q}}var G={left:0,top:0};if(L){var M=t.getComputedStyle(L),Z=M.borderLeftWidth,W=M.borderTopWidth;G={left:K(Z)||0,top:K(W)||0}}r({layer:T,trigger:B,scrollContainers:A,arrow:f.current},V,G)},[l,r,t,f,s]),E=h.useCallback(function(){var O=l(),T=O.trigger,B=O.layer,A=O.scrollContainers;if(!B)throw new Error(ee("layer"));if(!T&&!s)throw new Error(ee("trigger"));if(a){for(var L=!1,V=function(){if(!L){L=!0;return}y()},_=new a(V),Y=0,q=[T,B,document.body];Y<q.length;Y++){var H=q[Y];H&&_.observe(H)}g(function(){for(var x=0,N=[T,B,document.body];x<N.length;x++){var J=N[x];J&&_.unobserve(J)}_.disconnect()})}for(var G=[t].concat(A),M=function(){var N=W.value;N.addEventListener("scroll",y),g(function(){return N.removeEventListener("scroll",y)})},Z=U(G),W;!(W=Z()).done;)M()},[l,g,y,t,a,s]),C=h.useCallback(function(b,O){u&&b&&b!==O&&(m(),E(),y())},[m,E,y,u]),F=Pe(h.useCallback(function(b){var O=l(),T=O.layer;d(function(B){return R({},B,{layer:b})}),C(T,b)},[l,d,C])),w=h.useCallback(function(O){var T=je(O,t),B=T[0];if(B){var A=t.getComputedStyle(B).position,L=["relative","absolute","fixed"].includes(A)||o;L||(B.style.position="relative")}return T},[t,o]),D=Pe(h.useCallback(function(b){var O=w(b),T=l(),B=T.trigger;d(function(A){return R({},A,{trigger:b,scrollContainers:O})}),C(B,b)},[l,d,C,w])),k=i==null||i.getParent==null?void 0:i.getParent();return fe(function(){k&&d(function(b){return R({},b,{scrollContainers:w(k)})})},[k,d,w]),fe(function(){return u&&(v()||E()),function(){v()&&m()}},[u,v,E,m]),fe(function(){u&&y()}),{triggerRef:D,layerRef:F,arrowRef:f,closestScrollContainer:l().scrollContainers[0]||null}}var $e=h.createContext({});function ct(e){var u=e.children,r=e.registrations,t=h.useCallback(function(o){return r.current.add(o),function(){return r.current.delete(o)}},[r]);return h.createElement($e.Provider,{value:t},u)}function dt(e,u){for(var r=U(e),t;!(t=r()).done;){var n=t.value.shouldCloseWhenClickedOutside;if(!n(u))return!1}return!0}function vt(e){var u=e.isOpen,r=e.onOutsideClick,t=e.onParentClose,n=h.useRef(null),o=h.useRef(null),i=h.useRef(new Set),a=h.useContext($e),f=h.useCallback(function(c){var l=c.target,d=n.current&&n.current.contains(l),p=o.current&&o.current.contains(l),v=dt(i.current,c);return p&&v&&i.current.forEach(function(g){var m=g.closeChild;return m()}),!d&&!p&&v},[n,o,i]);return h.useEffect(function(){if(typeof a=="function")return a({shouldCloseWhenClickedOutside:f,closeChild:function(){t&&t()}})},[a,f,t,i]),h.useEffect(function(){var s=typeof a=="function",c=!u||!r||s;if(c)return;function l(d){f(d)&&r()}return document.addEventListener("click",l,!0),function(){return document.removeEventListener("click",l,!0)}},[u,r,f,a]),h.useEffect(function(){u||i.current.forEach(function(s){var c=s.closeChild;return c()})},[u]),{closeOnOutsideClickRefs:{trigger:n,layer:o},registrations:i}}var pt=["bottom-start","bottom-end","bottom-center","top-start","top-center","top-end","left-end","left-center","left-start","right-end","right-center","right-start","center"],ht={top:"bottom",left:"right",bottom:"top",right:"left",center:"center"},gt=function(){function e(r,t,n,o,i,a,f,s,c){this.prop=void 0,this.opposite=void 0,this.isHorizontal=void 0,this.sizeProp=void 0,this.oppositeSizeProp=void 0,this.cssProp=void 0,this.oppositeCssProp=void 0,this.isCenter=void 0,this.isPush=void 0,this.prop=r,this.opposite=t,this.isHorizontal=n,this.sizeProp=o,this.oppositeSizeProp=i,this.cssProp=a,this.oppositeCssProp=f,this.isCenter=s,this.isPush=c}var u=e.prototype;return u.factor=function(t){return t*(this.isPush?1:-1)},u.isOppositeDirection=function(t){return this.isHorizontal!==t.isHorizontal},e}();function z(e,u){u===void 0&&(u=!0);var r=["left","right"].includes(e);return new gt(e,u?z(ht[e],!1):null,r,r?"width":"height",r?"height":"width",r?"left":"top",r?"top":"left",e==="center",!["right","bottom"].includes(e))}var P={top:z("top"),bottom:z("bottom"),left:z("left"),right:z("right")},S=R({},P,{center:z("center")}),te=["top","left","bottom","right"],he=function(){function e(u){return this.top=void 0,this.left=void 0,this.right=void 0,this.bottom=void 0,Object.assign(this,u)}return e.mergeSmallestSides=function(r){var t=r[0],n=r.slice(1);if(!t)throw new Error("Please provide at least 1 bounds objects in order to merge");for(var o=Object.fromEntries(te.map(function(d){return[d,t[d]]})),i=U(n),a;!(a=i()).done;)for(var f=a.value,s=U(te),c;!(c=s()).done;){var l=c.value;o[l]=Math.min(o[l],f[l])}return new e(o)},ae(e,[{key:"allSidesArePositive",get:function(){var r=this;return te.every(function(t){return r[t]>=0})}},{key:"negativeSides",get:function(){var r=this;return Object.fromEntries(te.filter(function(t){return r[t]<0}).map(function(t){return[t,r[t]]}))}}]),e}();function De(){for(var e=arguments.length,u=new Array(e),r=0;r<e;r++)u[r]=arguments[r];return u.reduce(function(t,n){return t+(n?K(n):0)},0)}function pe(e){var u=e.top,r=e.left,t=e.right,n=e.bottom,o=e.width,i=e.height;return{top:u,left:r,right:t,bottom:n,width:o,height:i}}var mt={top:0,left:0,right:0,bottom:0,width:0,height:0},I=function(){e.create=function(t){return new e(t)},e.fromElement=function(t,n){n===void 0&&(n={});var o=n,i=o.withTransform,a=i===void 0?!0:i,f=o.environment,s=f===void 0?window:f,c=o.withScrollbars,l=c===void 0?!0:c,d=pe(t.getBoundingClientRect()),p=new e(d);if(!a){var v=s.getComputedStyle(t),g=v.width,m=v.height,y=v.boxSizing,E=v.borderLeft,C=v.borderRight,F=v.borderTop,w=v.borderBottom,D=v.paddingLeft,k=v.paddingRight,b=v.paddingTop,O=v.paddingBottom,T=y==="border-box"?K(g):De(g,E,C,D,k),B=y==="border-box"?K(m):De(m,F,w,b,O);p=new e(R({},p,{width:T,height:B}))}if(!l){var A=p.width-t.clientWidth,L=p.height-t.clientHeight;return p.substract({right:A,bottom:L})}return p},e.empty=function(){return new e},e.fromWindow=function(t){var n,o=(n=t==null?void 0:t.document.scrollingElement)!=null?n:t==null?void 0:t.document.documentElement,i=o??{},a=i.clientWidth,f=a===void 0?0:a,s=i.clientHeight,c=s===void 0?0:s;return new e({width:f,height:c,right:f,bottom:c})};function e(r){return r===void 0&&(r={}),this.top=void 0,this.left=void 0,this.right=void 0,this.bottom=void 0,this.width=void 0,this.height=void 0,Object.assign(this,mt,r)}var u=e.prototype;return u.toObject=function(){return pe(this)},u.merge=function(t){var n=this.toObject();return new e(R({},n,typeof t=="function"?t(n):t))},u.substract=function(t){for(var n=this.toObject(),o=Object.entries(t),i=0,a=o;i<a.length;i++){var f=a[i],s=f[0],c=f[1];if(s in P){var l=P[s];n[s]+=l.factor(c),n[l.isHorizontal?"width":"height"]-=c}else n[s]-=c||0}return new e(n)},u.offsetsTo=function(t){return new he({top:t.top-this.top,bottom:this.bottom-t.bottom,left:t.left-this.left,right:this.right-t.right})},u.mapSides=function(t){for(var n=this.toObject(),o=Object.values(P),i=0,a=o;i<a.length;i++){var f=a[i];n[f.prop]=t(f,n[f.prop])}return new e(n)},ae(e,[{key:"surface",get:function(){return this.width*this.height}}]),e}(),Ie=function(){function e(r,t,n,o,i){this.primary=void 0,this.secondary=void 0,this.offsets=void 0,this.subjectsBounds=void 0,this._cachedLayerBounds=null,this._cachedContainerOffsets=null,this.primary=r,this.secondary=t,this.offsets=i,this.setSubjectsBounds(n,o)}var u=e.prototype;return u.setSubjectsBounds=function(t,n){if(!n){this.subjectsBounds=t;return}var o=typeof n=="function"?n(this.primary.prop):n;this.subjectsBounds=t.merge({layer:R({},t.layer,o)})},u.getLayerBounds=function(t){if(t===void 0&&(t=0),this._cachedLayerBounds&&t===0)return this._cachedLayerBounds;var n=this.primary,o=this.secondary,i=this.subjectsBounds,a=i.trigger,f=i.layer,s=i.arrow,c=n.isHorizontal,l=n.oppositeCssProp,d=n.oppositeSizeProp,p=n.prop,v=n.opposite,g=I.empty();g[v.prop]=a[p]-n.factor(this.offsets.trigger),g[p]=g[v.prop]-n.factor(f[n.sizeProp]);var m=this.offsets.arrow*2,y=a[l]-(f[d]-s[d])+m,E=a[l]+(a[d]-s[d])-m;if(o.isPush||(y+=f[d],E+=f[d]),o.isCenter){var C=(c?P.top:P.left).prop,F=(c?P.bottom:P.right).prop;g[C]=de(a[C]+a[d]/2-f[d]/2+t,y,E),g[F]=g[C]+f[d]}else{var w=o,D=a[w.prop],k=D<y?y-D:D>E?E-D:0;g[w.prop]=de(D+t+k,y,E),g[w.opposite.prop]=g[w.prop]+o.factor(f[d])}g.width=g.right-g.left,g.height=g.bottom-g.top;var b=I.create(g);return t===0&&(this._cachedLayerBounds=b),b},u.getLayerCollisionBounds=function(){var t=this.offsets.container;return this.getLayerBounds().mapSides(function(n,o){return o-=n.factor(t)}).merge(function(n){var o=n.width,i=n.height;return{width:o+t*2,height:i+t*2}})},u.getContainerOffsets=function(t){if(this._cachedContainerOffsets&&!t)return this._cachedContainerOffsets;var n=this.subjectsBounds.merge({layer:t||this.getLayerCollisionBounds()}),o=he.mergeSmallestSides(n.layerOffsetsToScrollContainers);return t||(this._cachedContainerOffsets=o),o},ae(e,[{key:"type",get:function(){return this.primary.prop+"-"+(this.secondary.prop==="center"?"center":["bottom","right"].includes(this.secondary.prop)?"end":"start")}},{key:"triggerIsBigger",get:function(){var t=this.secondary.isHorizontal,n=this.subjectsBounds,o=n.triggerHasBiggerWidth,i=n.triggerHasBiggerHeight;return t&&o||!t&&i}},{key:"fitsContainer",get:function(){return this.getContainerOffsets().allSidesArePositive}},{key:"visibleSurface",get:function(){var t=this.getLayerBounds(),n=this.getContainerOffsets(t),o=n.negativeSides;for(var i in o)o[i]=-o[i];return t.substract(o).surface}},{key:"secondaryOffsetSide",get:function(){var t,n,o=this,i=this.getContainerOffsets(),a=(t=(n=Object.entries(i.negativeSides).map(function(s){var c=s[0],l=s[1];return[P[c],l]}).filter(function(s){var c=s[0];return o.primary.isOppositeDirection(c)}).sort(function(s,c){var l=s[1],d=c[1];return d-l}))==null?void 0:n[0])!=null?t:[],f=a[0];return f||null}}]),e}(),Fe=function(e){ut(u,e);function u(){return e.apply(this,arguments)||this}var r=u.prototype;return r.getLayerBounds=function(){var n=this.subjectsBounds,o=n.trigger,i=n.layer,a=I.empty();return a.top=o.top+o.height/2-i.height/2,a.bottom=a.top+i.height,a.left=o.left+o.width/2-i.width/2,a.right=a.left+i.width,a.width=a.right-a.left,a.height=a.bottom-a.top,a},u}(Ie);function yt(e,u,r){var t=e.layer,n=e.trigger,o=e.arrow,i=u.primary.oppositeSizeProp,a=u.primary.isHorizontal?["top","bottom"]:["left","right"],f=a[0],s=a[1],c=t[f]+t[i]/2-n[f]-o[i]/2-r,l=t[s]-t[i]/2-n[s]+o[i]/2+r;return(c<0?-c:0)+(l>0?-l:0)}var Le={position:"absolute",willChange:"top, left",left:null,right:null,top:null,bottom:null};function Et(e,u,r){var t;if(u.primary.isCenter)return Le;var n=e.layer,o=e.trigger,i=e.arrow,a=u.primary.oppositeSizeProp,f=o[a]>n[a],s=r+i[a]/2,c=n[a]-i[a]/2-r,l=yt(e,u,r),d=u.primary.prop,p=u.primary.oppositeCssProp,v=f?n[a]/2+l:o[p]+o[a]/2-n[p];return R({},Le,(t={},t[d]="100%",t[p]=de(v,s,c),t))}var Re=function(){function e(r,t,n){this.placements=void 0,this.config=void 0,this.subjectsBounds=void 0,this.placements=r,this.config=t,this.subjectsBounds=n}e.getSidesFromPlacementType=function(t){var n=t.split("-"),o=n[0],i=n[1],a=P[o],f;return i==="center"?f=S.center:a.isHorizontal?f=i==="start"?S.top:S.bottom:f=i==="start"?S.left:S.right,[a,f]},e.create=function(t,n){var o={arrow:n.arrowOffset,container:n.containerOffset,trigger:n.triggerOffset};function i(a){a===void 0&&(a=n.placement);var f=e.getSidesFromPlacementType(a),s=f[0],c=f[1],l=P[s.isHorizontal?n.preferY:n.preferX],d=!s.isHorizontal&&t.triggerHasBiggerWidth||s.isHorizontal&&t.triggerHasBiggerHeight;function p(g,m){return new Ie(g,m,t,n.layerDimensions,o)}var v=[];return v[0]=p(s,c),v[1]=p(s,c.isCenter?l:S.center),v[2]=p(s,S[(c.opposite.isCenter?l.opposite:c.opposite).prop]),v[3]=p(l,d?s:S[s.opposite.prop]),v[4]=p(l,S.center),v[5]=p(l,d?S[s.opposite.prop]:s),v[6]=p(P[l.opposite.prop],d?s:S[s.opposite.prop]),v[7]=p(P[l.opposite.prop],S.center),v[8]=p(P[l.opposite.prop],d?S[s.opposite.prop]:s),v[9]=p(P[s.opposite.prop],c),v[10]=p(P[s.opposite.prop],c.isCenter?l:S.center),v[11]=p(P[s.opposite.prop],S[(c.opposite.isCenter?l.opposite:c.opposite).prop]),v=v.filter(function(g){return g.type===n.placement||n.possiblePlacements.includes(g.type)}),v}return n.placement==="center"?new e([new Fe(S.center,S.center,t,n.layerDimensions,o)].concat(i(n.preferY+"-"+n.preferX)),n,t):new e(i(),n,t)};var u=e.prototype;return u.filterPlacementsBySide=function(t){return this.placements.filter(function(n){return n.primary===t})},u.findFirstPlacementThatFits=function(){return this.placements.find(function(t){return t.fitsContainer})},u.placementWithBiggestVisibleSurface=function(){var t=this.placements.map(function(o){return{placement:o,surface:o.visibleSurface}}).sort(function(o,i){return i.surface-o.surface}),n=t[0].placement;return n},u.findSuitablePlacement=function(){return this.config.auto?this.findFirstPlacementThatFits()||this.placementWithBiggestVisibleSurface():this.placements[0]},u.getSecondaryOffset=function(t){var n=this.config,o=n.auto,i=n.snap;if(!o||i||t instanceof Fe)return 0;var a=this.filterPlacementsBySide(t.primary),f=a.indexOf(t)===0;if(f&&t.fitsContainer)return 0;var s=a.find(function(g){return!g.fitsContainer});if(!s)return 0;var c=s.secondaryOffsetSide;if(!c)return 0;var l=t.getContainerOffsets(),d=t.secondary,p;t.triggerIsBigger||s===t?p=c.isPush?-1:1:p=d===S.left||[S.top,S.center].includes(d)&&c.isPush?-1:1;var v=l[c.prop];return v*p},u.getStyles=function(t,n,o,i){var a={willChange:"top, left, width, height"},f=Et(this.subjectsBounds.merge({layer:t}),n,this.config.arrowOffset),s=this.config.overflowContainer?R({},a,{position:"fixed",top:t.top,left:t.left}):R({},a,{position:"absolute",top:t.top-this.subjectsBounds.parent.top+o.top-i.top,left:t.left-this.subjectsBounds.parent.left+o.left-i.left});return{arrow:f,layer:s}},u.getHasDisappeared=function(t){var n=this.config.overflowContainer?this.subjectsBounds.trigger:t,o=he.mergeSmallestSides(this.subjectsBounds.offsetsToScrollContainers(n,!0)),i=Object.entries(o.negativeSides),a=i.some(function(f){var s=f[0],c=f[1],l=P[s];return c<=-n[l.sizeProp]});return a?"full":o.allSidesArePositive?null:"partial"},u.result=function(t,n){var o=this.findSuitablePlacement(),i=this.getSecondaryOffset(o),a=o.getLayerBounds(i),f=this.getStyles(a,o,t,n),s=o.primary.prop;return{styles:f,layerSide:s,placement:o,layerBounds:a,hasDisappeared:this.getHasDisappeared(a)}},e}(),Ct=function(){function e(r,t){this.overflowContainer=void 0,this.trigger=void 0,this.layer=void 0,this.arrow=void 0,this.parent=void 0,this.window=void 0,this.scrollContainers=void 0,this.overflowContainer=t,Object.assign(this,r)}e.create=function(t,n,o,i,a,f,s,c){var l=I.fromWindow(t);return new e({layer:I.fromElement(n,{environment:t,withTransform:!1}),trigger:c?I.create(pe(c())):I.fromElement(o),arrow:a?I.fromElement(a):I.empty(),parent:i?I.fromElement(i):l,window:l,scrollContainers:[l].concat(f.map(function(d){return I.fromElement(d,{withScrollbars:!1})}))},s)};var u=e.prototype;return u.merge=function(t){return new e(R({},this,t),this.overflowContainer)},u.offsetsToScrollContainers=function(t,n){n===void 0&&(n=!1);var o=this.overflowContainer&&!n?[this.window]:this.scrollContainers;return o.map(function(i){return i.offsetsTo(t)})},ae(e,[{key:"layerOffsetsToScrollContainers",get:function(){return this.offsetsToScrollContainers(this.layer)}},{key:"triggerHasBiggerWidth",get:function(){return this.trigger.width>this.layer.width}},{key:"triggerHasBiggerHeight",get:function(){return this.trigger.height>this.layer.height}}]),e}(),ke=null,j={auto:!1,arrowOffset:0,containerOffset:10,triggerOffset:0,overflowContainer:!0,placement:"top-center",possiblePlacements:pt,preferX:"right",preferY:"bottom",snap:!1,container:void 0,trigger:void 0};function bt(e){var u,r=e.isOpen,t=r===void 0?!1:r,n=e.overflowContainer,o=n===void 0?j.overflowContainer:n,i=e.environment,a=i===void 0?typeof window<"u"?window:void 0:i,f=e.ResizeObserver,s=e.placement,c=s===void 0?j.placement:s,l=e.possiblePlacements,d=l===void 0?j.possiblePlacements:l,p=e.preferX,v=p===void 0?j.preferX:p,g=e.preferY,m=g===void 0?j.preferY:g,y=e.auto,E=y===void 0?j.auto:y,C=e.snap,F=C===void 0?j.snap:C,w=e.triggerOffset,D=w===void 0?j.triggerOffset:w,k=e.containerOffset,b=k===void 0?j.containerOffset:k,O=e.arrowOffset,T=O===void 0?j.arrowOffset:O,B=e.container,A=B===void 0?j.container:B,L=e.layerDimensions,V=L===void 0?null:L,_=e.onDisappear,Y=e.onOutsideClick,q=e.onParentClose,H=e.trigger,G=h.useState(function(){return{layerSide:c==="center"?"center":Re.getSidesFromPlacementType(c)[0].prop,styles:{layer:{position:o?"fixed":"absolute",top:0,left:0},arrow:{position:"absolute",top:0,left:0}}}}),M=G[0],Z=G[1],W=h.useRef(null),x=st(M,t),N=h.useRef({cancelled:!1});h.useEffect(function(){return function(){N.current.cancelled=!0}},[]);var J=h.useCallback(function(X,Ge,We){var qe=X.arrow,Xe=X.layer,Ee=X.scrollContainers,ze=X.trigger,Ue=Ee[0],Ze=Ct.create(a,Xe,ze,Ue,qe,Ee,o,H==null?void 0:H.getBounds),Ke={placement:c,possiblePlacements:d,auto:E,layerDimensions:V,arrowOffset:T,containerOffset:b,triggerOffset:D,preferX:v,preferY:m,snap:F,overflowContainer:o},se=Re.create(Ze,Ke).result(Ge,We),Ce=se.hasDisappeared,Je=se.layerSide,Qe=se.styles,le={layerSide:Je,styles:Qe};if(!x.current||wt(x.current,le)){x.current=le,N.current.cancelled=!0;var be={cancelled:!1};N.current=be,Promise.resolve().then(function(){be.cancelled||Z(le)})}Te(Ce)&&Te(_)&&_(Ce)},[T,E,b,a,V,_,o,c,d,v,m,F,D,x,H]),Q=ft({ResizeObserverPolyfill:f,environment:a,enabled:t,overflowContainer:o,onChange:J,triggerOption:H}),Me=Q.triggerRef,xe=Q.layerRef,_e=Q.arrowRef,ge=Q.closestScrollContainer,me=vt({isOpen:t,onOutsideClick:Y,onParentClose:q}),ye=me.closeOnOutsideClickRefs,Ne=me.registrations,Ve={triggerProps:H?{}:{ref:ve(Me,ye.trigger,W)},layerProps:{ref:ve(xe,ye.layer),style:M.styles.layer},arrowProps:{ref:_e,style:M.styles.arrow,layerSide:M.layerSide},layerSide:M.layerSide,triggerBounds:t?H?H.getBounds():(u=W.current)==null?void 0:u.getBoundingClientRect():null,renderLayer:function(X){return typeof document<"u"?et.createPortal(h.createElement(ct,{registrations:Ne,children:X}),o||!ge?Ot(A):ge):null}};return Ve}function wt(e,u){if(e.layerSide!==u.layerSide)return!0;for(var r=["position","top","left","right","bottom"],t=0,n=r;t<n.length;t++){var o=n[t];if(e.styles.layer[o]!==u.styles.layer[o]||e.styles.arrow[o]!==u.styles.arrow[o])return!0}return!1}var Ae="layers";function Ot(e){var u;if(typeof e=="function"){if(u=e(),!u||!(u instanceof HTMLElement))throw new Error("react-laag: You've passed a function to the 'container' prop, but it returned no valid HTMLElement")}else if(e instanceof HTMLElement)u=e;else if(typeof e=="string"){if(u=document.getElementById(e),!u)throw new Error("react-laag: You've passed element with id '"+e+"' to the 'container' prop, but it returned no valid HTMLElement")}else{if(ke instanceof HTMLElement)return ke;u=document.getElementById(Ae),u||(u=document.createElement("div"),u.id=Ae,u.style.cssText=`
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
      `,document.body.appendChild(u))}return u}var St=["size","angle","borderWidth","borderColor","roundness","backgroundColor","layerSide","style"],re="left",ue="top",ne="bottom",oe="right";function ie(e,u){return Math.tan(e*(Math.PI/180))*u}function Bt(e,u,r,t){var n,o=(n={},n[ne]="0 "+-t+" "+u+" "+e,n[ue]="0 0 "+u+" "+(e+t),n[oe]=-t+" 0 "+e+" "+u,n[re]="0 0 "+(e+t)+" "+u,n);return o[r.prop]}function Pt(e,u,r,t,n){var o,i,a,f=t/10*e*2,s=(o={},o[ne]=[0,e],o[ue]=[0,0],o[oe]=[e,u],o[re]=[0,u],o)[r.prop].join(" "),c=r.isHorizontal?"V 0":"H "+u,l=u/2,d=u/2+ie(n,e/8),p=e/8,v=(i={},i[ne]=["C",d,p,l+f,0,l,0],i[ue]=["C",d,e-p,l+f,e,l,e],i[oe]=["C",p,u-d,0,l-f,0,l],i[re]=["C",e-p,u-d,e,l-f,e,l],i)[r.prop].join(" "),g=u/2-ie(n,e/8),m=e/8,y=(a={},a[ne]=["C",l-f,0,g,m,s],a[ue]=["C",l-f,e,g,e-m,s],a[oe]=["C",0,l+f,m,u-g,s],a[re]=["C",e,l+f,e-m,u-g,s],a)[r.prop].join(" ");return["M",s,c,v,y].join(" ")}function Tt(e,u,r,t,n){var o=ie(n,r),i=t.isPush?[0,r]:[e,e-r],a=i[0],f=i[1];return t.isHorizontal?["M",a,r,"V",u-r,"L",f,u-r-o,"V",o+r,"Z"].join(" "):["M",r,a,"H",u-r,"L",u-r-o,f,"H",o+r,"Z"].join(" ")}var Dt=h.forwardRef(function(u,r){var t=u.size,n=t===void 0?8:t,o=u.angle,i=o===void 0?45:o,a=u.borderWidth,f=a===void 0?0:a,s=u.borderColor,c=s===void 0?"black":s,l=u.roundness,d=l===void 0?0:l,p=u.backgroundColor,v=p===void 0?"white":p,g=u.layerSide,m=g===void 0?"top":g,y=u.style,E=y===void 0?{}:y,C=nt(u,St);if(m==="center")return null;var F=P[m],w=n,D=ie(i,n)*2,k=Math.max(w,D);return h.createElement("svg",R({ref:r},C,{style:R({},E,{transform:"translate"+(F.isHorizontal?"Y":"X")+"(-50%)"}),width:k,height:k,preserveAspectRatio:F.isPush?"xMinYMin":"xMaxYMax",viewBox:Bt(w,D,F,f)}),h.createElement("path",{fill:v,strokeWidth:f,stroke:c,d:Pt(w,D,F,d,i)}),h.createElement("path",{fill:v,d:Tt(w,D,f,F,i)}))}),$;(function(e){e[e.ENTERING=0]="ENTERING",e[e.LEAVING=1]="LEAVING",e[e.IDLE=2]="IDLE"})($||($={}));function Ft(e){var u=e===void 0?{}:e,r=u.delayEnter,t=r===void 0?0:r,n=u.delayLeave,o=n===void 0?0:n,i=u.hideOnScroll,a=i===void 0?!0:i,f=h.useState(!1),s=f[0],c=f[1],l=h.useRef(null),d=h.useRef($.IDLE),p=h.useRef(!1),v=h.useCallback(function(){clearTimeout(l.current),l.current=null,d.current=$.IDLE},[]);function g(){d.current===$.LEAVING&&l.current&&v(),!s&&(d.current=$.ENTERING,l.current=window.setTimeout(function(){c(!0),l.current=null,d.current=$.IDLE},t))}function m(E,C){if(d.current===$.ENTERING&&l.current&&v(),!!s){if(C){c(!1),l.current=null,d.current=$.IDLE;return}d.current=$.LEAVING,l.current=window.setTimeout(function(){c(!1),l.current=null,d.current=$.IDLE},o)}}h.useEffect(function(){function E(){s&&a&&(v(),c(!1))}return window.addEventListener("scroll",E,!0),function(){window.removeEventListener("scroll",E,!0),l.current&&clearTimeout(l.current)}},[s,a,v]);var y={onMouseEnter:g,onMouseLeave:m,onTouchStart:function(){p.current=!1},onTouchMove:function(){p.current=!0},onTouchEnd:function(){!p.current&&!s&&c(!0),p.current=!1}};return[s,y,function(){return m(null,!0)}]}const Lt="_popover__content_yehvt_1",Rt={popover__content:Lt},He=({trigger:e="click",auto:u=!0,placement:r="bottom-center",...t})=>{var E;const n=rt(Rt,t.className),[o,i]=h.useState(!!t.defaultIsOpen),[a,f]=Ft(t.hoverOptions),s=h.useRef(null),c=h.useCallback(()=>{i(!1)},[]),{renderLayer:l,triggerProps:d,layerProps:p,arrowProps:v}=bt({isOpen:e==="hover"?a:o,onOutsideClick:c,onDisappear:c,container:((E=s.current)==null?void 0:E.parentElement)??void 0,overflowContainer:t.overflowContainer,triggerOffset:t.triggerOffset,containerOffset:t.containerOffset,arrowOffset:t.arrowOffset,preferX:t.preferX,preferY:t.preferY,auto:u,placement:r}),g=h.useMemo(()=>{let C={ref:ve(s,d.ref)};if(e==="hover"?C={...C,...f}:C.onClick=F=>{F.preventDefault(),i(w=>!w)},tt.isElement(t.children))return h.cloneElement(t.children,C);if(t.children)return we("div",{...C,children:t.children})},[t.children,e,f,d]),m=h.useMemo(()=>{if(t.arrow)return we(Dt,{...t.arrowOptions,...v})},[t.arrow,t.arrowOptions,v]),y=h.useMemo(()=>{if(o||e==="hover"&&a)return l(Oe("div",{...p,className:n("popover__content"),children:[typeof t.render=="function"?t.render():t.render,m]}))},[o,a,e,p,m,l]);return Oe(h.Fragment,{children:[g,y]})};try{He.displayName="Popover",He.__docgenInfo={description:"Компонент `Popover` используется для отображения содержимого во всплывающем блоке при клике или наведении на указанный элемент-триггер. Поповер может использоваться для отображения дополнительной информации, подсказок или контекстного меню.",displayName:"Popover",props:{className:{defaultValue:null,description:"Задает дополнительные CSS классы для стилизации компонента.",name:"className",required:!1,type:{name:"string | TStyle"}},children:{defaultValue:null,description:"Принимает элементы, которые будут использованы в качестве триггера.",name:"children",required:!1,type:{name:"ReactNode"}},trigger:{defaultValue:{value:"click"},description:"Событие, при котором будет открываться `Popover`.",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},defaultIsOpen:{defaultValue:null,description:"Определяет, будет ли `Popover` отображаться при первоначальном рендеринге компонента.",name:"defaultIsOpen",required:!1,type:{name:"boolean"}},overflowContainer:{defaultValue:null,description:"",name:"overflowContainer",required:!1,type:{name:"boolean"}},auto:{defaultValue:{value:"true"},description:"Определяет, должен ли автоматически подстраиваться под размеры экрана.",name:"auto",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"bottom-center"},description:"Определяет местоположение, куда будет отображаться всплывающий блок.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"bottom-center"'},{value:'"top-start"'},{value:'"top-center"'},{value:'"top-end"'},{value:'"left-end"'},{value:'"left-center"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-center"'},{value:'"right-start"'}]}},triggerOffset:{defaultValue:null,description:"Определяет смещение позиции относительно триггера, который вызывает всплывающее окно.",name:"triggerOffset",required:!1,type:{name:"number"}},containerOffset:{defaultValue:null,description:"Задает смещение относительно контейнера, в котором находится.",name:"containerOffset",required:!1,type:{name:"number"}},arrowOffset:{defaultValue:null,description:"Определяет смещение стрелки.",name:"arrowOffset",required:!1,type:{name:"number"}},preferX:{defaultValue:null,description:"",name:"preferX",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},preferY:{defaultValue:null,description:"",name:"preferY",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},render:{defaultValue:null,description:"Определяет, какой контент будет отображаться внутри всплывающего окна.",name:"render",required:!1,type:{name:"ReactNode | (() => ReactNode)"}},hoverOptions:{defaultValue:null,description:"",name:"hoverOptions",required:!1,type:{name:"UseHoverOptions"}},arrow:{defaultValue:null,description:"Определяет, должна ли стрелка быть отображена внутри всплывающего блока.",name:"arrow",required:!1,type:{name:"boolean"}},arrowOptions:{defaultValue:null,description:"",name:"arrowOptions",required:!1,type:{name:"{ angle?: number; size?: number; roundness?: number | undefined; borderWidth?: number | undefined; borderColor?: string | undefined; backgroundColor?: string | undefined; } | undefined"}}}}}catch{}export{He as P};
//# sourceMappingURL=index-89b6e18a.js.map