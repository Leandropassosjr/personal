(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[184],{184:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>P});var r=n(43),a=n(475),s=n(551),i=n(579);const o=e=>{let{data:t}=e;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((e=>(0,i.jsx)(o,{data:e},e.school)))]})};c.defaultProps={data:[]};const l=c;var u=n(446),d=n.n(u),h=n(574);const m=e=>{let{data:{name:t,position:n,url:r,startDate:a,endDate:s,summary:o,highlights:c}}=e;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:r,children:t})," - ",n]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",d()(a).format("MMMM YYYY")," - ",s?d()(s).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,i.jsx)(h.Ay,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,c?(0,i.jsx)("ul",{className:"points",children:c.map((e=>(0,i.jsx)("li",{children:e},e)))}):null]})},g=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,i.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};g.defaultProps={data:[]};const y=g,f=e=>{let{handleClick:t,active:n,label:r}=e;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:()=>t(r),children:r})},p=e=>{let{data:t,categories:n}=e;const{category:r,competency:a,title:s}=t,o={background:n.filter((e=>r.includes(e.name))).map((e=>e.color))[0]},c={...o,width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")};return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:o,children:(0,i.jsx)("span",{children:s})}),(0,i.jsx)("div",{className:"skillbar-bar",style:c}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};p.defaultProps={categories:[]};const v=p,$=e=>{let{skills:t,categories:n}=e;const a=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[s,o]=(0,r.useState)(a),c=e=>{const t=Object.keys(s).reduce(((t,n)=>({...t,[n]:e===n&&!s[n]})),{});t.All=!Object.keys(s).some((e=>t[e])),o(t)};return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Skills"})}),(0,i.jsx)("div",{className:"skill-button-container",children:Object.keys(s).map((e=>(0,i.jsx)(f,{label:e,active:s,handleClick:c},e)))}),(0,i.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(s).reduce(((e,t)=>s[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,i.jsx)(v,{categories:n,data:e},e.title)))})()})]})};$.defaultProps={skills:[],categories:[]};const M=$,b=()=>(0,i.jsxs)("div",{className:"references",children:[(0,i.jsx)("div",{className:"link-to",id:"references"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(a.N_,{to:"/contact",children:(0,i.jsx)("h3",{children:"References are available upon request"})})})]}),S=[{school:"Federal University of S\xe3o Carlos (UFSCAR)",degree:"Ph.D. in Computer Science",link:"https://www.ufscar.br/",year:2018},{school:'S\xe3o Paulo state University "Julio de Mesquita Filho" (UNESP)',degree:"M.S. Computer Science",link:"https://www.bauru.unesp.br/",year:2015},{school:"Jahu's Faculty of Technology (FATEC)",degree:"Undergraduate in Applied computing with an emphasis on Industrial Production Management",link:"https://fatecjahu.edu.br/",year:2009}],j=[{name:"S\xe3o Paulo state University (UNESP)",position:"Postdoctorate Research in Machine Learning",url:"https://www.bauru.unesp.br/",startDate:"2023-07-01",summary:'Main researcher of a FAPESP project entitled "On the Study and Development of Biological Plausible Computational Intelligent Models" through a Continuous Funding Stream Fellowship project.',highlights:["Development of more biologically plausible Machine Learning algorithms.","Study of recent discoveries on neurosciency.","Supervision and co-supervision of undergraduate, master's and Ph.D. Students."]},{name:"University of Wolverhamptom",position:"Postdoctorate Research in Machine Learning",url:"https://www.wlv.ac.uk/",startDate:"2021-10-10",endDate:"2022-12-07",summary:'Researcher of an EPSRC project entitled "COG-MHEAR. Towards cognitively-inspired 5G-IoT enabled, multi-modal Hearing Aids."',highlights:["Development of multimodal audio-visual speech enhancement (AVSE) algorithms.","Development of more biologically plausible Machine Learning algorithms for AVSE."]},{name:"S\xe3o Paulo state University (UNESP)",position:"Lecturer and Postdoctorate Research in Machine Learning",url:"https://www.bauru.unesp.br/",startDate:"2018-12",endDate:"2020-01",summary:'Researcher of a Petrobras P&D project entitled "Workplace safety aided by AI: Entrance control of high-risk environments using biometrics and Personal Protective Equipment (PPE) recognition on an embedded system."',highlights:["Teaching the following courses: Algorithms' complexity,  Intelligent Systems, Database Sysmtems I, and Database Sysmtems II","Development of computer vision systems for risk environment monitoring.","Supervision and co-supervision of undergraduate, master's and Ph.D. Students."]},{name:"STi3 Solu\xe7\xf5es  de Ti",position:"Computer programmer",url:"https://www.sti3.com.br/",startDate:"2010-04",endDate:"2013-02",summary:"Developer of computer systems for sales and retail in general.",highlights:["Design and development of computer systems using VB6, C#, and JAVA.","MySQL database modelling, management, and administration"]}],x=[{title:"Javascript",competency:1,category:["Programming Languages"]},{title:"LaTex",competency:5,category:["Programming Languages","Tools"]},{title:"Bash",competency:4,category:["Tools","Programming Languages"]},{title:"MySQL",competency:5,category:["Programming Languages","Databases"]},{title:"SQL",competency:5,category:["Databases","Programming Languages"]},{title:"Database Administration",competency:4,category:["Databases"]},{title:"Streamlit",competency:3,category:["Python","Tools"]},{title:"Git",competency:4,category:["Tools"]},{title:"Docker",competency:1,category:["Tools"]},{title:"Numpy",competency:5,category:["Python","Machine Learning"]},{title:"Tensorflow + Keras",competency:3,category:["Machine Learning","Python"]},{title:"PyTorch",competency:5,category:["Machine Learning","Python"]},{title:"Jupyter",competency:5,category:["Machine Learning","Python"]},{title:"Typescript",competency:1,category:["Programming Languages"]},{title:"Python",competency:5,category:["Programming Languages","Python","Machine Learning"]},{title:"C++",competency:3,category:["Programming Languages"]},{title:"C#",competency:3,category:["Programming Languages"]},{title:"C",competency:4,category:["Programming Languages"]},{title:"MATLAB",competency:1,category:["Programming Languages"]},{title:"Data Visualization",competency:3,category:["Machine Learning","Python"]},{title:"Pandas",competency:4,category:["Machine Learning","Python"]},{title:"Matplotlib",competency:5,category:["Machine Learning","Python"]},{title:"Scikit-Learn",competency:5,category:["Machine Learning","Python"]},{title:"Spark",competency:2,category:["Machine Learning"]},{title:"Portuguese",competency:5,category:["Languages"]},{title:"English",competency:5,category:["Languages"]},{title:"Spanish",competency:3,category:["Languages"]},{title:"German",competency:2,category:["Languages"]}].map((e=>({...e,category:e.category.sort()}))),D=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],k=[...new Set(x.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:D[t]}))),w={Education:()=>(0,i.jsx)(l,{data:S}),Experience:()=>(0,i.jsx)(y,{data:j}),Skills:()=>(0,i.jsx)(M,{skills:x,categories:k}),References:()=>(0,i.jsx)(b,{})},P=()=>(0,i.jsx)(s.A,{title:"Resume",description:"Leandro Passos's Resume. UNESP, University of Wolverhampton, and STi3.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{children:(0,i.jsx)(a.N_,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:Object.keys(w).map((e=>(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(w).map((e=>{let[t,n]=e;return(0,i.jsx)(n,{},t)}))]})})},446:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",a="second",s="minute",i="hour",o="day",c="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+p(r,2,"0")+":"+p(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(r,l),s=n-a<0,i=t.clone().add(r+(s?-1:1),l);return+(-(r+(n-a)/(s?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:h,h:i,m:s,s:a,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},$="en",M={};M[$]=f;var b="$isDayjsObject",S=function(e){return e instanceof k||!(!e||!e[b])},j=function e(t,n,r){var a;if(!t)return $;if("string"==typeof t){var s=t.toLowerCase();M[s]&&(a=s),n&&(M[s]=n,a=s);var i=t.split("-");if(!a&&i.length>1)return e(i[0])}else{var o=t.name;M[o]=t,a=o}return!r&&a&&($=a),a||!r&&$},x=function(e,t){if(S(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},D=v;D.l=j,D.i=S,D.w=function(e,t){return x(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function f(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(D.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(g);if(r){var a=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return D},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,t){var n=x(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return x(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<x(e)},p.$g=function(e,t,n){return D.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,r=!!D.u(t)||t,u=D.p(e),m=function(e,t){var a=D.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?a:a.endOf(o)},g=function(e,t){return D.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,f=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return r?m(1,0):m(31,11);case l:return r?m(1,f):m(0,f+1);case c:var $=this.$locale().weekStart||0,M=(y<$?y+7:y)-$;return m(r?p-M:p+(6-M),f);case o:case h:return g(v+"Hours",0);case i:return g(v+"Minutes",1);case s:return g(v+"Seconds",2);case a:return g(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,c=D.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[o]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[s]=u+"Minutes",n[a]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],g=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var y=this.clone().set(h,1);y.$d[m](g),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[D.p(e)]()},p.add=function(r,u){var h,m=this;r=Number(r);var g=D.p(u),y=function(e){var t=x(m);return D.w(t.date(t.date()+Math.round(e*r)),m)};if(g===l)return this.set(l,this.$M+r);if(g===d)return this.set(d,this.$y+r);if(g===o)return y(1);if(g===c)return y(7);var f=(h={},h[s]=t,h[i]=n,h[a]=e,h)[g]||1,p=this.$d.getTime()+r*f;return D.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var r=e||"YYYY-MM-DDTHH:mm:ssZ",a=D.z(this),s=this.$H,i=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,a,s){return e&&(e[n]||e(t,r))||a[n].slice(0,s)},h=function(e){return D.s(s%12||12,e,"0")},g=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return D.s(t.$y,4,"0");case"M":return o+1;case"MM":return D.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return t.$D;case"DD":return D.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return D.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(s,i,!0);case"A":return g(s,i,!1);case"m":return String(i);case"mm":return D.s(i,2,"0");case"s":return String(t.$s);case"ss":return D.s(t.$s,2,"0");case"SSS":return D.s(t.$ms,3,"0");case"Z":return a}return null}(e)||a.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(r,h,m){var g,y=this,f=D.p(h),p=x(r),v=(p.utcOffset()-this.utcOffset())*t,$=this-p,M=function(){return D.m(y,p)};switch(f){case d:g=M()/12;break;case l:g=M();break;case u:g=M()/3;break;case c:g=($-v)/6048e5;break;case o:g=($-v)/864e5;break;case i:g=$/n;break;case s:g=$/t;break;case a:g=$/e;break;default:g=$}return m?g:D.a(g)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return M[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},p.clone=function(){return D.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),w=k.prototype;return x.prototype=w,[["$ms",r],["$s",a],["$m",s],["$H",i],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),x.extend=function(e,t){return e.$i||(e(t,k,x),e.$i=!0),x},x.locale=j,x.isDayjs=S,x.unix=function(e){return x(1e3*e)},x.en=M[$],x.Ls=M,x.p={},x}()}}]);
//# sourceMappingURL=184.50d7f9c9.chunk.js.map