(window["webpackJsonptmx-records"]=window["webpackJsonptmx-records"]||[]).push([[0],{123:function(e,t,a){e.exports=a(147)},146:function(e,t,a){var n={"./nations/2019-09-22.json":[151,3],"./nations/latest.json":[152,4],"./original/2019-09-22.json":[153,5],"./original/latest.json":[154,6],"./sunrise/2019-09-22.json":[155,7],"./sunrise/latest.json":[156,8],"./tm2/2019-09-20.json":[157,9],"./tm2/2019-09-22.json":[158,10],"./tm2/latest.json":[159,11],"./tmnforever/2019-09-20.json":[160,12],"./tmnforever/2019-09-22.json":[161,13],"./tmnforever/latest.json":[162,14]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return a.e(t[1]).then((function(){return a.t(r,3)}))}r.keys=function(){return Object.keys(n)},r.id=146,e.exports=r},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(42),i=a(38),u=a(23),s=a.n(u),m=a(222),d=a(88),f=a(221),p=a(69),b=a(220),E=a(107),g=a(24),h=a(205),y=a(227),v=a(204),w=a(25),x=a(226),k=a(207),O=a(199),j=a(201),P=a(203),D=a(230),S=a(206),B=a(54),T=a(91),N=a.n(T),C=function(){var e=r.a.useRef(!1);return r.a.useEffect((function(){return e.current=!0,function(){return e.current=!1}}),[]),e},R=Object(d.a)((function(e){return{root:{paddingBottom:e.spacing(8)},list:{width:e.spacing(25),height:"100%"},menuButton:{marginLeft:-12,marginRight:20},drawer:{width:240,flexShrink:0},appBar:{zIndex:e.zIndex.drawer+1},flex:{flex:1},active:{color:e.palette.primary.main}}})),U=[{title:"404 - Page Not Found",link:null,inDrawer:!1},{title:"tmx-records",link:"/",inDrawer:!1},{title:"TrackMania 2",link:"/tm2",inDrawer:!0,default:!0},{title:"Nations Forever",link:"/tmnforever",inDrawer:!0},{title:"United",link:"/united",inDrawer:!0},{title:"Nations ESWC",link:"/nations",inDrawer:!0},{title:"Sunrise",link:"/sunrise",inDrawer:!0},{title:"Original",link:"/original",inDrawer:!0},{title:"Replay Inspection",link:"/replay",inDrawer:!1},{title:"About",link:"/about",inDrawer:!1}],M=Object(i.g)((function(e){var t,a=e.location,n=r.a.useState(!1),o=Object(g.a)(n,2),c=o[0],i=o[1],u=r.a.useMemo((function(){return U.find((function(e){return e.link===a.pathname}))||U[0]}),[a]);t=u.title,r.a.useEffect((function(){document.title=t+" - "+document.location.host}),[t]);var s=function(e){return function(){i(e)}},m=R(),d=r.a.createElement("div",{className:m.list},r.a.createElement(O.a,null,r.a.createElement(j.a,{button:!0,key:0,component:l.b,to:"/"},r.a.createElement(P.a,{primary:"TMX Records"}))),r.a.createElement(v.a,null),r.a.createElement(O.a,{style:{height:"100%"}},U.filter((function(e){return e.inDrawer})).map((function(e,t){return r.a.createElement(j.a,{button:!0,key:t,component:l.b,to:e.link,className:e.title===u.title?m.active:void 0},r.a.createElement(P.a,{primary:e.title}))})),r.a.createElement(v.a,null),r.a.createElement(O.a,null,r.a.createElement(j.a,{button:!0,key:0,component:l.b,to:"/about"},r.a.createElement(P.a,{primary:"About"})))));return r.a.createElement("div",{className:m.root},r.a.createElement(h.a,{className:m.appBar,position:"fixed"},r.a.createElement(S.a,null,r.a.createElement(y.a,{color:"inherit",separator:r.a.createElement(N.a,{fontSize:"small"})},r.a.createElement(B.a,{variant:"h6",color:"inherit"},r.a.createElement(k.a,{component:l.b,to:"/",color:"inherit",underline:"none"},"TMX Records"))))),r.a.createElement(x.a,{lgUp:!0,implementation:"css"},r.a.createElement(D.a,{open:c,onClose:s(!1),onOpen:s(!0),variant:"temporary"},r.a.createElement("div",{tabIndex:0,role:"button",onClick:s(!1),onKeyDown:s(!1)},d))),r.a.createElement(x.a,{mdDown:!0,implementation:"css"},r.a.createElement(w.a,{variant:"permanent"},r.a.createElement("div",{tabIndex:0,role:"button"},d))))})),z=a(148),q=a(209),F=function(e){var t=e.children;return r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:!1,md:1,lg:2}),r.a.createElement(q.a,{item:!0,xs:12,md:10,lg:9},t))},A=Object(d.a)((function(e){return{aboutBox:{padding:e.spacing(3)}}})),I=function(){var e=["This web app mirrors TrackMania Exchange nadeo records.","Additionally it ranks players based on how many world records they hold and how long their records have been lasting."].map((function(e,t){return r.a.createElement(j.a,{key:t},r.a.createElement(B.a,{variant:"body1"},e))})),t=r.a.createElement(k.a,{rel:"noopener",href:"https://github.com/NeKzor/tmx-records"},"GitHub"),a=A();return r.a.createElement(F,null,r.a.createElement(z.a,{className:a.aboutBox},r.a.createElement(O.a,{dense:!0},r.a.createElement(j.a,null,r.a.createElement(B.a,{component:"h2",variant:"h5"},"TrackMania Exchange Records & Statistics")),e,r.a.createElement(j.a,null),r.a.createElement(j.a,null,r.a.createElement(B.a,{variant:"subtitle1"},"Credits:"," ",r.a.createElement(k.a,{rel:"noopener",href:"http://www.tm-exchange.com"},"tm-exchange.com"),",\xa0",r.a.createElement(k.a,{rel:"noopener",href:"https://tm.mania-exchange.com"},"tm.mania-exchange.com"))),r.a.createElement(j.a,null),r.a.createElement(j.a,null,r.a.createElement(B.a,{variant:"subtitle1"},"Project is open source at ",t,".")))))},_=a(49),L=a.n(_),W=a(46),X=a(65),Y=a(108),G=a(106),J=a(224),K=a(219),H=a(216),$=a(217),Q=a(225),V=a(218),Z=a(104),ee=a.n(Z),te=a(213),ae=a(214),ne=a(212),re=a(210),oe=a(211),ce=a(229),le=a(228),ie=function(e,t,a){var n=function(e,t){var n=ue(e,a),r=ue(t,a);return r<n?-1:r>n?1:0},r="desc"===t?function(e,t){return n(e,t)}:function(e,t){return-n(e,t)};return e.map((function(e,t){return[e,t]})).sort((function(e,t){var a=r(e[0],t[0]);return 0!==a?a:e[1]-t[1]})).map((function(e){return e[0]}))},ue=function(e,t){return-1!==t.indexOf(".")?t.split(".").filter((function(e){return e})).reduce((function(e,t){return e&&e[t]}),e):e[t]},se=function(e){return["nations","sunrise","original"].includes(e)?"http":"https"},me=function(e){return"tm2"===e?{trackUrl:function(e){return"https://tm.mania-exchange.com/tracks/".concat(e)},imageUrl:function(e){return"https://tm.mania-exchange.com/tracks/screenshot/normal/".concat(e)},replayUrl:function(e){return"https://tm.mania-exchange.com/replays/download/".concat(e)},userUrl:function(e){return"https://tm.mania-exchange.com/user/profile/".concat(e)}}:{trackUrl:function(t){return"".concat(se(e),"://").concat(e,".tm-exchange.com/main.aspx?action=trackshow&id=").concat(t)},imageUrl:function(t){return"".concat(se(e),"://").concat(e,".tm-exchange.com/getclean.aspx?action=trackscreenscreens&id=").concat(t)},replayUrl:function(t){return"".concat(se(e),"://").concat(e,".tm-exchange.com/get.aspx?action=recordgbx&id=").concat(t)},userUrl:function(t){return"".concat(se(e),"://").concat(e,".tm-exchange.com/main.aspx?action=usershow&id=").concat(t)}}};function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var fe=[{id:"user.name",sortable:!0,label:"Player",align:"left"},{id:"wrs",sortable:!0,label:"World Records",align:"left"},{id:"duration",sortable:!0,label:"Total Duration",align:"left"}],pe=function(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;return r.a.createElement(re.a,null,r.a.createElement(oe.a,null,fe.map((function(e){return r.a.createElement(ne.a,{key:e.id,align:e.align,padding:"default",sortDirection:a===e.id&&t},!0===e.sortable&&r.a.createElement(le.a,{title:"Sort by "+e.label,placement:"bottom-start",enterDelay:300},r.a.createElement(ce.a,{active:a===e.id,direction:t,onClick:(o=e.id,function(e){n(e,o)})},e.label)),!1===e.sortable&&e.label);var o}))))},be=Object(d.a)((function(e){return{root:{overflowX:"auto"}}})),Ee={order:"desc",orderBy:"wrs",page:0,rowsPerPage:50},ge={padding:"7px 0px 7px 16px"},he=function(e){return r.a.createElement(ne.a,Object.assign({style:ge},e))},ye=function(e){var t=e.data,a=e.game,n=r.a.useState(Ee),o=Object(g.a)(n,2),c=o[0],l=c.order,i=c.orderBy,u=c.rowsPerPage,s=c.page,m=o[1],d=be();return r.a.createElement("div",{className:d.root},r.a.createElement(te.a,{size:"small"},r.a.createElement(pe,{order:l,orderBy:i,onRequestSort:function(e,t){var a=t;m((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(a,!0).forEach((function(t){Object(W.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{order:e.orderBy===a&&"desc"===e.order?"asc":"desc",orderBy:a})}))}}),r.a.createElement(ae.a,null,ie(t,l,i).slice(s*u,s*u+u).map((function(e){return r.a.createElement(oe.a,{tabIndex:-1,key:e.user.id},r.a.createElement(he,{align:"left"},r.a.createElement(k.a,{color:"inherit",href:me(a).userUrl(e.user.id),rel:"noreferrer",target:"_blank"},e.user.name)),r.a.createElement(he,{align:"left"},e.wrs),r.a.createElement(he,{align:"left"},e.duration," days"))})))))},ve=a(70),we=a.n(ve),xe=a(223);function ke(e,t){if("Stunts"===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0))return e+" pts.";if("tm2"!==t){var a=(e/=10)%100,n=Math.floor(e/100),r=n%60,o=Math.floor(n/60);return(o>0?o+":":"")+(r<10&&o>0?"0"+r:r)+"."+(a<10?"0"+a:a)}var c=e%1e3,l=Math.floor(e/1e3),i=l%60,u=Math.floor(l/60);return(u>0?u+":":"")+(i<10&&u>0?"0"+i:i)+"."+(c<100?c<10?"00"+c:"0"+c:c)}var Oe=Object(xe.a)().domain([0,24,336,1440]).range(["#2eb82e","#258e25","#cca300","#e67300"]);function je(e){var t=s()().diff(s()(e),"hours");return t<=1440?Oe(t):void 0}function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function De(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(a,!0).forEach((function(t){Object(W.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Se=[{id:"track.name",sortable:!0,label:"Track",align:"left"},{id:"time",sortable:!0,label:"Record",align:"left"},{id:"user.name",sortable:!0,label:"Player",align:"left"},{id:"date",sortable:!0,label:"Date",align:"left"},{id:"duration",sortable:!0,label:"Duration",align:"left"}],Be=function(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;return r.a.createElement(re.a,null,r.a.createElement(oe.a,null,Se.map((function(e){return r.a.createElement(ne.a,{key:e.id,align:e.align,padding:"default",sortDirection:a===e.id&&t},!0===e.sortable&&r.a.createElement(le.a,{title:"Sort by "+e.label,placement:"bottom-start",enterDelay:300},r.a.createElement(ce.a,{active:a===e.id,direction:t,onClick:(o=e.id,function(e){n(e,o)})},e.label)),!1===e.sortable&&e.label);var o}))))},Te=Object(d.a)((function(e){return{root:{overflowX:"auto"}}})),Ne={order:"asc",orderBy:"track.name",page:0,rowsPerPage:250},Ce={whiteSpace:"nowrap"},Re={padding:"7px 0px 7px 16px"},Ue=function(e){return r.a.createElement(ne.a,Object.assign({style:Re},e))},Me=function(e){var t=e.data,a=e.game,n=e.stats,o=e.useLiveDuration,c=r.a.useState(Ne),l=Object(g.a)(c,2),i=l[0],u=i.order,m=i.orderBy,d=i.rowsPerPage,f=i.page,p=l[1],b=Te();return r.a.createElement("div",{className:b.root},r.a.createElement(te.a,{size:"small"},r.a.createElement(Be,{order:u,orderBy:m,onRequestSort:function(e,t){var a=t;p((function(e){return De({},e,{order:e.orderBy===a&&"desc"===e.order?"asc":"desc",orderBy:a})}))}}),r.a.createElement(ae.a,null,ie(t,u,m).slice(f*d,f*d+d).map((function(e){return r.a.createElement(oe.a,{tabIndex:-1,key:"".concat(e.track.id,"-").concat(e.user.id)},(e.track.isFirst||"track.name"!==m)&&r.a.createElement(Ue,{rowSpan:"track.name"!==m?1:e.track.records,align:"left"},r.a.createElement(k.a,{color:"inherit",href:me(a).trackUrl(e.track.id),rel:"noreferrer",target:"_blank"},e.track.name)),r.a.createElement(Ue,{align:"left"},ke(e.score,a,e.track.type)),r.a.createElement(Ue,{align:"left"},r.a.createElement(k.a,{color:"inherit",href:me(a).userUrl(e.user.id),rel:"noreferrer",target:"_blank"},e.user.name)),r.a.createElement(Ue,{align:"left"},r.a.createElement(le.a,{title:r.a.createElement(we.a,{style:Ce,fromNow:!0},e.date),placement:"bottom-end",enterDelay:300},r.a.createElement(we.a,{style:De({color:je(e.date)},Ce),format:"YYYY-MM-DD"},e.date))),r.a.createElement(Ue,{align:"left"},r.a.createElement(le.a,{title:"in days",placement:"bottom-end",enterDelay:300},o?r.a.createElement(we.a,{style:Ce,diff:e.date,unit:"days"}):e.duration)))}))),r.a.createElement(ae.a,null,r.a.createElement(oe.a,null,r.a.createElement(Ue,{align:"right"},"Total Time"),r.a.createElement(Ue,null,r.a.createElement(le.a,{title:s.a.duration(n.totalTime,"ms").humanize(),placement:"bottom-end",enterDelay:300},r.a.createElement("span",null,ke(n.totalTime,a)))),r.a.createElement(Ue,{colSpan:3})),n.totalPoints>0&&r.a.createElement(oe.a,null,r.a.createElement(Ue,{align:"right"},"Total Points"),r.a.createElement(Ue,null,r.a.createElement("span",null,ke(n.totalPoints,a,"Stunts"))),r.a.createElement(Ue,{colSpan:3})))))},ze=function(e){var t=e.data,a=e.props;return r.a.createElement(B.a,Object.assign({variant:"h5",gutterBottom:!0,style:{padding:"50px 0px 50px 50px"}},a),t)},qe=a(98),Fe=a.n(qe),Ae=a(215),Ie=Object(Ae.a)((function(e){var t=e.labels,a=e.series,n=e.title,o="dark"===e.theme.palette.type;return r.a.createElement(Fe.a,{options:{labels:t,legend:{show:!1,position:"left",labels:{useSeriesColors:!0}},plotOptions:{pie:{donut:{labels:{show:!0,name:{show:!0},value:{show:!0,color:o?"white":"black"},total:{show:!0,label:n,color:o?"white":"black"}}}}}},series:a,type:"donut",width:"400",height:"400"})})),_e=a(99);function Le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function We(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Le(a,!0).forEach((function(t){Object(W.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Le(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Xe=function(e){var t=e.children,a=e.value,n=e.index,o=Object(Y.a)(e,["children","value","index"]);return a===n&&r.a.createElement(B.a,Object.assign({component:"div",role:"tabpanel",id:"scrollable-auto-tabpanel-".concat(n)},o),r.a.createElement(J.a,{p:3},t))},Ye=Object(d.a)((function(e){return{fab:{margin:0,top:"auto",right:30,bottom:30,left:"auto",position:"fixed"}}})),Ge=Object(G.a)((function(e){var t=e.match,a=C(),n=r.a.useState(void 0),o=Object(g.a)(n,2),c=o[0],l=o[1],i=r.a.useState("tm2"),u=Object(g.a)(i,2),m=u[0],d=u[1],f=r.a.useState(0),p=Object(g.a)(f,2),b=p[0],E=p[1],h=t.params[0],y=t.params.date,v=void 0===y;r.a.useEffect((function(){l(void 0)}),[h]),r.a.useEffect((function(){Object(X.a)(L.a.mark((function e(){var t,n,r,o,c,i,u;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e.a.request(h,y);case 2:return t=e.sent,e.next=5,new Promise((function(e){return setTimeout(e,1e3)}));case 5:if(!t[0]||!t[0].tracks[0].wrs){e.next=26;break}for(n=!0,r=!1,o=void 0,e.prev=9,c=function(){var e=u.value;void 0===e.stats.totalPoints&&(e.stats.totalTime=e.tracks.filter((function(e){return"Stunts"!==e.type})).map((function(e){return e.wrs[0].score})).reduce((function(e,t){return e+t}),0),e.stats.totalPoints=e.tracks.filter((function(e){return"Stunts"===e.type})).map((function(e){return e.wrs[0].score})).reduce((function(e,t){return e+t}),0));var t=[],a=!0,n=!1,r=void 0;try{for(var o,c=e.tracks[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var l=o.value,i=!0,m=!1,d=void 0;try{for(var f,p=l.wrs[Symbol.iterator]();!(i=(f=p.next()).done);i=!0){var b=f.value,E=v?s()().diff(s()(b.date),"d"):b.duration;t.push(We({track:{id:l.id,name:l.name,type:l.type,isFirst:b===l.wrs[0],records:l.wrs.length}},b,{duration:E}))}}catch(g){m=!0,d=g}finally{try{i||null==p.return||p.return()}finally{if(m)throw d}}}}catch(g){n=!0,r=g}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}e.tracks=t,v&&e.leaderboard.forEach((function(t){t.duration=e.tracks.filter((function(e){return e.user.id===t.user.id})).map((function(e){return e.duration})).reduce((function(e,t){return e+t}),0)}))},i=t[Symbol.iterator]();!(n=(u=i.next()).done);n=!0)c();e.next=18;break;case 14:e.prev=14,e.t0=e.catch(9),r=!0,o=e.t0;case 18:e.prev=18,e.prev=19,n||null==i.return||i.return();case 21:if(e.prev=21,!r){e.next=24;break}throw o;case 24:return e.finish(21);case 25:return e.finish(18);case 26:if(a.current){e.next=28;break}return e.abrupt("return");case 28:d(h),l(t);case 30:case"end":return e.stop()}}),e,null,[[9,14,18,26],[19,,21,25]])})))()}),[a,h,y,v]);var w=Ye();return r.a.createElement(F,null,r.a.createElement(z.a,null,void 0===c?r.a.createElement(H.a,null):0===c.length?r.a.createElement(ze,{data:"No data."}):r.a.createElement(r.a.Fragment,null,c.length>1&&r.a.createElement(Q.a,{value:b,onChange:function(e,t){E(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},c.map((function(e){return r.a.createElement($.a,{label:e.name,key:e.name})}))),c.map((function(e,t){return r.a.createElement(Xe,{value:b,index:t,key:e.name},r.a.createElement(q.a,{container:!0,direction:"column",justify:"center"},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement(Me,{data:e.tracks,game:m,stats:e.stats,useLiveDuration:v})),r.a.createElement(q.a,{item:!0,xs:12,style:{paddingTop:"70px"}},r.a.createElement(q.a,{container:!0,direction:"row",justify:"center",alignContent:"center"},r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(ye,{data:e.leaderboard,game:h})),r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(q.a,{container:!0,direction:"column",justify:"center"},r.a.createElement(q.a,{item:!0,xs:6},r.a.createElement(Ie,{title:"WRs",labels:e.leaderboard.map((function(e){return e.user.name})),series:e.leaderboard.map((function(e){return e.wrs}))})),r.a.createElement(q.a,{item:!0,xs:6,style:{paddingTop:"70px"}},r.a.createElement(Ie,{title:"Duration",labels:e.leaderboard.map((function(e){return e.user.name})),series:e.leaderboard.map((function(e){return e.duration}))}))))))))})))),r.a.createElement(V.a,{in:void 0!==c&&0!==c.length,timeout:1e3},r.a.createElement(K.a,{title:"Jump to top",color:"primary",className:w.fab,onClick:function(){!function e(){var t=document.documentElement.scrollTop;t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/5))}()}},r.a.createElement(ee.a,null))))})),Je=a(105),Ke=a.n(Je),He=function(){var e=C(),t=r.a.useState({}),a=Object(g.a)(t,2),n=a[0],o=a[1],c=r.a.useCallback((function(t){var a=t.target.files[0];if(a){var n=new FileReader;n.file=a,n.onload=function(t){var a=t.target.result,n=window,r=n.Buffer,c=n.Replay.default().read(r.from(a),{parseGhost:!0});if(e){!function e(t){Object.keys(t).forEach((function(a){"_view"===a?delete t._view:"object"===typeof t[a]&&e(t[a])}))}(c),o(c)}},n.readAsArrayBuffer(a)}}),[e,o]);return r.a.useEffect((function(){return document.querySelector("#fileinput").addEventListener("change",c),function(){return document.querySelector("#fileinput").removeEventListener("change",c)}}),[c]),r.a.createElement(F,null,r.a.createElement(z.a,null,r.a.createElement("input",{type:"file",id:"fileinput"}),r.a.createElement(Ke.a,{name:"replay",style:{fontSize:"14px"},src:n,theme:"solarized",displayDataTypes:!1,displayObjectSize:!1,enableClipboard:!1})))},$e=function(){return r.a.createElement(F,null,r.a.createElement(z.a,null,r.a.createElement(ze,{data:"Page not found :("})))},Qe=Object(d.a)((function(e){return{views:{marginTop:e.spacing(5)}}})),Ve=Object(E.a)({palette:{primary:{light:p.a[300],main:p.a[500],dark:p.a[700]},secondary:{light:b.a[300],main:b.a[500],dark:b.a[700]},error:{main:p.a.A400},type:s()().get("h")>5&&s()().get("h")<19?"light":"dark"}}),Ze=function(){var e=Qe();return r.a.createElement(f.a,{theme:Ve},r.a.createElement(m.a,null),r.a.createElement(l.a,{basename:"/"},r.a.createElement(M,null),r.a.createElement("div",{className:e.views},r.a.createElement(i.d,null,r.a.createElement(i.a,{exact:!0,from:"/",to:"/tm2"}),r.a.createElement(i.a,{exact:!0,from:"/tmo",to:"/original"}),r.a.createElement(i.a,{exact:!0,from:"/tmn",to:"/nations"}),r.a.createElement(i.a,{exact:!0,from:"/tms",to:"/sunrise"}),r.a.createElement(i.a,{exact:!0,from:"/tmnf",to:"/tmnforever"}),r.a.createElement(i.b,{exact:!0,path:"/(nations|original|sunrise|tm2|tmnforever|united)/:date?",component:Ge}),r.a.createElement(i.b,{exact:!0,path:"/about",component:I}),r.a.createElement(i.b,{exact:!0,path:"/replay",component:He}),r.a.createElement(i.b,{component:$e})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ze,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,a){"use strict";(function(e){var n=a(49),r=a.n(n),o=a(65),c=a(100),l=a(101),i=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"request",value:function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=10;break;case 4:return e.abrupt("return",e.sent.default);case 7:e.prev=7,e.t0=e.catch(1);case 9:return e.abrupt("return",[]);case 10:return e.next=12,fetch("https://raw.githubusercontent.com/NeKzor/tmx-records/api/".concat(t,"/").concat(a||"latest",".json"));case 12:if(n=e.sent,console.log("GET ".concat(n.url," (").concat(n.status,")")),!n.ok){e.next=20;break}return e.next=17,n.json();case 17:e.t1=e.sent,e.next=21;break;case 20:e.t1=[];case 21:return e.abrupt("return",e.t1);case 22:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()}]),e}();t.a=new i}).call(this,a(87))}},[[123,1,2]]]);
//# sourceMappingURL=main.9882118f.chunk.js.map