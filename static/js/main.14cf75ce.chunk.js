(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__3IYRk",description:"Profile_description__3-cVI",avatar:"Profile_avatar__lqN-5",name:"Profile_name__lePMI",tag:"Profile_tag__2Wy6B",location:"Profile_location__2G5nD",stats:"Profile_stats__3m_yE",label:"Profile_label__2VgYq",quantity:"Profile_quantity__1epsU",listItem:"Profile_listItem__2NyjP"}},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__vtUXH",tableHeading:"TransactionHistory_tableHeading__22V3H",tableCell:"TransactionHistory_tableCell__2cFXU"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={statistics:"Statistics_statistics__T1fbb",statList:"Statistics_statList__1x7F_",title:"Statistics_title__2ezPK",item:"Statistics_item__x7Gtx",label:"Statistics_label__39IFR",percentage:"Statistics_percentage__QzaTn"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__2sbVc",item:"FriendList_item__Zq2VB",avatar:"FriendList_avatar__1YYE8",name:"FriendList_name__t_hEC",isOnline:"FriendList_isOnline__TYfie",isOffline:"FriendList_isOffline__2xdYz"}},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,a,t){"use strict";t.r(a);var s=t(6),i=t.n(s),c=t(9),n=t.n(c),r=t(1),l=t.n(r),d=t(0),o=function(e){var a=e.name,t=e.tag,s=e.location,i=e.avatar,c=e.statsFollowers,n=e.statsViews,r=e.statsLikes;return Object(d.jsxs)("div",{className:l.a.profile,children:[Object(d.jsxs)("div",{className:l.a.description,children:[Object(d.jsx)("img",{src:i,alt:a,className:l.a.avatar}),Object(d.jsx)("p",{className:l.a.name,children:a}),Object(d.jsxs)("p",{className:l.a.tag,children:["@",t]}),Object(d.jsx)("p",{className:l.a.location,children:s})]}),Object(d.jsxs)("ul",{className:l.a.stats,children:[Object(d.jsxs)("li",{className:l.a.listItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Followers"}),Object(d.jsx)("span",{className:l.a.quantity,children:c})]}),Object(d.jsxs)("li",{className:l.a.listItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Views"}),Object(d.jsx)("span",{className:l.a.quantity,children:n})]}),Object(d.jsxs)("li",{className:l.a.listItem,children:[Object(d.jsx)("span",{className:l.a.label,children:"Likes"}),Object(d.jsx)("span",{className:l.a.quantity,children:r})]})]})]})},b=t(4),m=t.n(b),j=function(){return"#".concat(Math.random().toString(16).substr(-6))},f=function(e){var a=e.title,t=e.stats;return Object(d.jsxs)("section",{className:m.a.statistics,children:[a&&Object(d.jsx)("h2",{className:m.a.title,children:a}),Object(d.jsx)("ul",{className:m.a.statList,children:t.map((function(e){var a=e.id,t=e.label,s=e.percentage;return Object(d.jsxs)("li",{className:m.a.item,style:{backgroundColor:j()},children:[Object(d.jsx)("span",{className:m.a.label,children:t}),Object(d.jsx)("span",{className:m.a.percentage,children:s})]},a)}))})]})},p=t(5),u=t.n(p),_=function(e){var a=e.friends;return Object(d.jsx)("ul",{className:u.a.friendList,children:a.map((function(e){return Object(d.jsxs)("li",{className:u.a.item,children:[Object(d.jsx)("span",{className:e.isOnline?u.a.isOnline:u.a.isOffline}),Object(d.jsx)("img",{className:u.a.avatar,src:e.avatar,alt:e.name,width:"48"}),Object(d.jsx)("p",{className:u.a.name,children:e.name})]},e.id)}))})},y=t(2),O=t.n(y),h=function(e){var a=e.items;return Object(d.jsxs)("table",{className:O.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:O.a.tableHeading,children:"Type"}),Object(d.jsx)("th",{className:O.a.tableHeading,children:"Amount"}),Object(d.jsx)("th",{className:O.a.tableHeading,children:"Currency"})]})}),Object(d.jsx)("tbody",{children:a.map((function(e){var a=e.id,t=e.type,s=e.amount,i=e.currency;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:O.a.tableCell,children:t}),Object(d.jsx)("td",{className:O.a.tableCell,children:s}),Object(d.jsx)("td",{className:O.a.tableCell,children:i})]},a)}))})]})},x=t(3),v=t(8),g=t(10),w=t(11);function N(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{name:x.name,tag:x.tag,location:x.location,avatar:x.avatar,statsFollowers:x.stats.followers,statsViews:x.stats.views,statsLikes:x.stats.likes}),Object(d.jsx)(f,{title:"Upload stats",stats:v}),Object(d.jsx)(f,{stats:v}),Object(d.jsx)(_,{friends:g}),Object(d.jsx)(h,{items:w})]})}n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.14cf75ce.chunk.js.map