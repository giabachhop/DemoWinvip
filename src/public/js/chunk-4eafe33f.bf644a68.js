(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4eafe33f"],{"305b":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list-container",attrs:{id:"tool-edit-commisstion"}},[[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12 mb-base"},[s("div",{staticClass:"centerx labelx mb-4"},[s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(e){return e.preventDefault(),t.addItem(e)}}},[t._v("Thêm Cấp")])],1),t._l(t.items,(function(e,i){return s("div",{key:e.lvl,staticClass:"centerx labelx mb-4 relative"},[s("span",{staticClass:"closeItem",on:{click:function(e){return t.deleteItem(i)}}}),s("vs-input",{staticClass:"w-full",attrs:{type:"number","icon-pack":"feather",icon:"icon-x","icon-after":"",label:"% Cấp "+(i+1),"vs-placeholder":"Nombre"},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"item.value"}}),s("p",[s("b",[t._v("$ 10 = "+t._s(.1*e.value))])])],1)})),s("div",{staticClass:"centerx labelx mb-4"},[s("vs-button",{staticClass:"mt-5 block",attrs:{type:"filled"},on:{click:function(e){return e.preventDefault(),t.saveItem(e)}}},[t._v("Đồng ý")])],1)],2)])]],2)},n=[],a=s("c5b9"),c={data:function(){return{items:[{id:1,value:""}]}},methods:{deleteItem:function(t){this.items.splice(t,1)},addItem:function(){this.items.push({id:1,value:""})},saveItem:function(){var t=this;a["a"].saveRateCommission(this.items).then((function(e){return t.$vs.notify({text:"Đã lưu",iconPack:"feather",icon:"icon-check",color:"success"})}))},getItem:function(){var t=this;a["a"].getRateCommission().then((function(e){t.items=e.data.data}))}},mounted:function(){this.getItem()}},l=c,o=(s("498f"),s("2877")),u=Object(o["a"])(l,i,n,!1,null,"7e4ac195",null);e["default"]=u.exports},"498f":function(t,e,s){"use strict";s("773f")},"773f":function(t,e,s){}}]);