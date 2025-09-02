(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Zi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function cm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uo={duration:.5,overwrite:!1,delay:0},Zh,ln,Dt,hi=1e8,wt=1/hi,Lu=Math.PI*2,Pg=Lu/4,Lg=0,um=Math.sqrt,Dg=Math.cos,Ig=Math.sin,on=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},ur=function(e){return typeof e=="number"},Jh=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},Qh=function(){return typeof window<"u"},Ha=function(e){return zt(e)||on(e)},hm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Du=/(?:-?\.?\d|\.)+/gi,fm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dm=/[+-]=-?[.\d]+/,pm=/[^,'"\[\]\s]+/gi,Ng=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Ai,Iu,ef,ei={},Kl={},mm,_m=function(e){return(Kl=ho(e,ei))&&kn},tf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},va=function(e,t){return!t&&console.warn(e)},gm=function(e,t){return e&&(ei[e]=t)&&Kl&&(Kl[e]=t)||ei},ya=function(){return 0},Ug={suppressEvents:!0,isStart:!0,kill:!1},Pl={suppressEvents:!0,kill:!1},Og={suppressEvents:!0},nf={},Cr=[],Nu={},xm,qn={},Ac={},$f=30,Ll=[],rf="",sf=function(e){var t=e[0],n,i;if(ki(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ll.length;i--&&!Ll[i].targetTest(t););n=Ll[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vm(e[i],n)))||e.splice(i,1);return e},cs=function(e){return e._gsap||sf(fi(e))[0]._gsap},vm=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():Jh(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},Qs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},$l=function(){var e=Cr.length,t=Cr.slice(0),n,i;for(Nu={},Cr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},of=function(e){return!!(e._initted||e._startAt||e.add)},ym=function(e,t,n,i){Cr.length&&!ln&&$l(),e.render(t,n,!!(ln&&t<0&&of(e))),Cr.length&&!ln&&$l()},Mm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(pm).length<2?t:on(e)?e.trim():e},Sm=function(e){return e},ti=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ho=function(e,t){for(var n in t)e[n]=t[n];return e},jf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ki(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},jl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ia=function(e){var t=e.parent||Ut,n=e.keyframes?Bg(gn(e.keyframes)):ti;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Tm=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},_c=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Uu=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(Pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Hg=function s(e){return!e||e._ts&&s(e.parent)},Zf=function(e){return e._repeat?fo(e._tTime,e=e.duration()+e._rDelay)*e:0},fo=function(e,t){var n=Math.floor(e=Kt(e/t));return e&&n===e?n-1:n},Zl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gc=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||wt)||0))},xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gc(e),n._dirty||us(n,e)),e},Em=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Zl(e.rawTime(),t),(!t._dur||Ba(0,t.totalDuration(),n)-t._tTime>wt)&&t.render(n,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-wt}},Pi=function(e,t,n,i){return t.parent&&Nr(t),t._start=Kt((ur(n)?n:n||e!==Ut?oi(e,n,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Tm(e,t,"_first","_last",e._sort?"_start":0),Ou(t)||(e._recent=t),i||Em(e,t),e._ts<0&&xc(e,e._tTime),e},bm=function(e,t){return(ei.ScrollTrigger||tf("scrollTrigger",t))&&ei.ScrollTrigger.create(t,e)},wm=function(e,t,n,i,r){if(lf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xm!==$n.frame)return Cr.push(e),e._lazy=[r,i],1},Vg=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ou=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Gg=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Vg(e)&&!(!e._initted&&Ou(e))||(e._ts<0||e._dp._ts<0)&&!Ou(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ba(0,e._tDur,t),u=fo(l,a),e._yoyo&&u&1&&(o=1-o),u!==fo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||ln||i||e._zTime===wt||!t&&e._zTime){if(!e._initted&&wm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?wt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Uu(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Nr(e,1),!n&&!ln&&(Zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},po=function(e,t,n,i){var r=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Kt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&xc(e,e._tTime=e._tDur*a),e.parent&&gc(e),n||us(e.parent,e),e},Jf=function(e){return e instanceof Rn?us(e):po(e,e._dur)},Xg={_start:0,endTime:ya,totalDuration:ya},oi=function s(e,t,n){var i=e.labels,r=e._recent||Xg,o=e.duration()>=hi?r.endTime(!1):e._dur,a,l,c;return on(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ra=function(e,t,n){var i=ur(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new qt(t[0],o,t[r+1])},Br=function(e,t){return e||e===0?t(e):t},Ba=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!on(e)||!(t=Ng.exec(e))?"":t[1]},Yg=function(e,t,n){return Br(n,function(i){return Ba(e,t,i)})},Fu=[].slice,Am=function(e,t){return e&&ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==Ai},qg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return on(i)&&!t||Am(i,1)?(r=n).push.apply(r,fi(i)):n.push(i)})||n},fi=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):on(e)&&!n&&(Iu||!mo())?Fu.call((t||ef).querySelectorAll(e),0):gn(e)?qg(e,n):Am(e)?Fu.call(e,0):e?[e]:[]},Bu=function(e){return e=fi(e)[0]||va("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return fi(t,n.querySelectorAll?n:n===e?va("Invalid scope")||ef.createElement("div"):e)}},Rm=function(e){return e.sort(function(){return .5-Math.random()})},Cm=function(e){if(zt(e))return e;var t=ki(e)?e:{each:e},n=hs(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return on(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,g){var _=(g||t).length,m=o[_],p,S,M,x,b,A,E,R,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,hi])[1],!v){for(E=-hi;E<(E=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*u-.5:i%v,S=v===hi?0:l?_*h/v-.5:i/v|0,E=0,R=hi,A=0;A<_;A++)M=A%v-p,x=S-(A/v|0),m[A]=b=c?Math.abs(c==="y"?x:M):um(M*M+x*x),b>E&&(E=b),b<R&&(R=b);i==="random"&&Rm(m),m.max=E-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=mn(t.amount||t.each)||0,n=n&&_<0?km(n):n}return _=(m[f]-m.min)/m.max||0,Kt(m.b+(n?n(_):_)*m.v)+m.u}},ku=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ur(n)?0:mn(n))}},Pm=function(e,t){var n=gn(e),i,r;return!n&&ki(e)&&(i=n=e.radius||hi,e.values?(e=fi(e.values),(r=!ur(e[0]))&&(i*=i)):e=ku(e.increment)),Br(t,n?zt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=hi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ur(o)?u:u+mn(o)}:ku(e))},Lm=function(e,t,n,i){return Br(gn(e)?!t:n===!0?!!(n=0):!i,function(){return gn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Kg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},$g=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},jg=function(e,t,n){return Im(e,t,0,1,n)},Dm=function(e,t,n){return Br(n,function(i){return e[~~t(i)]})},Zg=function s(e,t,n){var i=t-e;return gn(e)?Dm(e,s(0,e.length),t):Br(n,function(r){return(i+(r-e)%i)%i+e})},Jg=function s(e,t,n){var i=t-e,r=i*2;return gn(e)?Dm(e,s(0,e.length-1),t):Br(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ma=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?pm:Du),n+=e.substr(t,i-t)+Lm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Im=function(e,t,n,i,r){var o=t-e,a=i-n;return Br(r,function(l){return n+((l-e)/o*a||0)})},Qg=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=on(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(gn(e)&&!gn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=ho(gn(e)?[]:{},e));if(!u){for(l in t)af.call(a,e,l,"get",t[l]);r=function(g){return hf(g,a)||(o?e.p:e)}}}return Br(n,r)},Qf=function(e,t,n){var i=e.labels,r=hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Zn=function(e,t,n){var i=e.vars,r=i[t],o=Dt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Cr.length&&$l(),a&&(Dt=a),u=l?r.apply(c,l):r.call(c),Dt=o,u},Yo=function(e){return Nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Zn(e,"onInterrupt"),e},$s,Nm=[],Um=function(e){if(e)if(e=!e.name&&e.default||e,Qh()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:ya,render:hf,add:af,kill:m0,modifier:p0,rawVars:0},o={targetTest:0,get:0,getSetter:uf,aliases:{},register:0};if(mo(),e!==i){if(qn[t])return;ti(i,ti(jl(e,r),o)),ho(i.prototype,ho(r,jl(e,o))),qn[i.prop=t]=i,e.targetTest&&(Ll.push(i),nf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gm(t,i),e.register&&e.register(kn,i,On)}else Nm.push(e)},bt=255,qo={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Rc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Om=function(e,t,n){var i=e?ur(e)?[e>>16,e>>8&bt,e&bt]:0:qo.black,r,o,a,l,c,u,h,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qo[e])i=qo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Du),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=Rc(l+1/3,r,o),i[1]=Rc(l,r,o),i[2]=Rc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(fm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Du)||qo.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/bt,o=i[1]/bt,a=i[2]/bt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Fm=function(e){var t=[],n=[],i=-1;return e.split(Pr).forEach(function(r){var o=r.match(Ks)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ed=function(e,t,n){var i="",r=(e+i).match(Pr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Om(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Fm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Pr,"1").split(Ks),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Pr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Pr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qo)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),e0=/hsl[a]?\(/,Bm=function(e){var t=e.join(" "),n;if(Pr.lastIndex=0,Pr.test(t))return n=e0.test(t),e[1]=ed(e[1],n),e[0]=ed(e[0],n,Fm(e[1])),!0},Sa,$n=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,g=function _(m){var p=s()-i,S=m===!0,M,x,b,A;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,M=b-o,(M>0||S)&&(A=++h.frame,f=b-h.time*1e3,h.time=b=b/1e3,o+=M+(M>=r?4:r-M),x=1),S||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](b,f,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){mm&&(!Iu&&Qh()&&(Ai=Iu=window,ef=Ai.document||{},ei.gsap=kn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(kn.version),_m(Kl||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),Nm.forEach(Um)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Sa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Sa=0,c=ya},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,S){var M=p?function(x,b,A,E){m(x,b,A,E),h.remove(M)}:m;return h.remove(m),a[S?"unshift":"push"](M),mo(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),mo=function(){return!Sa&&$n.wake()},ht={},t0=/^[\d.\-M][\d.\-,\s]/,n0=/["']/g,i0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(n0,"").trim():+c,i=l.substr(a+1).trim();return t},r0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},s0=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[i0(t[1])]:r0(e).split(",").map(Mm)):ht._CE&&t0.test(e)?ht._CE("",e):n},km=function(e){return function(t){return 1-e(1-t)}},zm=function s(e,t){for(var n=e._first,i;n;)n instanceof Rn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},hs=function(e,t){return e&&(zt(e)?e:ht[e]||s0(e))||t},Es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Un(e,function(a){ht[a]=ei[a]=r,ht[o=a.toLowerCase()]=n;for(var l in r)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=r[l]}),r},Hm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Lu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Ig((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Hm(a);return r=Lu/r,l.config=function(c,u){return s(e,c,u)},l},Pc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Hm(n);return i.config=function(r){return s(e,r)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Es(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;Es("Elastic",Cc("in"),Cc("out"),Cc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Es("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Es("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Es("Circ",function(s){return-(um(1-s*s)-1)});Es("Sine",function(s){return s===1?1:-Dg(s*Pg)+1});Es("Back",Pc("in"),Pc("out"),Pc());ht.SteppedEase=ht.steps=ei.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-wt;return function(a){return((i*Ba(0,o,a)|0)+r)*n}}};uo.ease=ht["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return rf+=s+","+s+"Params,"});var Vm=function(e,t){this.id=Lg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vm,this.set=t?t.getSetter:uf},Ta=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,po(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Sa||$n.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,po(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(mo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(xc(this,n),!r._dp||r.parent||Em(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ym(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?fo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Zl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-wt?0:this._rts,this.totalTime(Ba(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),gc(this),zg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Og);var i=ln;return ln=n,of(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-wt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-wt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-wt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=zt(n)?n:Sm,a=function(){var c=i.then;i.then=null,zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Yo(this)},s})();ti(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Rn=(function(s){cm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Nn(n.sortChildren),Ut&&Pi(n.parent||Ut,Zi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&bm(Zi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return ra(0,arguments,this),this},t.from=function(i,r,o){return ra(1,arguments,this),this},t.fromTo=function(i,r,o,a){return ra(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ia(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new qt(i,r,oi(this,o),1),this},t.call=function(i,r,o){return Pi(this,qt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qt(i,o,oi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,ia(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,ia(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Kt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,S,M,x,b,A,E;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,M=this._ts,p=!M,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Kt(u%m),u===l?(_=this._repeat,f=c):(b=Kt(u/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=fo(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),A&&_&1&&(f=c-f,E=1),_!==b&&!this._lock){var R=A&&b&1,v=R===(A&&_&1);if(_<b&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Kt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;zm(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Wg(this,Kt(a),Kt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!b&&(Zn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-wt);break}}d=g}else{d=this._last;for(var y=i<0?i:f;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||ln&&of(d)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=y?-wt:wt);break}}d=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=x,gc(this),this.render(i,r,o);this._onUpdate&&!r&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Nr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ur(r)||(r=oi(this,r,i)),!(i instanceof Ta)){if(gn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(on(i))return this.addLabel(i,r);if(zt(i))i=qt.delayedCall(0,i);else return this}return this!==i?Pi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return on(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&_c(this,i),i===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=oi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=qt.delayedCall(0,r||ya,o);return a.data="isPause",this._hasPause=1,Pi(this,a,oi(this,i))},t.removePause=function(i){var r=this._first;for(i=oi(this,i);r;)r._start===i&&r.data==="isPause"&&Nr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=fi(i),l=this._first,c=ur(r),u;l;)l instanceof qt?Fg(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=oi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=qt.to(o,ti({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&po(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,ti({startAt:{time:oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Qf(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Qf(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+wt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return us(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),us(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=hi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;po(o,o===Ut&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(ym(Ut,Zl(i,Ut)),xm=$n.frame),$n.frame>=$f){$f+=Qn.autoSleep||120;var r=Ut._first;if((!r||!r._ts)&&Qn.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},e})(Ta);ti(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var o0=function(e,t,n,i,r,o,a){var l=new On(this._pt,e,t,0,1,Km,null,r),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ma(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(wc)||[];h=wc.exec(i);)g=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Qs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=wc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(dm.test(i)||p)&&(l.e=0),this._pt=l,l},af=function(e,t,n,i,r,o,a,l,c,u){zt(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:zt(h)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=zt(h)?c?h0:Ym:cf,g;if(on(i)&&(~i.indexOf("random(")&&(i=Ma(i)),i.charAt(1)==="="&&(g=Qs(f,i)+(mn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||zu)return!isNaN(f*i)&&i!==""?(g=new On(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?d0:qm,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&tf(t,i),o0.call(this,e,t,f,i,d,l||Qn.stringFilter,c))},a0=function(e,t,n,i,r){if(zt(e)&&(e=sa(e,r,t,n,i)),!ki(e)||e.style&&e.nodeType||gn(e)||hm(e))return on(e)?sa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=sa(e[a],r,t,n,i);return o},Gm=function(e,t,n,i,r,o){var a,l,c,u;if(qn[e]&&(a=new qn[e]).init(r,a.rawVars?t[e]:a0(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new On(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==$s))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Er,zu,lf=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Zh,x=e.timeline,b,A,E,R,v,y,C,N,O,F,W,z,X;if(x&&(!f||!r)&&(r="none"),e._ease=hs(r,uo.ease),e._yEase=h?km(hs(h===!0?r:h,uo.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(N=m[0]?cs(m[0]).harness:0,z=N&&i[N.prop],b=jl(i,nf),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Pl:Ug),_._lazy=0),o){if(Nr(e._startAt=qt.set(m,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!d)&&e._startAt.revert(Pl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),E=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Nn(l),immediateRender:a,stagger:0,parent:p},b),z&&(E[N.prop]=z),Nr(e._startAt=qt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Pl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,wt,wt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Nn(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],C=v._gsap||sf(m)[A]._gsap,e._ptLookup[A]=F={},Nu[C.id]&&Cr.length&&$l(),W=S===m?A:S.indexOf(v),N&&(O=new N).init(v,z||b,e,W,S)!==!1&&(e._pt=R=new On(e._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(G){F[G]=R}),O.priority&&(y=1)),!N||z)for(E in b)qn[E]&&(O=Gm(E,b,e,W,v,S))?O.priority&&(y=1):F[E]=R=af.call(e,v,E,"get",b[E],W,S,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),M&&e._pt&&(Er=e,Ut.killTweensOf(v,F,e.globalTime(t)),X=!e.parent,Er=0),e._pt&&l&&(Nu[C.id]=1)}y&&$m(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&x.render(hi,!0,!0)},l0=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zu=1,e.vars[t]="+=0",lf(e,a),zu=0,l?va(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+mn(h.e)),h.b&&(h.b=u.s+mn(h.b))},c0=function(e,t){var n=e[0]?cs(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ho({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},u0=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(gn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},sa=function(e,t,n,i,r){return zt(e)?e.call(t,n,i,r):on(e)&&~e.indexOf("random(")?Ma(e):e},Wm=rf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Xm={};Un(Wm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Xm[s]=1});var qt=(function(s){cm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ia(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Ut,M=(gn(n)||hm(n)?ur(n[0]):"length"in i)?[n]:fi(n),x,b,A,E,R,v,y,C;if(a._targets=M.length?sf(M):va("GSAP target "+n+" not found. https://gsap.com",!Qn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ha(c)||Ha(u)){if(i=a.vars,x=a.timeline=new Rn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:M}),x.kill(),x.parent=x._dp=Zi(a),x._start=0,f||Ha(c)||Ha(u)){if(E=M.length,y=f&&Cm(f),ki(f))for(R in f)~Wm.indexOf(R)&&(C||(C={}),C[R]=f[R]);for(b=0;b<E;b++)A=jl(i,Xm),A.stagger=0,p&&(A.yoyoEase=p),C&&ho(A,C),v=M[b],A.duration=+sa(c,Zi(a),b,v,M),A.delay=(+sa(u,Zi(a),b,v,M)||0)-a._delay,!f&&E===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(v,A,y?y(b,v,M):0),x._ease=ht.none;x.duration()?c=u=0:a.timeline=0}else if(g){ia(ti(x.vars.defaults,{ease:"none"})),x._ease=hs(g.ease||i.ease||"none");var N=0,O,F,W;if(gn(g))g.forEach(function(z){return x.to(M,z,">")}),x.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||u0(R,g[R],A,g.easeEach);for(R in A)for(O=A[R].sort(function(z,X){return z.t-X.t}),N=0,b=0;b<O.length;b++)F=O[b],W={ease:F.e,duration:(F.t-(b?O[b-1].t:0))/100*c},W[R]=F.v,x.to(M,W,N),N+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!Zh&&(Er=Zi(a),Ut.killTweensOf(M),Er=0),Pi(S,Zi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Kt(S._time)&&Nn(h)&&Hg(Zi(a))&&S.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-u)||0)),m&&bm(Zi(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-wt&&!u?l:i<wt?0:i,f,d,g,_,m,p,S,M,x;if(!c)Gg(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=Kt(h%_),h===l?(g=this._repeat,f=c):(m=Kt(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,f=c-f),m=fo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(M&&this._yEase&&zm(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(wm(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(x||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&h&&!r&&!m&&(Zn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Uu(this,i,r,o),Zn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Uu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Nr(this,1),!r&&!(u&&!a)&&(h||a||p)&&(Zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Sa||$n.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||lf(this,c),u=this._ease(c/this._dur),l0(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(xc(this,0),this.parent||Tm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Er&&Er.vars.overwrite!==!0)._first||Yo(this),this.parent&&o!==this.timeline.totalDuration()&&po(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fi(i):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!r||r==="all")&&kg(a,l))return r==="all"&&(this._pt=0),Yo(this);for(h=this._op=this._op||[],r!=="all"&&(on(r)&&(_={},Un(r,function(S){return _[S]=1}),r=_),r=c0(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,g=f,d={}):(d=h[p]=h[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&_c(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Yo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ra(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return ra(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ut.killTweensOf(i,r,o)},e})(Ta);ti(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(s){qt[s]=function(){var e=new Rn,t=Fu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var cf=function(e,t,n){return e[t]=n},Ym=function(e,t,n){return e[t](n)},h0=function(e,t,n,i){return e[t](i.fp,n)},f0=function(e,t,n){return e.setAttribute(t,n)},uf=function(e,t){return zt(e[t])?Ym:Jh(e[t])&&e.setAttribute?f0:cf},qm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Km=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},p0=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},m0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?_c(this,t,"_pt"):t.dep||(n=1),t=i;return!n},_0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},$m=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},On=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||qm,this.d=l||this,this.set=c||cf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=_0,this.m=n,this.mt=r,this.tween=i},s})();Un(rf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return nf[s]=1});ei.TweenMax=ei.TweenLite=qt;ei.TimelineLite=ei.TimelineMax=Rn;Ut=new Rn({sortChildren:!1,defaults:uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qn.stringFilter=Bm;var fs=[],Dl={},g0=[],td=0,x0=0,Lc=function(e){return(Dl[e]||g0).map(function(t){return t()})},Hu=function(){var e=Date.now(),t=[];e-td>2&&(Lc("matchMediaInit"),fs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ai.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Lc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),td=e,Lc("matchMedia"))},jm=(function(){function s(t,n){this.selector=n&&Bu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=x0++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){zt(n)&&(r=i,i=n,n=zt);var o=this,a=function(){var c=Dt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Bu(r)),Dt=o,h=i.apply(o,arguments),zt(h)&&o._r.push(h),Dt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Dt;Dt=null,n(this),Dt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=fs.length;o--;)fs[o].id===this.id&&fs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s})(),v0=(function(){function s(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){ki(n)||(n={matches:n});var o=new jm(0,r||this.scope),a=o.conditions={},l,c,u;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ai.matchMedia(n[c]),l&&(fs.indexOf(o)<0&&fs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hu):l.addEventListener("change",Hu)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Jl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Um(i)})},timeline:function(e){return new Rn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){on(e)&&(e=fi(e)[0]);var r=cs(e||{}).get,o=n?Sm:Mm;return n==="native"&&(n=""),e&&(t?o((qn[t]&&qn[t].get||r)(e,t,n,i)):function(a,l,c){return o((qn[a]&&qn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=fi(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=qn[t],a=cs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;$s._pt=0,h.init(e,n?u+n:u,$s,0,[e]),h.render(1,h),$s._pt&&hf(1,$s)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=kn.to(e,ti((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=hs(e.ease,uo.ease)),jf(uo,e||{})},config:function(e){return jf(Qn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!qn[a]&&!ei[a]&&va(t+" effect requires "+a+" plugin.")}),Ac[t]=function(a,l,c){return n(fi(a),ti(l||{},r),c)},o&&(Rn.prototype[t]=function(a,l,c){return this.add(Ac[t](a,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=hs(t)},parseEase:function(e,t){return arguments.length?hs(e,t):ht},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Rn(e),i,r;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)r=i._next,(t||!(!i._dur&&i instanceof qt&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=r;return Pi(Ut,n,0),n},context:function(e,t){return e?new jm(e,t):Dt},matchMedia:function(e){return new v0(e)},matchMediaRefresh:function(){return fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hu()},addEventListener:function(e,t){var n=Dl[e]||(Dl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zg,wrapYoyo:Jg,distribute:Cm,random:Lm,snap:Pm,normalize:jg,getUnit:mn,clamp:Yg,splitColor:Om,toArray:fi,selector:Bu,mapRange:Im,pipe:Kg,unitize:$g,interpolate:Qg,shuffle:Rm},install:_m,effects:Ac,ticker:$n,updateRoot:Rn.updateRoot,plugins:qn,globalTimeline:Ut,core:{PropTween:On,globals:gm,Tween:qt,Timeline:Rn,Animation:Ta,getCache:cs,_removeLinkedListItem:_c,reverting:function(){return ln},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Zh=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Jl[s]=qt[s]});$n.add(Rn.updateRoot);$s=Jl.to({},{duration:0});var y0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M0=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=y0(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Dc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(on(r)&&(l={},Un(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}M0(a,r)}}}},kn=Jl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Dc("roundProps",ku),Dc("modifiers"),Dc("snap",Pm))||Jl;qt.version=Rn.version=kn.version="3.13.0";mm=1;Qh()&&mo();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nd,br,eo,ff,rs,id,df,S0=function(){return typeof window<"u"},hr={},Zr=180/Math.PI,to=Math.PI/180,ws=Math.atan2,rd=1e8,pf=/([A-Z])/g,T0=/(left|right|width|margin|padding|x)/i,E0=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},w0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},R0=function(e,t,n){return e.style[t]=n},C0=function(e,t,n){return e.style.setProperty(t,n)},P0=function(e,t,n){return e._gsap[t]=n},L0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},D0=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},I0=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ot="transform",Fn=Ot+"Origin",N0=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in hr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Qi(i,a)}):this.tfm[e]=o.x?o[e]:Qi(i,e),e===Fn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ot}(r||t)&&this.props.push(e,t,r[e])},Qm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},U0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(pf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=df(),(!r||!r.isStart)&&!n[Ot]&&(Qm(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},e_=function(e,t){var n={target:e,props:[],revert:U0,save:N0};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},t_,Gu=function(e,t){var n=br.createElementNS?br.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):br.createElement(e);return n&&n.style?n:br.createElement(e)},di=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(pf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,_o(t)||t,1)||""},sd="O,Moz,ms,Ms,Webkit".split(","),_o=function(e,t,n){var i=t||rs,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(sd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?sd[o]:"")+e},Wu=function(){S0()&&window.document&&(nd=window,br=nd.document,eo=br.documentElement,rs=Gu("div")||{style:{}},Gu("div"),Ot=_o(Ot),Fn=Ot+"Origin",rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",t_=!!_o("perspective"),df=kn.core.reverting,ff=1)},od=function(e){var t=e.ownerSVGElement,n=Gu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),eo.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),eo.removeChild(n),r},ad=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},n_=function(e){var t,n;try{t=e.getBBox()}catch{t=od(e),n=1}return t&&(t.width||t.height)||n||(t=od(e)),t&&!t.width&&!t.x&&!t.y?{x:+ad(e,["x","cx","x1"])||0,y:+ad(e,["y","cy","y1"])||0,width:0,height:0}:t},i_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&n_(e))},xs=function(e,t){if(t){var n=e.style,i;t in hr&&t!==Fn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(pf,"-$1").toLowerCase())):n.removeAttribute(t)}},wr=function(e,t,n,i,r,o){var a=new On(e._pt,t,n,0,1,o?Jm:Zm);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},ld={deg:1,rad:1,turn:1},O0={grid:1,flex:1},Ur=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=rs.style,l=T0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!r||ld[i]||ld[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&i_(e),(d||o==="%")&&(hr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Gt(d?r/g*h:r/100*g);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===br||!_.appendChild)&&(_=br.body),m=_._gsap,m&&d&&m.width&&l&&m.time===$n.time&&!m.uncache)return Gt(r/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,g=e[u],S?e.style[t]=S:xs(e,t)}else(d||o==="%")&&!O0[di(_,"display")]&&(a.position=di(e,"position")),_===e&&(a.position="static"),_.appendChild(rs),g=rs[u],_.removeChild(rs),a.position="absolute";return l&&d&&(m=cs(_),m.time=$n.time,m.width=_[u]),Gt(f?g*r/h:g&&r?h/g*r:0)},Qi=function(e,t,n,i){var r;return ff||Wu(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),hr[t]&&t!=="transform"?(r=ba(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:ec(di(e,Fn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ql[t]&&Ql[t](e,t,n)||di(e,t)||vm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ur(e,t,r,n)+n:r},F0=function(e,t,n,i){if(!n||n==="none"){var r=_o(t,e,1),o=r&&di(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=di(e,"borderTopColor"))}var a=new On(this._pt,e.style,t,0,1,Km),l=0,c=0,u,h,f,d,g,_,m,p,S,M,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=di(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=di(e,t)||i,_?e.style[t]=_:xs(e,t)),u=[n,i],Bm(u),n=u[0],i=u[1],f=n.match(Ks)||[],b=i.match(Ks)||[],b.length){for(;h=Ks.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Qs(d,m)+x),p=parseFloat(m),M=m.substr((p+"").length),l=Ks.lastIndex-M.length,M||(M=M||Qn.units[t]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(d=Ur(e,t,_,M)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Jm:Zm;return dm.test(i)&&(a.e=0),this._pt=a,a},cd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},B0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cd[n]||n,t[1]=cd[i]||i,t.join(" ")},k0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],hr[a]&&(l=1,a=a==="transformOrigin"?Fn:Ot),xs(n,a);l&&(xs(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ba(n,1),o.uncache=1,Qm(i)))}},Ql={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new On(e._pt,t,n,0,0,k0);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ea=[1,0,0,1,0,0],r_={},s_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ud=function(e){var t=di(e,Ot);return s_(t)?Ea:t.substr(7).match(fm).map(Gt)},mf=function(e,t){var n=e._gsap||cs(e),i=e.style,r=ud(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ea:r):(r===Ea&&!e.offsetParent&&e!==eo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,eo.appendChild(e)),r=ud(e),l?i.display=l:xs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):eo.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Xu=function(e,t,n,i,r,o){var a=e._gsap,l=r||mf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],M=t.split(" "),x=parseFloat(M[0])||0,b=parseFloat(M[1])||0,A,E,R,v;n?l!==Ea&&(E=d*m-g*_)&&(R=x*(m/E)+b*(-_/E)+(_*S-m*p)/E,v=x*(-g/E)+b*(d/E)-(d*S-g*p)/E,x=R,b=v):(A=n_(e),x=A.x+(~M[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(M[1]||M[0]).indexOf("%")?b/100*A.height:b)),i||i!==!1&&a.smooth?(p=x-c,S=b-u,a.xOffset=h+(p*d+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Fn]="0px 0px",o&&(wr(o,a,"xOrigin",c,x),wr(o,a,"yOrigin",u,b),wr(o,a,"xOffset",h,a.xOffset),wr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},ba=function(e,t){var n=e._gsap||new Vm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=di(e,Fn)||"0",u,h,f,d,g,_,m,p,S,M,x,b,A,E,R,v,y,C,N,O,F,W,z,X,G,ee,L,ae,ve,Ne,De,K;return u=h=f=_=m=p=S=M=x=0,d=g=1,n.svg=!!(e.getCTM&&i_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),E=mf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Xu(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,A=n.yOrigin||0,E!==Ea&&(C=E[0],N=E[1],O=E[2],F=E[3],u=W=E[4],h=z=E[5],E.length===6?(d=Math.sqrt(C*C+N*N),g=Math.sqrt(F*F+O*O),_=C||N?ws(N,C)*Zr:0,S=O||F?ws(O,F)*Zr+_:0,S&&(g*=Math.abs(Math.cos(S*to))),n.svg&&(u-=b-(b*C+A*O),h-=A-(b*N+A*F))):(K=E[6],Ne=E[7],L=E[8],ae=E[9],ve=E[10],De=E[11],u=E[12],h=E[13],f=E[14],R=ws(K,ve),m=R*Zr,R&&(v=Math.cos(-R),y=Math.sin(-R),X=W*v+L*y,G=z*v+ae*y,ee=K*v+ve*y,L=W*-y+L*v,ae=z*-y+ae*v,ve=K*-y+ve*v,De=Ne*-y+De*v,W=X,z=G,K=ee),R=ws(-O,ve),p=R*Zr,R&&(v=Math.cos(-R),y=Math.sin(-R),X=C*v-L*y,G=N*v-ae*y,ee=O*v-ve*y,De=F*y+De*v,C=X,N=G,O=ee),R=ws(N,C),_=R*Zr,R&&(v=Math.cos(R),y=Math.sin(R),X=C*v+N*y,G=W*v+z*y,N=N*v-C*y,z=z*v-W*y,C=X,W=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Gt(Math.sqrt(C*C+N*N+O*O)),g=Gt(Math.sqrt(z*z+K*K)),R=ws(W,z),S=Math.abs(R)>2e-4?R*Zr:0,x=De?1/(De<0?-De:De):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!s_(di(e,Ot)),X&&e.setAttribute("transform",X))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(g),n.rotation=Gt(_)+a,n.rotationX=Gt(m)+a,n.rotationY=Gt(p)+a,n.skewX=S+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=ec(c)),n.xOffset=n.yOffset=0,n.force3D=Qn.force3D,n.renderTransform=n.svg?H0:t_?o_:z0,n.uncache=0,n},ec=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ic=function(e,t,n){var i=mn(t);return Gt(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",i)))+i},z0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,o_(e,t)},Vr="0deg",Do="0px",Gr=") ",o_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,M=n.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(M&&(h!==Vr||u!==Vr)){var A=parseFloat(u)*to,E=Math.sin(A),R=Math.cos(A),v;A=parseFloat(h)*to,v=Math.cos(A),o=Ic(S,o,E*v*-M),a=Ic(S,a,-Math.sin(A)*-M),l=Ic(S,l,R*v*-M+M)}m!==Do&&(x+="perspective("+m+Gr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(b||o!==Do||a!==Do||l!==Do)&&(x+=l!==Do||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gr),c!==Vr&&(x+="rotate("+c+Gr),u!==Vr&&(x+="rotateY("+u+Gr),h!==Vr&&(x+="rotateX("+h+Gr),(f!==Vr||d!==Vr)&&(x+="skew("+f+", "+d+Gr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Gr),S.style[Ot]=x||"translate(0, 0)"},H0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,M=parseFloat(o),x=parseFloat(a),b,A,E,R,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=to,c*=to,b=Math.cos(l)*h,A=Math.sin(l)*h,E=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=to,v=Math.tan(c-u),v=Math.sqrt(1+v*v),E*=v,R*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),b*=v,A*=v)),b=Gt(b),A=Gt(A),E=Gt(E),R=Gt(R)):(b=h,R=f,A=E=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=Ur(d,"x",o,"px"),x=Ur(d,"y",a,"px")),(g||_||m||p)&&(M=Gt(M+g-(g*b+_*E)+m),x=Gt(x+_-(g*A+_*R)+p)),(i||r)&&(v=d.getBBox(),M=Gt(M+i/100*v.width),x=Gt(x+r/100*v.height)),v="matrix("+b+","+A+","+E+","+R+","+M+","+x+")",d.setAttribute("transform",v),S&&(d.style[Ot]=v)},V0=function(e,t,n,i,r){var o=360,a=on(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Zr:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*rd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*rd)%o-~~(c/o)*o)),e._pt=f=new On(e._pt,t,n,i,c,b0),f.e=u,f.u="deg",e._props.push(n),f},hd=function(e,t){for(var n in t)e[n]=t[n];return e},G0=function(e,t,n){var i=hd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=ba(n,1),xs(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=ba(n,1),o[Ot]=c);for(l in hr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=mn(c),g=mn(u),h=d!==g?Ur(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new On(e._pt,a,l,h,f-h,Vu),e._pt.u=g||0,e._props.push(l));hd(a,i)};Un("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Ql[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return Qi(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var a_={name:"css",register:Wu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,g,_,m,p,S,M,x,b,A,E,R;ff||Wu(),this.styles=this.styles||e_(e),R=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(qn[_]&&Gm(_,t,n,i,e,r)))){if(d=typeof u,g=Ql[_],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ma(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Pr.lastIndex=0,Pr.test(c)||(m=mn(c),p=mn(u)),p?m!==p&&(c=Ur(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],on(c)&&~c.indexOf("random(")&&(c=Ma(c)),mn(c+"")||c==="auto"||(c+=Qn.units[_]||mn(Qi(e,_))||""),(c+"").charAt(1)==="="&&(c=Qi(e,_))):c=Qi(e,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in Di&&(_==="autoAlpha"&&(f===1&&Qi(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),wr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in hr,M){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=di(e,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),x||(b=e._gsap,b.renderTransform&&!t.parseTransform||ba(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new On(this._pt,a,Ot,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new On(this._pt,b,"scaleY",b.scaleY,(S?Qs(b.scaleY,S+h):h)-b.scaleY||0,Vu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(Fn,0,a[Fn]),u=B0(u),b.svg?Xu(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&wr(this,b,"zOrigin",b.zOrigin,p),wr(this,a,_,ec(c),ec(u)));continue}else if(_==="svgOrigin"){Xu(e,u,1,A,0,this);continue}else if(_ in r_){V0(this,b,_,f,S?Qs(f,S+u):u);continue}else if(_==="smoothOrigin"){wr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){G0(this,u,e);continue}}else _ in a||(_=_o(_)||_);if(M||(h||h===0)&&(f||f===0)&&!E0.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=mn(u)||(_ in Qn.units?Qn.units[_]:m),m!==p&&(f=Ur(e,_,c,p)),this._pt=new On(this._pt,M?b:a,_,f,(S?Qs(f,S+h):h)-f,!M&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?A0:Vu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=w0);else if(_ in a)F0.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){tf(_,u);continue}M||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,c||e[_])),o.push(_)}}E&&$m(this)},render:function(e,t){if(t.tween._time||!df())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qi,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in hr&&t!==Fn&&(e._gsap.x||Qi(e,"x"))?n&&id===n?t==="scale"?L0:P0:(id=n||{})&&(t==="scale"?D0:I0):e.style&&!Jh(e.style[t])?R0:~t.indexOf("-")?C0:uf(e,t)},core:{_removeProperty:xs,_getMatrix:mf}};kn.utils.checkPrefix=_o;kn.core.getStyleSaver=e_;(function(s,e,t,n){var i=Un(s+","+e+","+t,function(r){hr[r]=1});Un(e,function(r){Qn.units[r]="deg",r_[r]=1}),Di[i[13]]=s+","+e,Un(n,function(r){var o=r.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Qn.units[s]="px"});kn.registerPlugin(a_);var ss=kn.registerPlugin(a_)||kn;ss.core.Tween;function W0(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function X0(s,e,t){return e&&W0(s.prototype,e),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var an,Il,jn,Ar,Rr,no,l_,Jr,oa,c_,ir,yi,u_,h_=function(){return an||typeof window<"u"&&(an=window.gsap)&&an.registerPlugin&&an},f_=1,js=[],st=[],Fi=[],aa=Date.now,Yu=function(e,t){return t},Y0=function(){var e=oa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Fi),st=n,Fi=i,Yu=function(o,a){return t[o](a)}},Lr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},la=function(e){return!!~c_.indexOf(e)},Sn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Va="scrollLeft",Ga="scrollTop",qu=function(){return ir&&ir.isPressed||st.cache++},tc=function(e,t){var n=function i(r){if(r||r===0){f_&&(jn.history.scrollRestoration="manual");var o=ir&&ir.isPressed;r=i.v=Math.round(r)||(ir&&ir.iOS?1:0),e(r),i.cacheID=st.cache,o&&Yu("ss",r)}else(t||st.cache!==i.cacheID||Yu("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Cn={s:Va,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tc(function(s){return arguments.length?jn.scrollTo(s,Zt.sc()):jn.pageXOffset||Ar[Va]||Rr[Va]||no[Va]||0})},Zt={s:Ga,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Cn,sc:tc(function(s){return arguments.length?jn.scrollTo(Cn.sc(),s):jn.pageYOffset||Ar[Ga]||Rr[Ga]||no[Ga]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||an.utils.toArray)(e)[0]||(typeof e=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},q0=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Or=function(e,t){var n=t.s,i=t.sc;la(e)&&(e=Ar.scrollingElement||Rr);var r=st.indexOf(e),o=i===Zt.sc?1:2;!~r&&(r=st.push(e)-1),st[r+o]||Sn(e,"scroll",qu);var a=st[r+o],l=a||(st[r+o]=tc(Lr(e,n),!0)||(la(e)?i:tc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=an.getProperty(e,"scrollBehavior")==="smooth"),l},Ku=function(e,t,n){var i=e,r=e,o=aa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=aa();_||m-o>l?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(g){var _=a,m=r,p=aa();return(g||g===0)&&g!==i&&u(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},Io=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},d_=function(){oa=an.core.globals().ScrollTrigger,oa&&oa.core&&Y0()},p_=function(e){return an=e||h_(),!Il&&an&&typeof document<"u"&&document.body&&(jn=window,Ar=document,Rr=Ar.documentElement,no=Ar.body,c_=[jn,Ar,Rr,no],an.utils.clamp,u_=an.core.context||function(){},Jr="onpointerenter"in no?"pointer":"mouse",l_=Wt.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Wt.eventTypes=("ontouchstart"in Rr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return f_=0},500),d_(),Il=1),Il};Cn.op=Zt;st.cache=0;var Wt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Il||p_(an)||console.warn("Please gsap.registerPlugin(Observer)"),oa||d_();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,M=n.onPress,x=n.onRelease,b=n.onRight,A=n.onLeft,E=n.onUp,R=n.onDown,v=n.onChangeX,y=n.onChangeY,C=n.onChange,N=n.onToggleX,O=n.onToggleY,F=n.onHover,W=n.onHoverEnd,z=n.onMove,X=n.ignoreCheck,G=n.isNormalizer,ee=n.onGestureStart,L=n.onGestureEnd,ae=n.onWheel,ve=n.onEnable,Ne=n.onDisable,De=n.onClick,K=n.scrollSpeed,se=n.capture,te=n.allowClicks,Se=n.lockAxis,ye=n.onLockAxis;this.target=a=Dn(a)||Rr,this.vars=n,d&&(d=an.utils.toArray(d)),i=i||1e-9,r=r||0,g=g||1,K=K||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(no).lineHeight)||22);var Ee,at,Ve,D,Ge,be,Ye,k=this,it=0,ge=0,We=n.passive||!u&&n.passive!==!1,$e=Or(a,Cn),mt=Or(a,Zt),P=$e(),T=mt(),V=~o.indexOf("touch")&&!~o.indexOf("pointer")&&yi[0]==="pointerdown",j=la(a),Z=a.ownerDocument||Ar,$=[0,0,0],xe=[0,0,0],oe=0,Re=function(){return oe=aa()},fe=function(Pe,Ke){return(k.event=Pe)&&d&&q0(Pe.target,d)||Ke&&V&&Pe.pointerType!=="touch"||X&&X(Pe,Ke)},re=function(){k._vx.reset(),k._vy.reset(),at.pause(),h&&h(k)},he=function(){var Pe=k.deltaX=fd($),Ke=k.deltaY=fd(xe),de=Math.abs(Pe)>=i,ke=Math.abs(Ke)>=i;C&&(de||ke)&&C(k,Pe,Ke,$,xe),de&&(b&&k.deltaX>0&&b(k),A&&k.deltaX<0&&A(k),v&&v(k),N&&k.deltaX<0!=it<0&&N(k),it=k.deltaX,$[0]=$[1]=$[2]=0),ke&&(R&&k.deltaY>0&&R(k),E&&k.deltaY<0&&E(k),y&&y(k),O&&k.deltaY<0!=ge<0&&O(k),ge=k.deltaY,xe[0]=xe[1]=xe[2]=0),(D||Ve)&&(z&&z(k),Ve&&(m&&Ve===1&&m(k),S&&S(k),Ve=0),D=!1),be&&!(be=!1)&&ye&&ye(k),Ge&&(ae(k),Ge=!1),Ee=0},Oe=function(Pe,Ke,de){$[de]+=Pe,xe[de]+=Ke,k._vx.update(Pe),k._vy.update(Ke),c?Ee||(Ee=requestAnimationFrame(he)):he()},Ce=function(Pe,Ke){Se&&!Ye&&(k.axis=Ye=Math.abs(Pe)>Math.abs(Ke)?"x":"y",be=!0),Ye!=="y"&&($[2]+=Pe,k._vx.update(Pe,!0)),Ye!=="x"&&(xe[2]+=Ke,k._vy.update(Ke,!0)),c?Ee||(Ee=requestAnimationFrame(he)):he()},ue=function(Pe){if(!fe(Pe,1)){Pe=Io(Pe,u);var Ke=Pe.clientX,de=Pe.clientY,ke=Ke-k.x,Ue=de-k.y,Xe=k.isDragging;k.x=Ke,k.y=de,(Xe||(ke||Ue)&&(Math.abs(k.startX-Ke)>=r||Math.abs(k.startY-de)>=r))&&(Ve=Xe?2:1,Xe||(k.isDragging=!0),Ce(ke,Ue))}},He=k.onPress=function(_e){fe(_e,1)||_e&&_e.button||(k.axis=Ye=null,at.pause(),k.isPressed=!0,_e=Io(_e),it=ge=0,k.startX=k.x=_e.clientX,k.startY=k.y=_e.clientY,k._vx.reset(),k._vy.reset(),Sn(G?a:Z,yi[1],ue,We,!0),k.deltaX=k.deltaY=0,M&&M(k))},I=k.onRelease=function(_e){if(!fe(_e,1)){yn(G?a:Z,yi[1],ue,!0);var Pe=!isNaN(k.y-k.startY),Ke=k.isDragging,de=Ke&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),ke=Io(_e);!de&&Pe&&(k._vx.reset(),k._vy.reset(),u&&te&&an.delayedCall(.08,function(){if(aa()-oe>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(Z.createEvent){var Ue=Z.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,jn,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Ue)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Ke&&!G&&at.restart(!0),Ve&&he(),p&&Ke&&p(k),x&&x(k,de)}},ie=function(Pe){return Pe.touches&&Pe.touches.length>1&&(k.isGesturing=!0)&&ee(Pe,k.isDragging)},le=function(){return(k.isGesturing=!1)||L(k)},pe=function(Pe){if(!fe(Pe)){var Ke=$e(),de=mt();Oe((Ke-P)*K,(de-T)*K,1),P=Ke,T=de,h&&at.restart(!0)}},ne=function(Pe){if(!fe(Pe)){Pe=Io(Pe,u),ae&&(Ge=!0);var Ke=(Pe.deltaMode===1?l:Pe.deltaMode===2?jn.innerHeight:1)*g;Oe(Pe.deltaX*Ke,Pe.deltaY*Ke,0),h&&!G&&at.restart(!0)}},J=function(Pe){if(!fe(Pe)){var Ke=Pe.clientX,de=Pe.clientY,ke=Ke-k.x,Ue=de-k.y;k.x=Ke,k.y=de,D=!0,h&&at.restart(!0),(ke||Ue)&&Ce(ke,Ue)}},Te=function(Pe){k.event=Pe,F(k)},Be=function(Pe){k.event=Pe,W(k)},dt=function(Pe){return fe(Pe)||Io(Pe,u)&&De(k)};at=k._dc=an.delayedCall(f||.25,re).pause(),k.deltaX=k.deltaY=0,k._vx=Ku(0,50,!0),k._vy=Ku(0,50,!0),k.scrollX=$e,k.scrollY=mt,k.isDragging=k.isGesturing=k.isPressed=!1,u_(this),k.enable=function(_e){return k.isEnabled||(Sn(j?Z:a,"scroll",qu),o.indexOf("scroll")>=0&&Sn(j?Z:a,"scroll",pe,We,se),o.indexOf("wheel")>=0&&Sn(a,"wheel",ne,We,se),(o.indexOf("touch")>=0&&l_||o.indexOf("pointer")>=0)&&(Sn(a,yi[0],He,We,se),Sn(Z,yi[2],I),Sn(Z,yi[3],I),te&&Sn(a,"click",Re,!0,!0),De&&Sn(a,"click",dt),ee&&Sn(Z,"gesturestart",ie),L&&Sn(Z,"gestureend",le),F&&Sn(a,Jr+"enter",Te),W&&Sn(a,Jr+"leave",Be),z&&Sn(a,Jr+"move",J)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=D=Ve=!1,k._vx.reset(),k._vy.reset(),P=$e(),T=mt(),_e&&_e.type&&He(_e),ve&&ve(k)),k},k.disable=function(){k.isEnabled&&(js.filter(function(_e){return _e!==k&&la(_e.target)}).length||yn(j?Z:a,"scroll",qu),k.isPressed&&(k._vx.reset(),k._vy.reset(),yn(G?a:Z,yi[1],ue,!0)),yn(j?Z:a,"scroll",pe,se),yn(a,"wheel",ne,se),yn(a,yi[0],He,se),yn(Z,yi[2],I),yn(Z,yi[3],I),yn(a,"click",Re,!0),yn(a,"click",dt),yn(Z,"gesturestart",ie),yn(Z,"gestureend",le),yn(a,Jr+"enter",Te),yn(a,Jr+"leave",Be),yn(a,Jr+"move",J),k.isEnabled=k.isPressed=k.isDragging=!1,Ne&&Ne(k))},k.kill=k.revert=function(){k.disable();var _e=js.indexOf(k);_e>=0&&js.splice(_e,1),ir===k&&(ir=0)},js.push(k),G&&la(a)&&(ir=k),k.enable(_)},X0(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Wt.version="3.13.0";Wt.create=function(s){return new Wt(s)};Wt.register=p_;Wt.getAll=function(){return js.slice()};Wt.getById=function(s){return js.filter(function(e){return e.vars.id===s})[0]};h_()&&an.registerPlugin(Wt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,Xs,rt,At,Kn,xt,_f,nc,wa,ca,Ko,Wa,dn,vc,$u,bn,dd,pd,Ys,m_,Nc,__,En,ju,g_,x_,Mr,Zu,gf,io,xf,ic,Ju,Uc,Xa=1,pn=Date.now,Oc=pn(),_i=0,$o=0,md=function(e,t,n){var i=Yn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},_d=function(e,t){return t&&(!Yn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},K0=function s(){return $o&&requestAnimationFrame(s)},gd=function(){return vc=1},xd=function(){return vc=0},Ri=function(e){return e},jo=function(e){return Math.round(e*1e5)/1e5||0},v_=function(){return typeof window<"u"},y_=function(){return Ae||v_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},vs=function(e){return!!~_f.indexOf(e)},M_=function(e){return(e==="Height"?xf:rt["inner"+e])||Kn["client"+e]||xt["client"+e]},S_=function(e){return Lr(e,"getBoundingClientRect")||(vs(e)?function(){return Bl.width=rt.innerWidth,Bl.height=xf,Bl}:function(){return er(e)})},$0=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?M_(r):e["client"+r])||0}},j0=function(e,t){return!t||~Fi.indexOf(e)?S_(e):function(){return Bl}},Ii=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Lr(e,n))?o()-S_(e)()[r]:vs(e)?(Kn[n]||xt[n])-M_(i):e[n]-e["offset"+i])},Ya=function(e,t){for(var n=0;n<Ys.length;n+=3)(!t||~t.indexOf(Ys[n+1]))&&e(Ys[n],Ys[n+1],Ys[n+2])},Yn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},Zo=function(e){return typeof e=="number"},Qr=function(e){return typeof e=="object"},No=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Fc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},As=Math.abs,T_="left",E_="top",vf="right",yf="bottom",ds="width",ps="height",ua="Right",ha="Left",fa="Top",da="Bottom",Yt="padding",li="margin",go="Width",Mf="Height",jt="px",ci=function(e){return rt.getComputedStyle(e)},Z0=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},vd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&ci(e)[$u]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},rc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},b_=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},J0=function(e){return function(t){return Ae.utils.snap(b_(e),t)}},Sf=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Q0=function(e){return function(t,n){return Sf(b_(e))(t,n.direction)}},qa=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},nn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ka=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},yd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},$a={toggleActions:"play",anticipatePin:0},sc={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(e,t){if(Yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in sc?sc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ja=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,g=At.createElement("div"),_=vs(n)||Lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:n,S=e.indexOf("start")!==-1,M=S?c:u,x="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Zt?vf:yf)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Ul(g,0,i,S),g},Ul=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+go]=1,r["border"+a+go]=0,r[n.p]=t+"px",Ae.set(e,r)},nt=[],Qu={},Aa,Md=function(){return pn()-_i>34&&(Aa||(Aa=requestAnimationFrame(ar)))},Rs=function(){(!En||!En.isPressed||En.startX>xt.clientWidth)&&(st.cache++,En?Aa||(Aa=requestAnimationFrame(ar)):ar(),_i||Ms("scrollStart"),_i=pn())},Bc=function(){x_=rt.innerWidth,g_=rt.innerHeight},Jo=function(e){st.cache++,(e===!0||!dn&&!__&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!ju||x_!==rt.innerWidth||Math.abs(rt.innerHeight-g_)>rt.innerHeight*.25))&&nc.restart(!0)},ys={},ex=[],w_=function s(){return tn(Je,"scrollEnd",s)||os(!0)},Ms=function(e){return ys[e]&&ys[e].map(function(t){return t()})||ex},Xn=[],A_=function(e){for(var t=0;t<Xn.length;t+=5)(!e||Xn[t+4]&&Xn[t+4].query===e)&&(Xn[t].style.cssText=Xn[t+1],Xn[t].getBBox&&Xn[t].setAttribute("transform",Xn[t+2]||""),Xn[t+3].uncache=1)},Tf=function(e,t){var n;for(bn=0;bn<nt.length;bn++)n=nt[bn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ic=!0,t&&A_(t),t||Ms("revert")},R_=function(e,t){st.cache++,(t||!wn)&&st.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Yn(e)&&(rt.history.scrollRestoration=gf=e)},wn,ms=0,Sd,tx=function(){if(Sd!==ms){var e=Sd=ms;requestAnimationFrame(function(){return e===ms&&os(!0)})}},C_=function(){xt.appendChild(io),xf=!En&&io.offsetHeight||rt.innerHeight,xt.removeChild(io)},Td=function(e){return wa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},os=function(e,t){if(Kn=At.documentElement,xt=At.body,_f=[rt,At,Kn,xt],_i&&!e&&!ic){nn(Je,"scrollEnd",w_);return}C_(),wn=Je.isRefreshing=!0,st.forEach(function(i){return _n(i)&&++i.cacheID&&(i.rec=i())});var n=Ms("refreshInit");m_&&Je.sort(),t||Tf(),st.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),ic=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Ju=1,Td(!0),nt.forEach(function(i){var r=Ii(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Td(!1),Ju=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),R_(gf,1),nc.pause(),ms++,wn=2,ar(2),nt.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=Je.isRefreshing=!1,Ms("refresh")},eh=0,Ol=1,pa,ar=function(e){if(e===2||!wn&&!ic){Je.isUpdating=!0,pa&&pa.update(0);var t=nt.length,n=pn(),i=n-Oc>=50,r=t&&nt[0].scroll();if(Ol=eh>r?-1:1,wn||(eh=r),i&&(_i&&!vc&&n-_i>200&&(_i=0,Ms("scrollEnd")),Ko=Oc,Oc=n),Ol<0){for(bn=t;bn-- >0;)nt[bn]&&nt[bn].update(0,i);Ol=1}else for(bn=0;bn<t;bn++)nt[bn]&&nt[bn].update(0,i);Je.isUpdating=!1}Aa=0},th=[T_,E_,yf,vf,li+da,li+ua,li+fa,li+ha,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=th.concat([ds,ps,"boxSizing","max"+go,"max"+Mf,"position",li,Yt,Yt+fa,Yt+ua,Yt+da,Yt+ha]),nx=function(e,t,n){ro(n);var i=e._gsap;if(i.spacerIsNative)ro(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},kc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=th.length,o=t.style,a=e.style,l;r--;)l=th[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[yf]=a[vf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ds]=rc(e,Cn)+jt,o[ps]=rc(e,Zt)+jt,o[Yt]=a[li]=a[E_]=a[T_]="0",ro(i),a[ds]=a["max"+go]=n[ds],a[ps]=a["max"+Mf]=n[ps],a[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ix=/([A-Z])/g,ro=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(ix,"-$1").toLowerCase())}},Za=function(e){for(var t=Fl.length,n=e.style,i=[],r=0;r<t;r++)i.push(Fl[r],n[Fl[r]]);return i.t=e,i},rx=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Bl={left:0,top:0},Ed=function(e,t,n,i,r,o,a,l,c,u,h,f,d,g){_n(e)&&(e=e(l)),Yn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Nl("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Zo(e))d&&(e=Ae.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Ul(a,n,i,!0);else{_n(t)&&(t=t(l));var M=(e||"0").split(" "),x,b,A,E;S=Dn(t,l)||xt,x=er(S)||{},(!x||!x.left&&!x.top)&&ci(S).display==="none"&&(E=S.style.display,S.style.display="block",x=er(S),E?S.style.display=E:S.style.removeProperty("display")),b=Nl(M[0],x[i.d]),A=Nl(M[1]||"0",n),e=x[i.p]-c[i.p]-u+b+r-A,a&&Ul(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+n,v=o._isStart;m="scroll"+i.d2,Ul(o,R,i,v&&R>20||!v&&(h?Math.max(xt[m],Kn[m]):o.parentNode[m])<=R+1),h&&(c=er(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return d&&S&&(m=er(S),d.seek(f),p=er(S),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},sx=/(webkit|moz|length|cssText|inset)/i,bd=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=ci(e);for(o in a)!+o&&!sx.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},P_=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Ja=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},wd=function(e,t){var n=Or(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=P_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){st.cache++,o.tween&&ar()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ae.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},nn(e,"wheel",n.wheelHandler),Je.isTouch&&nn(e,"touchmove",n.wheelHandler),r},Je=(function(){function s(t,n){Xs||s.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zu(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=Ri;return}n=vd(Yn(n)||Zo(n)||n.nodeType?{trigger:n}:n,$a);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,S=r.onSnapComplete,M=r.once,x=r.snap,b=r.pinReparent,A=r.pinSpacer,E=r.containerAnimation,R=r.fastScrollEnd,v=r.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Cn:Zt,C=!h&&h!==0,N=Dn(n.scroller||rt),O=Ae.core.getCache(N),F=vs(N),W=("pinType"in n?n.pinType:Lr(N,"pinType")||F&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=C&&n.toggleActions.split(" "),G="markers"in n?n.markers:$a.markers,ee=F?0:parseFloat(ci(N)["border"+y.p2+go])||0,L=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ve=$0(N,F,y),Ne=j0(N,F),De=0,K=0,se=0,te=Or(N,y),Se,ye,Ee,at,Ve,D,Ge,be,Ye,k,it,ge,We,$e,mt,P,T,V,j,Z,$,xe,oe,Re,fe,re,he,Oe,Ce,ue,He,I,ie,le,pe,ne,J,Te,Be;if(L._startClamp=L._endClamp=!1,L._dir=y,m*=45,L.scroller=N,L.scroll=E?E.time.bind(E):te,at=te(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(m_=1,n.refreshPriority===-9999&&(pa=L)),O.tweenScroll=O.tweenScroll||{top:wd(N,Zt),left:wd(N,Cn)},L.tweenTo=Se=O.tweenScroll[y.p],L.scrubDuration=function(de){ie=Zo(de)&&de,ie?I?I.duration(de):I=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),ue=0,l||(l=i.vars.id)),x&&((!Qr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xt.style&&Ae.set(F?[xt,Kn]:N,{scrollBehavior:"auto"}),st.forEach(function(de){return _n(de)&&de.target===(F?At.scrollingElement||Kn:N)&&(de.smooth=!1)}),Ee=_n(x.snapTo)?x.snapTo:x.snapTo==="labels"?J0(i):x.snapTo==="labelsDirectional"?Q0(i):x.directional!==!1?function(de,ke){return Sf(x.snapTo)(de,pn()-K<500?0:ke.direction)}:Ae.utils.snap(x.snapTo),le=x.duration||{min:.1,max:2},le=Qr(le)?ca(le.min,le.max):ca(le,le),pe=Ae.delayedCall(x.delay||ie/2||.1,function(){var de=te(),ke=pn()-K<500,Ue=Se.tween;if((ke||Math.abs(L.getVelocity())<10)&&!Ue&&!vc&&De!==de){var Xe=(de-D)/$e,Ht=i&&!C?i.totalProgress():Xe,Qe=ke?0:(Ht-He)/(pn()-Ko)*1e3||0,Lt=Ae.utils.clamp(-Xe,1-Xe,As(Qe/2)*Qe/.185),Vt=Xe+(x.inertia===!1?0:Lt),Rt,Tt,vt=x,zn=vt.onStart,Ct=vt.onInterrupt,xn=vt.onComplete;if(Rt=Ee(Vt,L),Zo(Rt)||(Rt=Vt),Tt=Math.max(0,Math.round(D+Rt*$e)),de<=Ge&&de>=D&&Tt!==de){if(Ue&&!Ue._initted&&Ue.data<=As(Tt-de))return;x.inertia===!1&&(Lt=Rt-Xe),Se(Tt,{duration:le(As(Math.max(As(Vt-Ht),As(Rt-Ht))*.185/Qe/.05||0)),ease:x.ease||"power3",data:As(Tt-de),onInterrupt:function(){return pe.restart(!0)&&Ct&&Ct(L)},onComplete:function(){L.update(),De=te(),i&&!C&&(I?I.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),ue=He=i&&!C?i.totalProgress():L.progress,S&&S(L),xn&&xn(L)}},de,Lt*$e,Tt-de-Lt*$e),zn&&zn(L,Se.tween)}}else L.isActive&&De!==de&&pe.restart(!0)}).pause()),l&&(Qu[l]=L),f=L.trigger=Dn(f||d!==!0&&d),Be=f&&f._gsap&&f._gsap.stRevert,Be&&(Be=Be(L)),d=d===!0?f:Dn(d),Yn(a)&&(a={targets:f,className:a}),d&&(g===!1||g===li||(g=!g&&d.parentNode&&d.parentNode.style&&ci(d.parentNode).display==="flex"?!1:Yt),L.pin=d,ye=Ae.core.getCache(d),ye.spacer?mt=ye.pinState:(A&&(A=Dn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),ye.spacerIsNative=!!A,A&&(ye.spacerState=Za(A))),ye.spacer=V=A||At.createElement("div"),V.classList.add("pin-spacer"),l&&V.classList.add("pin-spacer-"+l),ye.pinState=mt=Za(d)),n.force3D!==!1&&Ae.set(d,{force3D:!0}),L.spacer=V=ye.spacer,Ce=ci(d),Re=Ce[g+y.os2],Z=Ae.getProperty(d),$=Ae.quickSetter(d,y.a,jt),kc(d,V,Ce),T=Za(d)),G){ge=Qr(G)?vd(G,yd):yd,k=ja("scroller-start",l,N,y,ge,0),it=ja("scroller-end",l,N,y,ge,0,k),j=k["offset"+y.op.d2];var dt=Dn(Lr(N,"content")||N);be=this.markerStart=ja("start",l,dt,y,ge,j,0,E),Ye=this.markerEnd=ja("end",l,dt,y,ge,j,0,E),E&&(Te=Ae.quickSetter([be,Ye],y.a,jt)),!W&&!(Fi.length&&Lr(N,"fixedMarkers")===!0)&&(Z0(F?xt:N),Ae.set([k,it],{force3D:!0}),re=Ae.quickSetter(k,y.a,jt),Oe=Ae.quickSetter(it,y.a,jt))}if(E){var _e=E.vars.onUpdate,Pe=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),_e&&_e.apply(E,Pe||[])})}if(L.previous=function(){return nt[nt.indexOf(L)-1]},L.next=function(){return nt[nt.indexOf(L)+1]},L.revert=function(de,ke){if(!ke)return L.kill(!0);var Ue=de!==!1||!L.enabled,Xe=dn;Ue!==L.isReverted&&(Ue&&(ne=Math.max(te(),L.scroll.rec||0),se=L.progress,J=i&&i.progress()),be&&[be,Ye,k,it].forEach(function(Ht){return Ht.style.display=Ue?"none":"block"}),Ue&&(dn=L,L.update(Ue)),d&&(!b||!L.isActive)&&(Ue?nx(d,V,mt):kc(d,V,ci(d),fe)),Ue||L.update(Ue),dn=Xe,L.isReverted=Ue)},L.refresh=function(de,ke,Ue,Xe){if(!((dn||!L.enabled)&&!ke)){if(d&&de&&_i){nn(s,"scrollEnd",w_);return}!wn&&ae&&ae(L),dn=L,Se.tween&&!Ue&&(Se.tween.kill(),Se.tween=0),I&&I.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(lt){return lt.vars.immediateRender&&lt.render(0,!0,!0)})),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ht=ve(),Qe=Ne(),Lt=E?E.duration():Ii(N,y),Vt=$e<=.01||!$e,Rt=0,Tt=Xe||0,vt=Qr(Ue)?Ue.end:n.end,zn=n.endTrigger||f,Ct=Qr(Ue)?Ue.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),xn=L.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,L),ni=f&&Math.max(0,nt.indexOf(L))||0,$t=ni,w,U,Y,q,B,Q,ce,we,Me,Fe,Ie,Le,je;for(G&&Qr(Ue)&&(Le=Ae.getProperty(k,y.p),je=Ae.getProperty(it,y.p));$t-- >0;)Q=nt[$t],Q.end||Q.refresh(0,1)||(dn=L),ce=Q.pin,ce&&(ce===f||ce===d||ce===xn)&&!Q.isReverted&&(Fe||(Fe=[]),Fe.unshift(Q),Q.revert(!0,!0)),Q!==nt[$t]&&(ni--,$t--);for(_n(Ct)&&(Ct=Ct(L)),Ct=md(Ct,"start",L),D=Ed(Ct,f,Ht,y,te(),be,k,L,Qe,ee,W,Lt,E,L._startClamp&&"_startClamp")||(d?-.001:0),_n(vt)&&(vt=vt(L)),Yn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(Yn(Ct)?Ct.split(" ")[0]:"")+vt:(Rt=Nl(vt.substr(2),Ht),vt=Yn(Ct)?Ct:(E?Ae.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,D):D)+Rt,zn=f)),vt=md(vt,"end",L),Ge=Math.max(D,Ed(vt||(zn?"100% 0":Lt),zn,Ht,y,te()+Rt,Ye,it,L,Qe,ee,W,Lt,E,L._endClamp&&"_endClamp"))||-.001,Rt=0,$t=ni;$t--;)Q=nt[$t],ce=Q.pin,ce&&Q.start-Q._pinPush<=D&&!E&&Q.end>0&&(w=Q.end-(L._startClamp?Math.max(0,Q.start):Q.start),(ce===f&&Q.start-Q._pinPush<D||ce===xn)&&isNaN(Ct)&&(Rt+=w*(1-Q.progress)),ce===d&&(Tt+=w));if(D+=Rt,Ge+=Rt,L._startClamp&&(L._startClamp+=Rt),L._endClamp&&!wn&&(L._endClamp=Ge||-.001,Ge=Math.min(Ge,Ii(N,y))),$e=Ge-D||(D-=.01)&&.001,Vt&&(se=Ae.utils.clamp(0,1,Ae.utils.normalize(D,Ge,ne))),L._pinPush=Tt,be&&Rt&&(w={},w[y.a]="+="+Rt,xn&&(w[y.p]="-="+te()),Ae.set([be,Ye],w)),d&&!(Ju&&L.end>=Ii(N,y)))w=ci(d),q=y===Zt,Y=te(),xe=parseFloat(Z(y.a))+Tt,!Lt&&Ge>1&&(Ie=(F?At.scrollingElement||Kn:N).style,Ie={style:Ie,value:Ie["overflow"+y.a.toUpperCase()]},F&&ci(xt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ie.style["overflow"+y.a.toUpperCase()]="scroll")),kc(d,V,w),T=Za(d),U=er(d,!0),we=W&&Or(N,q?Cn:Zt)(),g?(fe=[g+y.os2,$e+Tt+jt],fe.t=V,$t=g===Yt?rc(d,y)+$e+Tt:0,$t&&(fe.push(y.d,$t+jt),V.style.flexBasis!=="auto"&&(V.style.flexBasis=$t+jt)),ro(fe),xn&&nt.forEach(function(lt){lt.pin===xn&&lt.vars.pinSpacing!==!1&&(lt._subPinOffset=!0)}),W&&te(ne)):($t=rc(d,y),$t&&V.style.flexBasis!=="auto"&&(V.style.flexBasis=$t+jt)),W&&(B={top:U.top+(q?Y-D:we)+jt,left:U.left+(q?we:Y-D)+jt,boxSizing:"border-box",position:"fixed"},B[ds]=B["max"+go]=Math.ceil(U.width)+jt,B[ps]=B["max"+Mf]=Math.ceil(U.height)+jt,B[li]=B[li+fa]=B[li+ua]=B[li+da]=B[li+ha]="0",B[Yt]=w[Yt],B[Yt+fa]=w[Yt+fa],B[Yt+ua]=w[Yt+ua],B[Yt+da]=w[Yt+da],B[Yt+ha]=w[Yt+ha],P=rx(mt,B,b),wn&&te(0)),i?(Me=i._initted,Nc(1),i.render(i.duration(),!0,!0),oe=Z(y.a)-xe+$e+Tt,he=Math.abs($e-oe)>1,W&&he&&P.splice(P.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Nc(0)):oe=$e,Ie&&(Ie.value?Ie.style["overflow"+y.a.toUpperCase()]=Ie.value:Ie.style.removeProperty("overflow-"+y.a));else if(f&&te()&&!E)for(U=f.parentNode;U&&U!==xt;)U._pinOffset&&(D-=U._pinOffset,Ge-=U._pinOffset),U=U.parentNode;Fe&&Fe.forEach(function(lt){return lt.revert(!1,!0)}),L.start=D,L.end=Ge,at=Ve=wn?ne:te(),!E&&!wn&&(at<ne&&te(ne),L.scroll.rec=0),L.revert(!1,!0),K=pn(),pe&&(De=-1,pe.restart(!0)),dn=0,i&&C&&(i._initted||J)&&i.progress()!==J&&i.progress(J||0,!0).render(i.time(),!0,!0),(Vt||se!==L.progress||E||_||i&&!i._initted)&&(i&&!C&&(i._initted||se||i.vars.immediateRender!==!1)&&i.totalProgress(E&&D<-.001&&!se?Ae.utils.normalize(D,Ge,0):se,!0),L.progress=Vt||(at-D)/$e===se?0:se),d&&g&&(V._pinOffset=Math.round(L.progress*oe)),I&&I.invalidate(),isNaN(Le)||(Le-=Ae.getProperty(k,y.p),je-=Ae.getProperty(it,y.p),Ja(k,y,Le),Ja(be,y,Le-(Xe||0)),Ja(it,y,je),Ja(Ye,y,je-(Xe||0))),Vt&&!wn&&L.update(),u&&!wn&&!We&&(We=!0,u(L),We=!1)}},L.getVelocity=function(){return(te()-Ve)/(pn()-Ko)*1e3||0},L.endAnimation=function(){No(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?C||No(i,L.direction<0,1):No(i,i.reversed()))},L.labelToScroll=function(de){return i&&i.labels&&(D||L.refresh()||D)+i.labels[de]/i.duration()*$e||0},L.getTrailing=function(de){var ke=nt.indexOf(L),Ue=L.direction>0?nt.slice(0,ke).reverse():nt.slice(ke+1);return(Yn(de)?Ue.filter(function(Xe){return Xe.vars.preventOverlaps===de}):Ue).filter(function(Xe){return L.direction>0?Xe.end<=D:Xe.start>=Ge})},L.update=function(de,ke,Ue){if(!(E&&!Ue&&!de)){var Xe=wn===!0?ne:L.scroll(),Ht=de?0:(Xe-D)/$e,Qe=Ht<0?0:Ht>1?1:Ht||0,Lt=L.progress,Vt,Rt,Tt,vt,zn,Ct,xn,ni;if(ke&&(Ve=at,at=E?te():Xe,x&&(He=ue,ue=i&&!C?i.totalProgress():Qe)),m&&d&&!dn&&!Xa&&_i&&(!Qe&&D<Xe+(Xe-Ve)/(pn()-Ko)*m?Qe=1e-4:Qe===1&&Ge>Xe+(Xe-Ve)/(pn()-Ko)*m&&(Qe=.9999)),Qe!==Lt&&L.enabled){if(Vt=L.isActive=!!Qe&&Qe<1,Rt=!!Lt&&Lt<1,Ct=Vt!==Rt,zn=Ct||!!Qe!=!!Lt,L.direction=Qe>Lt?1:-1,L.progress=Qe,zn&&!dn&&(Tt=Qe&&!Lt?0:Qe===1?1:Lt===1?2:3,C&&(vt=!Ct&&X[Tt+1]!=="none"&&X[Tt+1]||X[Tt],ni=i&&(vt==="complete"||vt==="reset"||vt in i))),v&&(Ct||ni)&&(ni||h||!i)&&(_n(v)?v(L):L.getTrailing(v).forEach(function(Y){return Y.endAnimation()})),C||(I&&!dn&&!Xa?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Qe,i._tTime/i._tDur):(I.vars.totalProgress=Qe,I.invalidate().restart())):i&&i.totalProgress(Qe,!!(dn&&(K||de)))),d){if(de&&g&&(V.style[g+y.os2]=Re),!W)$(jo(xe+oe*Qe));else if(zn){if(xn=!de&&Qe>Lt&&Ge+1>Xe&&Xe+1>=Ii(N,y),b)if(!de&&(Vt||xn)){var $t=er(d,!0),w=Xe-D;bd(d,xt,$t.top+(y===Zt?w:0)+jt,$t.left+(y===Zt?0:w)+jt)}else bd(d,V);ro(Vt||xn?P:T),he&&Qe<1&&Vt||$(xe+(Qe===1&&!xn?oe:0))}}x&&!Se.tween&&!dn&&!Xa&&pe.restart(!0),a&&(Ct||M&&Qe&&(Qe<1||!Uc))&&wa(a.targets).forEach(function(Y){return Y.classList[Vt||M?"add":"remove"](a.className)}),o&&!C&&!de&&o(L),zn&&!dn?(C&&(ni&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(L)),(Ct||!Uc)&&(c&&Ct&&Fc(L,c),z[Tt]&&Fc(L,z[Tt]),M&&(Qe===1?L.kill(!1,1):z[Tt]=0),Ct||(Tt=Qe===1?1:3,z[Tt]&&Fc(L,z[Tt]))),R&&!Vt&&Math.abs(L.getVelocity())>(Zo(R)?R:2500)&&(No(L.callbackAnimation),I?I.progress(1):No(i,vt==="reverse"?1:!Qe,1))):C&&o&&!dn&&o(L)}if(Oe){var U=E?Xe/E.duration()*(E._caScrollDist||0):Xe;re(U+(k._isFlipped?1:0)),Oe(U)}Te&&Te(-Xe/E.duration()*(E._caScrollDist||0))}},L.enable=function(de,ke){L.enabled||(L.enabled=!0,nn(N,"resize",Jo),F||nn(N,"scroll",Rs),ae&&nn(s,"refreshInit",ae),de!==!1&&(L.progress=se=0,at=Ve=De=te()),ke!==!1&&L.refresh())},L.getTween=function(de){return de&&Se?Se.tween:I},L.setPositions=function(de,ke,Ue,Xe){if(E){var Ht=E.scrollTrigger,Qe=E.duration(),Lt=Ht.end-Ht.start;de=Ht.start+Lt*de/Qe,ke=Ht.start+Lt*ke/Qe}L.refresh(!1,!1,{start:_d(de,Ue&&!!L._startClamp),end:_d(ke,Ue&&!!L._endClamp)},Xe),L.update()},L.adjustPinSpacing=function(de){if(fe&&de){var ke=fe.indexOf(y.d)+1;fe[ke]=parseFloat(fe[ke])+de+jt,fe[1]=parseFloat(fe[1])+de+jt,ro(fe)}},L.disable=function(de,ke){if(L.enabled&&(de!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,ke||I&&I.pause(),ne=0,ye&&(ye.uncache=1),ae&&tn(s,"refreshInit",ae),pe&&(pe.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!F)){for(var Ue=nt.length;Ue--;)if(nt[Ue].scroller===N&&nt[Ue]!==L)return;tn(N,"resize",Jo),F||tn(N,"scroll",Rs)}},L.kill=function(de,ke){L.disable(de,ke),I&&!ke&&I.kill(),l&&delete Qu[l];var Ue=nt.indexOf(L);Ue>=0&&nt.splice(Ue,1),Ue===bn&&Ol>0&&bn--,Ue=0,nt.forEach(function(Xe){return Xe.scroller===L.scroller&&(Ue=1)}),Ue||wn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),ke||i.kill()),be&&[be,Ye,k,it].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),pa===L&&(pa=0),d&&(ye&&(ye.uncache=1),Ue=0,nt.forEach(function(Xe){return Xe.pin===d&&Ue++}),Ue||(ye.spacer=0)),n.onKill&&n.onKill(L)},nt.push(L),L.enable(!1,!1),Be&&Be(L),i&&i.add&&!$e){var Ke=L.update;L.update=function(){L.update=Ke,st.cache++,D||Ge||L.refresh()},Ae.delayedCall(.01,L.update),$e=.01,D=Ge=0}else L.refresh();d&&tx()},s.register=function(n){return Xs||(Ae=n||y_(),v_()&&window.document&&s.enable(),Xs=$o),Xs},s.defaults=function(n){if(n)for(var i in n)$a[i]=n[i];return $a},s.disable=function(n,i){$o=0,nt.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(rt,"wheel",Rs),tn(At,"scroll",Rs),clearInterval(Wa),tn(At,"touchcancel",Ri),tn(xt,"touchstart",Ri),qa(tn,At,"pointerdown,touchstart,mousedown",gd),qa(tn,At,"pointerup,touchend,mouseup",xd),nc.kill(),Ya(tn);for(var r=0;r<st.length;r+=3)Ka(tn,st[r],st[r+1]),Ka(tn,st[r],st[r+2])},s.enable=function(){if(rt=window,At=document,Kn=At.documentElement,xt=At.body,Ae&&(wa=Ae.utils.toArray,ca=Ae.utils.clamp,Zu=Ae.core.context||Ri,Nc=Ae.core.suppressOverwrites||Ri,gf=rt.history.scrollRestoration||"auto",eh=rt.pageYOffset||0,Ae.core.globals("ScrollTrigger",s),xt)){$o=1,io=document.createElement("div"),io.style.height="100vh",io.style.position="absolute",C_(),K0(),Wt.register(Ae),s.isTouch=Wt.isTouch,Mr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ju=Wt.isTouch===1,nn(rt,"wheel",Rs),_f=[rt,At,Kn,xt],Ae.matchMedia?(s.matchMedia=function(c){var u=Ae.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Ae.addEventListener("matchMediaInit",function(){return Tf()}),Ae.addEventListener("matchMediaRevert",function(){return A_()}),Ae.addEventListener("matchMedia",function(){os(0,1),Ms("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Bc(),Bc})):console.warn("Requires GSAP 3.11.0 or later"),Bc(),nn(At,"scroll",Rs);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=er(xt),Zt.m=Math.round(a.top+Zt.sc())||0,Cn.m=Math.round(a.left+Cn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),Wa=setInterval(Md,250),Ae.delayedCall(.5,function(){return Xa=0}),nn(At,"touchcancel",Ri),nn(xt,"touchstart",Ri),qa(nn,At,"pointerdown,touchstart,mousedown",gd),qa(nn,At,"pointerup,touchend,mouseup",xd),$u=Ae.utils.checkPrefix("transform"),Fl.push($u),Xs=pn(),nc=Ae.delayedCall(.2,os).pause(),Ys=[At,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;At.hidden?(dd=c,pd=u):(dd!==c||pd!==u)&&Jo()},At,"DOMContentLoaded",os,rt,"load",os,rt,"resize",Jo],Ya(nn),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)Ka(tn,st[l],st[l+1]),Ka(tn,st[l],st[l+2])}},s.config=function(n){"limitCallbacks"in n&&(Uc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Wa)||(Wa=i)&&setInterval(Md,i),"ignoreMobileResize"in n&&(ju=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ya(tn)||Ya(nn,n.autoRefreshEvents||"none"),__=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Dn(n),o=st.indexOf(r),a=vs(r);~o&&st.splice(o,a?6:2),i&&(a?Fi.unshift(rt,i,xt,i,Kn,i):Fi.unshift(r,i))},s.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Yn(n)?Dn(n):n).getBoundingClientRect(),a=o[r?ds:ps]*i||0;return r?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},s.positionInViewport=function(n,i,r){Yn(n)&&(n=Dn(n));var o=n.getBoundingClientRect(),a=o[r?ds:ps],l=i==null?a/2:i in sc?sc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},s.killAll=function(n){if(nt.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(r){return r()})}},s})();Je.version="3.13.0";Je.saveStyles=function(s){return s?wa(s).forEach(function(e){if(e&&e.style){var t=Xn.indexOf(e);t>=0&&Xn.splice(t,5),Xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Zu())}}):Xn};Je.revert=function(s,e){return Tf(!s,e)};Je.create=function(s,e){return new Je(s,e)};Je.refresh=function(s){return s?Jo(!0):(Xs||Je.register())&&os(!0)};Je.update=function(s){return++st.cache&&ar(s===!0?2:0)};Je.clearScrollMemory=R_;Je.maxScroll=function(s,e){return Ii(s,e?Cn:Zt)};Je.getScrollFunc=function(s,e){return Or(Dn(s),e?Cn:Zt)};Je.getById=function(s){return Qu[s]};Je.getAll=function(){return nt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!_i};Je.snapDirectional=Sf;Je.addEventListener=function(s,e){var t=ys[s]||(ys[s]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(s,e){var t=ys[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ae.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||d.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&_n(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return _n(r)&&(r=r(),nn(Je,"refresh",function(){return r=e.batchMax()})),wa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Ad=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},zc=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Wt.isTouch?" pinch-zoom":""):"none",e===Kn&&s(xt,t)},Qa={auto:1,scroll:1},ox=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Ae.core.getCache(r),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Qa[(l=ci(r)).overflowY]||Qa[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!vs(r)&&(Qa[(l=ci(r)).overflowY]||Qa[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},L_=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ox,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(At,Wt.eventTypes[0],Cd,!1,!0)},onDisable:function(){return tn(At,Wt.eventTypes[0],Cd,!0)}})},ax=/(input|label|select|textarea)/i,Rd,Cd=function(e){var t=ax.test(e.target.tagName);(t||Rd)&&(e._gsapAllow=!0,Rd=t)},lx=function(e){Qr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=Dn(e.target)||Kn,u=Ae.core.globals().ScrollSmoother,h=u&&u.get(),f=Mr&&(e.content&&Dn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Or(c,Zt),g=Or(c,Cn),_=1,m=(Wt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,S=_n(i)?function(){return i(a)}:function(){return i||2.8},M,x,b=L_(c,e.type,!0,r),A=function(){return x=!1},E=Ri,R=Ri,v=function(){l=Ii(c,Zt),R=ca(Mr?1:0,l),n&&(E=ca(0,Ii(c,Cn))),M=ms},y=function(){f._gsap.y=jo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(x){requestAnimationFrame(A);var G=jo(a.deltaY/2),ee=R(d.v-G);if(f&&ee!==d.v+d.offset){d.offset=ee-d.v;var L=jo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=st.cache,ar()}return!0}d.offset&&y(),x=!0},N,O,F,W,z=function(){v(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ae.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return Mr&&X.type==="touchmove"&&C()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=_;_=jo((rt.visualViewport&&rt.visualViewport.scale||1)/m),N.pause(),X!==_&&zc(c,_>1.01?!0:n?!1:"x"),O=g(),F=d(),v(),M=ms},e.onRelease=e.onGestureStart=function(X,G){if(d.offset&&y(),!G)W.restart(!0);else{st.cache++;var ee=S(),L,ae;n&&(L=g(),ae=L+ee*.05*-X.velocityX/.227,ee*=Ad(g,L,ae,Ii(c,Cn)),N.vars.scrollX=E(ae)),L=d(),ae=L+ee*.05*-X.velocityY/.227,ee*=Ad(d,L,ae,Ii(c,Zt)),N.vars.scrollY=R(ae),N.invalidate().duration(ee).play(.01),(Mr&&N.vars.scrollY>=l||L>=l-1)&&Ae.to({},{onUpdate:z,duration:ee})}o&&o(X)},e.onWheel=function(){N._ts&&N.pause(),pn()-p>1e3&&(M=0,p=pn())},e.onChange=function(X,G,ee,L,ae){if(ms!==M&&v(),G&&n&&g(E(L[2]===G?O+(X.startX-X.x):g()+G-L[1])),ee){d.offset&&y();var ve=ae[2]===ee,Ne=ve?F+X.startY-X.y:d()+ee-ae[1],De=R(Ne);ve&&Ne!==De&&(F+=De-Ne),d(De)}(ee||G)&&ar()},e.onEnable=function(){zc(c,n?!1:"x"),Je.addEventListener("refresh",z),nn(rt,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){zc(c,!0),tn(rt,"resize",z),Je.removeEventListener("refresh",z),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new Wt(e),a.iOS=Mr,Mr&&!d()&&d(1),Mr&&Ae.ticker.add(Ri),W=a._dc,N=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:P_(d,d(),function(){return N.pause()})},onUpdate:ar,onComplete:W.vars.onComplete}),a};Je.sort=function(s){if(_n(s))return nt.sort(s);var e=rt.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Je.observe=function(s){return new Wt(s)};Je.normalizeScroll=function(s){if(typeof s>"u")return En;if(s===!0&&En)return En.enable();if(s===!1){En&&En.kill(),En=s;return}var e=s instanceof Wt?s:lx(s);return En&&En.target===e.target&&En.kill(),vs(e.target)&&(En=e),e};Je.core={_getVelocityProp:Ku,_inputObserver:L_,_scrollers:st,_proxies:Fi,bridge:{ss:function(){_i||Ms("scrollStart"),_i=pn()},ref:function(){return dn}}};y_()&&Ae.registerPlugin(Je);/*!
 * paths 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var cx=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,ux=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,hx=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,fx=/(^[#\.][a-z]|[a-y][a-z])/i,dx=Math.PI/180,px=180/Math.PI,el=Math.sin,tl=Math.cos,pi=Math.abs,tr=Math.sqrt,mx=Math.atan2,nh=1e8,Pd=function(e){return typeof e=="string"},D_=function(e){return typeof e=="number"},_x=function(e){return typeof e>"u"},gx={},xx={},oc=1e5,I_=function(e){return Math.round((e+nh)%1*oc)/oc||(e<0?0:1)},_t=function(e){return Math.round(e*oc)/oc||0},Ld=function(e){return Math.round(e*1e10)/1e10||0},Dd=function(e,t,n,i){var r=e[t],o=i===1?6:ih(r,n,i);if((o||!i)&&o+n+2<r.length)return e.splice(t,0,r.slice(0,n+o+2)),r.splice(0,n+o),1},N_=function(e,t,n){var i=e.length,r=~~(n*i);if(e[r]>t){for(;--r&&e[r]>t;);r<0&&(r=0)}else for(;e[++r]<t&&r<i;);return r<i?r:i-1},vx=function(e,t){var n=e.length;for(e.reverse();n--;)e[n].reversed||Sx(e[n])},Id=function(e,t){return t.totalLength=e.totalLength,e.samples?(t.samples=e.samples.slice(0),t.lookup=e.lookup.slice(0),t.minLength=e.minLength,t.resolution=e.resolution):e.totalPoints&&(t.totalPoints=e.totalPoints),t},yx=function(e,t){var n=e.length,i=e[n-1]||[],r=i.length;n&&t[0]===i[r-2]&&t[1]===i[r-1]&&(t=i.concat(t.slice(2)),n--),e[n]=t};function kl(s){s=Pd(s)&&fx.test(s)&&document.querySelector(s)||s;var e=s.getAttribute?s:0,t;return e&&(s=s.getAttribute("d"))?(e._gsPath||(e._gsPath={}),t=e._gsPath[s],t&&!t._dirty?t:e._gsPath[s]=ac(s)):s?Pd(s)?ac(s):D_(s[0])?[s]:s:console.warn("Expecting a <path> element or an SVG path data string")}function Mx(s){for(var e=[],t=0;t<s.length;t++)e[t]=Id(s[t],s[t].slice(0));return Id(s,e)}function Sx(s){var e=0,t;for(s.reverse();e<s.length;e+=2)t=s[e],s[e]=s[e+1],s[e+1]=t;s.reversed=!s.reversed}var Tx=function(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg","path"),i=[].slice.call(e.attributes),r=i.length,o;for(t=","+t+",";--r>-1;)o=i[r].nodeName.toLowerCase(),t.indexOf(","+o+",")<0&&n.setAttributeNS(null,o,i[r].nodeValue);return n},Ex={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},bx=function(e,t){for(var n=t?t.split(","):[],i={},r=n.length;--r>-1;)i[n[r]]=+e.getAttribute(n[r])||0;return i};function wx(s,e){var t=s.tagName.toLowerCase(),n=.552284749831,i,r,o,a,l,c,u,h,f,d,g,_,m,p,S,M,x,b,A,E,R,v;return t==="path"||!s.getBBox?s:(c=Tx(s,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),v=bx(s,Ex[t]),t==="rect"?(a=v.rx,l=v.ry||a,r=v.x,o=v.y,d=v.width-a*2,g=v.height-l*2,a||l?(_=r+a*(1-n),m=r+a,p=m+d,S=p+a*n,M=p+a,x=o+l*(1-n),b=o+l,A=b+g,E=A+l*n,R=A+l,i="M"+M+","+b+" V"+A+" C"+[M,E,S,R,p,R,p-(p-m)/3,R,m+(p-m)/3,R,m,R,_,R,r,E,r,A,r,A-(A-b)/3,r,b+(A-b)/3,r,b,r,x,_,o,m,o,m+(p-m)/3,o,p-(p-m)/3,o,p,o,S,o,M,x,M,b].join(",")+"z"):i="M"+(r+d)+","+o+" v"+g+" h"+-d+" v"+-g+" h"+d+"z"):t==="circle"||t==="ellipse"?(t==="circle"?(a=l=v.r,h=a*n):(a=v.rx,l=v.ry,h=l*n),r=v.cx,o=v.cy,u=a*n,i="M"+(r+a)+","+o+" C"+[r+a,o+h,r+u,o+l,r,o+l,r-u,o+l,r-a,o+h,r-a,o,r-a,o-h,r-u,o-l,r,o-l,r+u,o-l,r+a,o-h,r+a,o].join(",")+"z"):t==="line"?i="M"+v.x1+","+v.y1+" L"+v.x2+","+v.y2:(t==="polyline"||t==="polygon")&&(f=(s.getAttribute("points")+"").match(ux)||[],r=f.shift(),o=f.shift(),i="M"+r+","+o+" L"+f.join(","),t==="polygon"&&(i+=","+r+","+o+"z")),c.setAttribute("d",F_(c._gsRawPath=ac(i))),e&&s.parentNode&&(s.parentNode.insertBefore(c,s),s.parentNode.removeChild(s)),c)}function U_(s,e,t){var n=s[e],i=s[e+2],r=s[e+4],o;return n+=(i-n)*t,i+=(r-i)*t,n+=(i-n)*t,o=i+(r+(s[e+6]-r)*t-i)*t-n,n=s[e+1],i=s[e+3],r=s[e+5],n+=(i-n)*t,i+=(r-i)*t,n+=(i-n)*t,_t(mx(i+(r+(s[e+7]-r)*t-i)*t-n,o)*px)}function O_(s,e,t){t=_x(t)?1:Ld(t)||0,e=Ld(e)||0;var n=Math.max(0,~~(pi(t-e)-1e-8)),i=Mx(s);if(e>t&&(e=1-e,t=1-t,vx(i),i.totalLength=0),e<0||t<0){var r=Math.abs(~~Math.min(e,t))+1;e+=r,t+=r}i.totalLength||_s(i);var o=t>1,a=Nd(i,e,gx,!0),l=Nd(i,t,xx),c=l.segment,u=a.segment,h=l.segIndex,f=a.segIndex,d=l.i,g=a.i,_=f===h,m=d===g&&_,p,S,M,x,b,A,E,R;if(o||n){for(p=h<f||_&&d<g||m&&l.t<a.t,Dd(i,f,g,a.t)&&(f++,p||(h++,m?(l.t=(l.t-a.t)/(1-a.t),d=0):_&&(d-=g))),Math.abs(1-(t-e))<1e-5?h=f-1:!l.t&&h?h--:Dd(i,h,d,l.t)&&p&&f++,a.t===1&&(f=(f+1)%i.length),b=[],A=i.length,E=1+A*n,R=f,E+=(A-f+h)%A,x=0;x<E;x++)yx(b,i[R++%A]);i=b}else if(M=l.t===1?6:ih(c,d,l.t),e!==t)for(S=ih(u,g,m?a.t/l.t:a.t),_&&(M+=S),c.splice(d+M+2),(S||g)&&u.splice(0,g+S),x=i.length;x--;)(x<f||x>h)&&i.splice(x,1);else c.angle=U_(c,d+M,0),d+=M,a=c[d],l=c[d+1],c.length=c.totalLength=0,c.totalPoints=i.totalPoints=8,c.push(a,l,a,l,a,l,a,l);return i.totalLength=0,i}function Ax(s,e,t){e=e||0,s.samples||(s.samples=[],s.lookup=[]);var n=~~s.resolution||12,i=1/n,r=s.length,o=s[e],a=s[e+1],l=e?e/6*n:0,c=s.samples,u=s.lookup,h=(e?s.minLength:nh)||nh,f=c[l+t*n-1],d=e?c[l-1]:0,g,_,m,p,S,M,x,b,A,E,R,v,y,C,N,O,F;for(c.length=u.length=0,_=e+2;_<r;_+=6){if(m=s[_+4]-o,p=s[_+2]-o,S=s[_]-o,b=s[_+5]-a,A=s[_+3]-a,E=s[_+1]-a,M=x=R=v=0,pi(m)<.01&&pi(b)<.01&&pi(S)+pi(E)<.01)s.length>8&&(s.splice(_,6),_-=6,r-=6);else for(g=1;g<=n;g++)C=i*g,y=1-C,M=x-(x=(C*C*m+3*y*(C*p+y*S))*C),R=v-(v=(C*C*b+3*y*(C*A+y*E))*C),O=tr(R*R+M*M),O<h&&(h=O),d+=O,c[l++]=d;o+=m,a+=b}if(f)for(f-=d;l<c.length;l++)c[l]+=f;if(c.length&&h){if(s.totalLength=F=c[c.length-1]||0,s.minLength=h,F/h<9999)for(O=N=0,g=0;g<F;g+=h)u[O++]=c[N]<g?++N:N}else s.totalLength=c[0]=0;return e?d-c[e/2-1]:d}function _s(s,e){var t,n,i;for(i=t=n=0;i<s.length;i++)s[i].resolution=~~e||12,n+=s[i].length,t+=Ax(s[i]);return s.totalPoints=n,s.totalLength=t,s}function ih(s,e,t){if(t<=0||t>=1)return 0;var n=s[e],i=s[e+1],r=s[e+2],o=s[e+3],a=s[e+4],l=s[e+5],c=s[e+6],u=s[e+7],h=n+(r-n)*t,f=r+(a-r)*t,d=i+(o-i)*t,g=o+(l-o)*t,_=h+(f-h)*t,m=d+(g-d)*t,p=a+(c-a)*t,S=l+(u-l)*t;return f+=(p-f)*t,g+=(S-g)*t,s.splice(e+2,4,_t(h),_t(d),_t(_),_t(m),_t(_+(f-_)*t),_t(m+(g-m)*t),_t(f),_t(g),_t(p),_t(S)),s.samples&&s.samples.splice(e/6*s.resolution|0,0,0,0,0,0,0,0),6}function Nd(s,e,t,n){t=t||{},s.totalLength||_s(s),(e<0||e>1)&&(e=I_(e));var i=0,r=s[0],o,a,l,c,u,h,f;if(!e)f=h=i=0,r=s[0];else if(e===1)f=1,i=s.length-1,r=s[i],h=r.length-8;else{if(s.length>1){for(l=s.totalLength*e,u=h=0;(u+=s[h++].totalLength)<l;)i=h;r=s[i],c=u-r.totalLength,e=(l-c)/(u-c)||0}o=r.samples,a=r.resolution,l=r.totalLength*e,h=r.lookup.length?r.lookup[~~(l/r.minLength)]||0:N_(o,l,e),c=h?o[h-1]:0,u=o[h],u<l&&(c=u,u=o[++h]),f=1/a*((l-c)/(u-c)+h%a),h=~~(h/a)*6,n&&f===1&&(h+6<r.length?(h+=6,f=0):i+1<s.length&&(h=f=0,r=s[++i]))}return t.t=f,t.i=h,t.path=s,t.segment=r,t.segIndex=i,t}function Ud(s,e,t,n){var i=s[0],r=n||{},o,a,l,c,u,h,f,d,g;if((e<0||e>1)&&(e=I_(e)),i.lookup||_s(s),s.length>1){for(l=s.totalLength*e,u=h=0;(u+=s[h++].totalLength)<l;)i=s[h];c=u-i.totalLength,e=(l-c)/(u-c)||0}return o=i.samples,a=i.resolution,l=i.totalLength*e,h=i.lookup.length?i.lookup[e<1?~~(l/i.minLength):i.lookup.length-1]||0:N_(o,l,e),c=h?o[h-1]:0,u=o[h],u<l&&(c=u,u=o[++h]),f=1/a*((l-c)/(u-c)+h%a)||0,g=1-f,h=~~(h/a)*6,d=i[h],r.x=_t((f*f*(i[h+6]-d)+3*g*(f*(i[h+4]-d)+g*(i[h+2]-d)))*f+d),r.y=_t((f*f*(i[h+7]-(d=i[h+1]))+3*g*(f*(i[h+5]-d)+g*(i[h+3]-d)))*f+d),t&&(r.angle=i.totalLength?U_(i,h,f>=1?1-1e-9:f||1e-9):i.angle||0),r}function Qo(s,e,t,n,i,r,o){for(var a=s.length,l,c,u,h,f;--a>-1;)for(l=s[a],c=l.length,u=0;u<c;u+=2)h=l[u],f=l[u+1],l[u]=h*e+f*n+r,l[u+1]=h*t+f*i+o;return s._dirty=1,s}function Rx(s,e,t,n,i,r,o,a,l){if(!(s===a&&e===l)){t=pi(t),n=pi(n);var c=i%360*dx,u=tl(c),h=el(c),f=Math.PI,d=f*2,g=(s-a)/2,_=(e-l)/2,m=u*g+h*_,p=-h*g+u*_,S=m*m,M=p*p,x=S/(t*t)+M/(n*n);x>1&&(t=tr(x)*t,n=tr(x)*n);var b=t*t,A=n*n,E=(b*A-b*M-A*S)/(b*M+A*S);E<0&&(E=0);var R=(r===o?-1:1)*tr(E),v=R*(t*p/n),y=R*-(n*m/t),C=(s+a)/2,N=(e+l)/2,O=C+(u*v-h*y),F=N+(h*v+u*y),W=(m-v)/t,z=(p-y)/n,X=(-m-v)/t,G=(-p-y)/n,ee=W*W+z*z,L=(z<0?-1:1)*Math.acos(W/tr(ee)),ae=(W*G-z*X<0?-1:1)*Math.acos((W*X+z*G)/tr(ee*(X*X+G*G)));isNaN(ae)&&(ae=f),!o&&ae>0?ae-=d:o&&ae<0&&(ae+=d),L%=d,ae%=d;var ve=Math.ceil(pi(ae)/(d/4)),Ne=[],De=ae/ve,K=4/3*el(De/2)/(1+tl(De/2)),se=u*t,te=h*t,Se=h*-n,ye=u*n,Ee;for(Ee=0;Ee<ve;Ee++)i=L+Ee*De,m=tl(i),p=el(i),W=tl(i+=De),z=el(i),Ne.push(m-K*p,p+K*m,W+K*z,z-K*W,W,z);for(Ee=0;Ee<Ne.length;Ee+=2)m=Ne[Ee],p=Ne[Ee+1],Ne[Ee]=m*se+p*Se+O,Ne[Ee+1]=m*te+p*ye+F;return Ne[Ee-2]=a,Ne[Ee-1]=l,Ne}}function ac(s){var e=(s+"").replace(hx,function(v){var y=+v;return y<1e-4&&y>-1e-4?0:y}).match(cx)||[],t=[],n=0,i=0,r=2/3,o=e.length,a=0,l="ERROR: malformed path: "+s,c,u,h,f,d,g,_,m,p,S,M,x,b,A,E,R=function(y,C,N,O){S=(N-y)/3,M=(O-C)/3,_.push(y+S,C+M,N-S,O-M,N,O)};if(!s||!isNaN(e[0])||isNaN(e[1]))return console.log(l),t;for(c=0;c<o;c++)if(b=d,isNaN(e[c])?(d=e[c].toUpperCase(),g=d!==e[c]):c--,h=+e[c+1],f=+e[c+2],g&&(h+=n,f+=i),c||(m=h,p=f),d==="M")_&&(_.length<8?t.length-=1:a+=_.length),n=m=h,i=p=f,_=[h,f],t.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),g||(n=i=0),_.push(h,f,n+e[c+3]*1,i+e[c+4]*1,n+=e[c+5]*1,i+=e[c+6]*1),c+=6;else if(d==="S")S=n,M=i,(b==="C"||b==="S")&&(S+=n-_[_.length-4],M+=i-_[_.length-3]),g||(n=i=0),_.push(S,M,h,f,n+=e[c+3]*1,i+=e[c+4]*1),c+=4;else if(d==="Q")S=n+(h-n)*r,M=i+(f-i)*r,g||(n=i=0),n+=e[c+3]*1,i+=e[c+4]*1,_.push(S,M,n+(h-n)*r,i+(f-i)*r,n,i),c+=4;else if(d==="T")S=n-_[_.length-4],M=i-_[_.length-3],_.push(n+S,i+M,h+(n+S*1.5-h)*r,f+(i+M*1.5-f)*r,n=h,i=f),c+=2;else if(d==="H")R(n,i,n=h,i),c+=1;else if(d==="V")R(n,i,n,i=h+(g?i-n:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=m,f=p,_.closed=!0),(d==="L"||pi(n-h)>.5||pi(i-f)>.5)&&(R(n,i,h,f),d==="L"&&(c+=2)),n=h,i=f;else if(d==="A"){if(A=e[c+4],E=e[c+5],S=e[c+6],M=e[c+7],u=7,A.length>1&&(A.length<3?(M=S,S=E,u--):(M=E,S=A.substr(2),u-=2),E=A.charAt(1),A=A.charAt(0)),x=Rx(n,i,+e[c+1],+e[c+2],+e[c+3],+A,+E,(g?n:0)+S*1,(g?i:0)+M*1),c+=u,x)for(u=0;u<x.length;u++)_.push(x[u]);n=_[_.length-2],i=_[_.length-1]}else console.log(l);return c=_.length,c<6?(t.pop(),c=0):_[0]===_[c-2]&&_[1]===_[c-1]&&(_.closed=!0),t.totalPoints=a+c,t}function Cx(s,e){e===void 0&&(e=1);for(var t=s[0],n=0,i=[t,n],r=2;r<s.length;r+=2)i.push(t,n,s[r],n=(s[r]-t)*e/2,t=s[r],-n);return i}function rh(s,e){pi(s[0]-s[2])<1e-4&&pi(s[1]-s[3])<1e-4&&(s=s.slice(2));var t=s.length-2,n=+s[0],i=+s[1],r=+s[2],o=+s[3],a=[n,i,n,i],l=r-n,c=o-i,u=Math.abs(s[t]-n)<.001&&Math.abs(s[t+1]-i)<.001,h,f,d,g,_,m,p,S,M,x,b,A,E,R,v;for(u&&(s.push(r,o),r=n,o=i,n=s[t-2],i=s[t-1],s.unshift(n,i),t+=4),e=e||e===0?+e:1,d=2;d<t;d+=2)h=n,f=i,n=r,i=o,r=+s[d+2],o=+s[d+3],!(n===r&&i===o)&&(g=l,_=c,l=r-n,c=o-i,m=tr(g*g+_*_),p=tr(l*l+c*c),S=tr(Math.pow(l/p+g/m,2)+Math.pow(c/p+_/m,2)),M=(m+p)*e*.25/S,x=n-(n-h)*(m?M/m:0),b=n+(r-n)*(p?M/p:0),A=n-(x+((b-x)*(m*3/(m+p)+.5)/4||0)),E=i-(i-f)*(m?M/m:0),R=i+(o-i)*(p?M/p:0),v=i-(E+((R-E)*(m*3/(m+p)+.5)/4||0)),(n!==h||i!==f)&&a.push(_t(x+A),_t(E+v),_t(n),_t(i),_t(b+A),_t(R+v)));return n!==r||i!==o||a.length<4?a.push(_t(r),_t(o),_t(r),_t(o)):a.length-=2,a.length===2?a.push(n,i,n,i,n,i):u&&(a.splice(0,6),a.length=a.length-6),a}function F_(s){D_(s[0])&&(s=[s]);var e="",t=s.length,n,i,r,o;for(i=0;i<t;i++){for(o=s[i],e+="M"+_t(o[0])+","+_t(o[1])+" C",n=o.length,r=2;r<n;r++)e+=_t(o[r++])+","+_t(o[r++])+" "+_t(o[r++])+","+_t(o[r++])+" "+_t(o[r++])+","+_t(o[r])+" ";o.closed&&(e+="z")}return e}/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rr,gs,Ef,yc,ea,zl,lc,ma,Ti="transform",sh=Ti+"Origin",B_,k_=function(e){var t=e.ownerDocument||e;for(!(Ti in e.style)&&("msTransform"in e.style)&&(Ti="msTransform",sh=Ti+"Origin");t.parentNode&&(t=t.parentNode););if(gs=window,lc=new Ra,t){rr=t,Ef=t.documentElement,yc=t.body,ma=rr.createElementNS("http://www.w3.org/2000/svg","g"),ma.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),B_=i.offsetParent!==n,r.removeChild(n))}return t},Px=function(e){for(var t,n;e&&e!==yc;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},z_=[],H_=[],Lx=function(){return gs.pageYOffset||rr.scrollTop||Ef.scrollTop||yc.scrollTop||0},Dx=function(){return gs.pageXOffset||rr.scrollLeft||Ef.scrollLeft||yc.scrollLeft||0},bf=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},Ix=function s(e){if(gs.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},Hc=function s(e,t){if(e.parentNode&&(rr||k_(e))){var n=bf(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=rr.createElementNS?rr.createElementNS(i.replace(/^https/,"http"),r):rr.createElement(r);return t&&(n?(zl||(zl=s(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),zl.appendChild(c)):(ea||(ea=s(e),ea.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",ea.appendChild(c))),c}throw"Need document and parent."},Nx=function(e){for(var t=new Ra,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},Ux=function(e){var t=e.getCTM(),n;return t||(n=e.style[Ti],e.style[Ti]="none",e.appendChild(ma),t=ma.getCTM(),e.removeChild(ma),n?e.style[Ti]=n:e.style.removeProperty(Ti.replace(/([A-Z])/g,"-$1").toLowerCase())),t||lc.clone()},Ox=function(e,t){var n=bf(e),i=e===n,r=n?z_:H_,o=e.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,u,h,f,d;if(e===gs)return e;if(r.length||r.push(Hc(e,1),Hc(e,2),Hc(e,3)),l=n?zl:ea,n)i?(u=Ux(e),h=-u.e/u.a,f=-u.f/u.d,c=lc):e.getBBox?(u=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?Nx(c):c.getItem(0).matrix:lc,h=c.a*u.x+c.c*u.y,f=c.b*u.x+c.d*u.y):(c=new Ra,h=f=0),t&&e.tagName.toLowerCase()==="g"&&(h=f=0),(i?n:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+h)+","+(c.f+f)+")");else{if(h=f=0,B_)for(c=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(gs.getComputedStyle(u)[Ti]+"").length>4&&(h=u.offsetLeft,f=u.offsetTop,u=0);if(d=gs.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(c=e.offsetParent;o&&o!==c;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=l.style,u.top=e.offsetTop-f+"px",u.left=e.offsetLeft-h+"px",u[Ti]=d[Ti],u[sh]=d[sh],u.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},Vc=function(e,t,n,i,r,o,a){return e.a=t,e.b=n,e.c=i,e.d=r,e.e=o,e.f=a,e},Ra=(function(){function s(t,n,i,r,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=1),o===void 0&&(o=0),a===void 0&&(a=0),Vc(this,t,n,i,r,o,a)}var e=s.prototype;return e.inverse=function(){var n=this.a,i=this.b,r=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*r||1e-10;return Vc(this,o/c,-i/c,-r/c,n/c,(r*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,h=n.c,f=n.b,d=n.d,g=n.e,_=n.f;return Vc(this,u*i+f*o,u*r+f*a,h*i+d*o,h*r+d*a,l+g*i+_*o,c+g*r+_*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&r===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var r=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,h=this.e,f=this.f;return i.x=r*a+o*c+h||0,i.y=r*l+o*u+f||0,i},s})();function so(s,e,t,n){if(!s||!s.parentNode||(rr||k_(s)).documentElement===s)return new Ra;var i=Px(s),r=bf(s),o=r?z_:H_,a=Ox(s,t),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),h=a.parentNode,f=!n&&Ix(s),d=new Ra((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:Dx()),l.top+(f?0:Lx()));if(h.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?d.inverse():d}/*!
 * MotionPathPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fx="x,translateX,left,marginLeft,xPercent".split(","),Bx="y,translateY,top,marginTop,yPercent".split(","),kx=Math.PI/180,ui,V_,qs,oh,Gc,Od,zx=function(){return ui||typeof window<"u"&&(ui=window.gsap)&&ui.registerPlugin&&ui},Uo=function(e,t,n,i){for(var r=t.length,o=i===2?0:i,a=0;a<r;a++)e[o]=parseFloat(t[a][n]),i===2&&(e[o+1]=0),o+=2;return e},Zs=function(e,t,n){return parseFloat(e._gsap.get(e,t,n||"px"))||0},G_=function(e){var t=e[0],n=e[1],i;for(i=2;i<e.length;i+=2)t=e[i]+=t,n=e[i+1]+=n},Fd=function(e,t,n,i,r,o,a,l,c){if(a.type==="cubic")t=[t];else{a.fromCurrent!==!1&&t.unshift(Zs(n,i,l),r?Zs(n,r,c):0),a.relative&&G_(t);var u=r?rh:Cx;t=[u(t,a.curviness)]}return t=o(W_(t,n,a)),cc(e,n,i,t,"x",l),r&&cc(e,n,r,t,"y",c),_s(t,a.resolution||(a.curviness===0?20:12))},Hx=function(e){return e},Vx=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,Bd=function(e,t,n){var i=so(e),r=0,o=0,a;return(e.tagName+"").toLowerCase()==="svg"?(a=e.viewBox.baseVal,a.width||(a={width:+e.getAttribute("width"),height:+e.getAttribute("height")})):a=t&&e.getBBox&&e.getBBox(),t&&t!=="auto"&&(r=t.push?t[0]*(a?a.width:e.offsetWidth||0):t.x,o=t.push?t[1]*(a?a.height:e.offsetHeight||0):t.y),n.apply(r||o?i.apply({x:r,y:o}):{x:i.e,y:i.f})},ah=function(e,t,n,i){var r=so(e.parentNode,!0,!0),o=r.clone().multiply(so(t)),a=Bd(e,n,r),l=Bd(t,i,r),c=l.x,u=l.y,h;return o.e=o.f=0,i==="auto"&&t.getTotalLength&&t.tagName.toLowerCase()==="path"&&(h=t.getAttribute("d").match(Vx)||[],h=o.apply({x:+h[0],y:+h[1]}),c+=h.x,u+=h.y),h&&(h=o.apply(t.getBBox()),c-=h.x,u-=h.y),o.e=c-a.x,o.f=u-a.y,o},W_=function(e,t,n){var i=n.align,r=n.matrix,o=n.offsetX,a=n.offsetY,l=n.alignOrigin,c=e[0][0],u=e[0][1],h=Zs(t,"x"),f=Zs(t,"y"),d,g,_;return!e||!e.length?kl("M0,0L0,0"):(i&&(i==="self"||(d=oh(i)[0]||t)===t?Qo(e,1,0,0,1,h-c,f-u):(l&&l[2]!==!1?ui.set(t,{transformOrigin:l[0]*100+"% "+l[1]*100+"%"}):l=[Zs(t,"xPercent")/-100,Zs(t,"yPercent")/-100],g=ah(t,d,l,"auto"),_=g.apply({x:c,y:u}),Qo(e,g.a,g.b,g.c,g.d,h+g.e-(_.x-g.e),f+g.f-(_.y-g.f)))),r?Qo(e,r.a,r.b,r.c,r.d,r.e,r.f):(o||a)&&Qo(e,1,0,0,1,o||0,a||0),e)},cc=function(e,t,n,i,r,o){var a=t._gsap,l=a.harness,c=l&&l.aliases&&l.aliases[n],u=c&&c.indexOf(",")<0?c:n,h=e._pt=new V_(e._pt,t,u,0,0,Hx,0,a.set(t,u,e));h.u=qs(a.get(t,u,o))||0,h.path=i,h.pp=r,e._props.push(u)},Gx=function(e,t){return function(n){return e||t!==1?O_(n,e,t):n}},Ca={version:"3.13.0",name:"motionPath",register:function(e,t,n){ui=e,qs=ui.utils.getUnit,oh=ui.utils.toArray,Gc=ui.core.getStyleSaver,Od=ui.core.reverting||function(){},V_=n},init:function(e,t,n){if(!ui)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;(!(typeof t=="object"&&!t.style)||!t.path)&&(t={path:t});var i=[],r=t,o=r.path,a=r.autoRotate,l=r.unitX,c=r.unitY,u=r.x,h=r.y,f=o[0],d=Gx(t.start,"end"in t?t.end:1),g,_;if(this.rawPaths=i,this.target=e,this.tween=n,this.styles=Gc&&Gc(e,"transform"),(this.rotate=a||a===0)&&(this.rOffset=parseFloat(a)||0,this.radians=!!t.useRadians,this.rProp=t.rotation||"rotation",this.rSet=e._gsap.set(e,this.rProp,this),this.ru=qs(e._gsap.get(e,this.rProp))||0),Array.isArray(o)&&!("closed"in o)&&typeof f!="number"){for(_ in f)!u&&~Fx.indexOf(_)?u=_:!h&&~Bx.indexOf(_)&&(h=_);u&&h?i.push(Fd(this,Uo(Uo([],o,u,0),o,h,1),e,u,h,d,t,l||qs(o[0][u]),c||qs(o[0][h]))):u=h=0;for(_ in f)_!==u&&_!==h&&i.push(Fd(this,Uo([],o,_,2),e,_,0,d,t,qs(o[0][_])))}else g=d(W_(kl(t.path),e,t)),_s(g,t.resolution),i.push(g),cc(this,e,t.x||"x",g,"x",t.unitX||"px"),cc(this,e,t.y||"y",g,"y",t.unitY||"px");n.vars.immediateRender&&this.render(n.progress(),this)},render:function(e,t){var n=t.rawPaths,i=n.length,r=t._pt;if(t.tween._time||!Od()){for(e>1?e=1:e<0&&(e=0);i--;)Ud(n[i],e,!i&&t.rotate,n[i]);for(;r;)r.set(r.t,r.p,r.path[r.pp]+r.u,r.d,e),r=r._next;t.rotate&&t.rSet(t.target,t.rProp,n[0].angle*(t.radians?kx:1)+t.rOffset+t.ru,t,e)}else t.styles.revert()},getLength:function(e){return _s(kl(e)).totalLength},sliceRawPath:O_,getRawPath:kl,pointsToSegment:rh,stringToRawPath:ac,rawPathToString:F_,transformRawPath:Qo,getGlobalMatrix:so,getPositionOnPath:Ud,cacheRawPathMeasurements:_s,convertToPath:function(e,t){return oh(e).map(function(n){return wx(n,t!==!1)})},convertCoordinates:function(e,t,n){var i=so(t,!0,!0).multiply(so(e));return n?i.apply(n):i},getAlignMatrix:ah,getRelativePosition:function(e,t,n,i){var r=ah(e,t,n,i);return{x:r.e,y:r.f}},arrayToRawPath:function(e,t){t=t||{};var n=Uo(Uo([],e,t.x||"x",0),e,t.y||"y",1);return t.relative&&G_(n),[t.type==="cubic"?n:rh(n,t.curviness)]}};zx()&&ui.registerPlugin(Ca);function Oo({el:s,hasParent:e=!1,hasgrandParent:t=!1,markers:n=!1,markersText:i=!1}){if(typeof s=="string"&&(s=document.querySelector(s)),!s)return null;const r=window.scrollX,o=window.scrollY,a=s.getBoundingClientRect(),l=s.parentElement,c=l?.parentElement,u=l?.getBoundingClientRect(),h=c?.getBoundingClientRect();let f=a,d=s,g="red",_="self";t&&h?(f=h,d=c,g="orange",_="grandparent"):e&&u&&(f=u,d=l,g="blue",_="parent");const m=a.left+a.width/2+r,p={center:{x:m,y:f.top+f.height/2+o},topCenter:{x:m,y:f.top+o},bottomCenter:{x:m,y:f.top+f.height+o}};return n&&(d&&(d.style.outline=`1px dashed ${g}`),Object.entries(p).forEach(([S,M])=>{const x=document.createElement("div");x.style.cssText=`
        position: absolute;
        top: ${M.y-5}px;
        left: ${M.x-5}px;
        width: 10px;
        height: 10px;
        background: ${g};
        border-radius: 50%;
        z-index: 999;
        pointer-events: none;
      `,document.body.appendChild(x)})),i&&(d&&(d.style.outline=`1px dashed ${g}`),Object.entries(p).forEach(([S,M])=>{const x=document.createElement("div");x.textContent=`${_} - ${S}`,x.style.cssText=`
        position: absolute;
        top: ${M.y+8}px;
        left: ${M.x+8}px;
        color: ${g};
        font-size: 12px;
        background: #fff;
        padding: 2px 4px;
        border: 1px solid ${g};
        border-radius: 4px;
        z-index: 999;
        pointer-events: none;
        white-space: nowrap;
      `,document.body.appendChild(x)})),p}function Wx(s,e={}){const{color:t="",width:n=2,id:i="motion-path-svg",curviness:r=.5,showMarkers:o=!1,markerColor:a="blue",markerRadius:l=4}=e,c="http://www.w3.org/2000/svg",u=Ca.arrayToRawPath(s,{curviness:r}),h=Ca.rawPathToString(u),f=document.createElementNS(c,"svg");f.setAttribute("id",i),f.style.cssText=`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  `;const d=document.createElementNS(c,"path");return d.setAttribute("d",h),d.setAttribute("fill","none"),d.setAttribute("stroke",t),d.setAttribute("stroke-width",n),d.setAttribute("vector-effect","non-scaling-stroke"),f.appendChild(d),o&&s.forEach((g,_)=>{const m=document.createElementNS(c,"circle");m.setAttribute("cx",g.x),m.setAttribute("cy",g.y),m.setAttribute("r",l),m.setAttribute("fill",a),m.setAttribute("stroke","#fff"),m.setAttribute("stroke-width",1);const p=document.createElementNS(c,"text");p.setAttribute("x",g.x+8),p.setAttribute("y",g.y+4),p.setAttribute("font-size","12"),p.setAttribute("fill",a),p.textContent=_,f.appendChild(p),f.appendChild(m)}),document.body.appendChild(f),f}ss.registerPlugin(Ca,Je);window.addEventListener("load",()=>{const s=Oo({el:".img-sec"}),e=Oo({el:".ref-1",hasgrandParent:!0}),t=Oo({el:".ref-2",hasgrandParent:!0}),n=Oo({el:".ref-3",hasgrandParent:!0}),i=Oo({el:".ref-4"}),r=[{x:s.center.x,y:s.center.y},{x:s.center.x,y:s.center.y+100},{x:s.bottomCenter.x+10,y:s.bottomCenter.y},{x:e.topCenter.x-15,y:e.topCenter.y},{x:e.topCenter.x,y:e.topCenter.y+200},{x:e.center.x,y:e.center.y},{x:e.bottomCenter.x,y:e.bottomCenter.y-200},{x:e.bottomCenter.x-20,y:e.bottomCenter.y},{x:t.topCenter.x+20,y:t.topCenter.y},{x:t.topCenter.x,y:t.topCenter.y+200},{x:t.center.x,y:t.center.y},{x:t.bottomCenter.x,y:t.bottomCenter.y-200},{x:t.bottomCenter.x+25,y:t.bottomCenter.y},{x:n.topCenter.x-20,y:n.topCenter.y},{x:n.topCenter.x,y:n.topCenter.y+200},{x:n.center.x,y:n.center.y},{x:n.bottomCenter.x,y:n.bottomCenter.y-200},{x:n.bottomCenter.x-30,y:n.bottomCenter.y},{x:i.topCenter.x+30,y:i.topCenter.y-200},{x:i.topCenter.x,y:i.topCenter.y},{x:i.center.x,y:i.center.y}];Wx(r,{curviness:1});let o=ss.utils.toArray(".has-path");const a=document.querySelector("#motion-path-svg path"),l=document.querySelector(".model-maker-canvas");ss.timeline({scrollTrigger:{trigger:o[0],endTrigger:o[o.length-1],start:"20%",end:`+=${a.getBoundingClientRect().height}`,scrub:.5}}).to(l,{motionPath:{path:a,align:a,alignOrigin:[.5,.5],autoRotate:-90},ease:"none"},0);const u=["bg-first","bg-theme","bg-second","bg-alter","bg-last"],h=["#FFFFFF","#D0011C","#914C9D","#F57F20","#FFFFFF"];o.forEach((f,d)=>{Je.create({trigger:f,start:"top center",end:d===o.length-1?"bottom bottom":"bottom center",onEnter:()=>{f.classList.add(u[d]),ss.to(document.body,{backgroundColor:h[d],duration:1})},onEnterBack:()=>{f.classList.add(u[d]),ss.to(document.body,{backgroundColor:h[d],duration:1})}})})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="179",Xx=0,kd=1,Yx=2,X_=1,qx=2,ji=3,fr=0,Bn=1,Li=2,Dr=0,oo=1,zd=2,Hd=3,Vd=4,Kx=5,ns=100,$x=101,jx=102,Zx=103,Jx=104,Qx=200,ev=201,tv=202,nv=203,lh=204,ch=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=211,cv=212,uv=213,hv=214,uh=0,hh=1,fh=2,xo=3,dh=4,ph=5,mh=6,_h=7,Y_=0,fv=1,dv=2,Ir=0,pv=1,mv=2,_v=3,q_=4,gv=5,xv=6,vv=7,Gd="attached",yv="detached",K_=300,vo=301,yo=302,uc=303,gh=304,Mc=306,Mo=1e3,Ni=1001,hc=1002,Pn=1003,$_=1004,ta=1005,rn=1006,Hl=1007,Ui=1008,zi=1009,j_=1010,Z_=1011,Pa=1012,Af=1013,Ss=1014,In=1015,sr=1016,Rf=1017,Cf=1018,La=1020,J_=35902,Q_=1021,eg=1022,mi=1023,Da=1026,Ia=1027,Pf=1028,Lf=1029,tg=1030,Df=1031,If=1033,Vl=33776,Gl=33777,Wl=33778,Xl=33779,xh=35840,vh=35841,yh=35842,Mh=35843,Sh=36196,Th=37492,Eh=37496,bh=37808,wh=37809,Ah=37810,Rh=37811,Ch=37812,Ph=37813,Lh=37814,Dh=37815,Ih=37816,Nh=37817,Uh=37818,Oh=37819,Fh=37820,Bh=37821,Yl=36492,kh=36494,zh=36495,ng=36283,Hh=36284,Vh=36285,Gh=36286,Na=2300,Ua=2301,Wc=2302,Wd=2400,Xd=2401,Yd=2402,Mv=2500,Sv=0,ig=1,Wh=2,Tv=3200,Ev=3201,rg=0,bv=1,Tr="",kt="srgb",un="srgb-linear",fc="linear",St="srgb",Cs=7680,qd=519,wv=512,Av=513,Rv=514,sg=515,Cv=516,Pv=517,Lv=518,Dv=519,Xh=35044,Kd="300 es",Oi=2e3,dc=2001;class Ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $d=1234567;const _a=Math.PI/180,So=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ot(s,e,t){return Math.max(e,Math.min(t,s))}function Nf(s,e){return(s%e+e)%e}function Iv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Nv(s,e,t){return s!==e?(t-s)/(e-s):0}function ga(s,e,t){return(1-t)*s+t*e}function Uv(s,e,t,n){return ga(s,e,1-Math.exp(-t*n))}function Ov(s,e=1){return e-Math.abs(Nf(s,e*2)-e)}function Fv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function kv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zv(s,e){return s+Math.random()*(e-s)}function Hv(s){return s*(.5-Math.random())}function Vv(s){s!==void 0&&($d=s);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gv(s){return s*_a}function Wv(s){return s*So}function Xv(s){return(s&s-1)===0&&s!==0}function Yv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Kv(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $v={DEG2RAD:_a,RAD2DEG:So,generateUUID:Ei,clamp:ot,euclideanModulo:Nf,mapLinear:Iv,inverseLerp:Nv,lerp:ga,damp:Uv,pingpong:Ov,smoothstep:Fv,smootherstep:Bv,randInt:kv,randFloat:zv,randFloatSpread:Hv,seededRandom:Vv,degToRad:Gv,radToDeg:Wv,isPowerOfTwo:Xv,ceilPowerOfTwo:Yv,floorPowerOfTwo:qv,setQuaternionFromProperEuler:Kv,normalize:yt,denormalize:Mi};class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),A=Math.atan2(b,p*S);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*S;if(l=l*m+f*x,c=c*m+d*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xc.copy(this).projectOnVector(e),this.sub(Xc)}reflect(e){return this.sub(Xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new H,jd=new kr;class Ze{constructor(e,t,n,i,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],M=i[4],x=i[7],b=i[2],A=i[5],E=i[8];return r[0]=o*_+a*S+l*b,r[3]=o*m+a*M+l*A,r[6]=o*p+a*x+l*E,r[1]=c*_+u*S+h*b,r[4]=c*m+u*M+h*A,r[7]=c*p+u*x+h*E,r[2]=f*_+d*S+g*b,r[5]=f*m+d*M+g*A,r[8]=f*p+d*x+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new Ze;function og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jv(){const s=Oa("canvas");return s.style.display="block",s}const Zd={};function ao(s){s in Zd||(Zd[s]=!0,console.warn(s))}function Zv(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jv(){const s={enabled:!0,workingColorSpace:un,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=lo(i.r),i.g=lo(i.g),i.b=lo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tr?fc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ao("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ao("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[un]:{primaries:e,whitePoint:n,transfer:fc,toXYZ:Jd,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Jd,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),s}const ut=Jv();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function lo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ps;class Qv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Oa("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=lr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ey=0;class Uf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qc(i[o].image)):r.push(qc(i[o]))}else r=qc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function qc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ty=0;const Kc=new H;class sn extends Ao{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=Ni,i=Ni,r=rn,o=Ui,a=mi,l=zi,c=sn.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Ei(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=K_;sn.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,i=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,x=(d+1)/2,b=(p+1)/2,A=(u+f)/4,E=(h+_)/4,R=(g+m)/4;return M>x&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=E/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=R/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ny extends Ao{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new sn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Uf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends ny{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ag extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iy extends sn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(r,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),il.subVectors(this.max,Fo),Ls.subVectors(e.a,Fo),Ds.subVectors(e.b,Fo),Is.subVectors(e.c,Fo),pr.subVectors(Ds,Ls),mr.subVectors(Is,Ds),Wr.subVectors(Ls,Is);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Wr.z,Wr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Wr.z,0,-Wr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Wr.y,Wr.x,0];return!$c(t,Ls,Ds,Is,il)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,Ls,Ds,Is,il))?!1:(rl.crossVectors(pr,mr),t=[rl.x,rl.y,rl.z],$c(t,Ls,Ds,Is,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wi=[new H,new H,new H,new H,new H,new H,new H,new H],gi=new H,nl=new dr,Ls=new H,Ds=new H,Is=new H,pr=new H,mr=new H,Wr=new H,Fo=new H,il=new H,rl=new H,Xr=new H;function $c(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xr.fromArray(s,r);const a=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ry=new dr,Bo=new H,jc=new H;class Vi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ry.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(jc)),this.expandByPoint(Bo.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xi=new H,Zc=new H,sl=new H,_r=new H,Jc=new H,ol=new H,Qc=new H;class Sc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zc.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Zc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sl),a=_r.dot(this.direction),l=-_r.dot(sl),c=_r.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Zc).addScaledVector(sl,f),d}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,r){Jc.subVectors(t,e),ol.subVectors(n,e),Qc.crossVectors(Jc,ol);let o=this.direction.dot(Qc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(ol.crossVectors(_r,ol));if(l<0)return null;const c=a*this.direction.dot(Jc.cross(_r));if(c<0||l+c>o)return null;const u=-a*_r.dot(Qc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sy,e,oy)}lookAt(e,t,n){const i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),gr.crossVectors(n,Gn),gr.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),gr.crossVectors(n,Gn)),gr.normalize(),al.crossVectors(Gn,gr),i[0]=gr.x,i[4]=al.x,i[8]=Gn.x,i[1]=gr.y,i[5]=al.y,i[9]=Gn.y,i[2]=gr.z,i[6]=al.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],M=n[7],x=n[11],b=n[15],A=i[0],E=i[4],R=i[8],v=i[12],y=i[1],C=i[5],N=i[9],O=i[13],F=i[2],W=i[6],z=i[10],X=i[14],G=i[3],ee=i[7],L=i[11],ae=i[15];return r[0]=o*A+a*y+l*F+c*G,r[4]=o*E+a*C+l*W+c*ee,r[8]=o*R+a*N+l*z+c*L,r[12]=o*v+a*O+l*X+c*ae,r[1]=u*A+h*y+f*F+d*G,r[5]=u*E+h*C+f*W+d*ee,r[9]=u*R+h*N+f*z+d*L,r[13]=u*v+h*O+f*X+d*ae,r[2]=g*A+_*y+m*F+p*G,r[6]=g*E+_*C+m*W+p*ee,r[10]=g*R+_*N+m*z+p*L,r[14]=g*v+_*O+m*X+p*ae,r[3]=S*A+M*y+x*F+b*G,r[7]=S*E+M*C+x*W+b*ee,r[11]=S*R+M*N+x*z+b*L,r[15]=S*v+M*O+x*X+b*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,M=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,x=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,b=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,A=t*S+n*M+i*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=S*E,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*E,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*E,e[4]=M*E,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*E,e[8]=x*E,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*E,e[12]=b*E,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,S=l*c,M=l*u,x=l*h,b=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+x)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+M)*E,i[9]=(m-S)*E,i[10]=(1-(f+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ns.set(i[0],i[1],i[2]).length();const o=Ns.set(i[4],i[5],i[6]).length(),a=Ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],xi.copy(this);const c=1/r,u=1/o,h=1/a;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,t.setFromRotationMatrix(xi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Oi,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Oi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===dc)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Oi,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Oi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===dc)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new H,xi=new tt,sy=new H(0,0,0),oy=new H(1,1,1),gr=new H,al=new H,Gn=new H,ep=new tt,tp=new kr;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const np=new H,Us=new kr,Yi=new tt,ll=new H,ko=new H,ly=new H,cy=new kr,ip=new H(1,0,0),rp=new H(0,1,0),sp=new H(0,0,1),op={type:"added"},uy={type:"removed"},Os={type:"childadded",child:null},eu={type:"childremoved",child:null};class Ft extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new H,t=new Hi,n=new kr,i=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ze}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(sp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(ko,ll,this.up):Yi.lookAt(ll,ko,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(Yi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uy),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,e,ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ft.DEFAULT_UP=new H(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new H,qi=new H,tu=new H,Ki=new H,Fs=new H,Bs=new H,ap=new H,nu=new H,iu=new H,ru=new H,su=new gt,ou=new gt,au=new gt;class Si{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vi.subVectors(e,t),i.cross(vi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vi.subVectors(i,t),qi.subVectors(n,t),tu.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(qi),l=vi.dot(tu),c=qi.dot(qi),u=qi.dot(tu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return su.setScalar(0),ou.setScalar(0),au.setScalar(0),su.fromBufferAttribute(e,t),ou.fromBufferAttribute(e,n),au.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(su,r.x),o.addScaledVector(ou,r.y),o.addScaledVector(au,r.z),o}static isFrontFacing(e,t,n,i){return vi.subVectors(n,t),qi.subVectors(e,t),vi.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Fs.subVectors(i,n),Bs.subVectors(r,n),nu.subVectors(e,n);const l=Fs.dot(nu),c=Bs.dot(nu);if(l<=0&&c<=0)return t.copy(n);iu.subVectors(e,i);const u=Fs.dot(iu),h=Bs.dot(iu);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fs,o);ru.subVectors(e,r);const d=Fs.dot(ru),g=Bs.dot(ru);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Bs,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ap.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(ap,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function lu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Nf(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=lu(o,r,e+1/3),this.g=lu(o,r,e),this.b=lu(o,r,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=cg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return ut.workingToColorSpace(fn.copy(this),e),Math.round(ot(fn.r*255,0,255))*65536+Math.round(ot(fn.g*255,0,255))*256+Math.round(ot(fn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(fn.copy(this),t);const n=fn.r,i=fn.g,r=fn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=kt){ut.workingToColorSpace(fn.copy(this),e);const t=fn.r,n=fn.g,i=fn.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(cl);const n=ga(xr.h,cl.h,t),i=ga(xr.s,cl.s,t),r=ga(xr.l,cl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new qe;qe.NAMES=cg;let hy=0;class Bi extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=oo,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lh,this.blendDst=ch,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(n.blending=this.blending),this.side!==fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lh&&(n.blendSrc=this.blendSrc),this.blendDst!==ch&&(n.blendDst=this.blendDst),this.blendEquation!==ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class as extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nr=fy();function fy(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function dy(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ot(s,-65504,65504),nr.floatView[0]=s;const e=nr.uint32View[0],t=e>>23&511;return nr.baseTable[t]+((e&8388607)>>nr.shiftTable[t])}function py(s){const e=s>>10;return nr.uint32View[0]=nr.mantissaTable[nr.offsetTable[e]+(s&1023)]+nr.exponentTable[e],nr.floatView[0]}class ul{static toHalfFloat(e){return dy(e)}static fromHalfFloat(e){return py(e)}}const Xt=new H,hl=new ft;let my=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xh&&(e.usage=this.usage),e}}class ug extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hg extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cr extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _y=0;const si=new tt,cu=new Ft,ks=new H,Wn=new dr,zo=new dr,en=new H;class bi extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?hg:ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return cu.lookAt(e),cu.updateMatrix(),this.applyMatrix4(cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Wn.min,zo.min),Wn.expandByPoint(en),en.addVectors(Wn.max,zo.max),Wn.expandByPoint(en)):(Wn.expandByPoint(zo.min),Wn.expandByPoint(zo.max))}Wn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)en.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(en));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),en.add(ks)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new H,l[R]=new H;const c=new H,u=new H,h=new H,f=new ft,d=new ft,g=new ft,_=new H,m=new H;function p(R,v,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(_),a[v].add(_),a[y].add(_),l[R].add(m),l[v].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let R=0,v=S.length;R<v;++R){const y=S[R],C=y.start,N=y.count;for(let O=C,F=C+N;O<F;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new H,x=new H,b=new H,A=new H;function E(R){b.fromBufferAttribute(i,R),A.copy(b);const v=a[R];M.copy(v),M.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(A,v);const C=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,C)}for(let R=0,v=S.length;R<v;++R){const y=S[R],C=y.start,N=y.count;for(let O=C,F=C+N;O<F;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lp=new tt,Yr=new Sc,fl=new Vi,cp=new H,dl=new H,pl=new H,ml=new H,uu=new H,_l=new H,up=new H,gl=new H;class Jn extends Ft{constructor(e=new bi,t=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){_l.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(uu.fromBufferAttribute(h,e),o?_l.addScaledVector(uu,u):_l.addScaledVector(uu.sub(t),u))}t.add(_l)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(r),Yr.copy(e.ray).recast(e.near),!(fl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(fl,cp)===null||Yr.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(lp),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=M;x<b;x+=3){const A=a.getX(x),E=a.getX(x+1),R=a.getX(x+2);i=xl(this,p,e,n,c,u,h,A,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=xl(this,o,e,n,c,u,h,S,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,b=M;x<b;x+=3){const A=x,E=x+1,R=x+2;i=xl(this,p,e,n,c,u,h,A,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,M=m+1,x=m+2;i=xl(this,o,e,n,c,u,h,S,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function gy(s,e,t,n,i,r,o,a){let l;if(e.side===Bn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===fr,a),l===null)return null;gl.copy(a),gl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(gl);return c<t.near||c>t.far?null:{distance:c,point:gl.clone(),object:s}}function xl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,dl),s.getVertexPosition(l,pl),s.getVertexPosition(c,ml);const u=gy(s,e,t,n,dl,pl,ml,up);if(u){const h=new H;Si.getBarycoord(up,dl,pl,ml,h),i&&(u.uv=Si.getInterpolatedAttribute(i,a,l,c,h,new ft)),r&&(u.uv1=Si.getInterpolatedAttribute(r,a,l,c,h,new ft)),o&&(u.normal=Si.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Si.getNormal(dl,pl,ml,f.normal),u.face=f,u.barycoord=h}return u}class ka extends bi{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new cr(c,3)),this.setAttribute("normal",new cr(u,3)),this.setAttribute("uv",new cr(h,2));function g(_,m,p,S,M,x,b,A,E,R,v){const y=x/E,C=b/R,N=x/2,O=b/2,F=A/2,W=E+1,z=R+1;let X=0,G=0;const ee=new H;for(let L=0;L<z;L++){const ae=L*C-O;for(let ve=0;ve<W;ve++){const Ne=ve*y-N;ee[_]=Ne*S,ee[m]=ae*M,ee[p]=F,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(ve/E),h.push(1-L/R),X+=1}}for(let L=0;L<R;L++)for(let ae=0;ae<E;ae++){const ve=f+ae+W*L,Ne=f+ae+W*(L+1),De=f+(ae+1)+W*(L+1),K=f+(ae+1)+W*L;l.push(ve,Ne,K),l.push(Ne,De,K),G+=6}a.addGroup(d,G,v),d+=G,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const n=To(s[t]);for(const i in n)e[i]=n[i]}return e}function xy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const vy={clone:To,merge:Tn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dg extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new H,hp=new ft,fp=new ft;class An extends dg{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,hp,fp),t.subVectors(fp,hp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class Sy extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(zs,Hs,e,t);i.layers=this.layers,this.add(i);const r=new An(zs,Hs,e,t);r.layers=this.layers,this.add(r);const o=new An(zs,Hs,e,t);o.layers=this.layers,this.add(o);const a=new An(zs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new An(zs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new An(zs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pg extends sn{constructor(e=[],t=vo,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ty extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ka(5,5,5),r=new Fr({name:"CubemapFromEquirect",uniforms:To(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Dr});r.uniforms.tEquirect.value=t;const o=new Jn(i,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=rn),new Sy(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class ls extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ey={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ey)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class by extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xh,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new H;class Of{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Of(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const dp=new H,pp=new gt,mp=new gt,Ay=new H,_p=new tt,vl=new H,fu=new Vi,gp=new tt,du=new Sc;class Ry extends Jn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vl),this.boundingBox.expandByPoint(vl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,vl),this.boundingSphere.expandByPoint(vl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fu.copy(this.boundingSphere),fu.applyMatrix4(i),e.ray.intersectsSphere(fu)!==!1&&(gp.copy(i).invert(),du.copy(e.ray).applyMatrix4(gp),!(this.boundingBox!==null&&du.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,du)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new gt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;pp.fromBufferAttribute(i.attributes.skinIndex,e),mp.fromBufferAttribute(i.attributes.skinWeight,e),dp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=mp.getComponent(r);if(o!==0){const a=pp.getComponent(r);_p.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ay.copy(dp).applyMatrix4(_p),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mg extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ff extends sn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Pn,u=Pn,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xp=new tt,Cy=new tt;class Bf{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Cy;xp.multiplyMatrices(a,t[r]),xp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ff(t,e,e,mi,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mg),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Yh extends cn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vs=new tt,vp=new tt,yl=[],yp=new dr,Py=new tt,Ho=new Jn,Vo=new Vi;class Ly extends Jn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Py)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),yp.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(yp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Vo.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(n),e.ray.intersectsSphere(Vo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vs),vp.multiplyMatrices(n,Vs),Ho.matrixWorld=vp,Ho.raycast(e,yl);for(let o=0,a=yl.length;o<a;o++){const l=yl[o];l.instanceId=r,l.object=this,t.push(l)}yl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Yh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ff(new Float32Array(i*this.count),i,this.count,Pf,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pu=new H,Dy=new H,Iy=new Ze;class es{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pu.subVectors(n,t).cross(Dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iy.getNormalMatrix(e),i=this.coplanarPoint(pu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Vi,Ny=new ft(.5,.5),Ml=new H;class kf{constructor(e=new es,t=new es,n=new es,i=new es,r=new es,o=new es){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Oi,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],M=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,d-u,p-g,b-S).normalize(),i[1].setComponents(c+o,d+u,p+g,b+S).normalize(),i[2].setComponents(c+a,d+h,p+_,b+M).normalize(),i[3].setComponents(c-a,d-h,p-_,b-M).normalize(),n)i[4].setComponents(l,f,m,x).normalize(),i[5].setComponents(c-l,d-f,p-m,b-x).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-x).normalize(),t===Oi)i[5].setComponents(c+l,d+f,p+m,b+x).normalize();else if(t===dc)i[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const t=Ny.distanceTo(e.center);return qr.radius=.7071067811865476+t,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ml.x=i.normal.x>0?e.max.x:e.min.x,Ml.y=i.normal.y>0?e.max.y:e.min.y,Ml.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _g extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new H,mc=new H,Mp=new tt,Go=new Sc,Sl=new Vi,mu=new H,Sp=new H;class zf extends Ft{constructor(e=new bi,t=new _g){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)pc.fromBufferAttribute(t,i-1),mc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new cr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(i),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;Mp.copy(i).invert(),Go.copy(e.ray).applyMatrix4(Mp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),M=Tl(this,e,Go,l,p,S,_);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Tl(this,e,Go,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Tl(this,e,Go,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Tl(this,e,Go,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tl(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(pc.fromBufferAttribute(a,i),mc.fromBufferAttribute(a,r),t.distanceSqToSegment(pc,mc,mu,Sp)>n)return;mu.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(mu);if(!(c<e.near||c>e.far))return{distance:c,point:Sp.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Tp=new H,Ep=new H;class Uy extends zf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tp.fromBufferAttribute(t,i),Ep.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tp.distanceTo(Ep);e.setAttribute("lineDistance",new cr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oy extends zf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gg extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bp=new tt,qh=new Sc,El=new Vi,bl=new H;class Fy extends Ft{constructor(e=new bi,t=new gg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(i),El.radius+=r,e.ray.intersectsSphere(El)===!1)return;bp.copy(i).invert(),qh.copy(e.ray).applyMatrix4(bp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);bl.fromBufferAttribute(h,m),wp(bl,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)bl.fromBufferAttribute(h,g),wp(bl,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wp(s,e,t,n,i,r,o){const a=qh.distanceSqToPoint(s);if(a<t){const l=new H;qh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xg extends sn{constructor(e,t,n=Ss,i,r,o,a=Pn,l=Pn,c,u=Da,h=1){if(u!==Da&&u!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Tc extends bi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let M=0;M<c;M++){const x=M*h-r;g.push(x,-S,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const M=S+c*p,x=S+c*(p+1),b=S+1+c*(p+1),A=S+1+c*p;d.push(M,x,A),d.push(x,b,A)}this.setIndex(d),this.setAttribute("position",new cr(g,3)),this.setAttribute("normal",new cr(_,3)),this.setAttribute("uv",new cr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hf extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gi extends Hf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class By extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ky extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function wl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function zy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hy(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ap(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function vg(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class za{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vy extends za{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xd:r=e,a=2*t-n;break;case Yd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xd:o=e,l=2*n-t;break;case Yd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let b=0;b!==a;++b)r[b]=p*o[u+b]+S*o[c+b]+M*o[l+b]+x*o[h+b];return r}}class Gy extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Wy extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wl(t,this.TimeBufferType),this.values=wl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wl(e.times,Array),values:wl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Ua:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Ua;case this.InterpolantFactoryMethodSmooth:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&zy(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Ua;class Ro extends wi{constructor(e,t,n){super(e,t,n)}}Ro.prototype.ValueTypeName="bool";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Na;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class yg extends wi{constructor(e,t,n,i){super(e,t,n,i)}}yg.prototype.ValueTypeName="color";class Eo extends wi{constructor(e,t,n,i){super(e,t,n,i)}}Eo.prototype.ValueTypeName="number";class Xy extends za{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)kr.slerpFlat(r,0,o,c-a,o,c,l);return r}}class bo extends wi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xy(this.times,this.values,this.getValueSize(),e)}}bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends wi{constructor(e,t,n){super(e,t,n)}}Co.prototype.ValueTypeName="string";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=Na;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends wi{constructor(e,t,n,i){super(e,t,n,i)}}wo.prototype.ValueTypeName="vector";class Yy{constructor(e="",t=-1,n=[],i=Mv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ky(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(wi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Hy(l);l=Ap(l,1,u),c=Ap(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Eo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];vg(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const M=f[g];m.push(M.time),p.push(M.morphTarget===_?1:0)}i.push(new Eo(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(wo,d+".position",f,"pos",i),n(bo,d+".quaternion",f,"rot",i),n(wo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Eo;case"vector":case"vector2":case"vector3":case"vector4":return wo;case"color":return yg;case"quaternion":return bo;case"bool":case"boolean":return Ro;case"string":return Co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ky(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qy(s.type);if(s.times===void 0){const t=[],n=[];vg(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const or={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class $y{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const jy=new $y;class zr{constructor(e){this.manager=e!==void 0?e:jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zr.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class Zy extends Error{constructor(e,t){super(e),this.response=t}}class Fa extends zr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=or.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:i});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$i[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:x})=>{if(M)p.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,E=u.length;A<E;A++){const R=u[A];R.onProgress&&R.onProgress(b)}p.enqueue(x),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Zy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{or.add(`file:${e}`,c);const u=$i[e];delete $i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=$i[e];if(u===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gs=new WeakMap;class Jy extends zr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=or.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Gs.get(o);h===void 0&&(h=[],Gs.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Oa("img");function l(){u(),t&&t(this);const h=Gs.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Gs.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),or.remove(`image:${e}`);const f=Gs.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}Gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),or.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Qy extends zr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Ff,a=new Fa(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ni,o.wrapT=c.wrapT!==void 0?c.wrapT:Ni,o.magFilter=c.magFilter!==void 0?c.magFilter:rn,o.minFilter=c.minFilter!==void 0?c.minFilter:rn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ui),c.mipmapCount===1&&(o.minFilter=rn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Mg extends zr{constructor(e){super(e)}load(e,t,n,i){const r=new sn,o=new Jy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vf extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const _u=new tt,Rp=new H,Cp=new H;class Gf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kf,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rp),Cp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cp),t.updateMatrixWorld(),_u.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eM extends Gf{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=So*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tM extends Vf{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pp=new tt,Wo=new H,gu=new H;class nM extends Gf{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ft(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wo),gu.copy(n.position),gu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gu),n.updateMatrixWorld(),i.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Pp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp,n.coordinateSystem,n.reversedDepth)}}class iM extends Vf{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Wf extends dg{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class rM extends Gf{constructor(){super(new Wf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sM extends Vf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new rM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xu=new WeakMap;class oM extends zr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=or.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(xu.has(o)===!0)i&&i(xu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return or.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),xu.set(l,c),or.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});or.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class aM extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xf="\\[\\]\\.:\\/",lM=new RegExp("["+Xf+"]","g"),Yf="[^"+Xf+"]",cM="[^"+Xf.replace("\\.","")+"]",uM=/((?:WC+[\/:])*)/.source.replace("WC",Yf),hM=/(WCOD+)?/.source.replace("WCOD",cM),fM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yf),dM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yf),pM=new RegExp("^"+uM+hM+fM+dM+"$"),mM=["material","materials","bones","map"];class _M{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lM,"")}static parseTrackName(e){const t=pM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=_M;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Lp(s,e,t,n){const i=gM(n);switch(t){case Q_:return s*e;case Pf:return s*e/i.components*i.byteLength;case Lf:return s*e/i.components*i.byteLength;case tg:return s*e*2/i.components*i.byteLength;case Df:return s*e*2/i.components*i.byteLength;case eg:return s*e*3/i.components*i.byteLength;case mi:return s*e*4/i.components*i.byteLength;case If:return s*e*4/i.components*i.byteLength;case Vl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:case Mh:return Math.max(s,16)*Math.max(e,8)/4;case xh:case yh:return Math.max(s,8)*Math.max(e,8)/2;case Sh:case Th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Oh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yl:case kh:case zh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ng:case Hh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vh:case Gh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gM(s){switch(s){case zi:case j_:return{byteLength:1,components:1};case Pa:case Z_:case sr:return{byteLength:2,components:1};case Rf:case Cf:return{byteLength:2,components:4};case Ss:case Af:case In:return{byteLength:4,components:1};case J_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sg(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function xM(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,DM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,IM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,VM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_S=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ES=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,US=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$S=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:vM,alphahash_pars_fragment:yM,alphamap_fragment:MM,alphamap_pars_fragment:SM,alphatest_fragment:TM,alphatest_pars_fragment:EM,aomap_fragment:bM,aomap_pars_fragment:wM,batching_pars_vertex:AM,batching_vertex:RM,begin_vertex:CM,beginnormal_vertex:PM,bsdfs:LM,iridescence_fragment:DM,bumpmap_pars_fragment:IM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:FM,color_fragment:BM,color_pars_fragment:kM,color_pars_vertex:zM,color_vertex:HM,common:VM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:YM,emissivemap_fragment:qM,emissivemap_pars_fragment:KM,colorspace_fragment:$M,colorspace_pars_fragment:jM,envmap_fragment:ZM,envmap_common_pars_fragment:JM,envmap_pars_fragment:QM,envmap_pars_vertex:eS,envmap_physical_pars_fragment:hS,envmap_vertex:tS,fog_vertex:nS,fog_pars_vertex:iS,fog_fragment:rS,fog_pars_fragment:sS,gradientmap_pars_fragment:oS,lightmap_pars_fragment:aS,lights_lambert_fragment:lS,lights_lambert_pars_fragment:cS,lights_pars_begin:uS,lights_toon_fragment:fS,lights_toon_pars_fragment:dS,lights_phong_fragment:pS,lights_phong_pars_fragment:mS,lights_physical_fragment:_S,lights_physical_pars_fragment:gS,lights_fragment_begin:xS,lights_fragment_maps:vS,lights_fragment_end:yS,logdepthbuf_fragment:MS,logdepthbuf_pars_fragment:SS,logdepthbuf_pars_vertex:TS,logdepthbuf_vertex:ES,map_fragment:bS,map_pars_fragment:wS,map_particle_fragment:AS,map_particle_pars_fragment:RS,metalnessmap_fragment:CS,metalnessmap_pars_fragment:PS,morphinstance_vertex:LS,morphcolor_vertex:DS,morphnormal_vertex:IS,morphtarget_pars_vertex:NS,morphtarget_vertex:US,normal_fragment_begin:OS,normal_fragment_maps:FS,normal_pars_fragment:BS,normal_pars_vertex:kS,normal_vertex:zS,normalmap_pars_fragment:HS,clearcoat_normal_fragment_begin:VS,clearcoat_normal_fragment_maps:GS,clearcoat_pars_fragment:WS,iridescence_pars_fragment:XS,opaque_fragment:YS,packing:qS,premultiplied_alpha_fragment:KS,project_vertex:$S,dithering_fragment:jS,dithering_pars_fragment:ZS,roughnessmap_fragment:JS,roughnessmap_pars_fragment:QS,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:tT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:rT,skinning_pars_vertex:sT,skinning_vertex:oT,skinnormal_vertex:aT,specularmap_fragment:lT,specularmap_pars_fragment:cT,tonemapping_fragment:uT,tonemapping_pars_fragment:hT,transmission_fragment:fT,transmission_pars_fragment:dT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:_T,worldpos_vertex:gT,background_vert:xT,background_frag:vT,backgroundCube_vert:yT,backgroundCube_frag:MT,cube_vert:ST,cube_frag:TT,depth_vert:ET,depth_frag:bT,distanceRGBA_vert:wT,distanceRGBA_frag:AT,equirect_vert:RT,equirect_frag:CT,linedashed_vert:PT,linedashed_frag:LT,meshbasic_vert:DT,meshbasic_frag:IT,meshlambert_vert:NT,meshlambert_frag:UT,meshmatcap_vert:OT,meshmatcap_frag:FT,meshnormal_vert:BT,meshnormal_frag:kT,meshphong_vert:zT,meshphong_frag:HT,meshphysical_vert:VT,meshphysical_frag:GT,meshtoon_vert:WT,meshtoon_frag:XT,points_vert:YT,points_frag:qT,shadow_vert:KT,shadow_frag:$T,sprite_vert:jT,sprite_frag:ZT},me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ci={basic:{uniforms:Tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Tn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Tn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Tn([me.points,me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Tn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Tn([me.common,me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Tn([me.sprite,me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Tn([me.common,me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Tn([me.lights,me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ci.physical={uniforms:Tn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Al={r:0,b:0,g:0},Kr=new Hi,JT=new tt;function QT(s,e,t,n,i,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function _(M){let x=!1;const b=g(M);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===Mc)?(u===void 0&&(u=new Jn(new ka(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:To(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Kr.copy(x.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JT.makeRotationFromEuler(Kr)),u.material.toneMapped=ut.getTransfer(b.colorSpace)!==St,(h!==b||f!==b.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Jn(new Tc(2,2),new Fr({name:"BackgroundMaterial",uniforms:To(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ut.getTransfer(b.colorSpace)!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Al,fg(s)),n.buffers.color.setClear(Al.r,Al.g,Al.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:S}}function eE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,C,N,O,F){let W=!1;const z=h(O,N,C);r!==z&&(r=z,c(r.object)),W=d(y,O,N,F),W&&g(y,O,N,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(y,C,N,O),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,C,N){const O=N.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let W=F[C.id];W===void 0&&(W={},F[C.id]=W);let z=W[O];return z===void 0&&(z=f(l()),W[O]=z),z}function f(y){const C=[],N=[],O=[];for(let F=0;F<t;F++)C[F]=0,N[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,C,N,O){const F=r.attributes,W=C.attributes;let z=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){const L=F[G];let ae=W[G];if(ae===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),L===void 0||L.attribute!==ae||ae&&L.data!==ae.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function g(y,C,N,O){const F={},W=C.attributes;let z=0;const X=N.getAttributes();for(const G in X)if(X[G].location>=0){let L=W[G];L===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(L=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(L=y.instanceColor));const ae={};ae.attribute=L,L&&L.data&&(ae.data=L.data),F[G]=ae,z++}r.attributes=F,r.attributesNum=z,r.index=O}function _(){const y=r.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const N=r.newAttributes,O=r.enabledAttributes,F=r.attributeDivisors;N[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),F[y]!==C&&(s.vertexAttribDivisor(y,C),F[y]=C)}function S(){const y=r.newAttributes,C=r.enabledAttributes;for(let N=0,O=C.length;N<O;N++)C[N]!==y[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function M(y,C,N,O,F,W,z){z===!0?s.vertexAttribIPointer(y,C,N,F,W):s.vertexAttribPointer(y,C,N,O,F,W)}function x(y,C,N,O){_();const F=O.attributes,W=N.getAttributes(),z=C.defaultAttributeValues;for(const X in W){const G=W[X];if(G.location>=0){let ee=F[X];if(ee===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){const L=ee.normalized,ae=ee.itemSize,ve=e.get(ee);if(ve===void 0)continue;const Ne=ve.buffer,De=ve.type,K=ve.bytesPerElement,se=De===s.INT||De===s.UNSIGNED_INT||ee.gpuType===Af;if(ee.isInterleavedBufferAttribute){const te=ee.data,Se=te.stride,ye=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,te.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Ee=0;Ee<G.locationSize;Ee++)M(G.location+Ee,ae/G.locationSize,De,L,Se*K,(ye+ae/G.locationSize*Ee)*K,se)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<G.locationSize;te++)p(G.location+te,ee.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<G.locationSize;te++)m(G.location+te);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let te=0;te<G.locationSize;te++)M(G.location+te,ae/G.locationSize,De,L,ae*K,ae/G.locationSize*te*K,se)}}else if(z!==void 0){const L=z[X];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(G.location,L);break;case 3:s.vertexAttrib3fv(G.location,L);break;case 4:s.vertexAttrib4fv(G.location,L);break;default:s.vertexAttrib1fv(G.location,L)}}}}S()}function b(){R();for(const y in n){const C=n[y];for(const N in C){const O=C[N];for(const F in O)u(O[F].object),delete O[F];delete C[N]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const N in C){const O=C[N];for(const F in O)u(O[F].object),delete O[F];delete C[N]}delete n[y.id]}function E(y){for(const C in n){const N=n[C];if(N[y.id]===void 0)continue;const O=N[y.id];for(const F in O)u(O[F].object),delete O[F];delete N[y.id]}}function R(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function tE(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nE(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==mi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==zi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==In&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function iE(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new es,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,M=S*4;let x=p.clippingState||null;l.value=x,x=u(g,f,M,d);for(let b=0;b!==M;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=d;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function rE(s){let e=new WeakMap;function t(o,a){return a===uc?o.mapping=vo:a===gh&&(o.mapping=yo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===gh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ty(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Js=4,Dp=[.125,.215,.35,.446,.526,.582],is=20,vu=new Wf,Ip=new qe;let yu=null,Mu=0,Su=0,Tu=!1;const ts=(1+Math.sqrt(5))/2,Ws=1/ts,Np=[new H(-ts,Ws,0),new H(ts,Ws,0),new H(-Ws,0,ts),new H(Ws,0,ts),new H(0,ts,-Ws),new H(0,ts,Ws),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],sE=new H;class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=sE}=r;yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Mu,Su),this._renderer.xr.enabled=Tu,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Su=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:sr,format:mi,colorSpace:un,depthBuffer:!1},i=Op(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oE(r)),this._blurMaterial=aE(r,e,t)}return i}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,vu)}_sceneToCubeUV(e,t,n,i,r){const l=new An(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ip),h.toneMapping=Ir,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new as({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),m=new Jn(new ka,_);let p=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,p=!0):(_.color.copy(Ip),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const b=this._cubeSize;Rl(i,x*b,M>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vo||e.mapping===yo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Jn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Np[(i-r-1)%Np.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Jn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*is-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const p=[];let S=0;for(let E=0;E<is;++E){const R=E/_,v=Math.exp(-R*R/2);p.push(v),E===0?S+=v:E<m&&(S+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[i],b=3*x*(i>M-Js?i-M+Js:0),A=4*(this._cubeSize-x);Rl(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(h,vu)}}function oE(s){const e=[],t=[],n=[];let i=s;const r=s-Js+1+Dp.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Js?l=Dp[o-s+Js-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),M=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,R=A>2?0:-1,v=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];S.set(v,_*g*A),M.set(f,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const b=new bi;b.setAttribute("position",new cn(S,_)),b.setAttribute("uv",new cn(M,m)),b.setAttribute("faceIndex",new cn(x,p)),e.push(b),i>Js&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Op(s,e,t){const n=new Ts(s,e,t);return n.texture.mapping=Mc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function aE(s,e,t){const n=new Float32Array(is),i=new H(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Fp(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Bp(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lE(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===uc||l===gh,u=l===vo||l===yo;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Up(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new Up(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cE(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uE(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let M=0,x=S.length;M<x;M+=3){const b=S[M+0],A=S[M+1],E=S[M+2];f.push(b,A,A,E,E,b)}}else if(g!==void 0){const S=g.array;_=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const b=M+0,A=M+1,E=M+2;f.push(b,A,A,E,E,b)}}else return;const m=new(og(f)?hg:ug)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function hE(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dE(s,e,t){const n=new WeakMap,i=new gt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*A*4*h),R=new ag(E,b,A,h);R.type=In,R.needsUpdate=!0;const v=x*4;for(let C=0;C<h;C++){const N=p[C],O=S[C],F=M[C],W=b*A*4*C;for(let z=0;z<N.count;z++){const X=z*v;g===!0&&(i.fromBufferAttribute(N,z),E[W+X+0]=i.x,E[W+X+1]=i.y,E[W+X+2]=i.z,E[W+X+3]=0),_===!0&&(i.fromBufferAttribute(O,z),E[W+X+4]=i.x,E[W+X+5]=i.y,E[W+X+6]=i.z,E[W+X+7]=0),m===!0&&(i.fromBufferAttribute(F,z),E[W+X+8]=i.x,E[W+X+9]=i.y,E[W+X+10]=i.z,E[W+X+11]=F.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new ft(b,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function pE(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Tg=new sn,kp=new xg(1,1),Eg=new ag,bg=new iy,wg=new pg,zp=[],Hp=[],Vp=new Float32Array(16),Gp=new Float32Array(9),Wp=new Float32Array(4);function Po(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zp[i];if(r===void 0&&(r=new Float32Array(i),zp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ec(s,e){let t=Hp[e];t===void 0&&(t=new Int32Array(e),Hp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function xE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function vE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Wp.set(n),s.uniformMatrix2fv(this.addr,!1,Wp),Qt(t,n)}}function yE(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Gp.set(n),s.uniformMatrix3fv(this.addr,!1,Gp),Qt(t,n)}}function ME(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Jt(t,n))return;Vp.set(n),s.uniformMatrix4fv(this.addr,!1,Vp),Qt(t,n)}}function SE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function TE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function bE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function wE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function PE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kp.compareFunction=sg,r=kp):r=Tg,t.setTexture2D(e||r,i)}function LE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bg,i)}function DE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wg,i)}function IE(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Eg,i)}function NE(s){switch(s){case 5126:return mE;case 35664:return _E;case 35665:return gE;case 35666:return xE;case 35674:return vE;case 35675:return yE;case 35676:return ME;case 5124:case 35670:return SE;case 35667:case 35671:return TE;case 35668:case 35672:return EE;case 35669:case 35673:return bE;case 5125:return wE;case 36294:return AE;case 36295:return RE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return DE;case 36289:case 36303:case 36311:case 36292:return IE}}function UE(s,e){s.uniform1fv(this.addr,e)}function OE(s,e){const t=Po(e,this.size,2);s.uniform2fv(this.addr,t)}function FE(s,e){const t=Po(e,this.size,3);s.uniform3fv(this.addr,t)}function BE(s,e){const t=Po(e,this.size,4);s.uniform4fv(this.addr,t)}function kE(s,e){const t=Po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zE(s,e){const t=Po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HE(s,e){const t=Po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function VE(s,e){s.uniform1iv(this.addr,e)}function GE(s,e){s.uniform2iv(this.addr,e)}function WE(s,e){s.uniform3iv(this.addr,e)}function XE(s,e){s.uniform4iv(this.addr,e)}function YE(s,e){s.uniform1uiv(this.addr,e)}function qE(s,e){s.uniform2uiv(this.addr,e)}function KE(s,e){s.uniform3uiv(this.addr,e)}function $E(s,e){s.uniform4uiv(this.addr,e)}function jE(s,e,t){const n=this.cache,i=e.length,r=Ec(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Tg,r[o])}function ZE(s,e,t){const n=this.cache,i=e.length,r=Ec(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bg,r[o])}function JE(s,e,t){const n=this.cache,i=e.length,r=Ec(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wg,r[o])}function QE(s,e,t){const n=this.cache,i=e.length,r=Ec(t,i);Jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Eg,r[o])}function eb(s){switch(s){case 5126:return UE;case 35664:return OE;case 35665:return FE;case 35666:return BE;case 35674:return kE;case 35675:return zE;case 35676:return HE;case 5124:case 35670:return VE;case 35667:case 35671:return GE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return YE;case 36294:return qE;case 36295:return KE;case 36296:return $E;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}class tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=NE(t.type)}}class nb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eb(t.type)}}class ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function Xp(s,e){s.seq.push(e),s.map[e.id]=e}function rb(s,e,t){const n=s.name,i=n.length;for(Eu.lastIndex=0;;){const r=Eu.exec(n),o=Eu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xp(t,c===void 0?new tb(a,s,e):new nb(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new ib(a),Xp(t,h)),t=h}}}class ql{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);rb(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Yp(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const sb=37297;let ob=0;function ab(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qp=new Ze;function lb(s){ut._getMatrix(qp,ut.workingColorSpace,s);const e=`mat3( ${qp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(s)){case fc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Kp(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ab(s.getShaderSource(e),a)}else return r}function cb(s,e){const t=lb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ub(s,e){let t;switch(e){case pv:t="Linear";break;case mv:t="Reinhard";break;case _v:t="Cineon";break;case q_:t="ACESFilmic";break;case xv:t="AgX";break;case vv:t="Neutral";break;case gv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new H;function hb(){ut.getLuminanceCoefficients(Cl);const s=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function db(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function na(s){return s!==""}function $p(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(s){return s.replace(mb,gb)}const _b=new Map;function gb(s,e){let t=et[e];if(t===void 0){const n=_b.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zp(s){return s.replace(xb,vb)}function vb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===X_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Mb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vo:case yo:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function Tb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Y_:e="ENVMAP_BLENDING_MULTIPLY";break;case fv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function Eb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bb(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yb(t),c=Mb(t),u=Sb(t),h=Tb(t),f=Eb(t),d=fb(t),g=db(r),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),p.length>0&&(p+=`
`)):(m=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),p=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?et.tonemapping_pars_fragment:"",t.toneMapping!==Ir?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,cb("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),o=Kh(o),o=$p(o,t),o=jp(o,t),a=Kh(a),a=$p(a,t),a=jp(a,t),o=Zp(o),a=Zp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,x=S+p+a,b=Yp(i,i.VERTEX_SHADER,M),A=Yp(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(C){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(b)||"",F=i.getShaderInfoLog(A)||"",W=N.trim(),z=O.trim(),X=F.trim();let G=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,A);else{const L=Kp(i,b,"vertex"),ae=Kp(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+L+`
`+ae)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||X==="")&&(ee=!1);ee&&(C.diagnostics={runnable:G,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(b),i.deleteShader(A),R=new ql(i,_),v=pb(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,sb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let wb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rb(e),t.set(e,n)),n}}class Rb{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Cb(s,e,t,n,i,r,o){const a=new lg,l=new Ab,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,C,N,O){const F=N.fog,W=O.geometry,z=v.isMeshStandardMaterial?N.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),G=X&&X.mapping===Mc?X.image.height:null,ee=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const L=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=L!==void 0?L.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let Ne,De,K,se;if(ee){const _e=Ci[ee];Ne=_e.vertexShader,De=_e.fragmentShader}else Ne=v.vertexShader,De=v.fragmentShader,l.update(v),K=l.getVertexShaderID(v),se=l.getFragmentShaderID(v);const te=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),ye=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,at=!!v.map,Ve=!!v.matcap,D=!!X,Ge=!!v.aoMap,be=!!v.lightMap,Ye=!!v.bumpMap,k=!!v.normalMap,it=!!v.displacementMap,ge=!!v.emissiveMap,We=!!v.metalnessMap,$e=!!v.roughnessMap,mt=v.anisotropy>0,P=v.clearcoat>0,T=v.dispersion>0,V=v.iridescence>0,j=v.sheen>0,Z=v.transmission>0,$=mt&&!!v.anisotropyMap,xe=P&&!!v.clearcoatMap,oe=P&&!!v.clearcoatNormalMap,Re=P&&!!v.clearcoatRoughnessMap,fe=V&&!!v.iridescenceMap,re=V&&!!v.iridescenceThicknessMap,he=j&&!!v.sheenColorMap,Oe=j&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,ue=!!v.specularColorMap,He=!!v.specularIntensityMap,I=Z&&!!v.transmissionMap,ie=Z&&!!v.thicknessMap,le=!!v.gradientMap,pe=!!v.alphaMap,ne=v.alphaTest>0,J=!!v.alphaHash,Te=!!v.extensions;let Be=Ir;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Be=s.toneMapping);const dt={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:De,defines:v.defines,customVertexShaderID:K,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:ye,instancingColor:ye&&O.instanceColor!==null,instancingMorph:ye&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?s.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:un,alphaToCoverage:!!v.alphaToCoverage,map:at,matcap:Ve,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:G,aoMap:Ge,lightMap:be,bumpMap:Ye,normalMap:k,displacementMap:f&&it,emissiveMap:ge,normalMapObjectSpace:k&&v.normalMapType===bv,normalMapTangentSpace:k&&v.normalMapType===rg,metalnessMap:We,roughnessMap:$e,anisotropy:mt,anisotropyMap:$,clearcoat:P,clearcoatMap:xe,clearcoatNormalMap:oe,clearcoatRoughnessMap:Re,dispersion:T,iridescence:V,iridescenceMap:fe,iridescenceThicknessMap:re,sheen:j,sheenColorMap:he,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:ue,specularIntensityMap:He,transmission:Z,transmissionMap:I,thicknessMap:ie,gradientMap:le,opaque:v.transparent===!1&&v.blending===oo&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:J,combine:v.combine,mapUv:at&&_(v.map.channel),aoMapUv:Ge&&_(v.aoMap.channel),lightMapUv:be&&_(v.lightMap.channel),bumpMapUv:Ye&&_(v.bumpMap.channel),normalMapUv:k&&_(v.normalMap.channel),displacementMapUv:it&&_(v.displacementMap.channel),emissiveMapUv:ge&&_(v.emissiveMap.channel),metalnessMapUv:We&&_(v.metalnessMap.channel),roughnessMapUv:$e&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(v.sheenRoughnessMap.channel),specularMapUv:Ce&&_(v.specularMap.channel),specularColorMapUv:ue&&_(v.specularColorMap.channel),specularIntensityMapUv:He&&_(v.specularIntensityMap.channel),transmissionMapUv:I&&_(v.transmissionMap.channel),thicknessMapUv:ie&&_(v.thicknessMap.channel),alphaMapUv:pe&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(k||mt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(at||pe),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Be,decodeVideoTexture:at&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:ge&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Li,flipSided:v.side===Bn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Te&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&v.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)y.push(C),y.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(S(y,v),M(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function M(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const y=g[v.type];let C;if(y){const N=Ci[y];C=vy.clone(N.uniforms)}else C=v.uniforms;return C}function b(v,y){let C;for(let N=0,O=u.length;N<O;N++){const F=u[N];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new bb(s,y,v,r),u.push(C)),C}function A(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function E(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:u,dispose:R}}function Pb(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function em(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Lb),n.length>1&&n.sort(f||Qp),i.length>1&&i.sort(f||Qp)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function Db(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new em,s.set(n,[o])):i>=r.length?(o=new em,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ib(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new qe};break;case"SpotLight":t={position:new H,direction:new H,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function Nb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ub=0;function Ob(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Fb(s){const e=new Ib,t=Nb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,r=new tt,o=new tt;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,M=0,x=0,b=0,A=0,E=0;c.sort(Ob);for(let v=0,y=c.length;v<y;v++){const C=c[v],N=C.color,O=C.intensity,F=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=N.r*O,h+=N.g*O,f+=N.b*O;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],O);E++}else if(C.isDirectionalLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=C.shadow.matrix,S++}n.directional[d]=z,d++}else if(C.isSpotLight){const z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(N).multiplyScalar(O),z.distance=F,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;const X=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,X.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,C.castShadow){const G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=W,x++}_++}else if(C.isRectAreaLight){const z=e.get(C);z.color.copy(N).multiplyScalar(O),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=z,m++}else if(C.isPointLight){const z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const X=C.shadow,G=t.get(C);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=z,g++}else if(C.isHemisphereLight){const z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(O),z.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=E,n.version=Ub++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function tm(s){const e=new Fb(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Bb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new tm(s),e.set(i,[a])):r>=o.length?(a=new tm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hb(s,e,t){let n=new kf;const i=new ft,r=new ft,o=new gt,a=new By({depthPacking:Ev}),l=new ky,c={},u=t.maxTextureSize,h={[fr]:Bn,[Bn]:fr,[Li]:Li},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:kb,fragmentShader:zb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bi;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X_;let p=this.type;this.render=function(A,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Dr),N.buffers.depth.getReversed()?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=p!==ji&&this.type===ji,F=p===ji&&this.type!==ji;for(let W=0,z=A.length;W<z;W++){const X=A[W],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ee=G.getFrameExtents();if(i.multiply(ee),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ee.x),i.x=r.x*ee.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ee.y),i.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||O===!0||F===!0){const ae=this.type!==ji?{minFilter:Pn,magFilter:Pn}:{};G.map!==null&&G.map.dispose(),G.map=new Ts(i.x,i.y,ae),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const L=G.getViewportCount();for(let ae=0;ae<L;ae++){const ve=G.getViewport(ae);o.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),N.viewport(o),G.updateMatrices(X,ae),n=G.getFrustum(),x(E,R,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===ji&&S(G,R),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,y,C)};function S(A,E){const R=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ts(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(E,null,R,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(E,null,R,d,_,null)}function M(A,E,R,v){let y=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const N=y.uuid,O=E.uuid;let F=c[N];F===void 0&&(F={},c[N]=F);let W=F[O];W===void 0&&(W=y.clone(),F[O]=W,E.addEventListener("dispose",b)),y=W}if(y.visible=E.visible,y.wireframe=E.wireframe,v===ji?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:h[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=s.properties.get(y);N.light=R}return y}function x(A,E,R,v,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ji)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=e.update(A),F=A.material;if(Array.isArray(F)){const W=O.groups;for(let z=0,X=W.length;z<X;z++){const G=W[z],ee=F[G.materialIndex];if(ee&&ee.visible){const L=M(A,ee,v,y);A.onBeforeShadow(s,A,E,R,O,L,G),s.renderBufferDirect(R,null,O,L,A,G),A.onAfterShadow(s,A,E,R,O,L,G)}}}else if(F.visible){const W=M(A,F,v,y);A.onBeforeShadow(s,A,E,R,O,W,null),s.renderBufferDirect(R,null,O,W,A,null),A.onAfterShadow(s,A,E,R,O,W,null)}}const N=A.children;for(let O=0,F=N.length;O<F;O++)x(N[O],E,R,v,y)}function b(A){A.target.removeEventListener("dispose",b);for(const R in c){const v=c[R],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const Vb={[uh]:hh,[fh]:mh,[dh]:_h,[xo]:ph,[hh]:uh,[mh]:fh,[_h]:dh,[ph]:xo};function Gb(s,e){function t(){let I=!1;const ie=new gt;let le=null;const pe=new gt(0,0,0,0);return{setMask:function(ne){le!==ne&&!I&&(s.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){I=ne},setClear:function(ne,J,Te,Be,dt){dt===!0&&(ne*=Be,J*=Be,Te*=Be),ie.set(ne,J,Te,Be),pe.equals(ie)===!1&&(s.clearColor(ne,J,Te,Be),pe.copy(ie))},reset:function(){I=!1,le=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,le=null,pe=null,ne=null;return{setReversed:function(J){if(ie!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Be=ne;ne=null,this.setClear(Be)}},getReversed:function(){return ie},setTest:function(J){J?te(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(J){le!==J&&!I&&(s.depthMask(J),le=J)},setFunc:function(J){if(ie&&(J=Vb[J]),pe!==J){switch(J){case uh:s.depthFunc(s.NEVER);break;case hh:s.depthFunc(s.ALWAYS);break;case fh:s.depthFunc(s.LESS);break;case xo:s.depthFunc(s.LEQUAL);break;case dh:s.depthFunc(s.EQUAL);break;case ph:s.depthFunc(s.GEQUAL);break;case mh:s.depthFunc(s.GREATER);break;case _h:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=J}},setLocked:function(J){I=J},setClear:function(J){ne!==J&&(ie&&(J=1-J),s.clearDepth(J),ne=J)},reset:function(){I=!1,le=null,pe=null,ne=null,ie=!1}}}function i(){let I=!1,ie=null,le=null,pe=null,ne=null,J=null,Te=null,Be=null,dt=null;return{setTest:function(_e){I||(_e?te(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(_e){ie!==_e&&!I&&(s.stencilMask(_e),ie=_e)},setFunc:function(_e,Pe,Ke){(le!==_e||pe!==Pe||ne!==Ke)&&(s.stencilFunc(_e,Pe,Ke),le=_e,pe=Pe,ne=Ke)},setOp:function(_e,Pe,Ke){(J!==_e||Te!==Pe||Be!==Ke)&&(s.stencilOp(_e,Pe,Ke),J=_e,Te=Pe,Be=Ke)},setLocked:function(_e){I=_e},setClear:function(_e){dt!==_e&&(s.clearStencil(_e),dt=_e)},reset:function(){I=!1,ie=null,le=null,pe=null,ne=null,J=null,Te=null,Be=null,dt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,b=null,A=null,E=new qe(0,0,0),R=0,v=!1,y=null,C=null,N=null,O=null,F=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,X=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=X>=1):G.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=X>=2);let ee=null,L={};const ae=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Ne=new gt().fromArray(ae),De=new gt().fromArray(ve);function K(I,ie,le,pe){const ne=new Uint8Array(4),J=s.createTexture();s.bindTexture(I,J),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<le;Te++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(ie+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return J}const se={};se[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(s.DEPTH_TEST),o.setFunc(xo),Ye(!1),k(kd),te(s.CULL_FACE),Ge(Dr);function te(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Se(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function ye(I,ie){return h[I]!==ie?(s.bindFramebuffer(I,ie),h[I]=ie,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ee(I,ie){let le=d,pe=!1;if(I){le=f.get(ie),le===void 0&&(le=[],f.set(ie,le));const ne=I.textures;if(le.length!==ne.length||le[0]!==s.COLOR_ATTACHMENT0){for(let J=0,Te=ne.length;J<Te;J++)le[J]=s.COLOR_ATTACHMENT0+J;le.length=ne.length,pe=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,pe=!0);pe&&s.drawBuffers(le)}function at(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Ve={[ns]:s.FUNC_ADD,[$x]:s.FUNC_SUBTRACT,[jx]:s.FUNC_REVERSE_SUBTRACT};Ve[Zx]=s.MIN,Ve[Jx]=s.MAX;const D={[Qx]:s.ZERO,[ev]:s.ONE,[tv]:s.SRC_COLOR,[lh]:s.SRC_ALPHA,[av]:s.SRC_ALPHA_SATURATE,[sv]:s.DST_COLOR,[iv]:s.DST_ALPHA,[nv]:s.ONE_MINUS_SRC_COLOR,[ch]:s.ONE_MINUS_SRC_ALPHA,[ov]:s.ONE_MINUS_DST_COLOR,[rv]:s.ONE_MINUS_DST_ALPHA,[lv]:s.CONSTANT_COLOR,[cv]:s.ONE_MINUS_CONSTANT_COLOR,[uv]:s.CONSTANT_ALPHA,[hv]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(I,ie,le,pe,ne,J,Te,Be,dt,_e){if(I===Dr){_===!0&&(Se(s.BLEND),_=!1);return}if(_===!1&&(te(s.BLEND),_=!0),I!==Kx){if(I!==m||_e!==v){if((p!==ns||x!==ns)&&(s.blendEquation(s.FUNC_ADD),p=ns,x=ns),_e)switch(I){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zd:s.blendFunc(s.ONE,s.ONE);break;case Hd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,M=null,b=null,A=null,E.set(0,0,0),R=0,m=I,v=_e}return}ne=ne||ie,J=J||le,Te=Te||pe,(ie!==p||ne!==x)&&(s.blendEquationSeparate(Ve[ie],Ve[ne]),p=ie,x=ne),(le!==S||pe!==M||J!==b||Te!==A)&&(s.blendFuncSeparate(D[le],D[pe],D[J],D[Te]),S=le,M=pe,b=J,A=Te),(Be.equals(E)===!1||dt!==R)&&(s.blendColor(Be.r,Be.g,Be.b,dt),E.copy(Be),R=dt),m=I,v=!1}function be(I,ie){I.side===Li?Se(s.CULL_FACE):te(s.CULL_FACE);let le=I.side===Bn;ie&&(le=!le),Ye(le),I.blending===oo&&I.transparent===!1?Ge(Dr):Ge(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const pe=I.stencilWrite;a.setTest(pe),pe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function k(I){I!==Xx?(te(s.CULL_FACE),I!==C&&(I===kd?s.cullFace(s.BACK):I===Yx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),C=I}function it(I){I!==N&&(z&&s.lineWidth(I),N=I)}function ge(I,ie,le){I?(te(s.POLYGON_OFFSET_FILL),(O!==ie||F!==le)&&(s.polygonOffset(ie,le),O=ie,F=le)):Se(s.POLYGON_OFFSET_FILL)}function We(I){I?te(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function $e(I){I===void 0&&(I=s.TEXTURE0+W-1),ee!==I&&(s.activeTexture(I),ee=I)}function mt(I,ie,le){le===void 0&&(ee===null?le=s.TEXTURE0+W-1:le=ee);let pe=L[le];pe===void 0&&(pe={type:void 0,texture:void 0},L[le]=pe),(pe.type!==I||pe.texture!==ie)&&(ee!==le&&(s.activeTexture(le),ee=le),s.bindTexture(I,ie||se[I]),pe.type=I,pe.texture=ie)}function P(){const I=L[ee];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){Ne.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ne.copy(I))}function Oe(I){De.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),De.copy(I))}function Ce(I,ie){let le=c.get(ie);le===void 0&&(le=new WeakMap,c.set(ie,le));let pe=le.get(I);pe===void 0&&(pe=s.getUniformBlockIndex(ie,I.name),le.set(I,pe))}function ue(I,ie){const pe=c.get(ie).get(I);l.get(ie)!==pe&&(s.uniformBlockBinding(ie,pe,I.__bindingPointIndex),l.set(ie,pe))}function He(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ee=null,L={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,M=null,x=null,b=null,A=null,E=new qe(0,0,0),R=0,v=!1,y=null,C=null,N=null,O=null,F=null,Ne.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:ye,drawBuffers:Ee,useProgram:at,setBlending:Ge,setMaterial:be,setFlipSided:Ye,setCullFace:k,setLineWidth:it,setPolygonOffset:ge,setScissorTest:We,activeTexture:$e,bindTexture:mt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:V,texImage2D:fe,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Re,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:$,compressedTexSubImage3D:xe,scissor:he,viewport:Oe,reset:He}}function Wb(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):Oa("canvas")}function _(P,T,V){let j=1;const Z=mt(P);if((Z.width>V||Z.height>V)&&(j=V/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(j*Z.width),xe=Math.floor(j*Z.height);h===void 0&&(h=g($,xe));const oe=T?g($,xe):h;return oe.width=$,oe.height=xe,oe.getContext("2d").drawImage(P,0,0,$,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+xe+")."),oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(P,T,V,j,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=T;if(T===s.RED&&(V===s.FLOAT&&($=s.R32F),V===s.HALF_FLOAT&&($=s.R16F),V===s.UNSIGNED_BYTE&&($=s.R8)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.R8UI),V===s.UNSIGNED_SHORT&&($=s.R16UI),V===s.UNSIGNED_INT&&($=s.R32UI),V===s.BYTE&&($=s.R8I),V===s.SHORT&&($=s.R16I),V===s.INT&&($=s.R32I)),T===s.RG&&(V===s.FLOAT&&($=s.RG32F),V===s.HALF_FLOAT&&($=s.RG16F),V===s.UNSIGNED_BYTE&&($=s.RG8)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RG8UI),V===s.UNSIGNED_SHORT&&($=s.RG16UI),V===s.UNSIGNED_INT&&($=s.RG32UI),V===s.BYTE&&($=s.RG8I),V===s.SHORT&&($=s.RG16I),V===s.INT&&($=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGB8UI),V===s.UNSIGNED_SHORT&&($=s.RGB16UI),V===s.UNSIGNED_INT&&($=s.RGB32UI),V===s.BYTE&&($=s.RGB8I),V===s.SHORT&&($=s.RGB16I),V===s.INT&&($=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&($=s.RGBA8UI),V===s.UNSIGNED_SHORT&&($=s.RGBA16UI),V===s.UNSIGNED_INT&&($=s.RGBA32UI),V===s.BYTE&&($=s.RGBA8I),V===s.SHORT&&($=s.RGBA16I),V===s.INT&&($=s.RGBA32I)),T===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),T===s.RGBA){const xe=Z?fc:ut.getTransfer(j);V===s.FLOAT&&($=s.RGBA32F),V===s.HALF_FLOAT&&($=s.RGBA16F),V===s.UNSIGNED_BYTE&&($=xe===St?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(P,T){let V;return P?T===null||T===Ss||T===La?V=s.DEPTH24_STENCIL8:T===In?V=s.DEPTH32F_STENCIL8:T===Pa&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ss||T===La?V=s.DEPTH_COMPONENT24:T===In?V=s.DEPTH_COMPONENT32F:T===Pa&&(V=s.DEPTH_COMPONENT16),V}function b(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==rn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){const T=P.target;T.removeEventListener("dispose",A),R(T),T.isVideoTexture&&u.delete(T)}function E(P){const T=P.target;T.removeEventListener("dispose",E),y(T)}function R(P){const T=n.get(P);if(T.__webglInit===void 0)return;const V=P.source,j=f.get(V);if(j){const Z=j[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(P),Object.keys(j).length===0&&f.delete(V)}n.remove(P)}function v(P){const T=n.get(P);s.deleteTexture(T.__webglTexture);const V=P.source,j=f.get(V);delete j[T.__cacheKey],o.memory.textures--}function y(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(T.__webglFramebuffer[j]))for(let Z=0;Z<T.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(T.__webglFramebuffer[j]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[j])}else{if(Array.isArray(T.__webglFramebuffer))for(let j=0;j<T.__webglFramebuffer.length;j++)s.deleteFramebuffer(T.__webglFramebuffer[j]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let j=0;j<T.__webglColorRenderbuffer.length;j++)T.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[j]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=P.textures;for(let j=0,Z=V.length;j<Z;j++){const $=n.get(V[j]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(P)}let C=0;function N(){C=0}function O(){const P=C;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),C+=1,P}function F(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function W(P,T){const V=n.get(P);if(P.isVideoTexture&&We(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){const j=P.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(V,P,T);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function z(P,T){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){se(V,P,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function X(P,T){const V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){se(V,P,T);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function G(P,T){const V=n.get(P);if(P.version>0&&V.__version!==P.version){te(V,P,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}const ee={[Mo]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[hc]:s.MIRRORED_REPEAT},L={[Pn]:s.NEAREST,[$_]:s.NEAREST_MIPMAP_NEAREST,[ta]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Hl]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},ae={[wv]:s.NEVER,[Dv]:s.ALWAYS,[Av]:s.LESS,[sg]:s.LEQUAL,[Rv]:s.EQUAL,[Lv]:s.GEQUAL,[Cv]:s.GREATER,[Pv]:s.NOTEQUAL};function ve(P,T){if(T.type===In&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===rn||T.magFilter===Hl||T.magFilter===ta||T.magFilter===Ui||T.minFilter===rn||T.minFilter===Hl||T.minFilter===ta||T.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ee[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,L[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Pn||T.minFilter!==ta&&T.minFilter!==Ui||T.type===In&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(P,T){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));const j=T.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const $=F(T);if($!==P.__cacheKey){Z[$]===void 0&&(Z[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[$].usedTimes++;const xe=Z[P.__cacheKey];xe!==void 0&&(Z[P.__cacheKey].usedTimes--,xe.usedTimes===0&&v(T)),P.__cacheKey=$,P.__webglTexture=Z[$].texture}return V}function De(P,T,V){return Math.floor(Math.floor(P/V)/T)}function K(P,T,V,j){const $=P.updateRanges;if($.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,V,j,T.data);else{$.sort((re,he)=>re.start-he.start);let xe=0;for(let re=1;re<$.length;re++){const he=$[xe],Oe=$[re],Ce=he.start+he.count,ue=De(Oe.start,T.width,4),He=De(he.start,T.width,4);Oe.start<=Ce+1&&ue===He&&De(Oe.start+Oe.count-1,T.width,4)===ue?he.count=Math.max(he.count,Oe.start+Oe.count-he.start):(++xe,$[xe]=Oe)}$.length=xe+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let re=0,he=$.length;re<he;re++){const Oe=$[re],Ce=Math.floor(Oe.start/4),ue=Math.ceil(Oe.count/4),He=Ce%T.width,I=Math.floor(Ce/T.width),ie=ue,le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,I),t.texSubImage2D(s.TEXTURE_2D,0,He,I,ie,le,V,j,T.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function se(P,T,V){let j=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(j=s.TEXTURE_3D);const Z=Ne(P,T),$=T.source;t.bindTexture(j,P.__webglTexture,s.TEXTURE0+V);const xe=n.get($);if($.version!==xe.__version||Z===!0){t.activeTexture(s.TEXTURE0+V);const oe=ut.getPrimaries(ut.workingColorSpace),Re=T.colorSpace===Tr?null:ut.getPrimaries(T.colorSpace),fe=T.colorSpace===Tr||oe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let re=_(T.image,!1,i.maxTextureSize);re=$e(T,re);const he=r.convert(T.format,T.colorSpace),Oe=r.convert(T.type);let Ce=M(T.internalFormat,he,Oe,T.colorSpace,T.isVideoTexture);ve(j,T);let ue;const He=T.mipmaps,I=T.isVideoTexture!==!0,ie=xe.__version===void 0||Z===!0,le=$.dataReady,pe=b(T,re);if(T.isDepthTexture)Ce=x(T.format===Ia,T.type),ie&&(I?t.texStorage2D(s.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Ce,re.width,re.height,0,he,Oe,null));else if(T.isDataTexture)if(He.length>0){I&&ie&&t.texStorage2D(s.TEXTURE_2D,pe,Ce,He[0].width,He[0].height);for(let ne=0,J=He.length;ne<J;ne++)ue=He[ne],I?le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Oe,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,he,Oe,ue.data);T.generateMipmaps=!1}else I?(ie&&t.texStorage2D(s.TEXTURE_2D,pe,Ce,re.width,re.height),le&&K(T,re,he,Oe)):t.texImage2D(s.TEXTURE_2D,0,Ce,re.width,re.height,0,he,Oe,re.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Ce,He[0].width,He[0].height,re.depth);for(let ne=0,J=He.length;ne<J;ne++)if(ue=He[ne],T.format!==mi)if(he!==null)if(I){if(le)if(T.layerUpdates.size>0){const Te=Lp(ue.width,ue.height,T.format,T.type);for(const Be of T.layerUpdates){const dt=ue.data.subarray(Be*Te/ue.data.BYTES_PER_ELEMENT,(Be+1)*Te/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,Be,ue.width,ue.height,1,he,dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,re.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Ce,ue.width,ue.height,re.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,re.depth,he,Oe,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Ce,ue.width,ue.height,re.depth,0,he,Oe,ue.data)}else{I&&ie&&t.texStorage2D(s.TEXTURE_2D,pe,Ce,He[0].width,He[0].height);for(let ne=0,J=He.length;ne<J;ne++)ue=He[ne],T.format!==mi?he!==null?I?le&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Oe,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Ce,ue.width,ue.height,0,he,Oe,ue.data)}else if(T.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,Ce,re.width,re.height,re.depth),le)if(T.layerUpdates.size>0){const ne=Lp(re.width,re.height,T.format,T.type);for(const J of T.layerUpdates){const Te=re.data.subarray(J*ne/re.data.BYTES_PER_ELEMENT,(J+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,he,Oe,Te)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Oe,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,he,Oe,re.data);else if(T.isData3DTexture)I?(ie&&t.texStorage3D(s.TEXTURE_3D,pe,Ce,re.width,re.height,re.depth),le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Oe,re.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,he,Oe,re.data);else if(T.isFramebufferTexture){if(ie)if(I)t.texStorage2D(s.TEXTURE_2D,pe,Ce,re.width,re.height);else{let ne=re.width,J=re.height;for(let Te=0;Te<pe;Te++)t.texImage2D(s.TEXTURE_2D,Te,Ce,ne,J,0,he,Oe,null),ne>>=1,J>>=1}}else if(He.length>0){if(I&&ie){const ne=mt(He[0]);t.texStorage2D(s.TEXTURE_2D,pe,Ce,ne.width,ne.height)}for(let ne=0,J=He.length;ne<J;ne++)ue=He[ne],I?le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,he,Oe,ue):t.texImage2D(s.TEXTURE_2D,ne,Ce,he,Oe,ue);T.generateMipmaps=!1}else if(I){if(ie){const ne=mt(re);t.texStorage2D(s.TEXTURE_2D,pe,Ce,ne.width,ne.height)}le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Oe,re)}else t.texImage2D(s.TEXTURE_2D,0,Ce,he,Oe,re);m(T)&&p(j),xe.__version=$.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function te(P,T,V){if(T.image.length!==6)return;const j=Ne(P,T),Z=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+V);const $=n.get(Z);if(Z.version!==$.__version||j===!0){t.activeTexture(s.TEXTURE0+V);const xe=ut.getPrimaries(ut.workingColorSpace),oe=T.colorSpace===Tr?null:ut.getPrimaries(T.colorSpace),Re=T.colorSpace===Tr||xe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const fe=T.isCompressedTexture||T.image[0].isCompressedTexture,re=T.image[0]&&T.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!fe&&!re?he[J]=_(T.image[J],!0,i.maxCubemapSize):he[J]=re?T.image[J].image:T.image[J],he[J]=$e(T,he[J]);const Oe=he[0],Ce=r.convert(T.format,T.colorSpace),ue=r.convert(T.type),He=M(T.internalFormat,Ce,ue,T.colorSpace),I=T.isVideoTexture!==!0,ie=$.__version===void 0||j===!0,le=Z.dataReady;let pe=b(T,Oe);ve(s.TEXTURE_CUBE_MAP,T);let ne;if(fe){I&&ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,He,Oe.width,Oe.height);for(let J=0;J<6;J++){ne=he[J].mipmaps;for(let Te=0;Te<ne.length;Te++){const Be=ne[Te];T.format!==mi?Ce!==null?I?le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Be.width,Be.height,Ce,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,He,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Be.width,Be.height,Ce,ue,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,He,Be.width,Be.height,0,Ce,ue,Be.data)}}}else{if(ne=T.mipmaps,I&&ie){ne.length>0&&pe++;const J=mt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,He,J.width,J.height)}for(let J=0;J<6;J++)if(re){I?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,Ce,ue,he[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,he[J].width,he[J].height,0,Ce,ue,he[J].data);for(let Te=0;Te<ne.length;Te++){const dt=ne[Te].image[J].image;I?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,dt.width,dt.height,Ce,ue,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,He,dt.width,dt.height,0,Ce,ue,dt.data)}}else{I?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,ue,he[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Ce,ue,he[J]);for(let Te=0;Te<ne.length;Te++){const Be=ne[Te];I?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,Ce,ue,Be.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,He,Ce,ue,Be.image[J])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),$.__version=Z.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Se(P,T,V,j,Z,$){const xe=r.convert(V.format,V.colorSpace),oe=r.convert(V.type),Re=M(V.internalFormat,xe,oe,V.colorSpace),fe=n.get(T),re=n.get(V);if(re.__renderTarget=T,!fe.__hasExternalTextures){const he=Math.max(1,T.width>>$),Oe=Math.max(1,T.height>>$);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,Re,he,Oe,T.depth,0,xe,oe,null):t.texImage2D(Z,$,Re,he,Oe,0,xe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),ge(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Z,re.__webglTexture,0,it(T)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Z,re.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(P,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const j=T.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=x(T.stencilBuffer,Z),xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=it(T);ge(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,$,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,$,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,$,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,P)}else{const j=T.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],xe=r.convert($.format,$.colorSpace),oe=r.convert($.type),Re=M($.internalFormat,xe,oe,$.colorSpace),fe=it(T);V&&ge(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,Re,T.width,T.height):ge(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,Re,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Re,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(T.depthTexture);j.__renderTarget=T,(!j.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const Z=j.__webglTexture,$=it(T);if(T.depthTexture.format===Da)ge(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(T.depthTexture.format===Ia)ge(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function at(P){const T=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const j=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),j){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=j}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const j=P.texture.mipmaps;j&&j.length>0?Ee(T.__webglFramebuffer[0],P):Ee(T.__webglFramebuffer,P)}else if(V){T.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[j]),T.__webglDepthbuffer[j]===void 0)T.__webglDepthbuffer[j]=s.createRenderbuffer(),ye(T.__webglDepthbuffer[j],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,$)}}else{const j=P.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ye(T.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,$)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(P,T,V){const j=n.get(P);T!==void 0&&Se(j.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&at(P)}function D(P){const T=P.texture,V=n.get(P),j=n.get(T);P.addEventListener("dispose",E);const Z=P.textures,$=P.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=T.version,o.memory.textures++),$){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let Re=0;Re<T.mipmaps.length;Re++)V.__webglFramebuffer[oe][Re]=s.createFramebuffer()}else V.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)V.__webglFramebuffer[oe]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(xe)for(let oe=0,Re=Z.length;oe<Re;oe++){const fe=n.get(Z[oe]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const Re=Z[oe];V.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const fe=r.convert(Re.format,Re.colorSpace),re=r.convert(Re.type),he=M(Re.internalFormat,fe,re,Re.colorSpace,P.isXRRenderTarget===!0),Oe=it(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,he,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ve(s.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)Se(V.__webglFramebuffer[oe][Re],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re);else Se(V.__webglFramebuffer[oe],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(T)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,Re=Z.length;oe<Re;oe++){const fe=Z[oe],re=n.get(fe);let he=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),ve(he,fe),Se(V.__webglFramebuffer,P,fe,s.COLOR_ATTACHMENT0+oe,he,0),m(fe)&&p(he)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),ve(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let Re=0;Re<T.mipmaps.length;Re++)Se(V.__webglFramebuffer[Re],P,T,s.COLOR_ATTACHMENT0,oe,Re);else Se(V.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,oe,0);m(T)&&p(oe),t.unbindTexture()}P.depthBuffer&&at(P)}function Ge(P){const T=P.textures;for(let V=0,j=T.length;V<j;V++){const Z=T[V];if(m(Z)){const $=S(P),xe=n.get(Z).__webglTexture;t.bindTexture($,xe),p($),t.unbindTexture()}}}const be=[],Ye=[];function k(P){if(P.samples>0){if(ge(P)===!1){const T=P.textures,V=P.width,j=P.height;let Z=s.COLOR_BUFFER_BIT;const $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(P),oe=T.length>1;if(oe)for(let fe=0;fe<T.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Re=P.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<T.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const re=n.get(T[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,re,0)}s.blitFramebuffer(0,0,V,j,0,0,V,j,Z,s.NEAREST),l===!0&&(be.length=0,Ye.length=0,be.push(s.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(be.push($),Ye.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<T.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const re=n.get(T[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,re,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function it(P){return Math.min(i.maxSamples,P.samples)}function ge(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function We(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function $e(P,T){const V=P.colorSpace,j=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==un&&V!==Tr&&(ut.getTransfer(V)===St?(j!==mi||Z!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=G,this.rebindTextures=Ve,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ge}function Xb(s,e){function t(n,i=Tr){let r;const o=ut.getTransfer(i);if(n===zi)return s.UNSIGNED_BYTE;if(n===Rf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===J_)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===j_)return s.BYTE;if(n===Z_)return s.SHORT;if(n===Pa)return s.UNSIGNED_SHORT;if(n===Af)return s.INT;if(n===Ss)return s.UNSIGNED_INT;if(n===In)return s.FLOAT;if(n===sr)return s.HALF_FLOAT;if(n===Q_)return s.ALPHA;if(n===eg)return s.RGB;if(n===mi)return s.RGBA;if(n===Da)return s.DEPTH_COMPONENT;if(n===Ia)return s.DEPTH_STENCIL;if(n===Pf)return s.RED;if(n===Lf)return s.RED_INTEGER;if(n===tg)return s.RG;if(n===Df)return s.RG_INTEGER;if(n===If)return s.RGBA_INTEGER;if(n===Vl||n===Gl||n===Wl||n===Xl)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===vh||n===yh||n===Mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===Th||n===Eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sh||n===Th)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Eh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bh||n===wh||n===Ah||n===Rh||n===Ch||n===Ph||n===Lh||n===Dh||n===Ih||n===Nh||n===Uh||n===Oh||n===Fh||n===Bh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ph)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===kh||n===zh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yl)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ng||n===Hh||n===Vh||n===Gh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===La?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Ag extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ag(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fr({vertexShader:Yb,fragmentShader:qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Jn(new Tc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $b extends Ao{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Kb,m={},p=t.getContextAttributes();let S=null,M=null;const x=[],b=[],A=new ft;let E=null;const R=new An;R.viewport=new gt;const v=new An;v.viewport=new gt;const y=[R,v],C=new aM;let N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let se=x[K];return se===void 0&&(se=new hu,x[K]=se),se.getTargetRaySpace()},this.getControllerGrip=function(K){let se=x[K];return se===void 0&&(se=new hu,x[K]=se),se.getGripSpace()},this.getHand=function(K){let se=x[K];return se===void 0&&(se=new hu,x[K]=se),se.getHandSpace()};function F(K){const se=b.indexOf(K.inputSource);if(se===-1)return;const te=x[se];te!==void 0&&(te.update(K.inputSource,K.frame,c||o),te.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",z);for(let K=0;K<x.length;K++){const se=b[K];se!==null&&(b[K]=null,x[K].disconnect(se))}N=null,O=null,_.reset();for(const K in m)delete m[K];e.setRenderTarget(S),d=null,f=null,h=null,i=null,M=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(i,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Se=null,ye=null;p.depth&&(ye=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Ia:Da,Se=p.stencil?La:Ss);const Ee={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=h.createProjectionLayer(Ee),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ts(f.textureWidth,f.textureHeight,{format:mi,type:zi,depthTexture:new xg(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ts(d.framebufferWidth,d.framebufferHeight,{format:mi,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),De.setContext(i),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(K){for(let se=0;se<K.removed.length;se++){const te=K.removed[se],Se=b.indexOf(te);Se>=0&&(b[Se]=null,x[Se].disconnect(te))}for(let se=0;se<K.added.length;se++){const te=K.added[se];let Se=b.indexOf(te);if(Se===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=b.length){b.push(te),Se=Ee;break}else if(b[Ee]===null){b[Ee]=te,Se=Ee;break}if(Se===-1)break}const ye=x[Se];ye&&ye.connect(te)}}const X=new H,G=new H;function ee(K,se,te){X.setFromMatrixPosition(se.matrixWorld),G.setFromMatrixPosition(te.matrixWorld);const Se=X.distanceTo(G),ye=se.projectionMatrix.elements,Ee=te.projectionMatrix.elements,at=ye[14]/(ye[10]-1),Ve=ye[14]/(ye[10]+1),D=(ye[9]+1)/ye[5],Ge=(ye[9]-1)/ye[5],be=(ye[8]-1)/ye[0],Ye=(Ee[8]+1)/Ee[0],k=at*be,it=at*Ye,ge=Se/(-be+Ye),We=ge*-be;if(se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(We),K.translateZ(ge),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const $e=at+ge,mt=Ve+ge,P=k-We,T=it+(Se-We),V=D*Ve/mt*$e,j=Ge*Ve/mt*$e;K.projectionMatrix.makePerspective(P,T,V,j,$e,mt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function L(K,se){se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let se=K.near,te=K.far;_.texture!==null&&(_.depthNear>0&&(se=_.depthNear),_.depthFar>0&&(te=_.depthFar)),C.near=v.near=R.near=se,C.far=v.far=R.far=te,(N!==C.near||O!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,O=C.far),C.layers.mask=K.layers.mask|6,R.layers.mask=C.layers.mask&3,v.layers.mask=C.layers.mask&5;const Se=K.parent,ye=C.cameras;L(C,Se);for(let Ee=0;Ee<ye.length;Ee++)L(ye[Ee],Se);ye.length===2?ee(C,R,v):C.projectionMatrix.copy(R.projectionMatrix),ae(K,C,Se)};function ae(K,se,te){te===null?K.matrix.copy(se.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(se.projectionMatrix),K.projectionMatrixInverse.copy(se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=So*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(K){return m[K]};let ve=null;function Ne(K,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const te=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Se=!1;te.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ve=0;Ve<te.length;Ve++){const D=te[Ve];let Ge=null;if(d!==null)Ge=d.getViewport(D);else{const Ye=h.getViewSubImage(f,D);Ge=Ye.viewport,Ve===0&&(e.setRenderTargetTextures(M,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(M))}let be=y[Ve];be===void 0&&(be=new An,be.layers.enable(Ve),be.viewport=new gt,y[Ve]=be),be.matrix.fromArray(D.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(D.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),Ve===0&&(C.matrix.copy(be.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(be)}const ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(te[0]);Ve&&Ve.isValid&&Ve.texture&&_.init(Ve,i.renderState)}if(ye&&ye.includes("camera-access")&&(e.state.unbindTexture(),h))for(let Ve=0;Ve<te.length;Ve++){const D=te[Ve].camera;if(D){let Ge=m[D];Ge||(Ge=new Ag,m[D]=Ge);const be=h.getCameraImage(D);Ge.sourceTexture=be}}}for(let te=0;te<x.length;te++){const Se=b[te],ye=x[te];Se!==null&&ye!==void 0&&ye.update(Se,se,c||o)}ve&&ve(K,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const De=new Sg;De.setAnimationLoop(Ne),this.setAnimationLoop=function(K){ve=K},this.dispose=function(){}}}const $r=new Hi,jb=new tt;function Zb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,fg(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,x=S.envMapRotation;M&&(m.envMap.value=M,$r.copy(x),$r.x*=-1,$r.y*=-1,$r.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.envMapRotation.value.setFromMatrix4(jb.makeRotationFromEuler($r)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jb(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function c(S,M){let x=i[S.id];x===void 0&&(g(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(S,b);const A=e.render.frame;r[S.id]!==A&&(f(S),r[S.id]=A)}function u(S){const M=h();S.__bindingPointIndex=M;const x=s.createBuffer(),b=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=i[S.id],x=S.uniforms,b=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,E=x.length;A<E;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,y=R.length;v<y;v++){const C=R[v];if(d(C,A,v,b)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let W=0;W<O.length;W++){const z=O[W],X=_(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,N+F,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,M,x,b){const A=S.value,E=M+"_"+x;if(b[E]===void 0)return typeof A=="number"||typeof A=="boolean"?b[E]=A:b[E]=A.clone(),!0;{const R=b[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return b[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(S){const M=S.uniforms;let x=0;const b=16;for(let E=0,R=M.length;E<R;E++){const v=Array.isArray(M[E])?M[E]:[M[E]];for(let y=0,C=v.length;y<C;y++){const N=v[y],O=Array.isArray(N.value)?N.value:[N.value];for(let F=0,W=O.length;F<W;F++){const z=O[F],X=_(z),G=x%b,ee=G%X.boundary,L=G+ee;x+=ee,L!==0&&b-L<X.storage&&(x+=b-L),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=X.storage}}}const A=x%b;return A>0&&(x+=b-A),S.__size=x,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Qb{constructor(e={}){const{canvas:t=jv(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=kt;let A=0,E=0,R=null,v=-1,y=null;const C=new gt,N=new gt;let O=null;const F=new qe(0);let W=0,z=t.width,X=t.height,G=1,ee=null,L=null;const ae=new gt(0,0,z,X),ve=new gt(0,0,z,X);let Ne=!1;const De=new kf;let K=!1,se=!1;const te=new tt,Se=new H,ye=new gt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Ve(){return R===null?G:1}let D=n;function Ge(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ne,!1),D===null){const U="webgl2";if(D=Ge(U,w),D===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let be,Ye,k,it,ge,We,$e,mt,P,T,V,j,Z,$,xe,oe,Re,fe,re,he,Oe,Ce,ue,He;function I(){be=new cE(D),be.init(),Ce=new Xb(D,be),Ye=new nE(D,be,e,Ce),k=new Gb(D,be),Ye.reversedDepthBuffer&&f&&k.buffers.depth.setReversed(!0),it=new fE(D),ge=new Pb,We=new Wb(D,be,k,ge,Ye,Ce,it),$e=new rE(x),mt=new lE(x),P=new xM(D),ue=new eE(D,P),T=new uE(D,P,it,ue),V=new pE(D,T,P,it),re=new dE(D,Ye,We),oe=new iE(ge),j=new Cb(x,$e,mt,be,Ye,ue,oe),Z=new Zb(x,ge),$=new Db,xe=new Bb(be),fe=new QT(x,$e,mt,k,V,d,l),Re=new Hb(x,V,Ye),He=new Jb(D,it,Ye,k),he=new tE(D,be,it),Oe=new hE(D,be,it),it.programs=j.programs,x.capabilities=Ye,x.extensions=be,x.properties=ge,x.renderLists=$,x.shadowMap=Re,x.state=k,x.info=it}I();const ie=new $b(x,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(z,X,!1))},this.getSize=function(w){return w.set(z,X)},this.setSize=function(w,U,Y=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,X=U,t.width=Math.floor(w*G),t.height=Math.floor(U*G),Y===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(z*G,X*G).floor()},this.setDrawingBufferSize=function(w,U,Y){z=w,X=U,G=Y,t.width=Math.floor(w*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,U,Y,q){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,U,Y,q),k.viewport(C.copy(ae).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,U,Y,q){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,U,Y,q),k.scissor(N.copy(ve).multiplyScalar(G).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){k.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ee=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Y=!0){let q=0;if(w){let B=!1;if(R!==null){const Q=R.texture.format;B=Q===If||Q===Df||Q===Lf}if(B){const Q=R.texture.type,ce=Q===zi||Q===Ss||Q===Pa||Q===La||Q===Rf||Q===Cf,we=fe.getClearColor(),Me=fe.getClearAlpha(),Fe=we.r,Ie=we.g,Le=we.b;ce?(g[0]=Fe,g[1]=Ie,g[2]=Le,g[3]=Me,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Fe,_[1]=Ie,_[2]=Le,_[3]=Me,D.clearBufferiv(D.COLOR,0,_))}else q|=D.COLOR_BUFFER_BIT}U&&(q|=D.DEPTH_BUFFER_BIT),Y&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),fe.dispose(),$.dispose(),xe.dispose(),ge.dispose(),$e.dispose(),mt.dispose(),V.dispose(),ue.dispose(),He.dispose(),j.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ke),ie.removeEventListener("sessionend",de),ke.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=it.autoReset,U=Re.enabled,Y=Re.autoUpdate,q=Re.needsUpdate,B=Re.type;I(),it.autoReset=w,Re.enabled=U,Re.autoUpdate=Y,Re.needsUpdate=q,Re.type=B}function ne(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){const U=w.target;U.removeEventListener("dispose",J),Te(U)}function Te(w){Be(w),ge.remove(w)}function Be(w){const U=ge.get(w).programs;U!==void 0&&(U.forEach(function(Y){j.releaseProgram(Y)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Y,q,B,Q){U===null&&(U=Ee);const ce=B.isMesh&&B.matrixWorld.determinant()<0,we=vt(w,U,Y,q,B);k.setMaterial(q,ce);let Me=Y.index,Fe=1;if(q.wireframe===!0){if(Me=T.getWireframeAttribute(Y),Me===void 0)return;Fe=2}const Ie=Y.drawRange,Le=Y.attributes.position;let je=Ie.start*Fe,lt=(Ie.start+Ie.count)*Fe;Q!==null&&(je=Math.max(je,Q.start*Fe),lt=Math.min(lt,(Q.start+Q.count)*Fe)),Me!==null?(je=Math.max(je,0),lt=Math.min(lt,Me.count)):Le!=null&&(je=Math.max(je,0),lt=Math.min(lt,Le.count));const Bt=lt-je;if(Bt<0||Bt===1/0)return;ue.setup(B,q,we,Y,Me);let Pt,Et=he;if(Me!==null&&(Pt=P.get(Me),Et=Oe,Et.setIndex(Pt)),B.isMesh)q.wireframe===!0?(k.setLineWidth(q.wireframeLinewidth*Ve()),Et.setMode(D.LINES)):Et.setMode(D.TRIANGLES);else if(B.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),k.setLineWidth(ze*Ve()),B.isLineSegments?Et.setMode(D.LINES):B.isLineLoop?Et.setMode(D.LINE_LOOP):Et.setMode(D.LINE_STRIP)}else B.isPoints?Et.setMode(D.POINTS):B.isSprite&&Et.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ao("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ze=B._multiDrawStarts,It=B._multiDrawCounts,pt=B._multiDrawCount,Hn=Me?P.get(Me).bytesPerElement:1,bs=ge.get(q).currentProgram.getUniforms();for(let Vn=0;Vn<pt;Vn++)bs.setValue(D,"_gl_DrawID",Vn),Et.render(ze[Vn]/Hn,It[Vn])}else if(B.isInstancedMesh)Et.renderInstances(je,Bt,B.count);else if(Y.isInstancedBufferGeometry){const ze=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,ze);Et.renderInstances(je,Bt,It)}else Et.render(je,Bt)};function dt(w,U,Y){w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,Vt(w,U,Y),w.side=fr,w.needsUpdate=!0,Vt(w,U,Y),w.side=Li):Vt(w,U,Y)}this.compile=function(w,U,Y=null){Y===null&&(Y=w),p=xe.get(Y),p.init(U),M.push(p),Y.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==Y&&w.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Q=B.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const we=Q[ce];dt(we,Y,B),q.add(we)}else dt(Q,Y,B),q.add(Q)}),p=M.pop(),q},this.compileAsync=function(w,U,Y=null){const q=this.compile(w,U,Y);return new Promise(B=>{function Q(){if(q.forEach(function(ce){ge.get(ce).currentProgram.isReady()&&q.delete(ce)}),q.size===0){B(w);return}setTimeout(Q,10)}be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let _e=null;function Pe(w){_e&&_e(w)}function Ke(){ke.stop()}function de(){ke.start()}const ke=new Sg;ke.setAnimationLoop(Pe),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(w){_e=w,ie.setAnimationLoop(w),w===null?ke.stop():ke.start()},ie.addEventListener("sessionstart",Ke),ie.addEventListener("sessionend",de),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(U),U=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),p=xe.get(w,M.length),p.init(U),M.push(p),te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(te,Oi,U.reversedDepth),se=this.localClippingEnabled,K=oe.init(this.clippingPlanes,se),m=$.get(w,S.length),m.init(),S.push(m),ie.enabled===!0&&ie.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Ue(Q,U,-1/0,x.sortObjects)}Ue(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ee,L),at=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,at&&fe.addToRenderList(m,w),this.info.render.frame++,K===!0&&oe.beginShadows();const Y=p.state.shadowsArray;Re.render(Y,w,U),K===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(p.setupLights(),U.isArrayCamera){const Q=U.cameras;if(B.length>0)for(let ce=0,we=Q.length;ce<we;ce++){const Me=Q[ce];Ht(q,B,w,Me)}at&&fe.render(w);for(let ce=0,we=Q.length;ce<we;ce++){const Me=Q[ce];Xe(m,w,Me,Me.viewport)}}else B.length>0&&Ht(q,B,w,U),at&&fe.render(w),Xe(m,w,U);R!==null&&E===0&&(We.updateMultisampleRenderTarget(R),We.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),ue.resetDefaultState(),v=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&oe.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ue(w,U,Y,q){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){q&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);const ce=V.update(w),we=w.material;we.visible&&m.push(w,ce,we,Y,ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const ce=V.update(w),we=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ye.copy(ce.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(we)){const Me=ce.groups;for(let Fe=0,Ie=Me.length;Fe<Ie;Fe++){const Le=Me[Fe],je=we[Le.materialIndex];je&&je.visible&&m.push(w,ce,je,Y,ye.z,Le)}}else we.visible&&m.push(w,ce,we,Y,ye.z,null)}}const Q=w.children;for(let ce=0,we=Q.length;ce<we;ce++)Ue(Q[ce],U,Y,q)}function Xe(w,U,Y,q){const B=w.opaque,Q=w.transmissive,ce=w.transparent;p.setupLightsView(Y),K===!0&&oe.setGlobalState(x.clippingPlanes,Y),q&&k.viewport(C.copy(q)),B.length>0&&Qe(B,U,Y),Q.length>0&&Qe(Q,U,Y),ce.length>0&&Qe(ce,U,Y),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Ht(w,U,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ts(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?sr:zi,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const Q=p.state.transmissionRenderTarget[q.id],ce=q.viewport||C;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const we=x.getRenderTarget(),Me=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(F),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),at&&fe.render(Y);const Ie=x.toneMapping;x.toneMapping=Ir;const Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),K===!0&&oe.setGlobalState(x.clippingPlanes,q),Qe(w,Y,q),We.updateMultisampleRenderTarget(Q),We.updateRenderTargetMipmap(Q),be.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let lt=0,Bt=U.length;lt<Bt;lt++){const Pt=U[lt],Et=Pt.object,ze=Pt.geometry,It=Pt.material,pt=Pt.group;if(It.side===Li&&Et.layers.test(q.layers)){const Hn=It.side;It.side=Bn,It.needsUpdate=!0,Lt(Et,Y,q,ze,It,pt),It.side=Hn,It.needsUpdate=!0,je=!0}}je===!0&&(We.updateMultisampleRenderTarget(Q),We.updateRenderTargetMipmap(Q))}x.setRenderTarget(we,Me,Fe),x.setClearColor(F,W),Le!==void 0&&(q.viewport=Le),x.toneMapping=Ie}function Qe(w,U,Y){const q=U.isScene===!0?U.overrideMaterial:null;for(let B=0,Q=w.length;B<Q;B++){const ce=w[B],we=ce.object,Me=ce.geometry,Fe=ce.group;let Ie=ce.material;Ie.allowOverride===!0&&q!==null&&(Ie=q),we.layers.test(Y.layers)&&Lt(we,U,Y,Me,Ie,Fe)}}function Lt(w,U,Y,q,B,Q){w.onBeforeRender(x,U,Y,q,B,Q),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(x,U,Y,q,w,Q),B.transparent===!0&&B.side===Li&&B.forceSinglePass===!1?(B.side=Bn,B.needsUpdate=!0,x.renderBufferDirect(Y,U,q,B,w,Q),B.side=fr,B.needsUpdate=!0,x.renderBufferDirect(Y,U,q,B,w,Q),B.side=Li):x.renderBufferDirect(Y,U,q,B,w,Q),w.onAfterRender(x,U,Y,q,B,Q)}function Vt(w,U,Y){U.isScene!==!0&&(U=Ee);const q=ge.get(w),B=p.state.lights,Q=p.state.shadowsArray,ce=B.state.version,we=j.getParameters(w,B.state,Q,U,Y),Me=j.getProgramCacheKey(we);let Fe=q.programs;q.environment=w.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(w.isMeshStandardMaterial?mt:$e).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",J),Fe=new Map,q.programs=Fe);let Ie=Fe.get(Me);if(Ie!==void 0){if(q.currentProgram===Ie&&q.lightsStateVersion===ce)return Tt(w,we),Ie}else we.uniforms=j.getUniforms(w),w.onBeforeCompile(we,x),Ie=j.acquireProgram(we,Me),Fe.set(Me,Ie),q.uniforms=we.uniforms;const Le=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=oe.uniform),Tt(w,we),q.needsLights=Ct(w),q.lightsStateVersion=ce,q.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ie,q.uniformsList=null,Ie}function Rt(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=ql.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Tt(w,U){const Y=ge.get(w);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function vt(w,U,Y,q,B){U.isScene!==!0&&(U=Ee),We.resetTextureUnits();const Q=U.fog,ce=q.isMeshStandardMaterial?U.environment:null,we=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:un,Me=(q.isMeshStandardMaterial?mt:$e).get(q.envMap||ce),Fe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ie=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!Y.morphAttributes.position,je=!!Y.morphAttributes.normal,lt=!!Y.morphAttributes.color;let Bt=Ir;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Bt=x.toneMapping);const Pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Et=Pt!==void 0?Pt.length:0,ze=ge.get(q),It=p.state.lights;if(K===!0&&(se===!0||w!==y)){const vn=w===y&&q.id===v;oe.setState(q,w,vn)}let pt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==It.state.version||ze.outputColorSpace!==we||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==Me||q.fog===!0&&ze.fog!==Q||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==oe.numPlanes||ze.numIntersection!==oe.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Ie||ze.morphTargets!==Le||ze.morphNormals!==je||ze.morphColors!==lt||ze.toneMapping!==Bt||ze.morphTargetsCount!==Et)&&(pt=!0):(pt=!0,ze.__version=q.version);let Hn=ze.currentProgram;pt===!0&&(Hn=Vt(q,U,B));let bs=!1,Vn=!1,Lo=!1;const Nt=Hn.getUniforms(),ii=ze.uniforms;if(k.useProgram(Hn.program)&&(bs=!0,Vn=!0,Lo=!0),q.id!==v&&(v=q.id,Vn=!0),bs||y!==w){k.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Nt.setValue(D,"projectionMatrix",w.projectionMatrix),Nt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Ln=Nt.map.cameraPosition;Ln!==void 0&&Ln.setValue(D,Se.setFromMatrixPosition(w.matrixWorld)),Ye.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Vn=!0,Lo=!0)}if(B.isSkinnedMesh){Nt.setOptional(D,B,"bindMatrix"),Nt.setOptional(D,B,"bindMatrixInverse");const vn=B.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Nt.setValue(D,"boneTexture",vn.boneTexture,We))}B.isBatchedMesh&&(Nt.setOptional(D,B,"batchingTexture"),Nt.setValue(D,"batchingTexture",B._matricesTexture,We),Nt.setOptional(D,B,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",B._indirectTexture,We),Nt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",B._colorsTexture,We));const ri=Y.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&re.update(B,Y,Hn),(Vn||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,Nt.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ii.envMap.value=Me,ii.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(ii.envMapIntensity.value=U.environmentIntensity),Vn&&(Nt.setValue(D,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&zn(ii,Lo),Q&&q.fog===!0&&Z.refreshFogUniforms(ii,Q),Z.refreshMaterialUniforms(ii,q,G,X,p.state.transmissionRenderTarget[w.id]),ql.upload(D,Rt(ze),ii,We)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ql.upload(D,Rt(ze),ii,We),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Nt.setValue(D,"center",B.center),Nt.setValue(D,"modelViewMatrix",B.modelViewMatrix),Nt.setValue(D,"normalMatrix",B.normalMatrix),Nt.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const vn=q.uniformsGroups;for(let Ln=0,bc=vn.length;Ln<bc;Ln++){const Hr=vn[Ln];He.update(Hr,Hn),He.bind(Hr,Hn)}}return Hn}function zn(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Ct(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,Y){const q=ge.get(w);q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ge.get(w.texture).__webglTexture=U,ge.get(w.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const Y=ge.get(w);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0};const xn=D.createFramebuffer();this.setRenderTarget=function(w,U=0,Y=0){R=w,A=U,E=Y;let q=!0,B=null,Q=!1,ce=!1;if(w){const Me=ge.get(w);if(Me.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)We.setupRenderTarget(w);else if(Me.__hasExternalTextures)We.rebindTextures(w,ge.get(w.texture).__webglTexture,ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Le=w.depthTexture;if(Me.__boundDepthTexture!==Le){if(Le!==null&&ge.has(Le)&&(w.width!==Le.image.width||w.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ce=!0);const Ie=ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?B=Ie[U][Y]:B=Ie[U],Q=!0):w.samples>0&&We.useMultisampledRTT(w)===!1?B=ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[Y]:B=Ie,C.copy(w.viewport),N.copy(w.scissor),O=w.scissorTest}else C.copy(ae).multiplyScalar(G).floor(),N.copy(ve).multiplyScalar(G).floor(),O=Ne;if(Y!==0&&(B=xn),k.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&k.drawBuffers(w,B),k.viewport(C),k.scissor(N),k.setScissorTest(O),Q){const Me=ge.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,Y)}else if(ce){const Me=U;for(let Fe=0;Fe<w.textures.length;Fe++){const Ie=ge.get(w.textures[Fe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Fe,Ie.__webglTexture,Y,Me)}}else if(w!==null&&Y!==0){const Me=ge.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,Y)}v=-1},this.readRenderTargetPixels=function(w,U,Y,q,B,Q,ce,we=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(Me=Me[ce]),Me){k.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Fe=w.textures[we],Ie=Fe.format,Le=Fe.type;if(!Ye.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-q&&Y>=0&&Y<=w.height-B&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),D.readPixels(U,Y,q,B,Ce.convert(Ie),Ce.convert(Le),Q))}finally{const Fe=R!==null?ge.get(R).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,U,Y,q,B,Q,ce,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(Me=Me[ce]),Me)if(U>=0&&U<=w.width-q&&Y>=0&&Y<=w.height-B){k.bindFramebuffer(D.FRAMEBUFFER,Me);const Fe=w.textures[we],Ie=Fe.format,Le=Fe.type;if(!Ye.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+we),D.readPixels(U,Y,q,B,Ce.convert(Ie),Ce.convert(Le),0);const lt=R!==null?ge.get(R).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,lt);const Bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zv(D,Bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(je),D.deleteSync(Bt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Y=0){const q=Math.pow(2,-Y),B=Math.floor(w.image.width*q),Q=Math.floor(w.image.height*q),ce=U!==null?U.x:0,we=U!==null?U.y:0;We.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,ce,we,B,Q),k.unbindTexture()};const ni=D.createFramebuffer(),$t=D.createFramebuffer();this.copyTextureToTexture=function(w,U,Y=null,q=null,B=0,Q=null){Q===null&&(B!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=B,B=0):Q=0);let ce,we,Me,Fe,Ie,Le,je,lt,Bt;const Pt=w.isCompressedTexture?w.mipmaps[Q]:w.image;if(Y!==null)ce=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Me=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,Ie=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{const ri=Math.pow(2,-B);ce=Math.floor(Pt.width*ri),we=Math.floor(Pt.height*ri),w.isDataArrayTexture?Me=Pt.depth:w.isData3DTexture?Me=Math.floor(Pt.depth*ri):Me=1,Fe=0,Ie=0,Le=0}q!==null?(je=q.x,lt=q.y,Bt=q.z):(je=0,lt=0,Bt=0);const Et=Ce.convert(U.format),ze=Ce.convert(U.type);let It;U.isData3DTexture?(We.setTexture3D(U,0),It=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(We.setTexture2DArray(U,0),It=D.TEXTURE_2D_ARRAY):(We.setTexture2D(U,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const pt=D.getParameter(D.UNPACK_ROW_LENGTH),Hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bs=D.getParameter(D.UNPACK_SKIP_PIXELS),Vn=D.getParameter(D.UNPACK_SKIP_ROWS),Lo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);const Nt=w.isDataArrayTexture||w.isData3DTexture,ii=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const ri=ge.get(w),vn=ge.get(U),Ln=ge.get(ri.__renderTarget),bc=ge.get(vn.__renderTarget);k.bindFramebuffer(D.READ_FRAMEBUFFER,Ln.__webglFramebuffer),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,bc.__webglFramebuffer);for(let Hr=0;Hr<Me;Hr++)Nt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(w).__webglTexture,B,Le+Hr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.get(U).__webglTexture,Q,Bt+Hr)),D.blitFramebuffer(Fe,Ie,ce,we,je,lt,ce,we,D.DEPTH_BUFFER_BIT,D.NEAREST);k.bindFramebuffer(D.READ_FRAMEBUFFER,null),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||ge.has(w)){const ri=ge.get(w),vn=ge.get(U);k.bindFramebuffer(D.READ_FRAMEBUFFER,ni),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,$t);for(let Ln=0;Ln<Me;Ln++)Nt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ri.__webglTexture,B,Le+Ln):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ri.__webglTexture,B),ii?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,Q,Bt+Ln):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,Q),B!==0?D.blitFramebuffer(Fe,Ie,ce,we,je,lt,ce,we,D.COLOR_BUFFER_BIT,D.NEAREST):ii?D.copyTexSubImage3D(It,Q,je,lt,Bt+Ln,Fe,Ie,ce,we):D.copyTexSubImage2D(It,Q,je,lt,Fe,Ie,ce,we);k.bindFramebuffer(D.READ_FRAMEBUFFER,null),k.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ii?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(It,Q,je,lt,Bt,ce,we,Me,Et,ze,Pt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(It,Q,je,lt,Bt,ce,we,Me,Et,Pt.data):D.texSubImage3D(It,Q,je,lt,Bt,ce,we,Me,Et,ze,Pt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,je,lt,ce,we,Et,ze,Pt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,je,lt,Pt.width,Pt.height,Et,Pt.data):D.texSubImage2D(D.TEXTURE_2D,Q,je,lt,ce,we,Et,ze,Pt);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lo),Q===0&&U.generateMipmaps&&D.generateMipmap(It),k.unbindTexture()},this.copyTextureToTexture3D=function(w,U,Y=null,q=null,B=0){return ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,Y,q,B)},this.initRenderTarget=function(w){ge.get(w).__webglFramebuffer===void 0&&We.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?We.setTextureCube(w,0):w.isData3DTexture?We.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?We.setTexture2DArray(w,0):We.setTexture2D(w,0),k.unbindTexture()},this.resetState=function(){A=0,E=0,R=null,k.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function nm(s,e){if(e===Sv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wh||e===ig){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Wh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}const bu=new WeakMap;class ew extends zr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Fa(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,kt,n).catch(n)}decodeDracoFile(e,t,n,i,r=un,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(bu.has(e)){const l=bu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),bu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new bi;e.index&&t.setIndex(new cn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new cn(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==kt)return;const n=new qe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),ut.colorSpaceToWorking(n,kt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Fa(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=tw.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function tw(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(_=>_.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let S,M;if(c.useUniqueIDs)M=u[m],S=a.GetAttributeByUniqueId(f,M);else{if(M=a.GetAttributeId(f,o[u[m]]),M===-1)continue;S=a.GetAttribute(f,M)}const x=i(o,a,f,m,p,S);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),_.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,_=g*u.BYTES_PER_ELEMENT,m=r(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,m,_,p);const S=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:S,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class nw extends zr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new aw(t)}),this.register(function(t){return new lw(t)}),this.register(function(t){return new gw(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new uw(t)}),this.register(function(t){return new hw(t)}),this.register(function(t){return new fw(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new ow(t)}),this.register(function(t){return new pw(t)}),this.register(function(t){return new cw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new rw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new Mw(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=xa.extractUrlBase(e);o=xa.resolveURL(c,this.path)}else o=xa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Fa(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rg){try{o[ct.KHR_BINARY_GLTF]=new Sw(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Uw(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new sw;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new Tw(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new Ew;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new bw;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function iw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rw{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],un);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new sM(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new iM(u),c.distance=h;break;case"spot":c=new tM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class sw{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return as}extendParams(e,t,n){const i=[];e.color=new qe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],un),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,kt))}return Promise.all(i)}}class ow{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class aw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ft(a,a)}return Promise.all(r)}}class lw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class cw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class uw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],un)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,kt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class hw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class fw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],un),Promise.all(r)}}class dw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class pw{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],un),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,kt)),Promise.all(r)}}class mw{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class _w{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Gi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class gw{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xw{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class vw{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class yw{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class Mw{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new tt,m=new H,p=new kr,S=new H(1,1,1),M=new Ly(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&S.fromBufferAttribute(l.SCALE,x),M.setMatrixAt(x,_.compose(m,p,S));for(const x in l)if(x==="_COLOR_0"){const b=l[x];M.instanceColor=new Yh(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ft.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Rg="glTF",Xo=12,im={JSON:1313821514,BIN:5130562};class Sw{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xo,r=new DataView(e,Xo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===im.JSON){const c=new Uint8Array(e,Xo+o,a);this.content=n.decode(c)}else if(l===im.BIN){const c=Xo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Tw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=$h[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=$h[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=co[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,un,f)})})}}class Ew{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bw{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}}class Cg extends za{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,S=1-m,M=p-f+h;for(let x=0;x!==a;x++){const b=o[_+x+a],A=o[_+x+l]*u,E=o[g+x+a],R=o[g+x]*u;r[x]=S*b+M*A+m*E+p*R}return r}}const ww=new kr;class Aw extends Cg{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ww.fromArray(r).normalize().toArray(r),r}}const ai={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},co={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rm={9728:Pn,9729:rn,9984:$_,9985:Hl,9986:ta,9987:Ui},sm={33071:Ni,33648:hc,10497:Mo},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$h={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rw={CUBICSPLINE:void 0,LINEAR:Ua,STEP:Na},Au={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Cw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Hf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fr})),s.DefaultMaterial}function jr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Pw(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Lw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dw(s){let e;const t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ru(t.attributes):e=s.indices+":"+Ru(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ru(s.targets[n]);return e}function Ru(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function jh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Iw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nw=new tt;class Uw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Mg(this.options.manager):this.textureLoader=new oM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return jr(r,a,i),Ji(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(xa.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=wu[i.type],a=co[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new cn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=wu[i.type],c=co[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(S);M||(_=new c(a,p*d,i.count*d/u),M=new wy(_,d/u),t.cache.add(S,M)),m=new Of(M,l,f%d/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new cn(_,l,g);if(i.sparse!==void 0){const p=wu.SCALAR,S=co[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new S(o[1],M,i.sparse.count*p),A=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=b.length;E<R;E++){const v=b[E];if(m.setX(v,A[E*l]),l>=2&&m.setY(v,A[E*l+1]),l>=3&&m.setZ(v,A[E*l+2]),l>=4&&m.setW(v,A[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=rm[f.magFilter]||rn,u.minFilter=rm[f.minFilter]||Ui,u.wrapS=sm[f.wrapS]||Mo,u.wrapT=sm[f.wrapT]||Mo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Pn&&u.minFilter!==rn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new sn(_);m.needsUpdate=!0,f(m)}),t.load(xa.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ji(h,o),h.userData.mimeType=o.mimeType||Iw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gg,Bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _g,Bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Hf}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){const h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],un),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,kt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Li);const u=r.alphaMode||Au.OPAQUE;if(u===Au.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Au.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==as&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ft(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==as&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==as){const h=r.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],un)}return r.emissiveTexture!==void 0&&o!==as&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,kt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Ji(h,r),t.associations.set(h,{materials:e}),r.extensions&&jr(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return om(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Dw(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=om(new bi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Cw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const S=c[d];if(m.mode===ai.TRIANGLES||m.mode===ai.TRIANGLE_STRIP||m.mode===ai.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ry(_,S):new Jn(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ai.TRIANGLE_STRIP?p.geometry=nm(p.geometry,ig):m.mode===ai.TRIANGLE_FAN&&(p.geometry=nm(p.geometry,Wh));else if(m.mode===ai.LINES)p=new Uy(_,S);else if(m.mode===ai.LINE_STRIP)p=new zf(_,S);else if(m.mode===ai.LINE_LOOP)p=new Oy(_,S);else if(m.mode===ai.POINTS)p=new Fy(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lw(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),m.extensions&&jr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&jr(i,h[0],r),h[0];const f=new ls;r.extensions&&jr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An($v.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wf(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new tt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Bf(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let S=0,M=f.length;S<M;S++){const x=f[S],b=d[S],A=g[S],E=_[S],R=m[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,b,A,E,R);if(v)for(let y=0;y<v.length;y++)p.push(v[y])}return new Yy(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Nw)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new mg:c.length>1?u=new ls:c.length===1?u=c[0]:u=new Ft,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Ji(u,r),r.extensions&&jr(n,u,r),r.matrix!==void 0){const h=new tt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ls;n.name&&(r.name=i.createUniqueName(n.name)),Ji(r,n),n.extensions&&jr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Bi||f instanceof sn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];yr[r.path]===yr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(yr[r.path]){case yr.weights:c=Eo;break;case yr.rotation:c=bo;break;case yr.translation:case yr.scale:c=wo;break;default:switch(n.itemSize){case 1:c=Eo;break;case 2:case 3:default:c=wo;break}break}const u=i.interpolation!==void 0?Rw[i.interpolation]:Ua,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+yr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=jh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof bo?Aw:Cg;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ow(s,e,t){const n=e.attributes,i=new dr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=jh(co[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,l=new H;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=jh(co[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Vi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function om(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=$h[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ut.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Ji(s,e),Ow(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Pw(s,e.targets,t):s})}class Fw extends Qy{constructor(e){super(e),this.type=sr}parse(e){const o=function(R,v){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},h=function(R,v,y){v=v||1024;let N=R.pos,O=-1,F=0,W="",z=String.fromCharCode.apply(null,new Uint16Array(R.subarray(N,N+128)));for(;0>(O=z.indexOf(`
`))&&F<v&&N<R.byteLength;)W+=z,F+=z.length,N+=128,z+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(N,N+128)));return-1<O?(R.pos+=F+O+1,W+z.slice(0,O)):!1},f=function(R){const v=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let W,z;for((R.pos>=R.byteLength||!(W=h(R)))&&o(1,"no header found"),(z=W.match(v))||o(3,"bad initial token"),F.valid|=1,F.programtype=z[1],F.string+=W+`
`;W=h(R),W!==!1;){if(F.string+=W+`
`,W.charAt(0)==="#"){F.comments+=W+`
`;continue}if((z=W.match(y))&&(F.gamma=parseFloat(z[1])),(z=W.match(C))&&(F.exposure=parseFloat(z[1])),(z=W.match(N))&&(F.valid|=2,F.format=z[1]),(z=W.match(O))&&(F.valid|=4,F.height=parseInt(z[1],10),F.width=parseInt(z[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},d=function(R,v,y){const C=v;if(C<8||C>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);C!==(R[2]<<8|R[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*v*y);N.length||o(4,"unable to allocate buffer space");let O=0,F=0;const W=4*C,z=new Uint8Array(4),X=new Uint8Array(W);let G=y;for(;G>0&&F<R.byteLength;){F+4>R.byteLength&&o(1),z[0]=R[F++],z[1]=R[F++],z[2]=R[F++],z[3]=R[F++],(z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=C)&&o(3,"bad rgbe scanline format");let ee=0,L;for(;ee<W&&F<R.byteLength;){L=R[F++];const ve=L>128;if(ve&&(L-=128),(L===0||ee+L>W)&&o(3,"bad scanline data"),ve){const Ne=R[F++];for(let De=0;De<L;De++)X[ee++]=Ne}else X.set(R.subarray(F,F+L),ee),ee+=L,F+=L}const ae=C;for(let ve=0;ve<ae;ve++){let Ne=0;N[O]=X[ve+Ne],Ne+=C,N[O+1]=X[ve+Ne],Ne+=C,N[O+2]=X[ve+Ne],Ne+=C,N[O+3]=X[ve+Ne],O+=4}G--}return N},g=function(R,v,y,C){const N=R[v+3],O=Math.pow(2,N-128)/255;y[C+0]=R[v+0]*O,y[C+1]=R[v+1]*O,y[C+2]=R[v+2]*O,y[C+3]=1},_=function(R,v,y,C){const N=R[v+3],O=Math.pow(2,N-128)/255;y[C+0]=ul.toHalfFloat(Math.min(R[v+0]*O,65504)),y[C+1]=ul.toHalfFloat(Math.min(R[v+1]*O,65504)),y[C+2]=ul.toHalfFloat(Math.min(R[v+2]*O,65504)),y[C+3]=ul.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),S=p.width,M=p.height,x=d(m.subarray(m.pos),S,M);let b,A,E;switch(this.type){case In:E=x.length/4;const R=new Float32Array(E*4);for(let y=0;y<E;y++)g(x,y*4,R,y*4);b=R,A=In;break;case sr:E=x.length/4;const v=new Uint16Array(E*4);for(let y=0;y<E;y++)_(x,y*4,v,y*4);b=v,A=sr;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:M,data:b,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case In:case sr:o.colorSpace=un,o.minFilter=rn,o.magFilter=rn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}ss.registerPlugin(Je,Ca);class Bw{constructor(e,t,n,i,r,o={rotation:{x:.065,y:4.56,z:0},cameraAxis:{x:0,y:1.6,z:46},metalness:1,roughness:.28,modelName:"model"}){this.canvases=typeof e=="string"?document.querySelectorAll(e):e,this.refImage=typeof t=="string"?document.querySelector(t):t,this.context=n,this.environment=typeof i=="string"?i:"./assets/models/environment.hdr",this.modelUri=typeof r=="string"?r:`./assets/models/${o.modelName||"model"}.gltf`,this.pages=Array.from(document.querySelectorAll(".has-path")),(!this.canvases||this.canvases.length===0)&&(this.canvases=[this._createCanvasAboveImage()]),this.initialSetup={rotation:{x:o.rotation.x,y:o.rotation.y,z:o.rotation.z},cameraAxis:{x:o.cameraAxis.x,y:o.cameraAxis.y,z:o.cameraAxis.z},metalness:o.metalness,roughness:o.roughness},this.scenes=[],this.cameras=[],this.renderers=[],this.models=[],this.gltfLoader=new nw,this.rgbeLoader=new Fw,this.textureLoader=new Mg,this.dracoLoader=new ew,this.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),this.gltfLoader.setDRACOLoader(this.dracoLoader),this.animate=this.animate.bind(this),this._started=!1}_createCanvasAboveImage(){const e=document.createElement("canvas");e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.pointerEvents="none",e.classList.add("model-maker-canvas");const t=document.createElement("div");return t.style.position="relative",t.style.display="inline-block",this.refImage&&this.refImage.parentNode?(this.refImage.parentNode.insertBefore(t,this.refImage),t.appendChild(this.refImage),t.appendChild(e),this.referenceWrapper=t):document.body.appendChild(e),e}async setupCanvasSizeAsync(){const e=this.refImage;await new Promise(i=>{if(!e||e.complete&&e.naturalWidth>0)return i();e.addEventListener("load",()=>i(),{once:!0})});const n=()=>{const i=e?e.getBoundingClientRect():{width:window.innerWidth,height:window.innerHeight},r=i.width,o=i.height;this.canvases.forEach(a=>{(a.width!==Math.floor(r)||a.height!==Math.floor(o))&&(a.width=Math.floor(r),a.height=Math.floor(o),a.style.width=`${r}px`,a.style.height=`${o}px`)}),this.cameras.forEach((a,l)=>{const c=this.canvases[l];c&&a&&(a.aspect=c.width/Math.max(1,c.height),a.updateProjectionMatrix(),this.renderers[l]&&this.renderers[l].setSize(c.width,c.height,!1))})};n(),this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=new ResizeObserver(()=>{requestAnimationFrame(n)}),e?this.resizeObserver.observe(e):this.resizeObserver.observe(document.body)}async initCanvas(){if(!this._started){this._started=!0,await this.setupCanvasSizeAsync();for(let e=0;e<this.canvases.length;e++){const t=this.canvases[e],n=new by;this.scenes.push(n);const i=new Promise((a,l)=>{if(!this.environment)return a();this.rgbeLoader.load(this.environment,c=>{c.mapping=uc,n.environment=c,a()},void 0,c=>{console.warn("HDR load failed:",c),a()})}),r=new An(10,t.width/Math.max(1,t.height),.01,100);r.position.set(this.initialSetup.cameraAxis.x,this.initialSetup.cameraAxis.y,this.initialSetup.cameraAxis.z),r.lookAt(0,0,0),this.cameras.push(r);const o=new Qb({canvas:t,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});o.setPixelRatio(Math.min(window.devicePixelRatio,1)),o.setSize(t.width,t.height),o.outputColorSpace!==void 0?o.outputColorSpace=kt:o.gammaOutput=!0,o.toneMapping=q_,this.renderers.push(o),await this.loadModel(e,t,i)}this._setupSectionTextureObserver(),this.updateCameras(),this.animate()}}_loadTexturePromise(e){return new Promise((t,n)=>{if(!e)return n(new Error("No texture URI"));this.textureLoader.load(e,i=>{i.colorSpace=kt,i.flipY=!1,t(i)},void 0,i=>n(i))})}async loadModel(e,t,n){const i=this.modelUri;let r=null;this.pages&&this.pages.length&&this.pages[0].dataset&&this.pages[0].dataset.textureUri?r=this.pages[0].dataset.textureUri:r="./assets/models/LOL-Label-cherry.webp",this.models[e]={model:null,bodyMeshes:[],currentTexture:null};let o=null;try{o=await this._loadTexturePromise(r)}catch(l){console.warn("Default texture failed to load:",r,l),o=null}const a=new Promise((l,c)=>{this.gltfLoader.load(i,u=>{const h=u.scene;h.rotation.set(this.initialSetup.rotation.x,this.initialSetup.rotation.y,this.initialSetup.rotation.z);const f=[];h.traverse(d=>{d.isMesh&&d.material&&(d.material=d.material.clone(),d.material.name==="Body"?(o&&(d.material.map=o,d.material.needsUpdate=!0),d.material.metalness=this.initialSetup.metalness,d.material.roughness=this.initialSetup.roughness,f.push(d)):d.material.name==="Silver"&&(d.material.metalness=1,d.material.roughness=.17,d.material.envMapIntensity=1,d.material.needsUpdate=!0))}),this.scenes[e].add(h),this.models[e].model=h,this.models[e].bodyMeshes=f,this.models[e].currentTexture=o||null,l()},void 0,u=>{console.error("GLTF load error:",u),c(u)})});try{await Promise.all([n,a]),this.updateCameras()}catch(l){console.error("Error loading assets:",l)}}async swapTextureForAllModels(e){if(e)try{const t=await this._loadTexturePromise(e);this.models.forEach(n=>{if(!(!n||!n.bodyMeshes)){if(n.currentTexture&&n.currentTexture!==t)try{n.currentTexture.dispose()}catch{}n.bodyMeshes.forEach(i=>{i&&i.material&&(i.material.map=t,i.material.needsUpdate=!0)}),n.currentTexture=t}})}catch(t){console.warn("Failed to load new texture:",e,t)}}_setupSectionTextureObserver(){if(!this.pages||this.pages.length===0)return;const e={root:null,rootMargin:"0px",threshold:[.45,.5,.6]};this._currentSectionTextureUri=null;const t=n=>{let i=null;if(n.forEach(a=>{a.isIntersecting&&(!i||a.intersectionRatio>i.intersectionRatio)&&(i=a)}),!i)return;const r=i.target,o=r.dataset?r.dataset.textureUri||r.dataset.textureUri:null;o&&this._currentSectionTextureUri!==o&&(this._currentSectionTextureUri=o,this.swapTextureForAllModels(o))};this._sectionObserver=new IntersectionObserver(t,e),this.pages.forEach(n=>{this._sectionObserver.observe(n)})}setupScrollAnimation(e={}){const t={rotationPerSection:Math.PI*2,startPoint:"top top",endPoint:"bottom top",frontViewValue:2},{rotationPerSection:n,frontViewValue:i}={...t,...e};this.initialSetup.rotation.y=i,Je.getAll().forEach(a=>a.kill());const r=e.startPoint||t.startPoint,o=e.endPoint||t.endPoint;this.pages.forEach((a,l)=>{Je.create({trigger:a,start:r,end:o,scrub:2,onUpdate:c=>{const u=c.progress;if(c.isActive){const h=this.models[l]?.model;h&&(h.rotation.y=i+n*l+u*n)}this.initialSetup.rotation.y=i+n*l+u*n,this.updateModels()}})})}updateCameras(){this.cameras.forEach((e,t)=>{e.position.set(this.initialSetup.cameraAxis.x,this.initialSetup.cameraAxis.y,this.initialSetup.cameraAxis.z),e.lookAt(this.scenes[t].children[0]?.position||new H(0,0,0)),e.updateProjectionMatrix()})}updateModels(){this.models.forEach(e=>{e&&e.model&&e.model.rotation.set(this.initialSetup.rotation.x,this.initialSetup.rotation.y,this.initialSetup.rotation.z)})}animate(){requestAnimationFrame(this.animate),this.renderers.forEach((e,t)=>{const n=this.scenes[t],i=this.cameras[t];n&&i&&e&&e.render(n,i)})}}const Cu=new Bw(".model-maker-canvas",".main-img",null,"./assets/models/environment.hdr","./assets/models/model.gltf");Cu.setupCanvasSizeAsync().then(()=>{Cu.initCanvas(),Cu.setupScrollAnimation({rotationPerSection:Math.PI*4,frontViewValue:4.6})});let am,Pu=!1;const Sr=document.querySelector(".site-header"),kw=Sr?Sr.offsetHeight:0;let lm=window.scrollY;function Kf(){const s=window.scrollY;lm>=s?(s>kw?Sr?.classList.add("nav-down","scroll"):Sr?.classList.remove("nav-down","scroll"),document.getElementById("head").style.transform="translateY(0)",Sr?.classList.add("y-moved"),Sr?.classList.remove("reset")):(document.body.classList.contains("header-open")||(document.getElementById("head").style.transform="translateY(-100%)"),Sr?.classList.remove("y-moved"),Sr?.classList.add("reset")),lm=s>0?s:0}window.addEventListener("scroll",Kf,{passive:!0});Kf();if(window.innerWidth>=1200){const s=document.getElementById("head");s&&(s.style.transform==="translateY(-100%)"&&(Kf(),Pu=!0),clearTimeout(am),am=setTimeout(()=>{Pu&&(s.style.transform="translateY(-100%)",Pu=!1)},3e3))}
