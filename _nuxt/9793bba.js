(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{344:function(e,t,r){"use strict";r.r(t);var n={name:"Formulario",data:function(){return{abierto:!1,valid:!0,val:0,select:"",date:"",checkbox:!1,items:["Alimentación","Casa","Compras","Ocio","Salud","Transporte","Otro"]}},methods:{required:function(e){return!!e||"required value"},add:function(){this.$emit("input",{f1:this.val,f2:this.select,f3:this.date})},sendClear:function(){this.$emit("clear")}}},o=r(78),l=r(110),c=r.n(l),d=r(347),f=r(419),v=r(416),m=r(342),h=r(417),O=r(341),x=r(418),_=r(410),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-text-field",{attrs:{label:"Cantidad",rules:[e.required]},model:{value:e.val,callback:function(t){e.val=e._n(t)},expression:"val"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-select",{attrs:{items:e.items,rules:[e.required],label:"Categoría",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),r("v-row",[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Fecha","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",o,!1),n))]}}]),model:{value:e.abierto,callback:function(t){e.abierto=t},expression:"abierto"}},[e._v(" "),r("v-date-picker",{on:{input:function(t){e.abierto=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),e._v(" "),r("v-row",[r("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.add}},[e._v(" Añadir ")])],1),e._v(" "),r("v-row",[r("v-btn",{attrs:{color:"red"},on:{click:e.sendClear}},[e._v("Resetear datos")])],1)],1)}),[],!1,null,"399c92a4",null);t.default=component.exports;c()(component,{VBtn:d.a,VDatePicker:f.a,VForm:v.a,VMenu:m.a,VRow:h.a,VSelect:O.a,VSpacer:x.a,VTextField:_.a})},345:function(e,t,r){"use strict";r.r(t);var n={name:"Tabla",props:{items_tabla:{type:Array,value:function(){return[]}}},data:function(){return{cabeceras:[{text:"Gasto",value:"f1",sortable:!1},{text:"Tipo",value:"f2",sortable:!1},{text:"Fecha",value:"f3",sortable:!1}]}}},o=r(78),l=r(110),c=r.n(l),d=r(420),component=Object(o.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("v-data-table",{staticClass:"elevation-1",attrs:{headers:this.cabeceras,items:this.items_tabla,"items-per-page":5}})}),[],!1,null,"366417de",null);t.default=component.exports;c()(component,{VDataTable:d.a})},423:function(e,t,r){"use strict";r.r(t);r(6),r(10),r(11),r(18),r(19),r(14),r(12),r(58);var n=r(9),o=r(2),l=r(102),c=r(344),d=r(345);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"pruebaFormulario",components:{Formulario:c.default,Tabla:d.default},data:function(){return{}},computed:v({},Object(l.d)("listaGastos",["gastos"])),methods:v({},Object(l.b)("listaGastos",["addAction","initializeVuex","clearAction"])),fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initializeVuex();case 2:case"end":return t.stop()}}),t)})))()}},h=r(78),component=Object(h.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("formulario",{on:{input:this.addAction,clear:this.clearAction}}),this._v(" "),t("tabla",{staticClass:"mt-5",attrs:{items_tabla:this.gastos}})],1)}),[],!1,null,"04fb9db3",null);t.default=component.exports;installComponents(component,{Formulario:r(344).default,Tabla:r(345).default})}}]);