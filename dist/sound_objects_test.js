/*! For license information please see sound_objects_test.js.LICENSE.txt */
(()=>{"use strict";var t={335:(t,e,r)=>{t.exports=r.p+"0de33a6d93afc7422a46.js"},747:(t,e,r)=>{t.exports=r.p+"8356c00f1771c796e142.js"},518:(t,e,r)=>{t.exports=r.p+"61512167adf06f93a6e5.js"},419:(t,e,r)=>{t.exports=r.p+"b3d1f64c8a19cb8e9197.js"}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!t;)t=n[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r.b=document.baseURI||self.location.href,(()=>{var t={};r.r(t),r.d(t,{AM:()=>w,default:()=>O});var e={};r.r(e),r.d(e,{CHRouter2In6Out:()=>L,default:()=>M});var n={};r.r(n),r.d(n,{FM:()=>F,default:()=>G});var a={};r.r(a),r.d(a,{CHPhaser:()=>W,default:()=>D});var o={};r.r(o),r.d(o,{LinearCrossfading:()=>z,default:()=>B});var i={};r.r(i),r.d(i,{MixCrossfading:()=>Z,default:()=>tt});var c={};r.r(c),r.d(c,{RM:()=>at,default:()=>ot});var s={};r.r(s),r.d(s,{WS:()=>ut,default:()=>pt});var u={};r.r(u),r.d(u,{FM1c2m:()=>yt,default:()=>bt});var p={};r.r(p),r.d(p,{FM1c2sm:()=>xt,default:()=>Et});var l={};r.r(l),r.d(l,{FM2c1m:()=>Mt,default:()=>At});var h={};r.r(h),r.d(h,{FMAcim:()=>Gt,default:()=>kt});var d={};function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}r.r(d),r.d(d,{FMselfc:()=>Rt,default:()=>Vt});var _=function(t,e,r){var n=new DocumentFragment;return Object.keys(t.opts).forEach((function(r){var a=y(t,e,r,"param"),o=y(t,e,r,"enum");a&&n.appendChild(a),o&&n.appendChild(o)})),r&&n.appendChild(r(t,e)),n},m=function(t,e,r,n){var a=t||new DocumentFragment;return Object.keys(e.opts).forEach((function(t){var n=y(e,r,t,"param"),o=y(e,r,t,"enum");n&&a.appendChild(n),o&&a.appendChild(o)})),n&&a.appendChild(n(e,r)),a},g=function(t){return{values:["sine","triangle","square","sawtooth"],onchange:function(e){return t.type=e}}},v=function(t,e){t&&Array.prototype.slice.call(t.childNodes).forEach((function(e){return t.removeChild(e)})),e&&(e.port.postMessage({type:"set_running",value:!1}),e.disconnect())};function y(t,e,r,n){var a={param:b,enum:q},o=t.opts[r+"_"+n];if(!o)return null;var i=document.createElement("div");return i.classList.add("container"),(o=Array.isArray(o)?o:[o]).forEach((function(c,s){var u=a[n](t,e,r,c,1===o.length?void 0:s);i.appendChild(u)})),i}function b(t,e,r,n,a){var o=e.ctx,i=t.opts[r],c=n.value||i;"object"===f(c)&&(c=c.value);var s=document.createElement("div");s.classList.add("container","param",r);var u=document.createElement("div");u.classList.add("label"),u.textContent=r+(void 0!==a?"-"+a:"");var p=document.createElement("input");return p.classList.add("input-val"),p.setAttribute("type","number"),p.setAttribute("min",i.min||"0"),i.max&&p.setAttribute("max",i.max),p.setAttribute("step",i.step||"0.1"),p.value=c,p.addEventListener("change",(function(){var e=t.opts[r+"_param"];e&&(e.cancelScheduledValues(o.currentTime),e.setValueAtTime(p.value,o.currentTime))})),s.appendChild(u),s.appendChild(p),s}function q(t,e,r,n,a){var o=n.value||t.opts[r],i=document.createElement("div");i.classList.add("container","enum",r);var c=document.createElement("div");c.classList.add("label"),c.textContent=r+(void 0!==a?"-"+a:"");var s=null;return"int"===n.values?((s=document.createElement("input")).classList.add("input-val"),s.setAttribute("type","number"),s.setAttribute("min","0"),s.setAttribute("step","0.1"),s.value=o,s.addEventListener("change",(function(){n.onchange(s.value)}))):Array.isArray(n.values)&&(s=document.createElement("select"),n.values.forEach((function(t){var e=document.createElement("option");e.value=t,e.textContent=t,s.appendChild(e)})),s.addEventListener("change",(function(){n.onchange(s.value)}))),s?(i.appendChild(c),i.appendChild(s),i):null}var w=function(t){Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",modulator_freq:10,modulator_type:"sine",carrier_g:.8,modulator_g:2},t||{}),init:x.bind(this),start:E.bind(this),stop:j.bind(this)})};const O=w;function x(t){var e=t.ctx,r=t.master_g,n=e.createGain(),a=e.createOscillator(),o=e.createGain(),i=e.createOscillator(),c=e.createGain();a.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=a.frequency,i.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=i.frequency,a.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(a),i.type=this.opts.modulator_type,this.opts.modulator_type_enum=g(i),o.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=o.gain,c.gain.value=this.opts.modulator_g,this.opts.modulator_g_param=c.gain,i.connect(c).connect(o.gain),a.connect(o).connect(n).connect(r),Object.assign(this.mod,{g:n,carrier:a,c_g:o,modulator:i,m_g:c});var s=this;return t.show_docfrag&&(window.AM=this.mod,s=_(this,t)),s}function E(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.start()}))}function j(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.stop()}))}function C(t){return t}var L=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc_l_freq:110,osc_l_type:"sine",osc_l_gain_l:.8,osc_l_gain_r:.2,osc_r_freq:70,osc_r_type:"sine",osc_r_gain_l:.2,osc_r_gain_r:.8},t||{}),init:A.bind(this),start:S.bind(this),stop:T.bind(this)})};const M=L;function A(t){var e=this,n=t.ctx,a=t.master_g,o=new C(new URL(r(335),r.b));n.audioWorklet.addModule(o).then((function(){var t=new AudioWorkletNode(n,"channel-router-processor",{numberOfInputs:2,numberOfOutputs:1,outputChannelCount:[6]});t.port.postMessage({type:"set_channels_mapping",value:{0:0,1:1,2:0,3:1,4:0,5:1}}),t.channelCountMode="explicit",t.channelInterpretation="discrete",n.destination.channelCount=6,n.destination.channelCountMode="explicit",n.destination.channelInterpretation="discrete",a.channelCount=6,a.channelCountMode="explicit",a.channelInterpretation="discrete",s.connect(u).connect(i),s.connect(p).connect(c),l.connect(h).connect(i),l.connect(d).connect(c),i.connect(t,0,0).connect(a),c.connect(t,0,1).connect(a),Object.assign(e.mod,{chrNode:t})}));var i=n.createGain(),c=n.createGain(),s=n.createOscillator(),u=n.createGain(),p=n.createGain();s.frequency.value=this.opts.osc_l_freq,this.opts.osc_l_freq_param=s.frequency,s.type=this.opts.osc_l_type,this.opts.osc_l_type_enum=g(s),u.gain.value=this.opts.osc_l_gain_l,this.opts.osc_l_gain_l_param=u.gain,p.gain.value=this.opts.osc_l_gain_r,this.opts.osc_l_gain_r_param=p.gain;var l=n.createOscillator(),h=n.createGain(),d=n.createGain();l.frequency.value=this.opts.osc_r_freq,this.opts.osc_r_freq_param=l.frequency,l.type=this.opts.osc_r_type,this.opts.osc_r_type_enum=g(l),h.gain.value=this.opts.osc_r_gain_l,this.opts.osc_r_gain_l_param=h.gain,d.gain.value=this.opts.osc_r_gain_r,this.opts.osc_r_gain_r_param=d.gain,Object.assign(this.mod,{osc_l:s,osc_l_gl:u,osc_l_gr:p,osc_r:l,osc_r_gl:h,osc_r_gr:d});var f=this;return t.show_docfrag&&(window.CHRouter2In6Out=this.mod,f=_(this,t)),f}function S(t){var e=this.mod;[e.osc_l,e.osc_r].forEach((function(t){return t.start()}))}function T(t){var e=t.ctx,r=t.master_g,n=t.container;e.destination.channelCount=2,e.destination.channelCountMode="max",e.destination.channelInterpretation="speakers",r.channelCount=2,r.channelCountMode="max",r.channelInterpretation="speakers";var a=this.mod,o=a.osc_l,i=a.osc_r,c=a.chrNode;[o,i].forEach((function(t){return t.stop()})),v(n,c)}var F=function(t){Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",modulator_freq:10,modulator_type:"sine",d_gain:40,carrier_g:.8},t||{}),init:k.bind(this),start:N.bind(this),stop:I.bind(this)})};const G=F;function k(t){var e=this,r=t.ctx,n=t.master_g,a=r.createOscillator(),o=r.createGain(),i=r.createOscillator(),c=r.createGain();a.frequency.value=this.opts.carrier_freq,i.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=i.frequency,a.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(a),i.type=this.opts.modulator_type,this.opts.modulator_type_enum=g(i),c.gain.value=this.opts.d_gain,this.opts.d_gain_param=c.gain,o.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=o.gain,i.connect(c).connect(a.frequency),a.connect(o).connect(n),Object.assign(this.mod,{carrier:a,c_g:o,modulator:i,d:c,change_i:function(t,e){return i.frequency.value=e||i.frequency.value,c.gain.value=i.frequency.value*t,{d_gain:c.gain.value}},change_i_exp:function(t,e,n){i.frequency.value=e||i.frequency.value;var a=i.frequency.value*t;return c.gain.cancelScheduledValues(r.currentTime),c.gain.setValueAtTime(c.gain.value,r.currentTime),c.gain.exponentialRampToValueAtTime(a,r.currentTime+n),{d_gain:c.gain.value}},change_pitch:function(t){a.frequency.value=t;var r=t*i.frequency.value/a.frequency.value,n=c.gain.value/i.frequency.value;return{mod_freq:r,ratio_tobe_kept:n,d_gain:e.mod.change_i(n,r).d_gain}},change_pitch_exp:function(t,n){a.frequency.setValueAtTime(a.frequency.value,r.currentTime),a.frequency.exponentialRampToValueAtTime(t,r.currentTime+n);var o=t*i.frequency.value/a.frequency.value,s=c.gain.value/i.frequency.value;return{mod_freq:o,ratio_tobe_kept:s,d_gain:e.mod.change_i_exp(s,o,n).d_gain}}});var s=this;return t.show_docfrag&&(window.FM=this.mod,s=_(this,t,P)),s}function N(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.start()}))}function I(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.stop()}))}function P(t,e){var r=new DocumentFragment;return["change_i","change_pitch"].forEach((function(e){var n=document.createElement("div");n.classList.add("container");var a=document.createElement("div");a.classList.add("label"),a.textContent=e;var o="change_i"===e?function(){var e=document.createElement("div");return e.classList.add("container","container-opts","change-i"),["ratio","time"].forEach((function(r){var n=document.createElement("div");n.classList.add("opt-container",r);var a=document.createElement("div");a.textContent=r;var o=document.createElement("input");o.classList.add("input-val"),o.value="ratio"===r?t.mod.d.gain.value/t.mod.modulator.frequency.value:0,o.setAttribute("type","number"),o.setAttribute("min","0"),o.setAttribute("step","time"===r?"1":"0.1"),o.addEventListener("change",(function(){var r=R(e),n=parseInt(r.querySelector(".change-i > .time > .input-val").value),a=parseFloat(r.querySelector(".change-i > .ratio > .input-val").value),o=r.querySelector(".d_gain > .input-val"),i=t.mod.modulator.frequency.value,c=t.mod[n?"change_i_exp":"change_i"](a,i,n).d_gain;o.value=c})),n.appendChild(a),n.appendChild(o),e.appendChild(n)})),e}():function(){var e=document.createElement("div");return e.classList.add("container","container-opts","change-pitch"),["carrier_freq","time"].forEach((function(r){var n=document.createElement("div");n.classList.add("opt-container",r);var a=document.createElement("div");a.textContent=r;var o=document.createElement("input");o.classList.add("input-val"),o.value="carrier_freq"===r?t.mod.carrier.frequency.value:0,o.setAttribute("type","number"),o.setAttribute("min","0"),o.setAttribute("step","time"===r?"1":"0.1"),o.addEventListener("change",(function(){var r=R(e),n=parseInt(r.querySelector(".change-pitch > .time > .input-val").value),a=parseFloat(r.querySelector(".change-pitch > .carrier_freq > .input-val").value),o=r.querySelector(".change-i > .ratio > .input-val"),i=r.querySelector(".modulator_freq > .input-val"),c=r.querySelector(".d_gain > .input-val"),s=t.mod[n?"change_pitch_exp":"change_pitch"](a,n),u=s.ratio_tobe_kept,p=s.mod_freq,l=s.d_gain;o.value=u,i.value=p,c.value=l})),n.appendChild(a),n.appendChild(o),e.appendChild(n)})),e}();n.appendChild(a),n.appendChild(o),r.appendChild(n)})),r}function R(t){return t.classList.contains("controls")||t.classList.contains("main-container")?t:R(t.parentElement)}var V=null,W=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc_freq:220,osc_type:"sine",chp_freq:5.7},t||{}),init:H.bind(this),start:U.bind(this),stop:Y.bind(this)})};const D=W;function H(t){var e=this,n=t.ctx,a=t.master_g,o=new C(new URL(r(747),r.b));n.audioWorklet.addModule(o).then((function(){var r=new AudioWorkletNode(n,"ch-phaser-processor",{numberOfOutputs:1,outputChannelCount:[2]}),o=!0;e.opts.chp_freq_param&&(o=!1);var c=r.parameters.get("frequency");if(c.value=e.opts.chp_freq,e.opts.chp_freq_param=c,i.connect(r).connect(a),Object.assign(e.mod,{chpNode:r}),t.show_docfrag&&t.container&&o){var s=m(V,{opts:{chp_freq:e.opts.chp_freq,chp_freq_param:e.opts.chp_freq_param}},t);t.container.appendChild(s)}}));var i=n.createOscillator();i.frequency.value=this.opts.osc_freq,this.opts.osc_freq_param=i.frequency,i.type=this.opts.osc_type,this.opts.osc_type_enum=g(i),Object.assign(this.mod,{osc:i});var c=this;return t.show_docfrag&&(window.CHPhaser=this.mod,c=V=_(this,t)),c}function U(t){this.mod.osc.start()}function Y(t){var e=this.mod,r=e.osc,n=e.chpNode;r.stop(),v(t.container,n),V=null}var $=null,z=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc1_freq:220,osc1_type:"sine",osc2_freq:110,osc2_type:"sine",cf_amount:.5},t||{}),init:J.bind(this),start:K.bind(this),stop:Q.bind(this)})};const B=z;function J(t){var e=this,n=t.ctx,a=t.master_g,o=n.createOscillator();o.frequency.value=this.opts.osc1_freq,this.opts.osc1_freq_param=o.frequency,o.type=this.opts.osc1_type,this.opts.osc1_type_enum=g(o);var i=n.createOscillator();i.frequency.value=this.opts.osc2_freq,this.opts.osc2_freq_param=i.frequency,i.type=this.opts.osc2_type,this.opts.osc2_type_enum=g(i);var c=new C(new URL(r(518),r.b));n.audioWorklet.addModule(c).then((function(){var r=new AudioWorkletNode(n,"linear-crossfading-processor",{numberOfInputs:2,numberOfOutputs:2}),c=!0;e.opts.cf_amount_param&&(c=!1);var s=r.parameters.get("amount");if(s.value=e.opts.cf_amount,e.opts.cf_amount_param=s,o.connect(r),i.connect(r,0,1),r.connect(a),Object.assign(e.mod,{cfpNode:r}),t.show_docfrag&&t.container&&c){var u=m($,{opts:{cf_amount:e.opts.cf_amount,cf_amount_param:e.opts.cf_amount_param}},t);t.container.appendChild(u)}})),Object.assign(this.mod,{osc_1:o,osc_2:i});var s=this;return t.show_docfrag&&(window.LinearCrossfading=this.mod,s=$=_(this,t)),s}function K(t){var e=this.mod;[e.osc_1,e.osc_2].forEach((function(t){return t.start()}))}function Q(t){var e=this.mod,r=e.osc_1,n=e.osc_2,a=e.cfpNode;[r,n].forEach((function(t){return t.stop()})),v(t.container,a),$=null}var X=null,Z=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc1_freq:2,osc1_type:"sawtooth",osc2_freq:3.5,osc2_type:"square",cf_amount:{value:.2,max:1},cf_mix_length:{value:.01,step:.01}},t||{}),init:et.bind(this),start:rt.bind(this),stop:nt.bind(this)})};const tt=Z;function et(t){var e=this,n=t.ctx,a=t.master_g,o=n.createOscillator();o.frequency.value=this.opts.osc1_freq,this.opts.osc1_freq_param=o.frequency,o.type=this.opts.osc1_type,this.opts.osc1_type_enum=g(o);var i=n.createOscillator();i.frequency.value=this.opts.osc2_freq,this.opts.osc2_freq_param=i.frequency,i.type=this.opts.osc2_type,this.opts.osc2_type_enum=g(i);var c=new C(new URL(r(419),r.b));n.audioWorklet.addModule(c).then((function(){var r=new AudioWorkletNode(n,"mix-crossfading-processor",{numberOfInputs:2,numberOfOutputs:2}),c=!0;e.opts.cf_amount_param&&(c=!1);var s=r.parameters.get("amount");s.value=e.opts.cf_amount.value,e.opts.cf_amount_param=s;var u=r.parameters.get("mix_length");if(u.value=e.opts.cf_mix_length.value,e.opts.cf_mix_length_param=u,o.connect(r),i.connect(r,0,1),r.connect(a),Object.assign(e.mod,{cfpNode:r}),t.show_docfrag&&t.container&&c){var p=m(X,{opts:{cf_amount:e.opts.cf_amount,cf_amount_param:e.opts.cf_amount_param,cf_mix_length:e.opts.cf_mix_length,cf_mix_length_param:e.opts.cf_mix_length_param}},t);t.container.appendChild(p)}})),Object.assign(this.mod,{osc_1:o,osc_2:i});var s=this;return t.show_docfrag&&(window.MixCrossfading=this.mod,s=X=_(this,t)),s}function rt(t){var e=this.mod;[e.osc_1,e.osc_2].forEach((function(t){return t.start()}))}function nt(t){var e=this.mod,r=e.osc_1,n=e.osc_2,a=e.cfpNode;[r,n].forEach((function(t){return t.stop()})),v(t.container,a),X=null}var at=function(t){return Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",modulator_freq:10,modulator_type:"sine",carrier_g:.8,modulator_g:2},t||{}),init:it.bind(this),start:ct.bind(this),stop:st.bind(this)})};const ot=at;function it(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createGain();n.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=n.frequency,o.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=o.frequency,n.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(n),o.type=this.opts.modulator_type,this.opts.modulator_type_enum=g(o),a.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=a.gain,i.gain.value=this.opts.modulator_g,this.opts.modulator_g_param=i.gain,o.connect(i).connect(a),n.connect(a).connect(r),Object.assign(this.mod,{carrier:n,c_g:a,modulator:o,m_g:i});var c=this;return t.show_docfrag&&(window.RM=this.mod,c=_(this,t)),c}function ct(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.start()}))}function st(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.stop()}))}var ut=function(t){Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",carrier_g:1,shaping_amount:4,shaping_harmonics:[.1,.1,.1,.1,.1],shaping_fn:"distortion"},t||{}),init:lt.bind(this),start:gt.bind(this),stop:vt.bind(this)})};const pt=ut;function lt(t){var e=this,r=t.ctx,n=t.master_g,a=r.createWaveShaper(),o=r.createOscillator(),i=r.createGain();o.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=o.frequency,o.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(o),i.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=i.gain;var c=this.opts.shaping_harmonics.length,s=this.opts.shaping_harmonics,u=this.opts.shaping_amount,p={distortion:{fn:dt,set_args:function(t,r){return t.bind(null,parseFloat(r||e.opts.shaping_amount))}},chebishev:{fn:ft,set_args:function(t,e){return Object.assign(t.bind(null,c,s.map((function(t){return t*parseFloat(e||1)}))),Object.assign({},_t))}}},l=p[this.opts.shaping_fn];a.curve=ht(r,l.set_args(l.fn)),this.opts.shaping_harmonics_enum=s.map((function(t,e){return{values:"int",value:t,onchange:function(t){s[e]=parseFloat(t),a.curve=ht(r,l.set_args(l.fn,u))}}})),this.opts.shaping_amount_enum={values:"int",onchange:function(t){u=parseFloat(t),a.curve=ht(r,l.set_args(l.fn,u))}},this.opts.shaping_fn_enum={values:["distortion","chebishev"],onchange:function(t){l=p[t],a.curve=ht(r,l.set_args(l.fn,u))}},o.connect(i).connect(a).connect(n),Object.assign(this.mod,{carrier:o,c_g:i,ws:a});var h=this;return t.show_docfrag&&(window.WS=this.mod,h=_(this,t)),h}function ht(t,e){var r=t.sampleRate,n=new Float32Array(r);e.init_processing&&e.init_processing(e);for(var a=0;a<r;a++){var o=2*a/r-1;n[a]=e(o),e.step_processing&&e.step_processing(e,n[a])}return e.post_processing?e.post_processing(e,n):n}function dt(t,e){var r="number"==typeof t?t:50;return(3+r)*e*20*(Math.PI/180)/(Math.PI+r*Math.abs(e))}function ft(t,e,r){var n=function(r){for(var n=mt(1,r),a=2;a<t+2;a++)n+=e[a-2]*mt(a,r);return n};return n(r)-n(0)}var _t={f1_max:Number.NEGATIVE_INFINITY,init_processing:function(t){return t.f1_max=Number.NEGATIVE_INFINITY},step_processing:function(t,e){return t.f1_max=Math.max(t.f1_max,e)},post_processing:function(t,e){for(var r=0;r<e.length;r++)e[r]/=t.f1_max;return e}};function mt(t,e){return 0===t?1:1===t?e:2*e*mt(t-1,e)+mt(t-2,e)}function gt(t){this.mod.carrier.start()}function vt(t){this.mod.carrier.stop()}var yt=function(t){Object.assign(this,{mod:{},opts:Object.assign({modulator1_freq:7,modulator1_type:"sine",d1_gain:40,modulator2_freq:22,modulator2_type:"sine",d2_gain:20,mods_g:1,carrier_freq:100,carrier_type:"sine",carrier_g:1},t||{}),init:qt.bind(this),start:wt.bind(this),stop:Ot.bind(this)})};const bt=yt;function qt(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createGain(),c=e.createGain(),s=e.createOscillator(),u=e.createGain();return n.frequency.value=this.opts.modulator1_freq,this.opts.modulator1_freq_param=n.frequency,a.gain.value=this.opts.d1_gain,this.opts.d1_gain_param=a.gain,o.frequency.value=this.opts.modulator2_freq,this.opts.modulator2_freq_param=o.frequency,i.gain.value=this.opts.d2_gain,this.opts.d2_gain_param=i.gain,c.gain.value=this.opts.mods_g,this.opts.mods_g_param=c.gain,s.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=s.frequency,u.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=u.gain,s.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(s),n.type=this.opts.modulator1_type,this.opts.modulator1_type_enum=g(n),o.type=this.opts.modulator2_type,this.opts.modulator2_type_enum=g(o),n.connect(a),o.connect(i),a.connect(c),i.connect(c.gain),c.connect(s.frequency),s.connect(u),u.connect(r),Object.assign(this.mod,{m1:n,d1:a,m2:o,d2:i,mods_g:c,c:s,g:u}),window.FM1c2m=this.mod,t.show_docfrag?_(this,t):this}function wt(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.start()}))}function Ot(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.stop()}))}var xt=function(t){Object.assign(this,{mod:{},opts:Object.assign({modulator1_freq:7,modulator1_type:"sine",d1_gain:40,modulator2_freq:22,modulator2_type:"sine",d2_gain:20,mods_g:1,carrier_freq:100,carrier_type:"sine",carrier_g:1},t||{}),init:jt.bind(this),start:Ct.bind(this),stop:Lt.bind(this)})};const Et=xt;function jt(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createGain(),c=e.createGain(),s=e.createOscillator(),u=e.createGain();return n.frequency.value=this.opts.modulator1_freq,this.opts.modulator1_freq_param=n.frequency,a.gain.value=this.opts.d1_gain,this.opts.d1_gain_param=a.gain,o.frequency.value=this.opts.modulator2_freq,this.opts.modulator2_freq_param=o.frequency,i.gain.value=this.opts.d2_gain,this.opts.d2_gain_param=i.gain,c.gain.value=this.opts.mods_g,this.opts.mods_g_param=c.gain,s.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=s.frequency,s.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(s),n.type=this.opts.modulator1_type,this.opts.modulator1_type_enum=g(n),o.type=this.opts.modulator2_type,this.opts.modulator2_type_enum=g(o),u.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=u.gain,n.connect(a),o.connect(i),a.connect(o.frequency),i.connect(c),c.connect(s.frequency),s.connect(u),u.connect(r),Object.assign(this.mod,{m1:n,d1:a,m2:o,d2:i,mods_g:c,c:s,g:u}),window.FM1c2sm=this.mod,t.show_docfrag?_(this,t):this}function Ct(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.start()}))}function Lt(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.stop()}))}var Mt=function(t){Object.assign(this,{mod:{},opts:Object.assign({modulator_freq:7,modulator_type:"sine",d_gain:40,carrier1_freq:200,carrier1_type:"sine",carrier2_freq:40,carrier2_type:"sine",carrier_g:.1},t||{}),init:St.bind(this),start:Tt.bind(this),stop:Ft.bind(this)})};const At=Mt;function St(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createOscillator(),c=e.createGain();return n.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=n.frequency,a.gain.value=this.opts.d_gain,this.opts.d_gain_param=a.gain,o.frequency.value=this.opts.carrier1_freq,this.opts.carrier1_freq_param=o.frequency,i.frequency.value=this.opts.carrier2_freq,this.opts.carrier2_freq_param=i.frequency,c.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=c.gain,n.type=this.opts.modulator_type,this.opts.modulator_type_enum=g(n),o.type=this.opts.carrier1_type,this.opts.carrier1_type_enum=g(o),i.type=this.opts.carrier2_type,this.opts.carrier2_type_enum=g(i),n.connect(a),a.connect(o.frequency),a.connect(i.frequency),o.connect(c),i.connect(c.gain),c.connect(r),Object.assign(this.mod,{m:n,d:a,c1:o,c2:i,g:c}),window.FM2c1m=this.mod,t.show_docfrag?_(this,t):this}function Tt(t){var e=this.mod;[e.m,e.c1,e.c2].forEach((function(t){return t.start()}))}function Ft(t){var e=this.mod;[e.m,e.c1,e.c2].forEach((function(t){return t.stop()}))}var Gt=function(t){Object.assign(this,{mod:{},opts:Object.assign({m1_carrier_freq:80,m1_modulatr_freq:20,m1_d_gain:10,m1_carrier_g:.8,m2_carrier_freq:120,m2_modulator_freq:22,m2_d_gain:10,m2_carrier_g:.8,inst_g:1},t||{}),init:Nt.bind(this),start:It.bind(this),stop:Pt.bind(this)})};const kt=Gt;function Nt(t){var e=t.ctx,r=t.master_g,n=e.createGain(),a=new F({carrier_freq:this.opts.m1_carrier_freq,modulator_freq:this.opts.m1_modulatr_freq,d_gain:this.opts.m1_d_gain,master_g:n,show_docfrag:t.show_docfrag}),o=new F({carrier_freq:this.opts.m2_carrier_freq,modulator_freq:this.opts.m2_modulator_freq,d_gain:this.opts.m2_d_gain,master_g:n.gain,show_docfrag:t.show_docfrag});n.gain.value=this.opts.inst_g;var i=a.init(t),c=o.init(t);return n.connect(r),Object.assign(this.mod,{m1:a,m2:o}),window.FMAcim=this.mod,t.show_docfrag?function(t,e,r,n){var a=new DocumentFragment;return[r,n].forEach((function(t,e){var r=document.createElement("div"),n=e+1;r.classList.add("main-container","opt-container","fm-acim","mod-"+n);var o=document.createElement("div");o.classList.add("label"),o.textContent="FM MOD "+n,r.appendChild(o),r.appendChild(t),a.appendChild(r)})),a}(0,0,i,c):this}function It(t){var e=this;Object.keys(this.mod).forEach((function(t){var r=e.mod[t].mod;[r.carrier,r.modulator].forEach((function(t){return t.start()}))}))}function Pt(t){var e=this;Object.keys(this.mod).forEach((function(t){var r=e.mod[t].mod;[r.carrier,r.modulator].forEach((function(t){return t.stop()}))}))}var Rt=function(t){Object.assign(this,{mod:{},opts:Object.assign({mod_g:1,carrier_freq:100,carrier_type:"sine",carrier_g:1},t||{}),init:Wt.bind(this),start:Dt.bind(this),stop:Ht.bind(this)})};const Vt=Rt;function Wt(t){var e=t.ctx,r=t.master_g,n=e.createGain(),a=e.createOscillator(),o=e.createGain();return n.gain.value=this.opts.mod_g,this.opts.mod_g_param=n.gain,a.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=a.frequency,a.type=this.opts.carrier_type,this.opts.carrier_type_enum=g(a),o.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=o.gain,a.connect(o),o.connect(n),n.connect(a.frequency),o.connect(r),Object.assign(this.mod,{c:a,g:o,mod_g:n}),window.FM_selfc=this.mod,t.show_docfrag?_(this,t):this}function Dt(t){this.mod.c.start()}function Ht(t){this.mod.c.stop()}function Ut(t){return Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ut(t)}function Yt(){Yt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new E(a||[]);return n(i,"_invoke",{value:q(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function h(){}function d(){}function f(){}var _={};s(_,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(j([])));g&&g!==e&&r.call(g,o)&&(_=g);var v=f.prototype=h.prototype=Object.create(_);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function a(n,o,i,c){var s=p(t[n],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==Ut(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(l).then((function(t){u.value=t,i(u)}),(function(t){return a("throw",t,i,c)}))}c(s.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function q(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=p(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),l;var a=p(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,l;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=f,n(v,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:d,configurable:!0}),d.displayName=s(f,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,s(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(b.prototype),s(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),s(v,c,"Generator"),s(v,o,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function $t(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,a)}function zt(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){$t(o,n,a,i,c,"next",t)}function c(t){$t(o,n,a,i,c,"throw",t)}i(void 0)}))}}var Bt={};Bt.WS=s,Bt.RM=c,Bt.MixCrossfading=i,Bt.LinearCrossfading=o,Bt.FuzzyPhaser=a,Bt.FM=n,Bt.ChannelRouter2In6Out=e,Bt.AM=t;var Jt=Bt,Kt={};Kt.FMselfc=d,Kt.FMAcim=h,Kt.FM2c1m=l,Kt.FM1c2sm=p,Kt.FM1c2m=u;var Qt=Kt,Xt={};window.addEventListener("load",(function(){var t=document.querySelector(".trigger-btn"),e=document.querySelector(".selector"),r=document.querySelector(".controls"),n=Object.keys(Jt).concat(Object.keys(Qt)).reduce((function(t,e){return t[e]=(Jt[e]||Qt[e]).default,t}),{});e.innerHTML=Object.keys(n).map((function(t){return'<option value="'+t+'">'+t+"</option>"})).join(""),e.selectedIndex=0;var a={},o=function(){},i=function(){},c=function(){},s=function(){a=new n[e.value],o=a.init,i=a.start,c=a.stop};e.addEventListener("change",s),s();var u,p,l=!1;t.addEventListener("click",zt(Yt().mark((function t(){var n;return Yt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(l)console.info("Stopping module "+e.value+"..."),u.gain.setValueAtTime(u.gain.value,p.currentTime),u.gain.exponentialRampToValueAtTime(1e-9,p.currentTime+.25),setTimeout((function(){c(Xt),Xt.master_g.disconnect()}),300);else{for(Xt.ctx=Xt.ctx||new AudioContext,Xt.master_g=Xt.master_g||Xt.ctx.createGain(),Xt.master_g.connect(Xt.ctx.destination),Xt.show_docfrag=!0,Xt.container=r,u=Xt.master_g,p=Xt.ctx,console.info("Init module "+e.value+"..."),n=o(Xt);r.firstChild;)r.removeChild(r.firstChild);r.appendChild(n),console.info("Starting module "+e.value+"..."),u.gain.setValueAtTime(1e-7,p.currentTime),i(Xt),u.gain.exponentialRampToValueAtTime(1,p.currentTime+.25)}l=!l,e.disabled=l;case 3:case"end":return t.stop()}}),t)}))))}))})()})();