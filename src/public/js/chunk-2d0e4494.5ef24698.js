(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4494"],{9029:function(i,e){i.exports=function(i){var e={};function s(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return i[n].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=i,s.c=e,s.d=function(i,e,n){s.o(i,e)||Object.defineProperty(i,e,{configurable:!1,enumerable:!0,get:n})},s.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="",s(s.s=1)}([function(i,e,s){"use strict";var n={MOBILE:"mobile",TABLET:"tablet",SMART_TV:"smarttv",CONSOLE:"console",WEARABLE:"wearable",BROWSER:void 0},o={CHROME:"Chrome",FIREFOX:"Firefox",OPERA:"Opera",YANDEX:"Yandex",SAFARI:"Safari",INTERNET_EXPLORER:"Internet Explorer",EDGE:"Edge",CHROMIUM:"Chromium",IE:"IE",MOBILE_SAFARI:"Mobile Safari",EDGE_CHROMIUM:"Edge Chromium"},r={IOS:"iOS",ANDROID:"Android",WINDOWS_PHONE:"Windows Phone",WINDOWS:"Windows",MAC_OS:"Mac OS"},a={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1};i.exports={BROWSER_TYPES:o,DEVICE_TYPES:n,OS_TYPES:r,defaultData:a}},function(i,e,s){"use strict";var n=s(2),o=s(0),r=o.BROWSER_TYPES,a=o.OS_TYPES,t=o.DEVICE_TYPES,d=s(4),u=d.checkType,l=d.broPayload,w=d.mobilePayload,c=d.wearPayload,m=d.consolePayload,f=d.stvPayload,p=d.getNavigatorInstance,b=d.isIOS13Check,g=new n,v=g.getBrowser(),h=g.getDevice(),E=g.getEngine(),S=g.getOS(),O=g.getUA(),x=r.CHROME,T=r.CHROMIUM,y=r.IE,A=r.INTERNET_EXPLORER,N=r.OPERA,k=r.FIREFOX,R=r.SAFARI,M=r.EDGE,I=r.YANDEX,P=r.MOBILE_SAFARI,C=t.MOBILE,_=t.TABLET,V=t.SMART_TV,B=t.BROWSER,D=t.WEARABLE,L=t.CONSOLE,W=a.ANDROID,z=a.WINDOWS_PHONE,j=a.IOS,F=a.WINDOWS,U=a.MAC_OS,G=function(){return h.type===C},Y=function(){return h.type===_},H=function(){switch(h.type){case C:case _:return!0;default:return!1}},X=function(){return S.name===a.WINDOWS&&"10"===S.version&&("string"===typeof O&&-1!==O.indexOf("Edg/"))},q=function(){return h.type===V},Q=function(){return h.type===B},$=function(){return h.type===D},Z=function(){return h.type===L},J=function(){return S.name===W},K=function(){return S.name===F},ii=function(){return S.name===U},ei=function(){return S.name===z},si=function(){return S.name===j},ni=function(){return v.name===x},oi=function(){return v.name===k},ri=function(){return v.name===T},ai=function(){return v.name===M},ti=function(){return v.name===I},di=function(){return v.name===R||v.name===P},ui=function(){return v.name===P},li=function(){return v.name===N},wi=function(){return v.name===A||v.name===y},ci=function(){var i=p(),e=i&&i.userAgent.toLowerCase();return"string"===typeof e&&/electron/.test(e)},mi=function(){var i=p();return i&&(/iPad|iPhone|iPod/.test(i.platform)||"MacIntel"===i.platform&&i.maxTouchPoints>1)&&!window.MSStream},fi=function(){return b("iPad")},pi=function(){return b("iPhone")},bi=function(){return b("iPod")},gi=function(){return v.major},vi=function(){return v.version},hi=function(){return S.version?S.version:"none"},Ei=function(){return S.name?S.name:"none"},Si=function(){return v.name},Oi=function(){return h.vendor?h.vendor:"none"},xi=function(){return h.model?h.model:"none"},Ti=function(){return E.name},yi=function(){return E.version},Ai=function(){return O},Ni=function(){return h.type},ki=q(),Ri=Z(),Mi=$(),Ii=ui()||fi(),Pi=ri(),Ci=H()||fi(),_i=G(),Vi=Y()||fi(),Bi=Q(),Di=J(),Li=ei(),Wi=si()||fi(),zi=ni(),ji=oi(),Fi=di(),Ui=li(),Gi=wi(),Yi=hi(),Hi=Ei(),Xi=gi(),qi=vi(),Qi=Si(),$i=Oi(),Zi=xi(),Ji=Ti(),Ki=yi(),ie=Ai(),ee=ai()||X(),se=ti(),ne=Ni(),oe=mi(),re=fi(),ae=pi(),te=bi(),de=ci(),ue=X(),le=ai(),we=K(),ce=ii(),me=u(h.type);function fe(){var i=me.isBrowser,e=me.isMobile,s=me.isTablet,n=me.isSmartTV,o=me.isConsole,r=me.isWearable;return i?l(i,v,E,S,O):n?f(n,E,S,O):o?m(o,E,S,O):e||s?w(me,h,S,O):r?c(r,E,S,O):void 0}i.exports={deviceDetect:fe,isSmartTV:ki,isConsole:Ri,isWearable:Mi,isMobileSafari:Ii,isChromium:Pi,isMobile:Ci,isMobileOnly:_i,isTablet:Vi,isBrowser:Bi,isAndroid:Di,isWinPhone:Li,isIOS:Wi,isChrome:zi,isFirefox:ji,isSafari:Fi,isOpera:Ui,isIE:Gi,osVersion:Yi,osName:Hi,fullBrowserVersion:Xi,browserVersion:qi,browserName:Qi,mobileVendor:$i,mobileModel:Zi,engineName:Ji,engineVersion:Ki,getUA:ie,isEdge:ee,isYandex:se,deviceType:ne,isIOS13:oe,isIPad13:re,isIPhone13:ae,isIPod13:te,isElectron:de,isEdgeChromium:ue,isLegacyEdge:le,isWindows:we,isMacOs:ce}},function(i,e,s){var n;
/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */(function(o,r){"use strict";var a="0.7.18",t="",d="?",u="function",l="undefined",w="object",c="string",m="major",f="model",p="name",b="type",g="vendor",v="version",h="architecture",E="console",S="mobile",O="tablet",x="smarttv",T="wearable",y="embedded",A={extend:function(i,e){var s={};for(var n in i)e[n]&&e[n].length%2===0?s[n]=e[n].concat(i[n]):s[n]=i[n];return s},has:function(i,e){return"string"===typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return typeof i===c?i.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},N={rgx:function(i,e){var s,n,o,a,t,d,l=0;while(l<e.length&&!t){var c=e[l],m=e[l+1];s=n=0;while(s<c.length&&!t)if(t=c[s++].exec(i),t)for(o=0;o<m.length;o++)d=t[++n],a=m[o],typeof a===w&&a.length>0?2==a.length?typeof a[1]==u?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?typeof a[1]!==u||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):r:this[a[0]]=d?a[1].call(this,d,a[2]):r:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):r):this[a]=d||r;l+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===w&&e[s].length>0){for(var n=0;n<e[s].length;n++)if(A.has(e[s][n],i))return s===d?r:s}else if(A.has(e[s],i))return s===d?r:s;return i}},k={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},R={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[p,v],[/(opios)[\/\s]+([\w\.]+)/i],[[p,"Opera Mini"],v],[/\s(opr)\/([\w\.]+)/i],[[p,"Opera"],v],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[p,v],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[p,"IE"],v],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[p,"Edge"],v],[/(yabrowser)\/([\w\.]+)/i],[[p,"Yandex"],v],[/(puffin)\/([\w\.]+)/i],[[p,"Puffin"],v],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[p,"UCBrowser"],v],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],v],[/(micromessenger)\/([\w\.]+)/i],[[p,"WeChat"],v],[/(qqbrowserlite)\/([\w\.]+)/i],[p,v],[/(QQ)\/([\d\.]+)/i],[p,v],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[p,v],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[p,v],[/(MetaSr)[\/\s]?([\w\.]+)/i],[p],[/(LBBROWSER)/i],[p],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[v,[p,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[v,[p,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[v,[p,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[p,/(.+)/,"$1 WebView"],v],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[p,/(.+(?:g|us))(.+)/,"$1 $2"],v],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[v,[p,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[p,v],[/(dolfin)\/([\w\.]+)/i],[[p,"Dolphin"],v],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[p,"Chrome"],v],[/(coast)\/([\w\.]+)/i],[[p,"Opera Coast"],v],[/fxios\/([\w\.-]+)/i],[v,[p,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[v,[p,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[v,p],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[p,"GSA"],v],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[p,[v,N.str,k.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[p,v],[/(navigator|netscape)\/([\w\.-]+)/i],[[p,"Netscape"],v],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[p,v]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,A.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[h,/ower/,"",A.lowerize]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[h,A.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[f,g,[b,O]],[/applecoremedia\/[\w\.]+ \((ipad)/],[f,[g,"Apple"],[b,O]],[/(apple\s{0,1}tv)/i],[[f,"Apple TV"],[g,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[g,f,[b,O]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[f,[g,"Amazon"],[b,O]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[f,N.str,k.device.amazon.model],[g,"Amazon"],[b,S]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[f,g,[b,S]],[/\((ip[honed|\s\w*]+);/i],[f,[g,"Apple"],[b,S]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[g,f,[b,S]],[/\(bb10;\s(\w+)/i],[f,[g,"BlackBerry"],[b,S]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[f,[g,"Asus"],[b,O]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[g,"Sony"],[f,"Xperia Tablet"],[b,O]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[f,[g,"Sony"],[b,S]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[g,f,[b,E]],[/android.+;\s(shield)\sbuild/i],[f,[g,"Nvidia"],[b,E]],[/(playstation\s[34portablevi]+)/i],[f,[g,"Sony"],[b,E]],[/(sprint\s(\w+))/i],[[g,N.str,k.device.sprint.vendor],[f,N.str,k.device.sprint.model],[b,S]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[g,f,[b,O]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[g,[f,/_/g," "],[b,S]],[/(nexus\s9)/i],[f,[g,"HTC"],[b,O]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[f,[g,"Huawei"],[b,S]],[/(microsoft);\s(lumia[\s\w]+)/i],[g,f,[b,S]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[f,[g,"Microsoft"],[b,E]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[g,"Microsoft"],[b,S]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[f,[g,"Motorola"],[b,S]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[f,[g,"Motorola"],[b,O]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[g,A.trim],[f,A.trim],[b,x]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[g,"Samsung"],[b,x]],[/\(dtv[\);].+(aquos)/i],[f,[g,"Sharp"],[b,x]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[g,"Samsung"],f,[b,O]],[/smart-tv.+(samsung)/i],[g,[b,x],f],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[g,"Samsung"],f,[b,S]],[/sie-(\w*)/i],[f,[g,"Siemens"],[b,S]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[g,"Nokia"],f,[b,S]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[f,[g,"Acer"],[b,O]],[/android.+([vl]k\-?\d{3})\s+build/i],[f,[g,"LG"],[b,O]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[g,"LG"],f,[b,O]],[/(lg) netcast\.tv/i],[g,f,[b,x]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[f,[g,"LG"],[b,S]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[f,[g,"Lenovo"],[b,O]],[/linux;.+((jolla));/i],[g,f,[b,S]],[/((pebble))app\/[\d\.]+\s/i],[g,f,[b,T]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[g,f,[b,S]],[/crkey/i],[[f,"Chromecast"],[g,"Google"]],[/android.+;\s(glass)\s\d/i],[f,[g,"Google"],[b,T]],[/android.+;\s(pixel c)\s/i],[f,[g,"Google"],[b,O]],[/android.+;\s(pixel xl|pixel)\s/i],[f,[g,"Google"],[b,S]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[f,/_/g," "],[g,"Xiaomi"],[b,S]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[f,/_/g," "],[g,"Xiaomi"],[b,O]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[f,[g,"Meizu"],[b,O]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[f,[g,"OnePlus"],[b,S]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[f,[g,"RCA"],[b,O]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[f,[g,"Dell"],[b,O]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[f,[g,"Verizon"],[b,O]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[g,"Barnes & Noble"],f,[b,O]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[f,[g,"NuVision"],[b,O]],[/android.+;\s(k88)\sbuild/i],[f,[g,"ZTE"],[b,O]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[f,[g,"Swiss"],[b,S]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[f,[g,"Swiss"],[b,O]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[f,[g,"Zeki"],[b,O]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[g,"Dragon Touch"],f,[b,O]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[f,[g,"Insignia"],[b,O]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[f,[g,"NextBook"],[b,O]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[g,"Voice"],f,[b,S]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[g,"LvTel"],f,[b,S]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[f,[g,"Envizen"],[b,O]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[g,f,[b,O]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[f,[g,"MachSpeed"],[b,O]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[g,f,[b,O]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[f,[g,"Rotor"],[b,O]],[/android.+(KS(.+))\s+build/i],[f,[g,"Amazon"],[b,O]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[g,f,[b,O]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[b,A.lowerize],g,f],[/(android[\w\.\s\-]{0,9});.+build/i],[f,[g,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[v,[p,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[p,v],[/rv\:([\w\.]{1,9}).+(gecko)/i],[v,p]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[p,v],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[p,[v,N.str,k.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[p,"Windows"],[v,N.str,k.os.windows.version]],[/\((bb)(10);/i],[[p,"BlackBerry"],v],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[p,v],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[p,"Symbian"],v],[/\((series40);/i],[p],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[p,"Firefox OS"],v],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[p,v],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[p,"Chromium OS"],v],[/(sunos)\s?([\w\.\d]*)/i],[[p,"Solaris"],v],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[p,v],[/(haiku)\s(\w+)/i],[p,v],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[v,/_/g,"."],[p,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[p,"Mac OS"],[v,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[p,v]]},M=function(i,e){if("object"===typeof i&&(e=i,i=r),!(this instanceof M))return new M(i,e).getResult();var s=i||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:t),n=e?A.extend(R,e):R;return this.getBrowser=function(){var i={name:r,version:r};return N.rgx.call(i,s,n.browser),i.major=A.major(i.version),i},this.getCPU=function(){var i={architecture:r};return N.rgx.call(i,s,n.cpu),i},this.getDevice=function(){var i={vendor:r,model:r,type:r};return N.rgx.call(i,s,n.device),i},this.getEngine=function(){var i={name:r,version:r};return N.rgx.call(i,s,n.engine),i},this.getOS=function(){var i={name:r,version:r};return N.rgx.call(i,s,n.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};M.VERSION=a,M.BROWSER={NAME:p,MAJOR:m,VERSION:v},M.CPU={ARCHITECTURE:h},M.DEVICE={MODEL:f,VENDOR:g,TYPE:b,CONSOLE:E,MOBILE:S,SMARTTV:x,TABLET:O,WEARABLE:T,EMBEDDED:y},M.ENGINE={NAME:p,VERSION:v},M.OS={NAME:p,VERSION:v},typeof e!==l?(typeof i!==l&&i.exports&&(e=i.exports=M),e.UAParser=M):"function"===u&&s(3)?(n=function(){return M}.call(e,s,e,i),n===r||(i.exports=n)):o&&(o.UAParser=M);var I=o&&(o.jQuery||o.Zepto);if(typeof I!==l){var P=new M;I.ua=P.getResult(),I.ua.get=function(){return P.getUA()},I.ua.set=function(i){P.setUA(i);var e=P.getResult();for(var s in e)I.ua[s]=e[s]}}})("object"===typeof window?window:this)},function(i,e){(function(e){i.exports=e}).call(e,{})},function(i,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(i[n]=s[n])}return i},o=s(0),r=o.DEVICE_TYPES,a=o.defaultData,t=function(i){switch(i){case r.MOBILE:return{isMobile:!0};case r.TABLET:return{isTablet:!0};case r.SMART_TV:return{isSmartTV:!0};case r.CONSOLE:return{isConsole:!0};case r.WEARABLE:return{isWearable:!0};case r.BROWSER:return{isBrowser:!0};default:return a}},d=function(i,e,s,n,o){return{isBrowser:i,browserMajorVersion:e.major,browserFullVersion:e.version,browserName:e.name,engineName:s.name||!1,engineVersion:s.version,osName:n.name,osVersion:n.version,userAgent:o}},u=function(i,e,s,o){return n({},i,{vendor:e.vendor,model:e.model,os:s.name,osVersion:s.version,ua:o})},l=function(i,e,s,n){return{isSmartTV:i,engineName:e.name,engineVersion:e.version,osName:s.name,osVersion:s.version,userAgent:n}},w=function(i,e,s,n){return{isConsole:i,engineName:e.name,engineVersion:e.version,osName:s.name,osVersion:s.version,userAgent:n}},c=function(i,e,s,n){return{isWearable:i,engineName:e.name,engineVersion:e.version,osName:s.name,osVersion:s.version,userAgent:n}},m=e.getNavigatorInstance=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},f=e.isIOS13Check=function(i){var e=m();return e&&e.platform&&(-1!==e.platform.indexOf(i)||"MacIntel"===e.platform&&e.maxTouchPoints>1&&!window.MSStream)};i.exports={checkType:t,broPayload:d,mobilePayload:u,stvPayload:l,consolePayload:w,wearPayload:c,getNavigatorInstance:m,isIOS13Check:f}}])}}]);