(window.webpackJsonp=window.webpackJsonp||[]).push([["518b"],{"TYO+":function(t,e,a){"use strict";a.r(e);var s=a("0iUn"),r=a("sLSF"),n=a("MI3g"),i=a("a7VT"),l=a("Tit0"),o=a("q1tI"),m=a.n(o),c=a("ELrk"),h=a("sDqW"),u=a("17x9"),d=a.n(u),p=a("TSYQ"),f=a.n(p),E=a("33Jr"),b={tag:E.h,fluid:d.a.bool,className:d.a.string,cssModule:d.a.object},S=function(t){var e=t.className,a=t.cssModule,s=t.tag,r=t.fluid,n=Object(h.a)(t,["className","cssModule","tag","fluid"]),i=Object(E.e)(f()(e,"jumbotron",!!r&&"jumbotron-fluid"),a);return m.a.createElement(s,Object(c.a)({},n,{className:i}))};S.propTypes=b,S.defaultProps={tag:"div"};var j=S,v=a("BLzl"),N=a("ok1R"),g=a("rhny"),x=a("umxu"),C=a("ChEw"),D=a("/kxI"),A={tag:E.h,className:d.a.string,cssModule:d.a.object},O=function(t){var e=t.className,a=t.cssModule,s=t.tag,r=Object(h.a)(t,["className","cssModule","tag"]),n=Object(E.e)(f()(e,"card-text"),a);return m.a.createElement(s,Object(c.a)({},r,{className:n}))};O.propTypes=A,O.defaultProps={tag:"p"};var H=O,y={tag:E.h,className:d.a.string,cssModule:d.a.object},k=function(t){var e=t.className,a=t.cssModule,s=t.tag,r=Object(h.a)(t,["className","cssModule","tag"]),n=Object(E.e)(f()(e,"card-subtitle"),a);return m.a.createElement(s,Object(c.a)({},r,{className:n}))};k.propTypes=y,k.defaultProps={tag:"div"};var M=k,I=a("sOKU"),T=a("XAkp"),w=a("uBiN"),R=a("jrRI"),L=a("3OM0"),U=a("Ldei");a.d(e,"CustomJumbo",function(){return P}),a.d(e,"AboutMedia",function(){return F}),a.d(e,"SingleListCard",function(){return _}),a.d(e,"ThreeColumnCard",function(){return X}),a.d(e,"HomeCard",function(){return Y}),a.d(e,"CharacterSheet",function(){return q}),a.d(e,"AttackSection",function(){return J}),a.d(e,"NameForm",function(){return z});var P=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return"noimage"===this.props.ImgUrl?m.a.createElement(j,null,m.a.createElement("h1",{className:"display-3 text-center"},this.props.Title),m.a.createElement("p",{className:this.props.Caption1Style},this.props.Caption1),m.a.createElement("hr",{className:"my-2"}),m.a.createElement("p",{className:this.props.Caption2Style},this.props.Caption2)):m.a.createElement(j,null,m.a.createElement("h1",{className:"display-3 text-center"},this.props.Title),m.a.createElement("div",{className:"container-fluid text-center"},m.a.createElement("img",{src:"../static/images/avatar.jpg",style:U.HomeImage,alt:"avatar"})),m.a.createElement("p",{className:this.props.Caption1Style},this.props.Caption1),m.a.createElement("hr",{className:"my-2"}),m.a.createElement("p",{className:this.props.Caption2Style},this.props.Caption2," ",m.a.createElement("br",null),this.props.Caption3))}}]),e}(m.a.Component),F=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return"Right"===this.props.Align?m.a.createElement("div",{className:"p-3"},m.a.createElement(v.a,{className:this.props.Class},m.a.createElement(N.a,null,m.a.createElement(g.a,null,m.a.createElement(x.a,{style:U.AboutImg,src:this.props.ImgUrl,alt:"Card image cap"})),m.a.createElement(g.a,null,m.a.createElement(C.a,{className:"mt-5"},m.a.createElement("h1",null,this.props.Title)),m.a.createElement(D.a,null,m.a.createElement(H,null,this.props.Description)))))):"Left"===this.props.Align?m.a.createElement("div",{className:"p-3"},m.a.createElement(v.a,{className:this.props.Class},m.a.createElement(N.a,null,m.a.createElement(g.a,null,m.a.createElement(C.a,{className:"mt-5"},m.a.createElement("h1",null,this.props.Title)),m.a.createElement(D.a,null,m.a.createElement(H,null,this.props.Description))),m.a.createElement(g.a,null,m.a.createElement(x.a,{style:U.AboutImg,src:this.props.ImgUrl,alt:"Card image cap"}))))):void 0}}]),e}(m.a.Component),_=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(v.a,{className:"Text-Left"},m.a.createElement(D.a,null,m.a.createElement(M,null,this.props.Subtitle),m.a.createElement(H,null,m.a.createElement("ul",null,m.a.createElement("li",null,this.props.Item1),m.a.createElement("li",null,this.props.Item2),m.a.createElement("li",null,this.props.Item3),m.a.createElement("li",null,this.props.Item4))))))}}]),e}(m.a.Component),X=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return m.a.createElement("div",{className:"p-3"},m.a.createElement(v.a,{className:this.props.Class},m.a.createElement(C.a,null,m.a.createElement("h1",null,this.props.Title)),m.a.createElement(N.a,{className:"text-left"},m.a.createElement(g.a,null,m.a.createElement(D.a,null,m.a.createElement(H,null,m.a.createElement("li",null,this.props.Description1)))),m.a.createElement(g.a,null,m.a.createElement(D.a,null,m.a.createElement(H,null,m.a.createElement("li",null,this.props.Description2)))),m.a.createElement(g.a,null,m.a.createElement(D.a,null,m.a.createElement(H,null,m.a.createElement("li",null,this.props.Description3)))))))}}]),e}(m.a.Component),Y=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(v.a,{className:"text-center"},m.a.createElement(C.a,null,this.props.Title),m.a.createElement(x.a,{top:!0,style:U.CardImageStyle,src:this.props.Image,alt:"Card image cap"}),m.a.createElement(D.a,null,m.a.createElement(M,null,this.props.Subtitle),m.a.createElement(H,null,this.props.Description),m.a.createElement(I.a,{href:this.props.Link,className:"btn-dark",target:"_blank",rel:"noopener noreferrer"},this.props.ButtonTitle))))}}]),e}(m.a.Component),q=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(N.a,null,m.a.createElement(g.a,{xs:"6"},m.a.createElement(T.a,{borderless:!0,className:" ml-4 p-5"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted  text-left h4"},"Strength:"),m.a.createElement("td",{className:"text-white  text-left h4"}," ",this.props.Strength)),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted  text-left h4"},"Constitution:"),m.a.createElement("td",{className:"text-white  text-left h4"}," ",this.props.Constitution)),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted  text-left h4"},"Dexterity:"),m.a.createElement("td",{className:"text-white  text-left h4"}," ",this.props.Dexterity)),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted  text-left h4"},"Hitpoints:"),m.a.createElement("td",{className:"text-white  text-left h4"}," ",this.props.Hitpoints)),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-muted  text-left h4"},"Damage per Hit:"),m.a.createElement("td",{className:"text-white  text-left h4"}," ",this.props.Damage))))),m.a.createElement(g.a,{xs:"6"},m.a.createElement("div",{className:"float-right mr-5"},m.a.createElement("img",{style:U.DandDAvatar,src:this.props.ImgUrl,alt:"hero"})))))}}]),e}(m.a.Component),J=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"AttackResult",value:function(){var t=this.props.DidHit;return"Hit"===t?m.a.createElement("div",null,m.a.createElement("h2",{className:"alert-success w-100 text-center my-5"},t)):"Miss"===t?m.a.createElement("div",null,m.a.createElement("h2",{className:"alert-danger w-100 text-center my-5"},t)):void 0}},{key:"render",value:function(){return m.a.createElement("div",{className:"bg-dark"},m.a.createElement(N.a,null,m.a.createElement(g.a,{className:"my-4 mx-5"},m.a.createElement("div",{style:U.thumbnail},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("div",null,m.a.createElement("h4",{className:"AC-Icon-text"},this.props.AC)))),m.a.createElement(g.a,{className:"my-4 mx-5"},m.a.createElement("div",{className:"float-right"},m.a.createElement("div",{style:U.thumbnail},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("div",null,m.a.createElement("h4",{className:"HitAdj-Icon-text"},this.props.HitAdj)))))),m.a.createElement("div",{className:"d-flex justify-content-center my-5"},m.a.createElement(I.a,{onClick:this.props.AttackRoll},this.props.RollTitle)),m.a.createElement("div",{className:"text-center text-white"},m.a.createElement("h2",null,"Attack Result:")),m.a.createElement("div",null,this.AttackResult()))}}]),e}(m.a.Component),z=function(t){function e(){return Object(s.default)(this,e),Object(n.default)(this,Object(i.default)(e).apply(this,arguments))}return Object(l.default)(e,t),Object(r.default)(e,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(w.a,{inline:!0},m.a.createElement(R.a,null,m.a.createElement(L.a,null,m.a.createElement("h6",{className:"mr-3"},"Name:"),m.a.createElement("input",{type:"text",maxLength:"20",value:this.props.value,onChange:this.props.NameChange,onKeyPress:function(t){13===t.which&&t.preventDefault()}})),m.a.createElement(I.a,{type:"button",className:"ml-5 ",onClick:this.props.NameSubmit},"Submit"))))}}]),e}(m.a.Component)},W1xQ:function(t,e,a){"use strict";function s(){return 1==this.state.monsterstats.Const?-3:2==this.state.monsterstats.Const||3==this.state.monsterstats.Const?-2:this.state.monsterstats.Const>=4&&this.state.monsterstats.Const<=6?-1:this.state.monsterstats.Const>=7&&this.state.monsterstats.Const<=14?0:15==this.state.monsterstats.Const?1:16==this.state.monsterstats.Const?2:17==this.state.monsterstats.Const?3:18==this.state.monsterstats.Const?4:19==this.state.monsterstats.Const?5:20==this.state.monsterstats.Const?6:void 0}function r(){return 1==this.state.monsterstats.Dext||2==this.state.monsterstats.Dext?-5:3==this.state.monsterstats.Dext?-4:4==this.state.monsterstats.Dext?-3:5==this.state.monsterstats.Dext?-2:6==this.state.monsterstats.Dext?-1:this.state.monsterstats.Dext>=7&&this.state.monsterstats.Dext<=14?0:15==this.state.monsterstats.Dext?1:16==this.state.monsterstats.Dext?2:17==this.state.monsterstats.Dext?3:18==this.state.monsterstats.Dext||19==this.state.monsterstats.Dext?4:20==this.state.monsterstats.Dext?5:void 0}function n(){return 1==this.state.monsterstats.Str?-4:2==this.state.monsterstats.Str||3==this.state.monsterstats.Str?-3:4==this.state.monsterstats.Str||5==this.state.monsterstats.Str?-2:6==this.state.monsterstats.Str||7==this.state.monsterstats.Str?-1:this.state.monsterstats.Str>=8&&this.state.monsterstats.Str<=16?0:17==this.state.monsterstats.Str?1:18==this.state.monsterstats.Str?2:19==this.state.monsterstats.Str?3:20==this.state.monsterstats.Str?4:void 0}function i(){return 1==this.state.monsterstats.Str?-4:2==this.state.monsterstats.Str||3==this.state.monsterstats.Str?-3:4==this.state.monsterstats.Str||5==this.state.monsterstats.Str?-2:6==this.state.monsterstats.Str||7==this.state.monsterstats.Str?-1:this.state.monsterstats.Str>=8&&this.state.monsterstats.Str<=16?0:17==this.state.monsterstats.Str?1:18==this.state.monsterstats.Str?2:19==this.state.monsterstats.Str?3:20==this.state.monsterstats.Str?4:void 0}function l(){for(var t in this.state.monsterstats)this.state.monsterstats[t]=Math.floor(20*Math.random()+1);this.setState({monsterHp:this.state.monsterbase.Hp+this.SetmonsterConstAdj(),monsterAc:this.state.monsterbase.ArmorClass+this.SetmonsteracAdj(),monsterDmg:this.state.monsterbase.Damage+this.SetmonsterDmgAdj(),monsterHitAdj:this.state.monsterbase.HitAdj+this.SetmonsterHitAdj()})}function o(){this.setState({monsterRoll:Math.floor(20*Math.random()+1)}),this.state.monsterRoll>=this.state.heroAc+this.state.monsterHitAdj?(this.setState({monsterDidHit:"Hit"}),this.state.heroHp-this.state.monsterDmg<=0?this.setState({heroHp:"Dead"}):this.setState({heroHp:this.state.heroHp-this.state.monsterDmg})):this.setState({monsterDidHit:"Miss"})}a.r(e),a.d(e,"SetmonsterConstAdj",function(){return s}),a.d(e,"SetmonsterDmgAdj",function(){return n}),a.d(e,"SetmonsterHitAdj",function(){return i}),a.d(e,"SetmonsteracAdj",function(){return r}),a.d(e,"setmonsterstats",function(){return l}),a.d(e,"monsterattackroll",function(){return o})},XAkp:function(t,e,a){"use strict";var s=a("ELrk"),r=a("sDqW"),n=a("q1tI"),i=a.n(n),l=a("17x9"),o=a.n(l),m=a("TSYQ"),c=a.n(m),h=a("33Jr"),u={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:h.h,responsiveTag:h.h,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},d=function(t){var e=t.className,a=t.cssModule,n=t.size,l=t.bordered,o=t.borderless,m=t.striped,u=t.dark,d=t.hover,p=t.responsive,f=t.tag,E=t.responsiveTag,b=t.innerRef,S=Object(r.a)(t,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),j=Object(h.e)(c()(e,"table",!!n&&"table-"+n,!!l&&"table-bordered",!!o&&"table-borderless",!!m&&"table-striped",!!u&&"table-dark",!!d&&"table-hover"),a),v=i.a.createElement(f,Object(s.a)({},S,{ref:b,className:j}));if(p){var N=Object(h.e)(!0===p?"table-responsive":"table-responsive-"+p,a);return i.a.createElement(E,{className:N},v)}return v};d.propTypes=u,d.defaultProps={tag:"table",responsiveTag:"div"},e.a=d},XEZY:function(t,e,a){"use strict";function s(){return 1==this.state.herostats.Const?-3:2==this.state.herostats.Const||3==this.state.herostats.Const?-2:this.state.herostats.Const>=4&&this.state.herostats.Const<=6?-1:this.state.herostats.Const>=7&&this.state.herostats.Const<=14?0:15==this.state.herostats.Const?1:16==this.state.herostats.Const?2:17==this.state.herostats.Const?3:18==this.state.herostats.Const?4:19==this.state.herostats.Const?5:20==this.state.herostats.Const?6:void 0}function r(){return 1==this.state.herostats.Dext||2==this.state.herostats.Dext?-5:3==this.state.herostats.Dext?-4:4==this.state.herostats.Dext?-3:5==this.state.herostats.Dext?-2:6==this.state.herostats.Dext?-1:this.state.herostats.Dext>=7&&this.state.herostats.Dext<=14?0:15==this.state.herostats.Dext?1:16==this.state.herostats.Dext?2:17==this.state.herostats.Dext?3:18==this.state.herostats.Dext||19==this.state.herostats.Dext?4:20==this.state.herostats.Dext?5:void 0}function n(){return 1==this.state.herostats.Str?-4:2==this.state.herostats.Str||3==this.state.herostats.Str?-3:4==this.state.herostats.Str||5==this.state.herostats.Str?-2:6==this.state.herostats.Str||7==this.state.herostats.Str?-1:this.state.herostats.Str>=8&&this.state.herostats.Str<=16?0:17==this.state.herostats.Str?1:18==this.state.herostats.Str?2:19==this.state.herostats.Str?3:20==this.state.herostats.Str?4:void 0}function i(){return 1==this.state.herostats.Str?-4:2==this.state.herostats.Str||3==this.state.herostats.Str?-3:4==this.state.herostats.Str||5==this.state.herostats.Str?-2:6==this.state.herostats.Str||7==this.state.herostats.Str?-1:this.state.herostats.Str>=8&&this.state.herostats.Str<=16?0:17==this.state.herostats.Str?1:18==this.state.herostats.Str?2:19==this.state.herostats.Str?3:20==this.state.herostats.Str?4:void 0}function l(){for(var t in this.state.herostats)this.state.herostats[t]=Math.floor(20*Math.random()+1);this.setState({heroHp:this.state.herobase.Hp+this.SetheroConstAdj(),heroAc:this.state.herobase.ArmorClass+this.SetheroacAdj(),heroDmg:this.state.herobase.Damage+this.SetheroDmgAdj(),heroHitAdj:this.state.herobase.HitAdj+this.SetheroHitAdj()})}function o(){this.setState({heroRoll:Math.floor(20*Math.random()+1)}),this.state.heroRoll>=this.state.monsterAc+this.state.heroHitAdj?(this.setState({heroDidHit:"Hit"}),this.state.monsterHp-this.state.heroDmg<=0?this.setState({monsterHp:"Dead"}):this.setState({monsterHp:this.state.monsterHp-this.state.heroDmg})):this.setState({heroDidHit:"Miss"})}a.r(e),a.d(e,"setherostats",function(){return l}),a.d(e,"SetheroConstAdj",function(){return s}),a.d(e,"SetheroacAdj",function(){return r}),a.d(e,"SetheroDmgAdj",function(){return n}),a.d(e,"SetheroHitAdj",function(){return i}),a.d(e,"heroattackroll",function(){return o})},jvuh:function(t,e,a){"use strict";a.r(e);var s=a("0iUn"),r=a("sLSF"),n=a("MI3g"),i=a("a7VT"),l=a("AT/M"),o=a("Tit0"),m=a("q1tI"),c=a.n(m),h=a("XEZY"),u=a("W1xQ"),d=a("TYO+"),p=a("ok1R"),f=a("rhny"),E=a("sOKU"),b=function(t){function e(t){var a;return Object(s.default)(this,e),(a=Object(n.default)(this,Object(i.default)(e).call(this,t))).state={herostats:{Str:0,Const:0,Dext:0},herobase:{Hp:50,ArmorClass:10,Damage:10,HitAdj:0},monsterstats:{Str:0,Const:0,Dext:0},monsterbase:{Hp:50,ArmorClass:10,Damage:10,HitAdj:0},heroHp:0,heroAc:0,heroDmg:0,heroHitAdj:0,heroNametext:"",heroName:"",heroInitiative:0,heroRoll:0,heroDidHit:"",monsterHp:0,monsterAc:0,monsterDmg:0,monsterHitAdj:0,monsterNametext:"",monsterName:"",monsterInitiative:0,monsterRoll:0,monsterDidHit:""},a.setherostats=h.setherostats.bind(Object(l.default)(a)),a.SetheroConstAdj=h.SetheroConstAdj.bind(Object(l.default)(a)),a.SetheroacAdj=h.SetheroacAdj.bind(Object(l.default)(a)),a.SetheroDmgAdj=h.SetheroDmgAdj.bind(Object(l.default)(a)),a.SetheroHitAdj=h.SetheroHitAdj.bind(Object(l.default)(a)),a.heroNameChange=a.heroNameChange.bind(Object(l.default)(a)),a.heroNameSubmit=a.heroNameSubmit.bind(Object(l.default)(a)),a.heroattackroll=h.heroattackroll.bind(Object(l.default)(a)),a.setmonsterstats=u.setmonsterstats.bind(Object(l.default)(a)),a.SetmonsterConstAdj=u.SetmonsterConstAdj.bind(Object(l.default)(a)),a.SetmonsteracAdj=u.SetmonsteracAdj.bind(Object(l.default)(a)),a.SetmonsterDmgAdj=u.SetmonsterDmgAdj.bind(Object(l.default)(a)),a.SetmonsterHitAdj=u.SetmonsterHitAdj.bind(Object(l.default)(a)),a.monsterNameChange=a.monsterNameChange.bind(Object(l.default)(a)),a.monsterNameSubmit=a.monsterNameSubmit.bind(Object(l.default)(a)),a.monsterattackroll=u.monsterattackroll.bind(Object(l.default)(a)),a.rollforiniative=a.rollforiniative.bind(Object(l.default)(a)),a}return Object(o.default)(e,t),Object(r.default)(e,[{key:"heroNameChange",value:function(t){this.setState({heroNametext:t.target.value})}},{key:"heroNameSubmit",value:function(t){this.setState({heroName:this.state.heroNametext})}},{key:"monsterNameChange",value:function(t){this.setState({monsterNametext:t.target.value})}},{key:"monsterNameSubmit",value:function(t){this.setState({monsterName:this.state.monsterNametext})}},{key:"rollforiniative",value:function(){this.Heroinitiative=Math.floor(10*Math.random()+1),this.Monsterinitiative=Math.floor(10*Math.random()+1),this.Heroinitiative<this.Monsterinitiative?this.setState({heroInitiative:"First",monsterInitiative:"Second"}):this.Heroinitiative>this.Monsterinitiative?this.setState({monsterInitiative:"First",heroInitiative:"Second"}):this.setState({heroInitiative:"ReRoll",monsterInitiative:"ReRoll"}),this.setState({heroDidHit:"",monsterDidHit:""})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex row justify-content-center m-0 p-0"},c.a.createElement(p.a,{className:"w-100"},c.a.createElement(f.a,{className:" m-1 bg-dark text-white "},c.a.createElement("div",null,c.a.createElement("h5",{className:"mt-5 ml-5"},c.a.createElement("b",null,"Name: "),this.state.heroName)),c.a.createElement(d.CharacterSheet,{Strength:this.state.herostats.Str,Constitution:this.state.herostats.Const,Dexterity:this.state.herostats.Dext,Hitpoints:this.state.heroHp,Damage:this.state.heroDmg,ImgUrl:"../static/images/hero.png"}),c.a.createElement("div",{className:"text-center m-3"},c.a.createElement(E.a,{onClick:this.setherostats},"Set Attrubutes")),c.a.createElement("div",{className:"ml-3 p-2"},c.a.createElement(d.NameForm,{value:this.state.value,NameChange:this.heroNameChange,NameSubmit:this.heroNameSubmit}))),c.a.createElement(f.a,{className:"m-1  bg-dark text-white "},c.a.createElement("h5",{className:"mt-5 ml-5"},c.a.createElement("b",null,"Name: "),this.state.monsterName),c.a.createElement(d.CharacterSheet,{Strength:this.state.monsterstats.Str,Constitution:this.state.monsterstats.Const,Dexterity:this.state.monsterstats.Dext,Hitpoints:this.state.monsterHp,Damage:this.state.monsterDmg,ImgUrl:"../static/images/monster.png"}),c.a.createElement("div",{className:"text-center m-3"},c.a.createElement(E.a,{onClick:this.setmonsterstats},"Set Attrubutes")),c.a.createElement("div",{className:"ml-3 p-2"},c.a.createElement(d.NameForm,{value:this.state.value,NameChange:this.monsterNameChange,NameSubmit:this.monsterNameSubmit}))))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-center m-0 p-0"},c.a.createElement(p.a,{className:"w-100 m-0"},c.a.createElement(f.a,{className:"bg-dark m-1 p-0"},c.a.createElement(d.AttackSection,{AC:this.state.heroAc,HitAdj:this.state.heroHitAdj,AttackRoll:this.heroattackroll,RollTitle:"Hero Roll for Attack",DidHit:this.state.heroDidHit})),c.a.createElement(f.a,{className:"bg-dark m-1 p-0"},c.a.createElement("div",{className:"text-center bg-dark m-0 p-0 text-white"},c.a.createElement(E.a,{type:"button",className:"m-5",onClick:this.rollforiniative},"Roll for iniative"),c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement("div",{className:"text-left m-5"},c.a.createElement("h4",null,"Hero ",c.a.createElement("br",null),"iniative:"),c.a.createElement("h4",null,this.state.heroInitiative))),c.a.createElement(f.a,null,c.a.createElement("div",{className:"text-right m-5"},c.a.createElement("h4",null,"Monster ",c.a.createElement("br",null),"initiative:"),c.a.createElement("h4",null,this.state.monsterInitiative)))),c.a.createElement(p.a,null,c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement("h4",null,"Hero Hit Points:"),c.a.createElement("div",{className:"mt-5"},c.a.createElement("h4",{className:"text-center mb-4"},this.state.heroHp)))),c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement("h4",null,"Monster Hit Points"),c.a.createElement("div",{className:"mt-5"},c.a.createElement("h4",{className:"text-center mb-4"},this.state.monsterHp))))))),c.a.createElement(f.a,{className:"bg-dark m-1 p-0"},c.a.createElement(d.AttackSection,{AC:this.state.monsterAc,HitAdj:this.state.monsterHitAdj,AttackRoll:this.monsterattackroll,RollTitle:"Monster Roll for Attack",DidHit:this.state.monsterDidHit})))))}}]),e}(c.a.Component);e.default=b},nDws:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD/attacksim",function(){var t=a("jvuh");return{page:t.default||t}}])}},[["nDws","5d41","9da1"]]]);