!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.soundo=e():t.soundo=e()}(self,(()=>(()=>{"use strict";var t={m:{},d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},u:t=>t+".soundo.js"};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var a=n.length-1;a>-1&&!e;)e=n[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href;var e={};t.r(e),t.d(e,{default:()=>Qt,instruments:()=>Kt,operators:()=>Jt});var r={};t.r(r),t.d(r,{AM:()=>w,default:()=>E});var n={};t.r(n),t.d(n,{CHRouter2In6Out:()=>A,default:()=>F});var a={};t.r(a),t.d(a,{FM:()=>I,default:()=>T});var o={};t.r(o),t.d(o,{CHPhaser:()=>D,default:()=>U});var i={};t.r(i),t.d(i,{LinearCrossfading:()=>B,default:()=>J});var s={};t.r(s),t.d(s,{MixCrossfading:()=>tt,default:()=>et});var c={};t.r(c),t.d(c,{RM:()=>ot,default:()=>it});var u={};t.r(u),t.d(u,{WS:()=>pt,default:()=>_t});var p={};t.r(p),t.d(p,{FM1c2m:()=>qt,default:()=>bt});var _={};t.r(_),t.d(_,{FM1c2sm:()=>jt,default:()=>xt});var d={};t.r(d),t.d(d,{FM2c1m:()=>Ft,default:()=>Lt});var h={};t.r(h),t.d(h,{FMAcim:()=>Tt,default:()=>Nt});var l={};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}t.r(l),t.d(l,{FMselfc:()=>Pt,default:()=>Vt});var f=function(t,e,r){var n=new DocumentFragment;return Object.keys(t.opts).forEach((function(r){var a=q(t,e,r,"param"),o=q(t,e,r,"enum");a&&n.appendChild(a),o&&n.appendChild(o)})),r&&n.appendChild(r(t,e)),n},g=function(t,e,r,n){var a=t||new DocumentFragment;return Object.keys(e.opts).forEach((function(t){var n=q(e,r,t,"param"),o=q(e,r,t,"enum");n&&a.appendChild(n),o&&a.appendChild(o)})),n&&a.appendChild(n(e,r)),a},v=function(t){return{values:["sine","triangle","square","sawtooth"],onchange:function(e){return t.type=e}}},y=function(t,e){t&&Array.prototype.slice.call(t.childNodes).forEach((function(e){return t.removeChild(e)})),e&&(e.port.postMessage({type:"set_running",value:!1}),e.disconnect())};function q(t,e,r,n){var a={param:b,enum:O},o=t.opts[r+"_"+n];if(!o)return null;var i=document.createElement("div");return i.classList.add("container"),(o=Array.isArray(o)?o:[o]).forEach((function(s,c){var u=a[n](t,e,r,s,1===o.length?void 0:c);i.appendChild(u)})),i}function b(t,e,r,n,a){var o=e.ctx,i=t.opts[r],s=n.value||i;"object"===m(s)&&(s=s.value);var c=document.createElement("div");c.classList.add("container","param",r);var u=document.createElement("div");u.classList.add("label"),u.textContent=r+(void 0!==a?"-"+a:"");var p=document.createElement("input");return p.classList.add("input-val"),p.setAttribute("type","number"),p.setAttribute("min",i.min||"0"),i.max&&p.setAttribute("max",i.max),p.setAttribute("step",i.step||"0.1"),p.value=s,p.addEventListener("change",(function(){var e=t.opts[r+"_param"];e&&(e.cancelScheduledValues(o.currentTime),e.setValueAtTime(p.value,o.currentTime))})),c.appendChild(u),c.appendChild(p),c}function O(t,e,r,n,a){var o=n.value||t.opts[r],i=document.createElement("div");i.classList.add("container","enum",r);var s=document.createElement("div");s.classList.add("label"),s.textContent=r+(void 0!==a?"-"+a:"");var c=null;return"int"===n.values?((c=document.createElement("input")).classList.add("input-val"),c.setAttribute("type","number"),c.setAttribute("min","0"),c.setAttribute("step","0.1"),c.value=o,c.addEventListener("change",(function(){n.onchange(c.value)}))):Array.isArray(n.values)&&(c=document.createElement("select"),n.values.forEach((function(t){var e=document.createElement("option");e.value=t,e.textContent=t,c.appendChild(e)})),c.addEventListener("change",(function(){n.onchange(c.value)}))),c?(i.appendChild(s),i.appendChild(c),i):null}var w=function(t){Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",modulator_freq:10,modulator_type:"sine",carrier_g:.8,modulator_g:2},t||{}),init:j.bind(this),start:x.bind(this),stop:C.bind(this)})};const E=w;function j(t){var e=t.ctx,r=t.master_g,n=e.createGain(),a=e.createOscillator(),o=e.createGain(),i=e.createOscillator(),s=e.createGain();return a.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=a.frequency,i.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=i.frequency,a.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(a),i.type=this.opts.modulator_type,this.opts.modulator_type_enum=v(i),o.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=o.gain,s.gain.value=this.opts.modulator_g,this.opts.modulator_g_param=s.gain,i.connect(s).connect(o.gain),a.connect(o).connect(n).connect(r),Object.assign(this.mod,{g:n,carrier:a,c_g:o,modulator:i,m_g:s}),window.AM=this.mod,t.show_docfrag?f(this,t):this}function x(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.start()}))}function C(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.stop()}))}function M(t){return t}var A=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc_l_freq:110,osc_l_type:"sine",osc_l_gain_l:.8,osc_l_gain_r:.2,osc_r_freq:70,osc_r_type:"sine",osc_r_gain_l:.2,osc_r_gain_r:.8},t||{}),init:L.bind(this),start:G.bind(this),stop:S.bind(this)})};const F=A;function L(e){var r=this,n=e.ctx,a=e.master_g,o=new M(new URL(t.p+t.u(950),t.b));n.audioWorklet.addModule(o).then((function(){var t=new AudioWorkletNode(n,"channel-router-processor",{numberOfInputs:2,numberOfOutputs:1,outputChannelCount:[6]});t.port.postMessage({type:"set_channels_mapping",value:{0:0,1:1,2:0,3:1,4:0,5:1}}),t.channelCountMode="explicit",t.channelInterpretation="discrete",n.destination.channelCount=6,n.destination.channelCountMode="explicit",n.destination.channelInterpretation="discrete",a.channelCount=6,a.channelCountMode="explicit",a.channelInterpretation="discrete",c.connect(u).connect(i),c.connect(p).connect(s),_.connect(d).connect(i),_.connect(h).connect(s),i.connect(t,0,0).connect(a),s.connect(t,0,1).connect(a),Object.assign(r.mod,{chrNode:t})}));var i=n.createGain(),s=n.createGain(),c=n.createOscillator(),u=n.createGain(),p=n.createGain();c.frequency.value=this.opts.osc_l_freq,this.opts.osc_l_freq_param=c.frequency,c.type=this.opts.osc_l_type,this.opts.osc_l_type_enum=v(c),u.gain.value=this.opts.osc_l_gain_l,this.opts.osc_l_gain_l_param=u.gain,p.gain.value=this.opts.osc_l_gain_r,this.opts.osc_l_gain_r_param=p.gain;var _=n.createOscillator(),d=n.createGain(),h=n.createGain();_.frequency.value=this.opts.osc_r_freq,this.opts.osc_r_freq_param=_.frequency,_.type=this.opts.osc_r_type,this.opts.osc_r_type_enum=v(_),d.gain.value=this.opts.osc_r_gain_l,this.opts.osc_r_gain_l_param=d.gain,h.gain.value=this.opts.osc_r_gain_r,this.opts.osc_r_gain_r_param=h.gain,window.CHRouter2In6Out=this.mod,Object.assign(this.mod,{osc_l:c,osc_l_gl:u,osc_l_gr:p,osc_r:_,osc_r_gl:d,osc_r_gr:h});var l=this;return e.show_docfrag&&(l=f(this,e)),l}function G(t){var e=this.mod;[e.osc_l,e.osc_r].forEach((function(t){return t.start()}))}function S(t){var e=t.ctx,r=t.master_g,n=t.container;e.destination.channelCount=2,e.destination.channelCountMode="max",e.destination.channelInterpretation="speakers",r.channelCount=2,r.channelCountMode="max",r.channelInterpretation="speakers";var a=this.mod,o=a.osc_l,i=a.osc_r,s=a.chrNode;[o,i].forEach((function(t){return t.stop()})),y(n,s)}var I=function(t){Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",modulator_freq:10,modulator_type:"sine",d_gain:40,carrier_g:.8},t||{}),init:N.bind(this),start:k.bind(this),stop:R.bind(this)})};const T=I;function N(t){var e=this,r=t.ctx,n=t.master_g,a=r.createOscillator(),o=r.createGain(),i=r.createOscillator(),s=r.createGain();return a.frequency.value=this.opts.carrier_freq,i.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=i.frequency,a.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(a),i.type=this.opts.modulator_type,this.opts.modulator_type_enum=v(i),s.gain.value=this.opts.d_gain,this.opts.d_gain_param=s.gain,o.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=o.gain,i.connect(s).connect(a.frequency),a.connect(o).connect(n),Object.assign(this.mod,{carrier:a,c_g:o,modulator:i,d:s,change_i:function(t,e){return i.frequency.value=e||i.frequency.value,s.gain.value=i.frequency.value*t,{d_gain:s.gain.value}},change_i_exp:function(t,e,n){i.frequency.value=e||i.frequency.value;var a=i.frequency.value*t;return s.gain.cancelScheduledValues(r.currentTime),s.gain.setValueAtTime(s.gain.value,r.currentTime),s.gain.exponentialRampToValueAtTime(a,r.currentTime+n),{d_gain:s.gain.value}},change_pitch:function(t){a.frequency.value=t;var r=t*i.frequency.value/a.frequency.value,n=s.gain.value/i.frequency.value;return{mod_freq:r,ratio_tobe_kept:n,d_gain:e.mod.change_i(n,r).d_gain}},change_pitch_exp:function(t,n){a.frequency.setValueAtTime(a.frequency.value,r.currentTime),a.frequency.exponentialRampToValueAtTime(t,r.currentTime+n);var o=t*i.frequency.value/a.frequency.value,c=s.gain.value/i.frequency.value;return{mod_freq:o,ratio_tobe_kept:c,d_gain:e.mod.change_i_exp(c,o,n).d_gain}}}),window.FM=this.mod,t.show_docfrag?f(this,t,W):this}function k(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.start()}))}function R(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.stop()}))}function W(t,e){var r=new DocumentFragment;return["change_i","change_pitch"].forEach((function(e){var n=document.createElement("div");n.classList.add("container");var a=document.createElement("div");a.classList.add("label"),a.textContent=e;var o="change_i"===e?function(){var e=document.createElement("div");return e.classList.add("container","container-opts","change-i"),["ratio","time"].forEach((function(r){var n=document.createElement("div");n.classList.add("opt-container",r);var a=document.createElement("div");a.textContent=r;var o=document.createElement("input");o.classList.add("input-val"),o.value="ratio"===r?t.mod.d.gain.value/t.mod.modulator.frequency.value:0,o.setAttribute("type","number"),o.setAttribute("min","0"),o.setAttribute("step","time"===r?"1":"0.1"),o.addEventListener("change",(function(){var r=P(e),n=parseInt(r.querySelector(".change-i > .time > .input-val").value),a=parseFloat(r.querySelector(".change-i > .ratio > .input-val").value),o=r.querySelector(".d_gain > .input-val"),i=t.mod.modulator.frequency.value,s=t.mod[n?"change_i_exp":"change_i"](a,i,n).d_gain;o.value=s})),n.appendChild(a),n.appendChild(o),e.appendChild(n)})),e}():function(){var e=document.createElement("div");return e.classList.add("container","container-opts","change-pitch"),["carrier_freq","time"].forEach((function(r){var n=document.createElement("div");n.classList.add("opt-container",r);var a=document.createElement("div");a.textContent=r;var o=document.createElement("input");o.classList.add("input-val"),o.value="carrier_freq"===r?t.mod.carrier.frequency.value:0,o.setAttribute("type","number"),o.setAttribute("min","0"),o.setAttribute("step","time"===r?"1":"0.1"),o.addEventListener("change",(function(){var r=P(e),n=parseInt(r.querySelector(".change-pitch > .time > .input-val").value),a=parseFloat(r.querySelector(".change-pitch > .carrier_freq > .input-val").value),o=r.querySelector(".change-i > .ratio > .input-val"),i=r.querySelector(".modulator_freq > .input-val"),s=r.querySelector(".d_gain > .input-val"),c=t.mod[n?"change_pitch_exp":"change_pitch"](a,n),u=c.ratio_tobe_kept,p=c.mod_freq,_=c.d_gain;o.value=u,i.value=p,s.value=_})),n.appendChild(a),n.appendChild(o),e.appendChild(n)})),e}();n.appendChild(a),n.appendChild(o),r.appendChild(n)})),r}function P(t){return t.classList.contains("controls")||t.classList.contains("main-container")?t:P(t.parentElement)}var V=null,D=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc_freq:220,osc_type:"sine",chp_freq:5.7},t||{}),init:H.bind(this),start:$.bind(this),stop:z.bind(this)})};const U=D;function H(e){var r=this,n=e.ctx,a=e.master_g,o=new M(new URL(t.p+t.u(62),t.b));n.audioWorklet.addModule(o).then((function(){var t=new AudioWorkletNode(n,"ch-phaser-processor",{numberOfOutputs:1,outputChannelCount:[2]}),o=!0;r.opts.chp_freq_param&&(o=!1);var s=t.parameters.get("frequency");if(s.value=r.opts.chp_freq,r.opts.chp_freq_param=s,i.connect(t).connect(a),Object.assign(r.mod,{chpNode:t}),e.show_docfrag&&e.container&&o){var c=g(V,{opts:{chp_freq:r.opts.chp_freq,chp_freq_param:r.opts.chp_freq_param}},e);e.container.appendChild(c)}}));var i=n.createOscillator();i.frequency.value=this.opts.osc_freq,this.opts.osc_freq_param=i.frequency,i.type=this.opts.osc_type,this.opts.osc_type_enum=v(i),window.CHPhaser=this.mod,Object.assign(this.mod,{osc:i});var s=this;return e.show_docfrag&&(s=V=f(this,e)),s}function $(t){this.mod.osc.start()}function z(t){var e=this.mod,r=e.osc,n=e.chpNode;r.stop(),y(t.container,n),V=null}var Y=null,B=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc1_freq:220,osc1_type:"sine",osc2_freq:110,osc2_type:"sine",cf_amount:.5},t||{}),init:K.bind(this),start:Q.bind(this),stop:X.bind(this)})};const J=B;function K(e){var r=this,n=e.ctx,a=e.master_g,o=n.createOscillator();o.frequency.value=this.opts.osc1_freq,this.opts.osc1_freq_param=o.frequency,o.type=this.opts.osc1_type,this.opts.osc1_type_enum=v(o);var i=n.createOscillator();i.frequency.value=this.opts.osc2_freq,this.opts.osc2_freq_param=i.frequency,i.type=this.opts.osc2_type,this.opts.osc2_type_enum=v(i);var s=new M(new URL(t.p+t.u(375),t.b));n.audioWorklet.addModule(s).then((function(){var t=new AudioWorkletNode(n,"linear-crossfading-processor",{numberOfInputs:2,numberOfOutputs:2}),s=!0;r.opts.cf_amount_param&&(s=!1);var c=t.parameters.get("amount");if(c.value=r.opts.cf_amount,r.opts.cf_amount_param=c,o.connect(t),i.connect(t,0,1),t.connect(a),Object.assign(r.mod,{cfpNode:t}),e.show_docfrag&&e.container&&s){var u=g(Y,{opts:{cf_amount:r.opts.cf_amount,cf_amount_param:r.opts.cf_amount_param}},e);e.container.appendChild(u)}})),window.LinearCrossfading=this.mod,Object.assign(this.mod,{osc_1:o,osc_2:i});var c=this;return e.show_docfrag&&(c=Y=f(this,e)),c}function Q(t){var e=this.mod;[e.osc_1,e.osc_2].forEach((function(t){return t.start()}))}function X(t){var e=this.mod,r=e.osc_1,n=e.osc_2,a=e.cfpNode;[r,n].forEach((function(t){return t.stop()})),y(t.container,a),Y=null}var Z=null,tt=function(t){Object.assign(this,{mod:{},opts:Object.assign({osc1_freq:2,osc1_type:"sawtooth",osc2_freq:3.5,osc2_type:"square",cf_amount:{value:.2,max:1},cf_mix_length:{value:.01,step:.01}},t||{}),init:rt.bind(this),start:nt.bind(this),stop:at.bind(this)})};const et=tt;function rt(e){var r=this,n=e.ctx,a=e.master_g,o=n.createOscillator();o.frequency.value=this.opts.osc1_freq,this.opts.osc1_freq_param=o.frequency,o.type=this.opts.osc1_type,this.opts.osc1_type_enum=v(o);var i=n.createOscillator();i.frequency.value=this.opts.osc2_freq,this.opts.osc2_freq_param=i.frequency,i.type=this.opts.osc2_type,this.opts.osc2_type_enum=v(i);var s=new M(new URL(t.p+t.u(693),t.b));n.audioWorklet.addModule(s).then((function(){var t=new AudioWorkletNode(n,"mix-crossfading-processor",{numberOfInputs:2,numberOfOutputs:2}),s=!0;r.opts.cf_amount_param&&(s=!1);var c=t.parameters.get("amount");c.value=r.opts.cf_amount.value,r.opts.cf_amount_param=c;var u=t.parameters.get("mix_length");if(u.value=r.opts.cf_mix_length.value,r.opts.cf_mix_length_param=u,o.connect(t),i.connect(t,0,1),t.connect(a),Object.assign(r.mod,{cfpNode:t}),e.show_docfrag&&e.container&&s){var p=g(Z,{opts:{cf_amount:r.opts.cf_amount,cf_amount_param:r.opts.cf_amount_param,cf_mix_length:r.opts.cf_mix_length,cf_mix_length_param:r.opts.cf_mix_length_param}},e);e.container.appendChild(p)}})),window.MixCrossfading=this.mod,Object.assign(this.mod,{osc_1:o,osc_2:i});var c=this;return e.show_docfrag&&(c=Z=f(this,e)),c}function nt(t){var e=this.mod;[e.osc_1,e.osc_2].forEach((function(t){return t.start()}))}function at(t){var e=this.mod,r=e.osc_1,n=e.osc_2,a=e.cfpNode;[r,n].forEach((function(t){return t.stop()})),y(t.container,a),Z=null}var ot=function(t){return Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",modulator_freq:10,modulator_type:"sine",carrier_g:.8,modulator_g:2},t||{}),init:st.bind(this),start:ct.bind(this),stop:ut.bind(this)})};const it=ot;function st(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createGain();return n.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=n.frequency,o.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=o.frequency,n.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(n),o.type=this.opts.modulator_type,this.opts.modulator_type_enum=v(o),a.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=a.gain,i.gain.value=this.opts.modulator_g,this.opts.modulator_g_param=i.gain,o.connect(i).connect(a),n.connect(a).connect(r),Object.assign(this.mod,{carrier:n,c_g:a,modulator:o,m_g:i}),window.RM=this.mod,t.show_docfrag?f(this,t):this}function ct(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.start()}))}function ut(t){var e=this.mod;[e.carrier,e.modulator].forEach((function(t){return t.stop()}))}var pt=function(t){Object.assign(this,{mod:{},opts:Object.assign({carrier_freq:220,carrier_type:"sine",carrier_g:1,shaping_amount:4,shaping_harmonics:[.1,.1,.1,.1,.1],shaping_fn:"distortion"},t||{}),init:dt.bind(this),start:vt.bind(this),stop:yt.bind(this)})};const _t=pt;function dt(t){var e=this,r=t.ctx,n=t.master_g,a=r.createWaveShaper(),o=r.createOscillator(),i=r.createGain();o.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=o.frequency,o.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(o),i.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=i.gain;var s=this.opts.shaping_harmonics.length,c=this.opts.shaping_harmonics,u=this.opts.shaping_amount,p={distortion:{fn:lt,set_args:function(t,r){return t.bind(null,parseFloat(r||e.opts.shaping_amount))}},chebishev:{fn:mt,set_args:function(t,e){return Object.assign(t.bind(null,s,c.map((function(t){return t*parseFloat(e||1)}))),Object.assign({},ft))}}},_=p[this.opts.shaping_fn];return a.curve=ht(r,_.set_args(_.fn)),this.opts.shaping_harmonics_enum=c.map((function(t,e){return{values:"int",value:t,onchange:function(t){c[e]=parseFloat(t),a.curve=ht(r,_.set_args(_.fn,u))}}})),this.opts.shaping_amount_enum={values:"int",onchange:function(t){u=parseFloat(t),a.curve=ht(r,_.set_args(_.fn,u))}},this.opts.shaping_fn_enum={values:["distortion","chebishev"],onchange:function(t){_=p[t],a.curve=ht(r,_.set_args(_.fn,u))}},o.connect(i).connect(a).connect(n),Object.assign(this.mod,{carrier:o,c_g:i,ws:a}),window.WS=this.mod,t.show_docfrag?f(this,t):this}function ht(t,e){var r=t.sampleRate,n=new Float32Array(r);e.init_processing&&e.init_processing(e);for(var a=0;a<r;a++){var o=2*a/r-1;n[a]=e(o),e.step_processing&&e.step_processing(e,n[a])}return e.post_processing?e.post_processing(e,n):n}function lt(t,e){var r="number"==typeof t?t:50;return(3+r)*e*20*(Math.PI/180)/(Math.PI+r*Math.abs(e))}function mt(t,e,r){var n=function(r){for(var n=gt(1,r),a=2;a<t+2;a++)n+=e[a-2]*gt(a,r);return n};return n(r)-n(0)}var ft={f1_max:Number.NEGATIVE_INFINITY,init_processing:function(t){return t.f1_max=Number.NEGATIVE_INFINITY},step_processing:function(t,e){return t.f1_max=Math.max(t.f1_max,e)},post_processing:function(t,e){for(var r=0;r<e.length;r++)e[r]/=t.f1_max;return e}};function gt(t,e){return 0===t?1:1===t?e:2*e*gt(t-1,e)+gt(t-2,e)}function vt(t){this.mod.carrier.start()}function yt(t){this.mod.carrier.stop()}var qt=function(t){Object.assign(this,{mod:{},opts:Object.assign({modulator1_freq:7,modulator1_type:"sine",d1_gain:40,modulator2_freq:22,modulator2_type:"sine",d2_gain:20,mods_g:1,carrier_freq:100,carrier_type:"sine",carrier_g:1},t||{}),init:Ot.bind(this),start:wt.bind(this),stop:Et.bind(this)})};const bt=qt;function Ot(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createGain(),s=e.createGain(),c=e.createOscillator(),u=e.createGain();return n.frequency.value=this.opts.modulator1_freq,this.opts.modulator1_freq_param=n.frequency,a.gain.value=this.opts.d1_gain,this.opts.d1_gain_param=a.gain,o.frequency.value=this.opts.modulator2_freq,this.opts.modulator2_freq_param=o.frequency,i.gain.value=this.opts.d2_gain,this.opts.d2_gain_param=i.gain,s.gain.value=this.opts.mods_g,this.opts.mods_g_param=s.gain,c.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=c.frequency,u.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=u.gain,c.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(c),n.type=this.opts.modulator1_type,this.opts.modulator1_type_enum=v(n),o.type=this.opts.modulator2_type,this.opts.modulator2_type_enum=v(o),n.connect(a),o.connect(i),a.connect(s),i.connect(s.gain),s.connect(c.frequency),c.connect(u),u.connect(r),Object.assign(this.mod,{m1:n,d1:a,m2:o,d2:i,mods_g:s,c,g:u}),window.FM1c2m=this.mod,t.show_docfrag?f(this,t):this}function wt(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.start()}))}function Et(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.stop()}))}var jt=function(t){Object.assign(this,{mod:{},opts:Object.assign({modulator1_freq:7,modulator1_type:"sine",d1_gain:40,modulator2_freq:22,modulator2_type:"sine",d2_gain:20,mods_g:1,carrier_freq:100,carrier_type:"sine",carrier_g:1},t||{}),init:Ct.bind(this),start:Mt.bind(this),stop:At.bind(this)})};const xt=jt;function Ct(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createGain(),s=e.createGain(),c=e.createOscillator(),u=e.createGain();return n.frequency.value=this.opts.modulator1_freq,this.opts.modulator1_freq_param=n.frequency,a.gain.value=this.opts.d1_gain,this.opts.d1_gain_param=a.gain,o.frequency.value=this.opts.modulator2_freq,this.opts.modulator2_freq_param=o.frequency,i.gain.value=this.opts.d2_gain,this.opts.d2_gain_param=i.gain,s.gain.value=this.opts.mods_g,this.opts.mods_g_param=s.gain,c.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=c.frequency,c.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(c),n.type=this.opts.modulator1_type,this.opts.modulator1_type_enum=v(n),o.type=this.opts.modulator2_type,this.opts.modulator2_type_enum=v(o),u.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=u.gain,n.connect(a),o.connect(i),a.connect(o.frequency),i.connect(s),s.connect(c.frequency),c.connect(u),u.connect(r),Object.assign(this.mod,{m1:n,d1:a,m2:o,d2:i,mods_g:s,c,g:u}),window.FM1c2sm=this.mod,t.show_docfrag?f(this,t):this}function Mt(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.start()}))}function At(t){var e=this.mod;[e.m1,e.m2,e.c].forEach((function(t){return t.stop()}))}var Ft=function(t){Object.assign(this,{mod:{},opts:Object.assign({modulator_freq:7,modulator_type:"sine",d_gain:40,carrier1_freq:200,carrier1_type:"sine",carrier2_freq:40,carrier2_type:"sine",carrier_g:.1},t||{}),init:Gt.bind(this),start:St.bind(this),stop:It.bind(this)})};const Lt=Ft;function Gt(t){var e=t.ctx,r=t.master_g,n=e.createOscillator(),a=e.createGain(),o=e.createOscillator(),i=e.createOscillator(),s=e.createGain();return n.frequency.value=this.opts.modulator_freq,this.opts.modulator_freq_param=n.frequency,a.gain.value=this.opts.d_gain,this.opts.d_gain_param=a.gain,o.frequency.value=this.opts.carrier1_freq,this.opts.carrier1_freq_param=o.frequency,i.frequency.value=this.opts.carrier2_freq,this.opts.carrier2_freq_param=i.frequency,s.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=s.gain,n.type=this.opts.modulator_type,this.opts.modulator_type_enum=v(n),o.type=this.opts.carrier1_type,this.opts.carrier1_type_enum=v(o),i.type=this.opts.carrier2_type,this.opts.carrier2_type_enum=v(i),n.connect(a),a.connect(o.frequency),a.connect(i.frequency),o.connect(s),i.connect(s.gain),s.connect(r),Object.assign(this.mod,{m:n,d:a,c1:o,c2:i,g:s}),window.FM2c1m=this.mod,t.show_docfrag?f(this,t):this}function St(t){var e=this.mod;[e.m,e.c1,e.c2].forEach((function(t){return t.start()}))}function It(t){var e=this.mod;[e.m,e.c1,e.c2].forEach((function(t){return t.stop()}))}var Tt=function(t){Object.assign(this,{mod:{},opts:Object.assign({m1_carrier_freq:80,m1_modulatr_freq:20,m1_d_gain:10,m1_carrier_g:.8,m2_carrier_freq:120,m2_modulator_freq:22,m2_d_gain:10,m2_carrier_g:.8,inst_g:1},t||{}),init:kt.bind(this),start:Rt.bind(this),stop:Wt.bind(this)})};const Nt=Tt;function kt(t){var e=t.ctx,r=t.master_g,n=e.createGain(),a=new I({carrier_freq:this.opts.m1_carrier_freq,modulator_freq:this.opts.m1_modulatr_freq,d_gain:this.opts.m1_d_gain,master_g:n,show_docfrag:t.show_docfrag}),o=new I({carrier_freq:this.opts.m2_carrier_freq,modulator_freq:this.opts.m2_modulator_freq,d_gain:this.opts.m2_d_gain,master_g:n.gain,show_docfrag:t.show_docfrag});n.gain.value=this.opts.inst_g;var i=a.init(t),s=o.init(t);return n.connect(r),Object.assign(this.mod,{m1:a,m2:o}),window.FMAcim=this.mod,t.show_docfrag?function(t,e,r,n){var a=new DocumentFragment;return[r,n].forEach((function(t,e){var r=document.createElement("div"),n=e+1;r.classList.add("main-container","opt-container","fm-acim","mod-"+n);var o=document.createElement("div");o.classList.add("label"),o.textContent="FM MOD "+n,r.appendChild(o),r.appendChild(t),a.appendChild(r)})),a}(0,0,i,s):this}function Rt(t){var e=this;Object.keys(this.mod).forEach((function(t){var r=e.mod[t].mod;[r.carrier,r.modulator].forEach((function(t){return t.start()}))}))}function Wt(t){var e=this;Object.keys(this.mod).forEach((function(t){var r=e.mod[t].mod;[r.carrier,r.modulator].forEach((function(t){return t.stop()}))}))}var Pt=function(t){Object.assign(this,{mod:{},opts:Object.assign({mod_g:1,carrier_freq:100,carrier_type:"sine",carrier_g:1},t||{}),init:Dt.bind(this),start:Ut.bind(this),stop:Ht.bind(this)})};const Vt=Pt;function Dt(t){var e=t.ctx,r=t.master_g,n=e.createGain(),a=e.createOscillator(),o=e.createGain();return n.gain.value=this.opts.mod_g,this.opts.mod_g_param=n.gain,a.frequency.value=this.opts.carrier_freq,this.opts.carrier_freq_param=a.frequency,a.type=this.opts.carrier_type,this.opts.carrier_type_enum=v(a),o.gain.value=this.opts.carrier_g,this.opts.carrier_g_param=o.gain,a.connect(o),o.connect(n),n.connect(a.frequency),o.connect(r),Object.assign(this.mod,{c:a,g:o,mod_g:n}),window.FM_selfc=this.mod,t.show_docfrag?f(this,t):this}function Ut(t){this.mod.c.start()}function Ht(t){this.mod.c.stop()}var $t={};$t.WS=u,$t.RM=c,$t.MixCrossfading=s,$t.LinearCrossfading=i,$t.FuzzyPhaser=o,$t.FM=a,$t.ChannelRouter2In6Out=n,$t.AM=r;var zt=$t,Yt={};Yt.FMselfc=l,Yt.FMAcim=h,Yt.FM2c1m=d,Yt.FM1c2sm=_,Yt.FM1c2m=p;var Bt=Yt,Jt={},Kt={};Object.keys(zt).forEach((function(t){Jt[t]=opts[t].default})),Object.keys(Bt).forEach((function(t){Kt[t]=Bt[t].default}));const Qt={operators:Jt,instruments:Kt};return e})()));