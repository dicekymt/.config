var bn=Object.create;var k=Object.defineProperty,vn=Object.defineProperties,En=Object.getOwnPropertyDescriptor,In=Object.getOwnPropertyDescriptors,Tn=Object.getOwnPropertyNames,Ie=Object.getOwnPropertySymbols,Pn=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty,Cn=Object.prototype.propertyIsEnumerable;var Te=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&Te(e,n,t[n]);if(Ie)for(var n of Ie(t))Cn.call(t,n)&&Te(e,n,t[n]);return e},b=(e,t)=>vn(e,In(t)),Ce=e=>k(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Gn=(e,t)=>{for(var n in t)k(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tn(t))!Pe.call(e,s)&&(n||s!=="default")&&k(e,s,{get:()=>t[s],enumerable:!(r=En(t,s))||r.enumerable});return e},Ae=(e,t)=>Ge(Ce(k(e!=null?bn(Pn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),An=(e=>(t,n)=>e&&e.get(t)||(n=Ge(Ce({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var qe=c((Cs,Oe)=>{Oe.exports=ke;ke.sync=Rn;var Ne=require("fs");function Nn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Re(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Nn(t,n)}function ke(e,t,n){Ne.stat(e,function(r,s){n(r,r?!1:Re(s,e,t))})}function Rn(e,t){return Re(Ne.statSync(e),e,t)}});var Me=c((Gs,Le)=>{Le.exports=$e;$e.sync=kn;var _e=require("fs");function $e(e,t,n){_e.stat(e,function(r,s){n(r,r?!1:Be(s,t))})}function kn(e,t){return Be(_e.statSync(e),t)}function Be(e,t){return e.isFile()&&On(e,t)}function On(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),p=a|l,S=n&d||n&l&&s===i||n&a&&r===o||n&p&&o===0;return S}});var Ue=c((Ns,je)=>{var As=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=qe():j=Me();je.exports=ee;ee.sync=qn;function ee(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){ee(e,t||{},function(o,i){o?s(o):r(i)})})}j(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function qn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ve=c((Rs,We)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Fe=require("path"),_n=I?";":":",De=Ue(),He=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Xe=(e,t)=>{let n=t.colon||_n,r=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=I?s.split(n):[""];return I&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Ke=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=Xe(e,t),i=[],a=d=>new Promise((p,S)=>{if(d===r.length)return t.all&&i.length?p(i):S(He(e));let h=r[d],y=/^".*"$/.test(h)?h.slice(1,-1):h,g=Fe.join(y,e),x=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+g:g;p(l(x,d,0))}),l=(d,p,S)=>new Promise((h,y)=>{if(S===s.length)return h(a(p+1));let g=s[S];De(d+g,{pathExt:o},(x,E)=>{if(!x&&E)if(t.all)i.push(d+g);else return h(d+g);return h(l(d,p,S+1))})});return n?a(0).then(d=>n(null,d),n):a(0)},$n=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=Xe(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=Fe.join(l,e),p=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let S=0;S<r.length;S++){let h=p+r[S];try{if(De.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw He(e)};We.exports=Ke;Ke.sync=$n});var ne=c((ks,te)=>{"use strict";var ze=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};te.exports=ze;te.exports.default=ze});var Je=c((Os,Ze)=>{"use strict";var Ye=require("path"),Bn=Ve(),Ln=ne();function Qe(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Bn.sync(e.command,{path:n[Ln({env:n})],pathExt:t?Ye.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ye.resolve(s?e.options.cwd:"",i)),i}function Mn(e){return Qe(e)||Qe(e,!0)}Ze.exports=Mn});var et=c((qs,se)=>{"use strict";var re=/([()\][%!^"`<>&|;, *?])/g;function jn(e){return e=e.replace(re,"^$1"),e}function Un(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(re,"^$1"),t&&(e=e.replace(re,"^$1")),e}se.exports.command=jn;se.exports.argument=Un});var nt=c((_s,tt)=>{"use strict";tt.exports=/^#!(.*)/});var st=c(($s,rt)=>{"use strict";var Fn=nt();rt.exports=(e="")=>{let t=e.match(Fn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var it=c((Bs,ot)=>{"use strict";var oe=require("fs"),Dn=st();function Hn(e){let n=Buffer.alloc(150),r;try{r=oe.openSync(e,"r"),oe.readSync(r,n,0,150,0),oe.closeSync(r)}catch{}return Dn(n.toString())}ot.exports=Hn});var lt=c((Ls,ut)=>{"use strict";var Xn=require("path"),at=Je(),ct=et(),Kn=it(),Wn=process.platform==="win32",Vn=/\.(?:com|exe)$/i,zn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Yn(e){e.file=at(e);let t=e.file&&Kn(e.file);return t?(e.args.unshift(e.file),e.command=t,at(e)):e.file}function Qn(e){if(!Wn)return e;let t=Yn(e),n=!Vn.test(t);if(e.options.forceShell||n){let r=zn.test(t);e.command=Xn.normalize(e.command),e.command=ct.command(e.command),e.args=e.args.map(o=>ct.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Zn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Qn(r)}ut.exports=Zn});var pt=c((Ms,ft)=>{"use strict";var ie=process.platform==="win32";function ae(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Jn(e,t){if(!ie)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=dt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function dt(e,t){return ie&&e===1&&!t.file?ae(t.original,"spawn"):null}function er(e,t){return ie&&e===1&&!t.file?ae(t.original,"spawnSync"):null}ft.exports={hookChildProcess:Jn,verifyENOENT:dt,verifyENOENTSync:er,notFoundError:ae}});var St=c((js,T)=>{"use strict";var mt=require("child_process"),ce=lt(),ue=pt();function ht(e,t,n){let r=ce(e,t,n),s=mt.spawn(r.command,r.args,r.options);return ue.hookChildProcess(s,r),s}function tr(e,t,n){let r=ce(e,t,n),s=mt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ue.verifyENOENTSync(s.status,r),s}T.exports=ht;T.exports.spawn=ht;T.exports.sync=tr;T.exports._parse=ce;T.exports._enoent=ue});var gt=c((Us,yt)=>{"use strict";yt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var bt=c((Fs,q)=>{"use strict";var O=require("path"),xt=ne(),wt=e=>{e=f({cwd:process.cwd(),path:process.env[xt()],execPath:process.execPath},e);let t,n=O.resolve(e.cwd),r=[];for(;t!==n;)r.push(O.join(n,"node_modules/.bin")),t=n,n=O.resolve(n,"..");let s=O.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(O.delimiter)};q.exports=wt;q.exports.default=wt;q.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=xt({env:t});return e.path=t[n],t[n]=q.exports(e),t}});var Et=c((Ds,le)=>{"use strict";var vt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};le.exports=vt;le.exports.default=vt});var Tt=c((Hs,F)=>{"use strict";var nr=Et(),U=new WeakMap,It=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(U.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return nr(o,e),U.set(o,r),o};F.exports=It;F.exports.default=It;F.exports.callCount=e=>{if(!U.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return U.get(e)}});var Pt=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.SIGNALS=void 0;var rr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];D.SIGNALS=rr});var de=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.SIGRTMAX=P.getRealtimeSignals=void 0;var sr=function(){let e=Gt-Ct+1;return Array.from({length:e},or)};P.getRealtimeSignals=sr;var or=function(e,t){return{name:`SIGRT${t+1}`,number:Ct+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ct=34,Gt=64;P.SIGRTMAX=Gt});var At=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var ir=require("os"),ar=Pt(),cr=de(),ur=function(){let e=(0,cr.getRealtimeSignals)();return[...ar.SIGNALS,...e].map(lr)};H.getSignals=ur;var lr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=ir.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Rt=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.signalsByNumber=C.signalsByName=void 0;var dr=require("os"),Nt=At(),fr=de(),pr=function(){return(0,Nt.getSignals)().reduce(mr,{})},mr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return b(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},hr=pr();C.signalsByName=hr;var Sr=function(){let e=(0,Nt.getSignals)(),t=fr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>yr(s,e));return Object.assign({},...n)},yr=function(e,t){let n=gr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},gr=function(e,t){let n=t.find(({name:r})=>dr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},xr=Sr();C.signalsByNumber=xr});var Ot=c((zs,kt)=>{"use strict";var{signalsByName:wr}=Rt(),br=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",vr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:p,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:wr[s].description,y=r&&r.code,x=`Command ${br({timedOut:l,timeout:S,errorCode:y,signal:s,signalDescription:h,exitCode:o,isCanceled:d})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",L=E?`${x}
${r.message}`:x,M=[L,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=M):r=new Error(M),r.shortMessage=L,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=d,r.killed=p&&!l,r};kt.exports=vr});var _t=c((Ys,fe)=>{"use strict";var X=["stdin","stdout","stderr"],Er=e=>X.some(t=>e[t]!==void 0),qt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(r=>e[r]);if(Er(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,X.length);return Array.from({length:n},(r,s)=>t[s])};fe.exports=qt;fe.exports.node=e=>{let t=qt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var $t=c((Qs,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Ut=c((Zs,N)=>{var u=global.process;typeof u!="object"||!u?N.exports=function(){}:(Bt=require("assert"),G=$t(),Lt=/^win/i.test(u.platform),_=require("events"),typeof _!="function"&&(_=_.EventEmitter),u.__signal_exit_emitter__?m=u.__signal_exit_emitter__:(m=u.__signal_exit_emitter__=new _,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),N.exports=function(e,t){if(global.process===u){Bt.equal(typeof e,"function","a callback must be provided for exit handler"),A===!1&&pe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&W()};return m.on(n,e),r}},W=function(){!A||global.process!==u||(A=!1,G.forEach(function(t){try{u.removeListener(t,V[t])}catch{}}),u.emit=z,u.reallyExit=me,m.count-=1)},N.exports.unload=W,v=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},V={},G.forEach(function(e){V[e]=function(){if(u===global.process){var n=u.listeners(e);n.length===m.count&&(W(),v("exit",null,e),v("afterexit",null,e),Lt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),N.exports.signals=function(){return G},A=!1,pe=function(){A||u!==global.process||(A=!0,m.count+=1,G=G.filter(function(t){try{return u.on(t,V[t]),!0}catch{return!1}}),u.emit=jt,u.reallyExit=Mt)},N.exports.load=pe,me=u.reallyExit,Mt=function(t){u===global.process&&(u.exitCode=t||0,v("exit",u.exitCode,null),v("afterexit",u.exitCode,null),me.call(u,u.exitCode))},z=u.emit,jt=function(t,n){if(t==="exit"&&u===global.process){n!==void 0&&(u.exitCode=n);var r=z.apply(this,arguments);return v("exit",u.exitCode,null),v("afterexit",u.exitCode,null),r}else return z.apply(this,arguments)});var Bt,G,Lt,_,m,W,v,V,A,pe,me,Mt,z,jt});var Dt=c((Js,Ft)=>{"use strict";var Ir=require("os"),Tr=Ut(),Pr=1e3*5,Cr=(e,t="SIGTERM",n={})=>{let r=e(t);return Gr(e,t,n,r),r},Gr=(e,t,n,r)=>{if(!Ar(t,n,r))return;let s=Rr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Ar=(e,{forceKillAfterTimeout:t},n)=>Nr(e)&&t!==!1&&n,Nr=e=>e===Ir.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Rr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Pr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},kr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Or=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},qr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Or(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},_r=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},$r=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Tr(()=>{e.kill()});return r.finally(()=>{s()})};Ft.exports={spawnedKill:Cr,spawnedCancel:kr,setupTimeout:qr,validateTimeout:_r,setExitHandler:$r}});var Xt=c((eo,Ht)=>{"use strict";var w=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";w.writable=e=>w(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";w.readable=e=>w(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";w.duplex=e=>w.writable(e)&&w.readable(e);w.transform=e=>w.duplex(e)&&typeof e._transform=="function";Ht.exports=w});var Wt=c((to,Kt)=>{"use strict";var{PassThrough:Br}=require("stream");Kt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new Br({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Vt=c((no,$)=>{"use strict";var{constants:Lr}=require("buffer"),Mr=require("stream"),{promisify:jr}=require("util"),Ur=Wt(),Fr=jr(Mr.pipeline),he=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function Se(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Ur(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Lr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await Fr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new he)})}),r.getBufferedValue()}$.exports=Se;$.exports.buffer=(e,t)=>Se(e,b(f({},t),{encoding:"buffer"}));$.exports.array=(e,t)=>Se(e,b(f({},t),{array:!0}));$.exports.MaxBufferError=he});var Yt=c((ro,zt)=>{"use strict";var{PassThrough:Dr}=require("stream");zt.exports=function(){var e=[],t=new Dr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var en=c((so,Jt)=>{"use strict";var Zt=Xt(),Qt=Vt(),Hr=Yt(),Xr=(e,t)=>{t===void 0||e.stdin===void 0||(Zt(t)?t.pipe(e.stdin):e.stdin.end(t))},Kr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Hr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},ye=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ge=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Qt(e,{encoding:t,maxBuffer:r}):Qt.buffer(e,{maxBuffer:r})},Wr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=ge(e,{encoding:r,buffer:s,maxBuffer:o}),l=ge(t,{encoding:r,buffer:s,maxBuffer:o}),d=ge(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},ye(e,a),ye(t,l),ye(n,d)])}},Vr=({input:e})=>{if(Zt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Jt.exports={handleInput:Xr,makeAllStream:Kr,getSpawnedResult:Wr,validateInputSync:Vr}});var nn=c((oo,tn)=>{"use strict";var zr=(async()=>{})().constructor.prototype,Yr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(zr,e)]),Qr=(e,t)=>{for(let[n,r]of Yr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,b(f({},r),{value:s}))}return e},Zr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});tn.exports={mergePromise:Qr,getSpawnedPromise:Zr}});var on=c((io,sn)=>{"use strict";var rn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Jr=/^[\w.-]+$/,es=/"/g,ts=e=>typeof e!="string"||Jr.test(e)?e:`"${e.replace(es,'\\"')}"`,ns=(e,t)=>rn(e,t).join(" "),rs=(e,t)=>rn(e,t).map(n=>ts(n)).join(" "),ss=/ +/g,os=e=>{let t=[];for(let n of e.trim().split(ss)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};sn.exports={joinCommand:ns,getEscapedCommand:rs,parseCommand:os}});var pn=c((ao,R)=>{"use strict";var is=require("path"),xe=require("child_process"),as=St(),cs=gt(),us=bt(),ls=Tt(),Y=Ot(),cn=_t(),{spawnedKill:ds,spawnedCancel:fs,setupTimeout:ps,validateTimeout:ms,setExitHandler:hs}=Dt(),{handleInput:Ss,getSpawnedResult:ys,makeAllStream:gs,validateInputSync:xs}=en(),{mergePromise:an,getSpawnedPromise:ws}=nn(),{joinCommand:un,parseCommand:ln,getEscapedCommand:dn}=on(),bs=1e3*1e3*100,vs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?us.env({env:o,cwd:r,execPath:s}):o},fn=(e,t,n={})=>{let r=as._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:bs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=vs(n),n.stdio=cn(n),process.platform==="win32"&&is.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},B=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?cs(t):t,Q=(e,t,n)=>{let r=fn(e,t,n),s=un(e,t),o=dn(e,t);ms(r.options);let i;try{i=xe.spawn(r.file,r.args,r.options)}catch(y){let g=new xe.ChildProcess,x=Promise.reject(Y({error:y,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return an(g,x)}let a=ws(i),l=ps(i,r.options,a),d=hs(i,r.options,l),p={isCanceled:!1};i.kill=ds.bind(null,i.kill.bind(i)),i.cancel=fs.bind(null,i,p);let h=ls(async()=>{let[{error:y,exitCode:g,signal:x,timedOut:E},L,M,wn]=await ys(i,r.options,d),we=B(r.options,L),be=B(r.options,M),ve=B(r.options,wn);if(y||g!==0||x!==null){let Ee=Y({error:y,exitCode:g,signal:x,stdout:we,stderr:be,all:ve,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Ee;throw Ee}return{command:s,escapedCommand:o,exitCode:0,stdout:we,stderr:be,all:ve,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return Ss(i,r.options.input),i.all=gs(i,r.options),an(i,h)};R.exports=Q;R.exports.sync=(e,t,n)=>{let r=fn(e,t,n),s=un(e,t),o=dn(e,t);xs(r.options);let i;try{i=xe.spawnSync(r.file,r.args,r.options)}catch(d){throw Y({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=B(r.options,i.stdout,i.error),l=B(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=Y({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[n,...r]=ln(e);return Q(n,r,t)};R.exports.commandSync=(e,t)=>{let[n,...r]=ln(e);return Q.sync(n,r,t)};R.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=cn.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Q(o,[...i,e,...Array.isArray(t)?t:[]],b(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Ts={};Gn(Ts,{default:()=>Is});var Sn=require("@raycast/api");var mn=Ae(require("node:process"),1),hn=Ae(pn(),1);async function Z(e){if(mn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,hn.default)("osascript",["-e",e]);return t}function yn(e){return`
    tell application "Spotify"
      if not application "Spotify" is running then
        activate

        set _maxOpenWaitTimeInSeconds to 5
        set _openCounter to 1
        repeat until application "Spotify" is running
          delay 1
          set _openCounter to _openCounter + 1
          if _openCounter > _maxOpenWaitTimeInSeconds then exit repeat
        end repeat
      end if
      ${e}
    end tell`}async function gn(e){await(0,Sn.closeMainWindow)(),await Z(e)}var J=require("@raycast/api");async function xn(){(0,J.getPreferenceValues)().previousTrackNotificationEnabled!==!1&&await Es()}async function Es(){let e=`
      if application "Spotify" is not running then
          return "Not playing"
      end if
    
      property currentTrackName : "Unknown Track"
      property currentTrackArtist : "Unknown Artist"
      property playerState : "stopped"
    
      tell application "Spotify"
          try
              set currentTrackName to name of the current track
              set currentTrackArtist to artist of the current track
              set playerState to player state as string
          end try
      end tell
      
      if playerState is "playing" then
        return currentTrackName & " by " & currentTrackArtist
      else if playerState is "paused" then
          return currentTrackName & " by " & currentTrackArtist & " (Paused)"
      else
          return "Not playing"
      end if`;try{let t=await Z(e);await(0,J.showHUD)("\u{1F3A7} "+t)}catch(t){console.error(t)}}var Is=async()=>{let e=yn("previous track");await gn(e),await xn()};module.exports=An(Ts);0&&(module.exports={});