/* Rainbow v1.1.8 rainbowco.de | included languages: generic, javascript */
window.Rainbow=function(){function q(a){var b,c=a.getAttribute&&a.getAttribute("data-language")||0;if(!c){a=a.attributes;for(b=0;b<a.length;++b)if("data-language"===a[b].nodeName)return a[b].nodeValue}return c}function B(a){var b=q(a)||q(a.parentNode);if(!b){var c=/\blang(?:uage)?-(\w+)/;(a=a.className.match(c)||a.parentNode.className.match(c))&&(b=a[1])}return b}function C(a,b){for(var c in e[d]){c=parseInt(c,10);if(a==c&&b==e[d][c]?0:a<=c&&b>=e[d][c])delete e[d][c],delete j[d][c];if(a>=c&&a<e[d][c]||
b>c&&b<e[d][c])return!0}return!1}function r(a,b){return'<span class="'+a.replace(/\./g," ")+(l?" "+l:"")+'">'+b+"</span>"}function s(a,b,c,h){var f=a.exec(c);if(f){++t;!b.name&&"string"==typeof b.matches[0]&&(b.name=b.matches[0],delete b.matches[0]);var k=f[0],i=f.index,u=f[0].length+i,g=function(){function f(){s(a,b,c,h)}t%100>0?f():setTimeout(f,0)};if(C(i,u))g();else{var m=v(b.matches),l=function(a,c,h){if(a>=c.length)h(k);else{var d=f[c[a]];if(d){var e=b.matches[c[a]],i=e.language,g=e.name&&e.matches?
e.matches:e,j=function(b,d,e){var i;i=0;var g;for(g=1;g<c[a];++g)f[g]&&(i=i+f[g].length);d=e?r(e,d):d;k=k.substr(0,i)+k.substr(i).replace(b,d);l(++a,c,h)};i?n(d,i,function(a){j(d,a)}):typeof e==="string"?j(d,d,e):w(d,g.length?g:[g],function(a){j(d,a,e.matches?e.name:0)})}else l(++a,c,h)}};l(0,m,function(a){b.name&&(a=r(b.name,a));if(!j[d]){j[d]={};e[d]={}}j[d][i]={replace:f[0],"with":a};e[d][i]=u;g()})}}else h()}function v(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c);return b.sort(function(a,
b){return b-a})}function w(a,b,c){function h(b,k){k<b.length?s(b[k].pattern,b[k],a,function(){h(b,++k)}):D(a,function(a){delete j[d];delete e[d];--d;c(a)})}++d;h(b,0)}function D(a,b){function c(a,b,h,e){if(h<b.length){++x;var g=b[h],l=j[d][g],a=a.substr(0,g)+a.substr(g).replace(l.replace,l["with"]),g=function(){c(a,b,++h,e)};0<x%250?g():setTimeout(g,0)}else e(a)}var h=v(j[d]);c(a,h,0,b)}function n(a,b,c){var d=m[b]||[],f=m[y]||[],b=z[b]?d:d.concat(f);w(a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,
"&amp;"),b,c)}function o(a,b,c){if(b<a.length){var d=a[b],f=B(d);return!(-1<(" "+d.className+" ").indexOf(" rainbow "))&&f?(f=f.toLowerCase(),d.className+=d.className?" rainbow":"rainbow",n(d.innerHTML,f,function(k){d.innerHTML=k;j={};e={};p&&p(d,f);setTimeout(function(){o(a,++b,c)},0)})):o(a,++b,c)}c&&c()}function A(a,b){var a=a&&"function"==typeof a.getElementsByTagName?a:document,c=a.getElementsByTagName("pre"),d=a.getElementsByTagName("code"),f,e=[];for(f=0;f<d.length;++f)e.push(d[f]);for(f=0;f<
c.length;++f)c[f].getElementsByTagName("code").length||e.push(c[f]);o(e,0,b)}var j={},e={},m={},z={},d=0,y=0,t=0,x=0,l,p;return{extend:function(a,b,c){1==arguments.length&&(b=a,a=y);z[a]=c;m[a]=b.concat(m[a]||[])},b:function(a){p=a},a:function(a){l=a},color:function(a,b,c){if("string"==typeof a)return n(a,b,c);if("function"==typeof a)return A(0,a);A(a,b)}}}();window.addEventListener?window.addEventListener("load",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color);Rainbow.onHighlight=Rainbow.b;
Rainbow.addClass=Rainbow.a;Rainbow.extend([{matches:{1:{name:"keyword.operator",pattern:/\=/g},2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|bool(ean)?|c(atch|har|lass|onst)|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},
{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}]);Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{matches:{1:"support.tag.script",2:[{name:"string",pattern:/('|")(.*?)(\1)/g},{name:"entity.tag.script",
pattern:/(\w+)/g}],3:"support.tag.script"},pattern:/(&lt;\/?)(script.*?)(&gt;)/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(.*)(?=\s?=\s?function\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}]);


// https://github.com/eternicode/bootstrap-datepicker
!function(a){function b(){return new Date(Date.UTC.apply(Date,arguments))}var d=function(b,c){var d=this;switch(this.element=a(b),this.language=c.language||this.element.data("date-language")||"en",this.language=this.language in e?this.language:"en",this.format=f.parseFormat(c.format||this.element.data("date-format")||"mm/dd/yyyy"),this.picker=a(f.template).appendTo("body").on({click:a.proxy(this.click,this)}),this.isInput=this.element.is("input"),this.component=this.element.is(".date")?this.element.find(".add-on"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this._attachEvents(),this.forceParse=!0,"forceParse"in c?this.forceParse=c.forceParse:"dateForceParse"in this.element.data()&&(this.forceParse=this.element.data("date-force-parse")),a(document).on("mousedown",function(b){0==a(b.target).closest(".datepicker").length&&d.hide()}),this.autoclose=!1,"autoclose"in c?this.autoclose=c.autoclose:"dateAutoclose"in this.element.data()&&(this.autoclose=this.element.data("date-autoclose")),this.keyboardNavigation=!0,"keyboardNavigation"in c?this.keyboardNavigation=c.keyboardNavigation:"dateKeyboardNavigation"in this.element.data()&&(this.keyboardNavigation=this.element.data("date-keyboard-navigation")),c.startView||this.element.data("date-start-view")){case 2:case"decade":this.viewMode=this.startViewMode=2;break;case 1:case"year":this.viewMode=this.startViewMode=1;break;case 0:case"month":default:this.viewMode=this.startViewMode=0}this.todayBtn=c.todayBtn||this.element.data("date-today-btn")||!1,this.todayHighlight=c.todayHighlight||this.element.data("date-today-highlight")||!1,this.weekStart=(c.weekStart||this.element.data("date-weekstart")||e[this.language].weekStart||0)%7,this.weekEnd=(this.weekStart+6)%7,this.startDate=-1/0,this.endDate=1/0,this.daysOfWeekDisabled=[],this.setStartDate(c.startDate||this.element.data("date-startdate")),this.setEndDate(c.endDate||this.element.data("date-enddate")),this.setDaysOfWeekDisabled(c.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled")),this.fillDow(),this.fillMonths(),this.update(),this.showMode()};d.prototype={constructor:d,_events:[],_attachEvents:function(){this._detachEvents(),this._events=this.isInput?[[this.element,{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}]]:this.component&&this.hasInput?[[this.element.find("input"),{focus:a.proxy(this.show,this),keyup:a.proxy(this.update,this),keydown:a.proxy(this.keydown,this)}],[this.component,{click:a.proxy(this.show,this)}]]:[[this.element,{click:a.proxy(this.show,this)}]];for(var c,d,b=0;this._events.length>b;b++)c=this._events[b][0],d=this._events[b][1],c.on(d)},_detachEvents:function(){for(var b,c,a=0;this._events.length>a;a++)b=this._events[a][0],c=this._events[a][1],b.off(c);this._events=[]},show:function(b){this.picker.show(),this.height=this.component?this.component.outerHeight():this.element.outerHeight(),this.update(),this.place(),a(window).on("resize",a.proxy(this.place,this)),b&&(b.stopPropagation(),b.preventDefault()),this.element.trigger({type:"show",date:this.date})},hide:function(){this.picker.hide(),a(window).off("resize",this.place),this.viewMode=this.startViewMode,this.showMode(),this.isInput||a(document).off("mousedown",this.hide),this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this.element.trigger({type:"hide",date:this.date})},remove:function(){this._detachEvents(),this.picker.remove(),delete this.element.data().datepicker},getDate:function(){var a=this.getUTCDate();return new Date(a.getTime()+6e4*a.getTimezoneOffset())},getUTCDate:function(){return this.date},setDate:function(a){this.setUTCDate(new Date(a.getTime()-6e4*a.getTimezoneOffset()))},setUTCDate:function(a){this.date=a,this.setValue()},setValue:function(){var a=f.formatDate(this.date,this.format,this.language);this.isInput?this.element.prop("value",a):(this.component&&this.element.find("input").prop("value",a),this.element.data("date",a))},setStartDate:function(a){this.startDate=a||-1/0,this.startDate!==-1/0&&(this.startDate=f.parseDate(this.startDate,this.format,this.language)),this.update(),this.updateNavArrows()},setEndDate:function(a){this.endDate=a||1/0,1/0!==this.endDate&&(this.endDate=f.parseDate(this.endDate,this.format,this.language)),this.update(),this.updateNavArrows()},setDaysOfWeekDisabled:function(b){this.daysOfWeekDisabled=b||[],a.isArray(this.daysOfWeekDisabled)||(this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)),this.daysOfWeekDisabled=a.map(this.daysOfWeekDisabled,function(a){return parseInt(a,10)}),this.update(),this.updateNavArrows()},place:function(){var b=parseInt(this.element.parents().filter(function(){return"auto"!=a(this).css("z-index")}).first().css("z-index"))+10,c=this.component?this.component.offset():this.element.offset();this.picker.css({top:c.top+this.height,left:c.left,zIndex:b})},update:function(){this.date=f.parseDate(this.isInput?this.element.prop("value"):this.element.data("date")||this.element.find("input").prop("value"),this.format,this.language),this.viewDate=this.date<this.startDate?new Date(this.startDate):this.date>this.endDate?new Date(this.endDate):new Date(this.date),this.fill()},fillDow:function(){for(var a=this.weekStart,b="<tr>";this.weekStart+7>a;)b+='<th class="dow">'+e[this.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+e[this.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},fill:function(){var c=new Date(this.viewDate),d=c.getUTCFullYear(),g=c.getUTCMonth(),h=this.startDate!==-1/0?this.startDate.getUTCFullYear():-1/0,i=this.startDate!==-1/0?this.startDate.getUTCMonth():-1/0,j=1/0!==this.endDate?this.endDate.getUTCFullYear():1/0,k=1/0!==this.endDate?this.endDate.getUTCMonth():1/0,l=this.date.valueOf(),m=new Date;this.picker.find(".datepicker-days thead th:eq(1)").text(e[this.language].months[g]+" "+d),this.picker.find("tfoot th.today").text(e[this.language].today).toggle(this.todayBtn!==!1),this.updateNavArrows(),this.fillMonths();var n=b(d,g-1,28,0,0,0,0),o=f.getDaysInMonth(n.getUTCFullYear(),n.getUTCMonth());n.setUTCDate(o),n.setUTCDate(o-(n.getUTCDay()-this.weekStart+7)%7);var p=new Date(n);p.setUTCDate(p.getUTCDate()+42),p=p.valueOf();for(var r,q=[];p>n.valueOf();)n.getUTCDay()==this.weekStart&&q.push("<tr>"),r="",d>n.getUTCFullYear()||n.getUTCFullYear()==d&&g>n.getUTCMonth()?r+=" old":(n.getUTCFullYear()>d||n.getUTCFullYear()==d&&n.getUTCMonth()>g)&&(r+=" new"),this.todayHighlight&&n.getUTCFullYear()==m.getFullYear()&&n.getUTCMonth()==m.getMonth()&&n.getUTCDate()==m.getDate()&&(r+=" today"),n.valueOf()==l&&(r+=" active"),(n.valueOf()<this.startDate||n.valueOf()>this.endDate||-1!==a.inArray(n.getUTCDay(),this.daysOfWeekDisabled))&&(r+=" disabled"),q.push('<td class="day'+r+'">'+n.getUTCDate()+"</td>"),n.getUTCDay()==this.weekEnd&&q.push("</tr>"),n.setUTCDate(n.getUTCDate()+1);this.picker.find(".datepicker-days tbody").empty().append(q.join(""));var s=this.date.getUTCFullYear(),t=this.picker.find(".datepicker-months").find("th:eq(1)").text(d).end().find("span").removeClass("active");s==d&&t.eq(this.date.getUTCMonth()).addClass("active"),(h>d||d>j)&&t.addClass("disabled"),d==h&&t.slice(0,i).addClass("disabled"),d==j&&t.slice(k+1).addClass("disabled"),q="",d=10*parseInt(d/10,10);var u=this.picker.find(".datepicker-years").find("th:eq(1)").text(d+"-"+(d+9)).end().find("td");d-=1;for(var v=-1;11>v;v++)q+='<span class="year'+(-1==v||10==v?" old":"")+(s==d?" active":"")+(h>d||d>j?" disabled":"")+'">'+d+"</span>",d+=1;u.html(q)},updateNavArrows:function(){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.startDate!==-1/0&&this.startDate.getUTCFullYear()>=b&&this.startDate.getUTCMonth()>=c?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.endDate&&b>=this.endDate.getUTCFullYear()&&c>=this.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.startDate!==-1/0&&this.startDate.getUTCFullYear()>=b?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),1/0!==this.endDate&&b>=this.endDate.getUTCFullYear()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}},click:function(c){c.stopPropagation(),c.preventDefault();var d=a(c.target).closest("span, td, th");if(1==d.length)switch(d[0].nodeName.toLowerCase()){case"th":switch(d[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var e=f.modes[this.viewMode].navStep*("prev"==d[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,e);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,e)}this.fill();break;case"today":var g=new Date;g.setUTCHours(0),g.setUTCMinutes(0),g.setUTCSeconds(0),g.setUTCMilliseconds(0),this.showMode(-2);var h="linked"==this.todayBtn?null:"view";this._setDate(g,h)}break;case"span":if(!d.is(".disabled")){if(this.viewDate.setUTCDate(1),d.is(".month")){var i=d.parent().find("span").index(d);this.viewDate.setUTCMonth(i),this.element.trigger({type:"changeMonth",date:this.viewDate})}else{var j=parseInt(d.text(),10)||0;this.viewDate.setUTCFullYear(j),this.element.trigger({type:"changeYear",date:this.viewDate})}this.showMode(-1),this.fill()}break;case"td":if(d.is(".day")&&!d.is(".disabled")){var k=parseInt(d.text(),10)||1,j=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth();d.is(".old")?0==i?(i=11,j-=1):i-=1:d.is(".new")&&(11==i?(i=0,j+=1):i+=1),this._setDate(b(j,i,k,0,0,0,0))}}},_setDate:function(a,b){b&&"date"!=b||(this.date=a),b&&"view"!=b||(this.viewDate=a),this.fill(),this.setValue(),this.element.trigger({type:"changeDate",date:this.date});var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&(c.change(),this.autoclose&&this.hide())},moveMonth:function(a,b){if(!b)return a;var g,h,c=new Date(a.valueOf()),d=c.getUTCDate(),e=c.getUTCMonth(),f=Math.abs(b);if(b=b>0?1:-1,1==f)h=-1==b?function(){return c.getUTCMonth()==e}:function(){return c.getUTCMonth()!=g},g=e+b,c.setUTCMonth(g),(0>g||g>11)&&(g=(g+12)%12);else{for(var i=0;f>i;i++)c=this.moveMonth(c,b);g=c.getUTCMonth(),c.setUTCDate(d),h=function(){return g!=c.getUTCMonth()}}for(;h();)c.setUTCDate(--d),c.setUTCMonth(g);return c},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.startDate&&this.endDate>=a},keydown:function(a){if(this.picker.is(":not(:visible)"))return 27==a.keyCode&&this.show(),void 0;var c,f,g,b=!1;switch(a.keyCode){case 27:this.hide(),a.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation)break;c=37==a.keyCode?-1:1,a.ctrlKey?(f=this.moveYear(this.date,c),g=this.moveYear(this.viewDate,c)):a.shiftKey?(f=this.moveMonth(this.date,c),g=this.moveMonth(this.viewDate,c)):(f=new Date(this.date),f.setUTCDate(this.date.getUTCDate()+c),g=new Date(this.viewDate),g.setUTCDate(this.viewDate.getUTCDate()+c)),this.dateWithinRange(f)&&(this.date=f,this.viewDate=g,this.setValue(),this.update(),a.preventDefault(),b=!0);break;case 38:case 40:if(!this.keyboardNavigation)break;c=38==a.keyCode?-1:1,a.ctrlKey?(f=this.moveYear(this.date,c),g=this.moveYear(this.viewDate,c)):a.shiftKey?(f=this.moveMonth(this.date,c),g=this.moveMonth(this.viewDate,c)):(f=new Date(this.date),f.setUTCDate(this.date.getUTCDate()+7*c),g=new Date(this.viewDate),g.setUTCDate(this.viewDate.getUTCDate()+7*c)),this.dateWithinRange(f)&&(this.date=f,this.viewDate=g,this.setValue(),this.update(),a.preventDefault(),b=!0);break;case 13:this.hide(),a.preventDefault();break;case 9:this.hide()}if(b){this.element.trigger({type:"changeDate",date:this.date});var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(a){a&&(this.viewMode=Math.max(0,Math.min(2,this.viewMode+a))),this.picker.find(">div").hide().filter(".datepicker-"+f.modes[this.viewMode].clsName).show(),this.updateNavArrows()}},a.fn.datepicker=function(b){var c=Array.apply(null,arguments);return c.shift(),this.each(function(){var e=a(this),f=e.data("datepicker"),g="object"==typeof b&&b;f||e.data("datepicker",f=new d(this,a.extend({},a.fn.datepicker.defaults,g))),"string"==typeof b&&"function"==typeof f[b]&&f[b].apply(f,c)})},a.fn.datepicker.defaults={},a.fn.datepicker.Constructor=d;var e=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today"}},f={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return 0===a%4&&0!==a%100||0===a%400},getDaysInMonth:function(a,b){return[31,f.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\0").split("\0"),c=a.match(this.validParts);if(!b||!b.length||!c||0==c.length)throw Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(c,f,g){if(c instanceof Date)return c;if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(c)){var j,k,h=/([-+]\d+)([dmwy])/,i=c.match(/([-+]\d+)([dmwy])/g);c=new Date;for(var l=0;i.length>l;l++)switch(j=h.exec(i[l]),k=parseInt(j[1]),j[2]){case"d":c.setUTCDate(c.getUTCDate()+k);break;case"m":c=d.prototype.moveMonth.call(d.prototype,c,k);break;case"w":c.setUTCDate(c.getUTCDate()+7*k);break;case"y":c=d.prototype.moveYear.call(d.prototype,c,k)}return b(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),0,0,0)}var p,q,j,i=c&&c.match(this.nonpunctuation)||[],c=new Date,m={},n=["yyyy","yy","M","MM","m","mm","d","dd"],o={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!=b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};if(o.M=o.MM=o.mm=o.m,o.dd=o.d,c=b(c.getFullYear(),c.getMonth(),c.getDate(),0,0,0),i.length==f.parts.length){for(var l=0,r=f.parts.length;r>l;l++){if(p=parseInt(i[l],10),j=f.parts[l],isNaN(p))switch(j){case"MM":q=a(e[g].months).filter(function(){var a=this.slice(0,i[l].length),b=i[l].slice(0,a.length);return a==b}),p=a.inArray(q[0],e[g].months)+1;break;case"M":q=a(e[g].monthsShort).filter(function(){var a=this.slice(0,i[l].length),b=i[l].slice(0,a.length);return a==b}),p=a.inArray(q[0],e[g].monthsShort)+1}m[j]=p}for(var s,l=0;n.length>l;l++)s=n[l],s in m&&!isNaN(m[s])&&o[s](c,m[s])}return c},formatDate:function(b,c,d){var f={d:b.getUTCDate(),m:b.getUTCMonth()+1,M:e[d].monthsShort[b.getUTCMonth()],MM:e[d].months[b.getUTCMonth()],yy:(""+b.getUTCFullYear()).substring(2),yyyy:b.getUTCFullYear()};f.dd=(10>f.d?"0":"")+f.d,f.mm=(10>f.m?"0":"")+f.m;for(var b=[],g=a.extend([],c.separators),h=0,i=c.parts.length;i>h;h++)g.length&&b.push(g.shift()),b.push(f[c.parts[h]]);return b.join("")},headTemplate:'<thead><tr><th class="prev"><i class="icon-arrow-left"/></th><th colspan="5" class="switch"></th><th class="next"><i class="icon-arrow-right"/></th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'};f.template='<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">'+f.headTemplate+"<tbody></tbody>"+f.footTemplate+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+f.headTemplate+f.contTemplate+f.footTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+f.headTemplate+f.contTemplate+f.footTemplate+"</table>"+"</div>"+"</div>"}(window.jQuery);