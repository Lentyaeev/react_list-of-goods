(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,c=s(3),a=s.n(c),r=s(4),i=s(5),o=s(9),u=s(7),l=s(8),b=s(1),d=(s(15),s(6)),h=s(0),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var j=function(t){Object(o.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isStarted:!1,isReversed:!1,sortType:n.NONE},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this,e=function(t,e,s){var c=Object(l.a)(t);switch(e){case n.ALPABET:c.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:c.sort((function(t,e){return t.length-e.length}))}return s?c.reverse():c}(p,this.state.sortType,this.state.isReversed);return Object(h.jsxs)("div",{className:"App panel",children:[!this.state.isStarted&&Object(h.jsx)("button",{type:"button",className:"button is-success",onClick:function(){t.setState({isStarted:!0})},children:"Start"}),this.state.isStarted&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",className:"button ".concat(this.state.sortType===n.ALPABET?"is-success":"is-danger"),onClick:function(){t.setState({sortType:n.ALPABET})},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button ".concat(this.state.sortType===n.LENGTH?"is-success":"is-danger"),onClick:function(){t.setState({sortType:n.LENGTH})},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:"button ".concat(this.state.isReversed?"is-success":"is-danger"),onClick:function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"button ".concat(this.state.sortType!==n.NONE||this.state.isReversed?"is-danger":"is-success"),onClick:function(){t.setState({sortType:n.NONE,isReversed:!1})},children:"Reset"}),Object(h.jsx)("ul",{className:"Goods",children:e.map((function(t){return Object(h.jsx)("li",{className:"Goods__items",children:t},Object(d.a)())}))})]})]})}}]),s}(b.Component);a.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.48b05668.chunk.js.map