(function(e){function t(t){for(var a,i,o=t[0],l=t[1],s=t[2],u=0,b=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(b.length)b.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"48ba68e0"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var s=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/app/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"011e":function(e,t,n){"use strict";n("7222")},1156:function(e,t,n){},2252:function(e,t,n){"use strict";n("9a30")},"5cb8":function(e,t,n){"use strict";n("fbf0")},7222:function(e,t,n){},"9a30":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(e,t){var n=Object(a["z"])("router-view");return Object(a["s"])(),Object(a["d"])(n)}n("5cb8");var c=n("6b0d"),i=n.n(c);const o={},l=i()(o,[["render",r]]);var s=l,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=function(e){return Object(a["v"])("data-v-4f065070"),e=e(),Object(a["t"])(),e},b={class:"home"},d=f((function(){return Object(a["g"])("img",{alt:"Earth Frequencies",src:"images/banner.svg"},null,-1)})),h={id:"nav"},v=Object(a["h"])("Home"),j=Object(a["h"])(" | "),O=Object(a["h"])("About"),p=f((function(){return Object(a["g"])("div",null,"Work in Progress. Still lots of issues.",-1)})),g={key:0,class:"error-message"},y={key:1,class:"allocation-validation-issues"},m=f((function(){return Object(a["g"])("b",null,"Warning:",-1)})),w={class:"filters"},F=f((function(){return Object(a["g"])("label",null,"Region: ",-1)})),x=["value"],B={class:"filters"},q={class:"filter-row"},k=f((function(){return Object(a["g"])("label",{class:"freq-label",for:"filter-lower-frequency"},"Frequency Range: ",-1)})),C=Object(a["h"])(" Hz - "),A=Object(a["h"])(" Hz "),M={class:"filter-row"},E=f((function(){return Object(a["g"])("label",{class:"freq-label",for:"service"},"Service: ",-1)})),R=f((function(){return Object(a["g"])("option",{value:"all"},"All",-1)})),H=["value"],S={class:"allocation-table"},z=f((function(){return Object(a["g"])("thead",null,[Object(a["g"])("tr",null,[Object(a["g"])("th",null,"Lower Frequency"),Object(a["g"])("th",null,"Upper Frequency"),Object(a["g"])("th",null,"Description")])],-1)})),D={class:"align-left"},_={class:"align-left"},N={class:"align-left"},U={key:2,class:"allocation-table-info"},P={key:0},T={key:1},L=Object(a["h"])("Official source: "),V=["href"],G={key:2},W=f((function(){return Object(a["g"])("div",{class:"allocation-table-info"}," Disclaimer: This project is developped by volunteers and there is no guarantee as to the accuracy of the data. Please check official sources and local regulatory authorities for more accuracte data, especially if your project involves transmission. ",-1)})),X={key:3,class:"allocation-table-info"},Y=f((function(){return Object(a["g"])("div",{class:"logo-box"},[Object(a["g"])("a",{href:"https://github.com/EarthFrequencies"},[Object(a["g"])("img",{src:"images/github.svg",alt:"GitHub",class:"github-logo"}),Object(a["g"])("div",null,"Hosted on GitHub")])],-1)}));function I(e,t,n,r,c,i){var o=Object(a["z"])("router-link"),l=Object(a["z"])("frequency-selector"),s=Object(a["z"])("allocation-chart");return Object(a["s"])(),Object(a["f"])("div",b,[d,Object(a["g"])("div",h,[Object(a["i"])(o,{to:"/"},{default:Object(a["G"])((function(){return[v]})),_:1}),j,Object(a["i"])(o,{to:"/about"},{default:Object(a["G"])((function(){return[O]})),_:1})]),p,e.errorMessage?(Object(a["s"])(),Object(a["f"])("div",g,Object(a["B"])(e.errorMessage),1)):Object(a["e"])("",!0),e.allocationsValid?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["f"])("div",y,[m,Object(a["h"])(" "+Object(a["B"])(e.warningMessage),1)])),Object(a["g"])("div",w,[F,Object(a["H"])(Object(a["g"])("select",{onChange:t[0]||(t[0]=function(){return e.onRegionChange&&e.onRegionChange.apply(e,arguments)}),"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.activeRegion=t})},[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.regions,(function(e){return Object(a["s"])(),Object(a["f"])("option",{key:e.path,value:e.path},Object(a["B"])(e.region),9,x)})),128))],544),[[a["D"],e.activeRegion]])]),Object(a["i"])(l,{class:"frequency-selector",lowerFrequency:1e3,upperFrequency:2e3}),Object(a["i"])(s,{allocations:e.allocationBands,"service-filter":e.servicesToDisplay,"band-filter":e.filterRange,class:"allocation-chart"},null,8,["allocations","service-filter","band-filter"]),Object(a["g"])("div",B,[Object(a["g"])("div",q,[k,Object(a["H"])(Object(a["g"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.filterRange.lowerFrequency=t}),id:"filter-lower-frequency"},null,512),[[a["E"],e.filterRange.lowerFrequency]]),C,Object(a["H"])(Object(a["g"])("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.filterRange.upperFrequency=t})},null,512),[[a["E"],e.filterRange.upperFrequency]]),A]),Object(a["g"])("div",M,[E,Object(a["H"])(Object(a["g"])("select",{name:"service",id:"filter-service","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.filterByService=t})},[R,(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.services,(function(e,t){return Object(a["s"])(),Object(a["f"])("option",{key:t,value:e},Object(a["B"])(e),9,H)})),128))],512),[[a["D"],e.filterByService]])])]),Object(a["g"])("table",S,[z,Object(a["g"])("tbody",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.filteredAllocationBands,(function(t,n){return Object(a["s"])(),Object(a["f"])("tr",{key:n},[Object(a["g"])("td",D,Object(a["B"])(e.humanHzUnits(t.lf)),1),Object(a["g"])("td",_,Object(a["B"])(e.humanHzUnits(t.uf)),1),Object(a["g"])("td",N,[Object(a["g"])("ul",null,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(t.services,(function(t,n){return Object(a["s"])(),Object(a["f"])("li",{key:n},[Object(a["g"])("div",{class:"bullet",style:Object(a["o"])({background:e.getColourForService(t.desc)})},null,4),Object(a["g"])("div",null,Object(a["B"])(t.desc),1)])})),128))])])])})),128))])]),e.metadata?(Object(a["s"])(),Object(a["f"])("div",U,[e.metadata.name_en?(Object(a["s"])(),Object(a["f"])("div",P,"Region: "+Object(a["B"])(e.metadata.name_en),1)):Object(a["e"])("",!0),e.metadata.official?(Object(a["s"])(),Object(a["f"])("div",T,[L,Object(a["g"])("a",{href:e.metadata.official},Object(a["B"])(e.metadata.official),9,V)])):Object(a["e"])("",!0),e.metadata.edition?(Object(a["s"])(),Object(a["f"])("div",G,"Edition: "+Object(a["B"])(e.metadata.edition),1)):Object(a["e"])("",!0)])):Object(a["e"])("",!0),W,e.metadata?(Object(a["s"])(),Object(a["f"])("div",X," Contributions are welcome. ")):Object(a["e"])("",!0),Y])}var J=n("2909"),K=n("1da1"),$=(n("99af"),n("d81d"),n("4de4"),n("2ca0"),n("96cf"),n("bc3a")),Q=n.n($),Z={class:"frequency-selector"},ee={class:"frequencies"},te={id:"canvas",ref:"canvas"};function ne(e,t,n,r,c,i){return Object(a["s"])(),Object(a["f"])("div",Z,[Object(a["g"])("div",ee,[Object(a["g"])("span",null,Object(a["B"])(e.lowerFrequency),1),Object(a["g"])("span",null,Object(a["B"])(e.upperFrequency),1)]),Object(a["g"])("canvas",te,null,512)])}var ae=n("b85c"),re=n("d4ec"),ce=n("bee2"),ie=(n("fb6a"),n("25f0"),n("b680"),function(){function e(t,n){Object(re["a"])(this,e),this.x=t,this.y=n}return Object(ce["a"])(e,[{key:"invert",value:function(){return new e(-this.x,-this.y)}},{key:"translateX",value:function(t){return new e(this.x+t,this.y)}},{key:"translateY",value:function(t){return new e(this.x,this.y+t)}},{key:"scaleX",value:function(t){return new e(this.x*t,this.y)}},{key:"scaleY",value:function(t){return new e(this.x,this.y*t)}}]),e}());function oe(e){var t,n=0,a=0,r=e.length,c=Object(ae["a"])(e);try{for(c.s();!(t=c.n()).done;){var i=t.value;n+=i.x,a+=i.y}}catch(o){c.e(o)}finally{c.f()}return new ie(n/r,a/r)}function le(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.95,a=e.getContext("2d"),r=se(e,t,n),c=r[0];a.moveTo(c.x,c.y);var i,o=Object(ae["a"])(r.slice(1));try{for(o.s();!(i=o.n()).done;)c=i.value,a.lineTo(c.x,c.y),a.moveTo(c.x,c.y)}catch(l){o.e(l)}finally{o.f()}a.stroke()}function se(e,t,n){var a=t.map((function(e){return e.y})),r=t.map((function(e){return e.x})),c=Math.max.apply(Math,Object(J["a"])(a)),i=Math.min.apply(Math,Object(J["a"])(a)),o=c-i,l=Math.max.apply(Math,Object(J["a"])(r)),s=Math.min.apply(Math,Object(J["a"])(r)),u=l-s,f=e.height/o*n,b=e.width/u*n,d=oe(t),h=function(t){return t.translateY(-d.y).scaleY(f).translateY(e.height/2).translateX(-d.x).scaleX(b).translateX(e.width/2)};return t.map(h)}function ue(e,t,n){for(var a=[],r=(t-e)/(n-1),c=1;c<n;c++)a.push(e+r*c);return a}function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=(100*t).toFixed(0).toString()+"%",r=(100*n).toFixed(0).toString()+"%";e.style.width=a,e.style.height=r,e.width=e.offsetWidth,e.height=e.offsetHeight}function be(e,t){var n,a,r,c,i=[],o=10,l=3,s=1e3,u=ue(e,t,s),f=Object(ae["a"])(u);try{for(f.s();!(c=f.n()).done;){var b=c.value;a=b,r=Math.cos(o*Math.exp(l*(b-e)/(t-e))),n=new ie(a,r),i.push(n)}}catch(d){f.e(d)}finally{f.f()}return i}var de=Object(a["j"])({name:"FrequencySelector",props:["lowerFrequency","upperFrequency"],mounted:function(){if(void 0!==this.canvas){fe(this.canvas,.9,.8);var e=be(this.lowerFrequency,this.upperFrequency);le(this.canvas,e)}},setup:function(){var e=Object(a["x"])();return{canvas:e}}});n("e1f1");const he=i()(de,[["render",ne],["__scopeId","data-v-4eec898d"]]);var ve=he,je=function(e){return Object(a["v"])("data-v-49cf27e6"),e=e(),Object(a["t"])(),e},Oe={class:"freq-alloc-chart-holder"},pe={class:"freq-alloc-chart"},ge={class:"log10-bands"},ye={class:"lf"},me={class:"uf"},we={class:"allocation-bands"},Fe=["title"],xe=["onClick"],Be={class:"desc"},qe={key:1,class:"freq-allocation"},ke=je((function(){return Object(a["g"])("span",{class:"desc"},"Not allocated",-1)})),Ce=[ke];function Ae(e,t,n,r,c,i){return Object(a["s"])(),Object(a["f"])("div",Oe,[Object(a["g"])("div",pe,[Object(a["g"])("div",ge,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.log10bands,(function(t,n){return Object(a["s"])(),Object(a["f"])("div",{key:n,class:"log10-band",style:Object(a["o"])(e.allocationBandStyle(t))},[Object(a["g"])("span",ye,Object(a["B"])(e.humanHzUnits(t.lf)),1),Object(a["g"])("span",me,Object(a["B"])(e.humanHzUnits(t.uf)),1)],4)})),128))]),Object(a["g"])("div",we,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["y"])(e.filteredAllocationBands,(function(t){return Object(a["s"])(),Object(a["f"])("div",{key:t.lf,class:"freq-alloc-band",style:Object(a["o"])(e.allocationBandStyle(t)),title:"".concat(e.humanHzUnits(t.lf)," - ").concat(e.humanHzUnits(t.uf))},[t.services&&t.services.length>0?(Object(a["s"])(!0),Object(a["f"])(a["a"],{key:0},Object(a["y"])(t.services,(function(n,r){return Object(a["s"])(),Object(a["f"])("div",{key:r,class:"freq-allocation",style:Object(a["o"])(e.serviceStyle(n,t)),onClick:function(t){return e.$emit("allocation-click",n)}},[Object(a["g"])("span",Be,Object(a["B"])(n.desc),1)],12,xe)})),128)):(Object(a["s"])(),Object(a["f"])("div",qe,Ce))],12,Fe)})),128))])])])}n("6b93"),n("7db0"),n("b64b"),n("498a");var Me={"not allocated":"white","aeronautical mobile":"#00AEE1","aeronautical mobile satellite":"#97C9EC","aeronautical radionavigation":"#C05018",amateur:"#419272","amateur-satellite":"#D8E8DF",broadcasting:"#5095B6","broadcasting-satellite":"#78B956","earth exploration-satellite":"#E9984D","inter-satellite":"#FAE486","land mobile":"#FAE486","land mobile-satellite":"#89CAD2",fixed:"#CC2B89","fixed-satellite":"#B885B6","maritime mobile":"#E8E5C6","maritime mobile satellite":"#A3C8BD","maritime radionavigation":"#5C8C76","meteorological aids":"#EBD8C5","meteorological-satellite":"#8D5E20",mobile:"#E6D4E6","mobile-satellite":"#925EA0","radio astronomy":"#8D5E20","radio determination satellite":"#EEAD63",radiolocation:"#EDD04B","radiolocation-satellite":"#BEA034",radionavigation:"#AEBC46","radionavigation-satellite":"#E8EA7C","space operation":"#97473C","space research":"#DB9196","standard frequency and time signal":"#90979B","standard frequency and time signal-satellite":"#B3B4B8"};function Ee(){return Object.keys(Me)}function Re(e){var t=e.toLowerCase().indexOf("except");t>-1&&(e=e.substring(0,t)),t=e.indexOf("("),t>-1&&(e=e.substring(0,t).trim()),e=e.trim().toLowerCase();var n=Me[e];return n||(n="white"),n}function He(e){var t="Hz",n=1;return e>1e12?(t="THz",n=1e9):e>1e9?(t="GHz",n=1e9):e>1e6?(t="MHz",n=1e6):e>1e3&&(t="KHz",n=1e3),"".concat(e/n," ").concat(t)}var Se=Object(a["j"])({name:"AllocationChart",props:{allocations:{type:Array,default:function(){return[]},required:!0},serviceFilter:{type:Array,required:!1},bandFilter:{type:Object,required:!1}},setup:function(){var e=[];e.push({lf:3e3,uf:1e4});for(var t=4;t<11;t++)e.push({lf:Math.pow(10,t),uf:Math.pow(10,t+1)});return e.push({lf:Math.pow(10,11),uf:3*Math.pow(10,11)}),{log10bands:e}},methods:{allocationBandStyle:function(e){var t=Math.log10(e.uf),n=Math.log10(e.lf||3e3),a=t-n;return{width:"".concat(900*a,"px")}},serviceStyle:function(e,t){var n=Re(e.desc);n||(n="white");var a={background:n},r="repeating-linear-gradient(45deg, #f5f5f5 0px, #f5f5f5 10px, #fff 10px, #fff 20px)";if(Array.isArray(this.serviceFilter)&&this.serviceFilter.length>0){var c=e.desc.toLowerCase(),i=this.serviceFilter.find((function(e){return c.startsWith(e)}));i||(a.background=r)}if(this.bandFilter&&!isNaN(parseFloat(this.bandFilter.lowerFrequency))){var o=parseFloat(this.bandFilter.lowerFrequency);t.uf<o&&(a.background=r)}if(this.bandFilter&&!isNaN(parseFloat(this.bandFilter.upperFrequency))){var l=parseFloat(this.bandFilter.upperFrequency);t.lf>l&&(a.background=r)}return a},humanHzUnits:He},computed:{filteredAllocationBands:function(){var e=Object(J["a"])(this.allocations),t=[];if(e.length>0){e=e.filter((function(e,t){return 0===t||e.services&&e.services.length>0})),0!==e[0].lf&&t.push({lf:0,uf:e[0].lf}),t.push(e[0]);for(var n=1;n<e.length;n++)e[n-1].uf!==e[n].lf&&t.push({lf:e[n-1].uf,uf:e[n].lf,services:[{desc:"unspecified"}]}),e[n].services&&e[n].services.length>0&&t.push(e[n])}if(e=t,this.bandFilter&&!isNaN(parseFloat(this.bandFilter.lowerFrequency))){var a=parseFloat(this.bandFilter.lowerFrequency);e=e.filter((function(e){return e.uf>=a}))}if(this.bandFilter&&!isNaN(parseFloat(this.bandFilter.upperFrequency))){var r=parseFloat(this.bandFilter.upperFrequency);e=e.filter((function(e){return e.lf<=r}))}return e}}});n("2252");const ze=i()(Se,[["render",Ae],["__scopeId","data-v-49cf27e6"]]);var De=ze,_e="https://www.earthfrequencies.org/api",Ne=Object(a["j"])({name:"Home",components:{FrequencySelector:ve,AllocationChart:De},setup:function(){var e=Ee();return{activeRegion:Object(a["x"])("itu1"),regions:Object(a["x"])([]),errorMessage:Object(a["x"])(""),warningMessage:Object(a["x"])(""),allocationBands:Object(a["x"])([]),metadata:Object(a["x"])(void 0),services:e,filterByService:Object(a["x"])("all"),filterRange:Object(a["x"])({lowerFrequency:"",upperFrequency:""}),allocationsValid:Object(a["x"])(!0)}},mounted:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchCharts();case 2:return t.next=4,e.fetchAllocations();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchCharts:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.a.get("".concat(_e,"/allocations/tables"),{headers:{accept:"application/json"}});case 3:n=t.sent,a=n.data,a.entries&&(e.regions=a.entries),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.errorMessage=t.t0.message;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},fetchAllocations:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.allocationBands=[],e.metadata={},t.next=5,Q.a.get("".concat(_e,"/allocations/tables/").concat(e.activeRegion));case 5:n=t.sent,a=n.data,Array.isArray(a.entries)&&a.entries.length>0&&(r=a.entries[0].bands,0!==r[0].lf&&(r=[{lf:0,uf:r[0].lf,services:[]}].concat(Object(J["a"])(r))),e.allocationBands=a.entries[0].bands),e.metadata=a.metadata,e.validateAllocations(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),e.errorMessage=t.t0.message;case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},validateAllocations:function(){var e=!0;this.warningMessage="";for(var t=1;t<this.allocationBands.length;t++)this.allocationBands[t].lf<this.allocationBands[t-1].uf&&(this.warningMessage="band allocations data may have issues, due to band overlap",e=!1),this.allocationBands[t].lf!==this.allocationBands[t-1].uf&&(this.warningMessage="band allocations data may have issues, due to missing bands - ".concat(He(this.allocationBands[t].lf)),e=!1);this.allocationsValid=e},onRegionChange:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchAllocations();case 2:case"end":return t.stop()}}),t)})))()},humanHzUnits:He,getColourForService:Re},computed:{servicesToDisplay:function(){return this.filterByService&&"all"!==this.filterByService?[this.filterByService]:void 0},filteredAllocationBands:function(){var e=this,t=this.allocationBands;if("all"!==this.filterByService&&(t=this.allocationBands.map((function(t){var n=Object.assign({},t);return n.services&&(n.services=n.services.filter((function(t){return t.desc.toLowerCase().startsWith(e.filterByService)}))),n})),t=t.filter((function(e){return e.services&&e.services.length>0}))),this.filterRange.lowerFrequency&&!isNaN(parseFloat(this.filterRange.lowerFrequency))){var n=parseFloat(this.filterRange.lowerFrequency);t=t.filter((function(e){return e.uf>=n}))}if(this.filterRange.upperFrequency&&!isNaN(parseFloat(this.filterRange.upperFrequency))){var a=parseFloat(this.filterRange.upperFrequency);t=t.filter((function(e){return e.lf<=a}))}return t}}});n("011e");const Ue=i()(Ne,[["render",I],["__scopeId","data-v-4f065070"]]);var Pe=Ue,Te=[{path:"/",name:"Home",component:Pe},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Le=Object(u["a"])({history:Object(u["b"])(),routes:Te}),Ve=Le;Object(a["c"])(s).use(Ve).mount("#app")},e1f1:function(e,t,n){"use strict";n("1156")},fbf0:function(e,t,n){}});
//# sourceMappingURL=app.d69747c7.js.map