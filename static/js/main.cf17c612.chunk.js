(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{20:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i.n(n),a=i(22),r=i.n(a),s=(i(30),i(31),i(20),i(5)),o=(i(32),i(23)),d=i(24),l=i.p+"static/media/logo.3a579eb6.png",u=i(0);var j=function(e){var t=e.totalQuantity,i=Object(u.jsx)(o.a,{icon:d.a});return Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"nav-links",children:[Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("li",{className:"logo",children:Object(u.jsx)("img",{src:l,alt:"bridge logo"})})}),Object(u.jsx)(s.b,{to:"/shop",children:Object(u.jsx)("li",{className:"shop",children:"Shop"})}),Object(u.jsx)(s.b,{to:{pathname:"/cart",state:{number:0,itemDetails:{name:"",images:"",id:"",price:"",description:""}}},children:Object(u.jsxs)("li",{className:"cart",children:[i,Object(u.jsx)("span",{className:"item-count",children:t})]})})]})})},m=function(){var e=JSON.parse(localStorage.getItem("mySavedCart"))||[];return Object(u.jsx)("div",{children:Object(u.jsx)(j,{totalQuantity:function(e){var t=0;return e.map((function(e){return t=parseInt(t)+parseInt(e.quantity)})),t}(e)})})},b=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"background",children:[Object(u.jsxs)("h1",{children:["George C. Parker's",Object(u.jsx)("br",{}),"Quality Bridges"]}),Object(u.jsx)("h3",{className:"tagline",children:'"Every path in life has a bridge ..."'}),Object(u.jsx)(s.b,{to:"/shop",children:Object(u.jsx)("button",{className:"shop",children:"Shop Now"})})]})]})},h=i(19),p=i(10),g=i(3);i(41);var O=function(){var e=Object(g.f)(),t=Object(n.useState)(JSON.parse(localStorage.getItem("mySavedCart"))||[]),i=Object(p.a)(t,2),c=i[0],a=i[1],r=Object(n.useState)(!0),o=Object(p.a)(r,2),d=o[0],l=o[1];Object(n.useEffect)((function(){var t=[],i={quantity:e.state.number,name:e.state.itemDetails.name,price:e.state.itemDetails.price,id:e.state.itemDetails.id,images:e.state.itemDetails.images};if(""===e.state.itemDetails.name)console.log("no item");else{var n=function(e){for(var t=0;t<c.length;t++)if(e.id===c[t].id)return parseInt(e.quantity)+parseInt(c[t].quantity)}(i);if(function(e){var t=Object(h.a)(new Set(e.map((function(e){return e.id}))));return Object(h.a)(t).length===e.length}(t=c.concat(i)))a(t);else{var r=e.state.itemDetails.id,s=c.find((function(e){return e.id===r}));!function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}(r),a((function(e){return e.concat(function(e,t){return{quantity:t,name:e.name,price:e.price,id:e.id,images:e.images}}(s,n))}))}}}),[]),Object(n.useEffect)((function(){c.length>0&&l(!1)}),[c]),Object(n.useEffect)((function(){localStorage.setItem("mySavedCart",JSON.stringify(c))}),[c]);var m=function(e,t){return(e*t).toFixed(2)},b=function(e){var t=parseFloat(e);return(t=t.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},O=function(e,t){var i=c.find((function(e){return e.id===parseInt(t)})),n=c.find((function(e){return e.id===parseInt(t)})),r=c.indexOf(n),s={quantity:e,name:i.name,price:i.price,id:i.id,images:i.images};a((function(e){return e.filter((function(e){return e.id!==t}))}));var o=c.slice(0,r),d=c.slice(r+1);a(o.concat(s,d))},f=function(e){e.preventDefault();var t=parseInt(e.target.value);t<0&&(t=0);var i=e.target.getAttribute("id");0===t?y(e):O(t,i)},x=function(e){e.preventDefault();var t=parseInt(e.target.value)+1,i=e.target.getAttribute("id");O(t,i)},v=function(e){e.preventDefault();var t=parseInt(e.target.value);t>0?t--:t=0;var i=e.target.getAttribute("id");O(t,i)},y=function(e){var t=e.target.getAttribute("id"),i=c.find((function(e){return e.id===parseInt(t)})),n=c.indexOf(i);a((function(e){return e.filter((function(e){return e.id!==t}))}));var r=c.slice(0,n),s=c.slice(n+1);a(r.concat(s))};return Object(u.jsxs)("div",{className:"cart-contents",children:[Object(u.jsx)(j,{totalQuantity:function(e){var t=0;return e.map((function(e){return t=parseInt(t)+parseInt(e.quantity)})),t}(c)}),Object(u.jsx)("h2",{className:"cart-title",children:"Cart"}),d?Object(u.jsx)("div",{children:Object(u.jsx)("li",{children:"Your Cart is Empty"})}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("h3",{className:"row",id:"categories",children:[Object(u.jsx)("div",{className:"column",children:" "}),Object(u.jsx)("div",{className:"column",children:"Item"}),Object(u.jsx)("div",{className:"column",children:"Price"}),Object(u.jsx)("div",{className:"column",children:"Quantity"}),Object(u.jsx)("div",{className:"column",children:"Total Price"})]}),c.map((function(e){return Object(u.jsxs)("h3",{className:"row",id:"contents",children:[Object(u.jsx)("div",{className:"column",children:Object(u.jsx)("img",{src:e.images,alt:e.name,className:"cart-item"})}),Object(u.jsx)("div",{className:"column",children:e.name}),Object(u.jsxs)("div",{className:"column",children:["$",b(e.price)]}),Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("button",{className:"decrease",value:e.quantity,id:e.id,onClick:v,children:"-"}),Object(u.jsx)("input",{value:e.quantity,id:e.id,onFocus:function(e){return e.target.value=""},onChange:f}),Object(u.jsx)("button",{className:"increase",value:e.quantity,id:e.id,onClick:x,children:"+"}),Object(u.jsx)("button",{className:"delete",value:e.id,id:e.id,onClick:y,children:"delete"})]}),Object(u.jsxs)("div",{className:"column",children:["$",b(m(e.price,e.quantity))]})]},e.id)})),Object(u.jsxs)("h3",{className:"total",children:["Total = $",function(e){var t=0;return e.map((function(e){return t=parseFloat(m(e.price,e.quantity))+parseFloat(t)})),b(t)}(c)]})]}),Object(u.jsx)(s.b,{to:"/shop",children:Object(u.jsx)("button",{className:"go-to-store",children:"Keep Shopping"})}),Object(u.jsx)(s.b,{to:"/checkout",children:Object(u.jsx)("button",{className:"checkout",children:"Checkout"})})]})},f=(i(42),{item:[{name:"Golden Gate Bridge",images:i.p+"static/media/golden-gate.16a4425c.jpg",id:5483,price:"35000000",description:"The Golden Gate Bridge is a suspension bridge 1.7 miles long and 746 feet high. It was constructed from 1933-1937. In a beautiful shade of red, it is said to be one of the most photographed bridges."},{name:"Brooklyn Bridge",images:i.p+"static/media/brooklyn-bridge.cbcf8baa.jpg",id:8675,price:"15000000",description:"The Brooklyn Bridge is a suspension bridge 1.1 miles long in the heart of New York City. It is 137 years old and was the longest suspension bridge in the world at the time of its construction."},{name:"Basic Bridge",images:i.p+"static/media/broken-bridge.5921557e.jpg",id:5309,price:"57.39",description:"Connect land over small streams with a basic bridge. This is one of our newer bridge at 25 years old. The need for updating is reflected in the low price."},{name:"Little Manatee River Bridge",images:i.p+"static/media/little-manatee-river.44d8aacc.jpg",id:3290,price:"230000",description:"This is a Warren-type simple truss bridge. With a little TLC you can transport your train over a river in style."},{name:"Tower Bridge",images:i.p+"static/media/tower-bridge.18735b99.jpg",id:2130,price:"1644558.20",description:"This bridge has been in operation since 1886. This combined bascule and suspension bridge is sure to get you noticed."},{name:"Old Canal Bridge",images:i.p+"static/media/old-bridge-on-canal.5dca8f72.jpg",id:1256,price:"9999.99",description:"Has your homeowner's association erected a canal through your yard? This is the perfect solution to get to the other side."},{name:"Mackinac Bridge",images:i.p+"static/media/mackinaw-bridge.9ae501c7.jpg",id:4321,price:"100000000",description:"Own your own 5-mile long suspension bridge. Imagine the pride in knowing your bridge is the only thing connecting Michigan's two penninsulas."},{name:"Covered Bridge",images:i.p+"static/media/covered-bridge.0c40cfb2.jpg",id:1001,price:"5000",description:"Cross a river in style with this old-fashioned covered bridge. You will not need to worry about getting wet while crossing this bridge in a storm."}]});var x=function(){var e=f;return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(m,{}),Object(u.jsx)("h2",{className:"shop-heading",children:"Would you like to buy a bridge?"}),Object(u.jsx)("div",{className:"row",id:"shop",children:e.item.map((function(e){return Object(u.jsxs)("div",{className:"column",children:[console.log(e.images),Object(u.jsx)(s.b,{to:"/shop/".concat(e.id),children:Object(u.jsx)("img",{src:e.images,alt:e.name,className:"item"})}),Object(u.jsx)("h3",{children:e.name}),Object(u.jsxs)("h3",{children:["$",(t=e.price,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]})]},e.id);var t}))})]})};i(43);var v=function(e){var t,i=e.match,c=Object(n.useState)({name:"",images:"",id:"",price:"",description:""}),a=Object(p.a)(c,2),r=a[0],o=a[1],d=Object(n.useState)(!1),l=Object(p.a)(d,2),j=l[0],b=l[1],h=Object(n.useState)(1),g=Object(p.a)(h,2),O=g[0],x=g[1];return Object(n.useEffect)((function(){var e=parseInt(i.params.id),t=[f][0].item.filter((function(t,i){return t.id===e}));o(t[0]),b(!0)}),[]),Object(u.jsxs)("div",{className:"item-selection",children:[Object(u.jsx)(m,{}),j?Object(u.jsxs)("div",{className:"column",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"item-detail",src:r.images,alt:r.name})}),Object(u.jsx)("h2",{children:r.name}),Object(u.jsx)("h3",{className:"description",children:r.description}),Object(u.jsxs)("h2",{children:["$",(t=r.price,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{id:"decrease",onClick:function(e){e.preventDefault(),O>0&&x(parseInt(O)-1)},children:"-"}),Object(u.jsx)("input",{id:"quantity",value:O,onChange:function(e){e.preventDefault();var t=parseInt(e.target.value);x(t>0?t:0)}}),Object(u.jsx)("button",{id:"increase",onClick:function(e){e.preventDefault(),x(parseInt(O)+1)},children:"+"}),Object(u.jsx)(s.b,{to:{pathname:"/cart",state:{number:O,itemDetails:r}},children:Object(u.jsx)("button",{id:"add-to-cart",children:"Add to Cart"})})]})]}):null]})};i(44);var y=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsx)("h2",{className:"checkout",children:"Checkout"}),Object(u.jsx)("h3",{className:"checkout",children:"Don't be scammed! You can not buy a bridge on the Internet!"}),Object(u.jsx)("h4",{className:"checkout",children:"George C. Parker was born in New York City in 1860. He is best known for selling local landmarks to immigrants. Mr. Parker sold the Brooklyn Bridge multiple times. As a result, the police removed several buyers from the bridge when they tried to erect toll booths. He eventually died in Sing-Sing prison in 1936."}),Object(u.jsx)("iframe",{title:"The Man Who Sold New York song",width:"400",height:"240",src:"https://www.youtube.com/embed/U_pC5mXKVF8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})};var N=function(){return Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)(j,{})}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/shopping-cart/",exact:!0,component:b}),Object(u.jsx)(g.a,{path:"/shopping-cart/cart",component:O}),Object(u.jsx)(g.a,{path:"/shopping-cart/shop",exact:!0,component:x}),Object(u.jsx)(g.a,{path:"/shopping-cart/shop/:id",exact:!0,component:v}),Object(u.jsx)(g.a,{path:"/shopping-cart/checkout",component:y})]})})]})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cf17c612.chunk.js.map