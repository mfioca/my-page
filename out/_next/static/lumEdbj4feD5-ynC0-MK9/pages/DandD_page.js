(window.webpackJsonp=window.webpackJsonp||[]).push([["980c"],{CafY:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("0iUn"),o=n("sLSF"),l=n("MI3g"),i=n("a7VT"),c=n("AT/M"),m=n("Tit0"),u=function(e){function t(e){var n;return Object(s.default)(this,t),(n=Object(l.default)(this,Object(i.default)(t).call(this,e))).state={showList:!1},n.showList=n.showList.bind(Object(c.a)(n)),n}return Object(m.default)(t,e),Object(o.default)(t,[{key:"showList",value:function(){this.setState(function(e){return{showList:!e.showList}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{className:"center pointer Dropdown",onMouseOver:"this.className='Dropdown_hover'",onClick:this.showList},r.a.createElement("u",null,"Projects")),this.state.showList&&r.a.createElement("div",{className:"DropdownMenu",onMouseLeave:this.showList},r.a.createElement("ul",{className:"Dropdown-list"},r.a.createElement("li",{className:"Dropdown-list_item"},r.a.createElement("a",{href:"/tvpage"},"Tv import")),r.a.createElement("li",{className:"Dropdown-list_item"},r.a.createElement("a",{href:"/DandD_page"},"DandD")),r.a.createElement("li",{className:"Dropdown-list_item"},r.a.createElement("a",{href:"/test"},"test")))))}}]),t}(r.a.Component),d=function(e){function t(e){var n;return Object(s.default)(this,t),(n=Object(l.default)(this,Object(i.default)(t).call(this,e))).state={showList:!1},n.showList=n.showList.bind(Object(c.a)(n)),n}return Object(m.default)(t,e),Object(o.default)(t,[{key:"showList",value:function(){this.setState(function(e){return{showList:!e.showList}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Header-container"},r.a.createElement("div",{className:"Navbar center"},r.a.createElement("div",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("div",null,r.a.createElement("a",{href:"/about"},"About")),r.a.createElement("div",null,r.a.createElement(u,null))),r.a.createElement("div",{className:"google"},r.a.createElement("div",null,r.a.createElement("img",{src:"/static/images/google.png",alt:"google",height:"20"})),r.a.createElement("div",null,r.a.createElement("form",{action:"http://google.com/search",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("input",{name:"q"}),r.a.createElement("input",{type:"submit"})))))}}]),t}(r.a.Component),E=function(e){function t(){return Object(s.default)(this,t),Object(l.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(m.default)(t,e),Object(o.default)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer-container"},r.a.createElement("div",{className:"Footer-nav center"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/mark-fioca/"},"Linkedln")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.deviantart.com/franknmullet"},"Deviantart"))),r.a.createElement("div",{className:"email"},r.a.createElement("div",null,r.a.createElement("a",{href:"mailto: mark@fioca.com"},r.a.createElement("a",null,"Send Email")))))}}]),t}(r.a.Component);n("ETxl");function f(e){return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"Header"},r.a.createElement(d,null)),r.a.createElement("div",{className:"Body FlexDirection_column"},r.a.createElement("body",null,e.children)),r.a.createElement("div",{className:"Footer"},r.a.createElement(E,null)))}n.d(t,"a",function(){return f})},PPZE:function(e,t,n){"use strict";n.r(t),n.d(t,"newHero",function(){return E}),n.d(t,"Hero",function(){return f});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),o=n("a7VT"),l=n("AT/M"),i=n("Tit0"),c=n("q1tI"),m=n.n(c),u=n("pDHh"),d=n("jvuh"),E={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},f=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(o.default)(t).call(this,e))).setherostats=n.setherostats.bind(Object(l.a)(n)),n}return Object(i.default)(t,e),Object(r.default)(t,[{key:"setherostats",value:function(){E.Str=Math.floor(20*Math.random()+1),E.Const=Math.floor(20*Math.random()+1),E.Dext=Math.floor(20*Math.random()+1),d.HeroadjStats.HeroHp=E.BaseHitPoints+Object(u.SetConstAdj)(),d.HeroadjStats.HeroAc=E.BaseArmorClass+Object(u.setacAdj)(),d.HeroadjStats.HeroDmg=E.BaseDamage+Object(u.setDmgAdj)(),d.HeroadjStats.HeroHitAdj=E.BaseHitAdj+Object(u.setHitAdj)(),this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("p",null,m.a.createElement("b",null,"Name: "),"Insert random Name Here")),m.a.createElement("div",null,m.a.createElement("table",{className:"DandDstat_table"},m.a.createElement("tr",null,m.a.createElement("td",null,"Strength:"),m.a.createElement("td",null," ",E.Str)),m.a.createElement("tr",null,m.a.createElement("td",null,"Constitution:"),m.a.createElement("td",null," ",E.Const)),m.a.createElement("tr",null,m.a.createElement("td",null,"Dexterity:"),m.a.createElement("td",null," ",E.Dext)),m.a.createElement("tr",null,m.a.createElement("td",null,"Hitpoints:"),m.a.createElement("td",null," ",d.HeroadjStats.HeroHp)),m.a.createElement("tr",null,m.a.createElement("td",null,"Base Damage:"),m.a.createElement("td",null," ",d.HeroadjStats.HeroDmg)))),m.a.createElement("div",{className:"Stats-roll"},m.a.createElement("button",{onClick:this.setherostats},"Set Attrubutes")))}}]),t}(m.a.Component);t.default=f},UTvf:function(e,t,n){"use strict";n.r(t),n.d(t,"newMonster",function(){return E});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),o=n("a7VT"),l=n("AT/M"),i=n("Tit0"),c=n("q1tI"),m=n.n(c),u=n("uEUM"),d=n("jvuh"),E={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},f=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(o.default)(t).call(this,e))).handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(i.default)(t,e),Object(r.default)(t,[{key:"handleClick",value:function(){E.Str=Math.floor(20*Math.random()+1),E.Const=Math.floor(20*Math.random()+1),E.Dext=Math.floor(20*Math.random()+1),d.MonsteradjStats.MonsterHp=E.BaseHitPoints+Object(u.SetConstAdj)(),d.MonsteradjStats.MonsterAc=E.BaseArmorClass+Object(u.setacAdj)(),d.MonsteradjStats.MonsterDmg=E.BaseDamage+Object(u.setDmgAdj)(),d.MonsteradjStats.MonsterHitAdj=E.BaseHitAdj+Object(u.setHitAdj)(),this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("p",null,m.a.createElement("b",null,"Name: "),"Insert random Name Here")),m.a.createElement("div",null,m.a.createElement("table",{className:"DandDstat_table"},m.a.createElement("tr",null,m.a.createElement("td",null,"Strength:"),m.a.createElement("td",null," ",E.Str)),m.a.createElement("tr",null,m.a.createElement("td",null,"Constitution:"),m.a.createElement("td",null," ",E.Const)),m.a.createElement("tr",null,m.a.createElement("td",null,"Dexterity:"),m.a.createElement("td",null," ",E.Dext)),m.a.createElement("tr",null,m.a.createElement("td",null,"Hitpoints:"),m.a.createElement("td",null," ",d.MonsteradjStats.MonsterHp)),m.a.createElement("tr",null,m.a.createElement("td",null,"Base Damage:"),m.a.createElement("td",null," ",d.MonsteradjStats.MonsterDmg)))),m.a.createElement("div",{className:"Stats-roll"},m.a.createElement("button",{onClick:this.handleClick},"Set Attrubutes")))}}]),t}(m.a.Component);t.default=f},iuuu:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),o=n("a7VT"),l=n("Tit0"),i=n("q1tI"),c=n.n(i),m=n("CafY"),u=n("PPZE"),d=n("UTvf"),E=n("jvuh"),f=function(e){function t(){return Object(a.default)(this,t),Object(s.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement("div",{className:"DandD_stats Fsize-2"},c.a.createElement("div",null,c.a.createElement("span",{className:"Stats"},c.a.createElement(u.default,null)),c.a.createElement("img",{className:"DnD_avatar ImgSize200",src:"../static/images/hero.png",alt:"hero"})),c.a.createElement("div",null,c.a.createElement("span",{className:"Stats"},c.a.createElement(d.default,null)),c.a.createElement("span",null,c.a.createElement("img",{className:"DnD_avatar ImgSize200",src:"../static/images/monster.png",alt:"monster"})))),c.a.createElement(E.default,null))}}]),t}(i.Component);t.default=f},jvuh:function(e,t,n){"use strict";n.r(t),n.d(t,"MonsteradjStats",function(){return u}),n.d(t,"HeroadjStats",function(){return d});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),o=n("a7VT"),l=n("AT/M"),i=n("Tit0"),c=n("q1tI"),m=n.n(c),u={MonsterHp:0,MonsterAc:0,MonsterDmg:0,MonsterHitAdj:0},d={HeroHp:0,HeroAc:0,HeroDmg:0,HeroHitAdj:0},E=" ",f=" ";var h=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(o.default)(t).call(this,e))).heroinitiative=0,n.monsterinitiative=0,n.heroattack=n.heroattack.bind(Object(l.a)(n)),n.Monsterattack=n.Monsterattack.bind(Object(l.a)(n)),n.refresh=n.refresh.bind(Object(l.a)(n)),n.rollforiniative=n.rollforiniative.bind(Object(l.a)(n)),n}return Object(i.default)(t,e),Object(r.default)(t,[{key:"heroattack",value:function(){Math.floor(20*Math.random()+1)>=u.MonsterAc+d.HeroHitAdj?(E="HIT",u.MonsterHp=u.MonsterHp-10,u.MonsterHp<=0&&(u.MonsterHp="Dead")):E="MISS",this.forceUpdate()}},{key:"Monsterattack",value:function(){Math.floor(20*Math.random()+1)>=d.HeroAc+u.MonsterHitAdj?(f="HIT",d.HeroHp=d.HeroHp-10,d.HeroHp<=0&&(d.HeroHp="Dead")):f="MISS",this.forceUpdate()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"rollforiniative",value:function(){this.heroinitiative=Math.floor(10*Math.random()+1),this.monsterinitiative=Math.floor(10*Math.random()+1),this.heroinitiative<this.monsterinitiative?(this.heroinitiative="First",this.monsterinitiative="Second"):this.heroinitiative>this.monsterinitiative?(this.monsterinitiative="First",this.heroinitiative="Second"):(this.heroinitiative="ReRoll",this.monsterinitiative="ReRoll"),E=" ",f=" ",this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"DandD_attack"},m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},d.HeroAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},d.HeroHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.heroattack},"Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},E))),m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",null,m.a.createElement("div",{className:"StatRefresh DandD_button"},m.a.createElement("button",{onClick:this.refresh},"Refresh stats")),m.a.createElement("div",{className:"Initiative DandD_button"},m.a.createElement("button",{onClick:this.rollforiniative},"Roll for iniative")),m.a.createElement("div",{className:"Heroinitiative center Fsize-2"},m.a.createElement("p",null,"Hero ",m.a.createElement("br",null),"iniative:"),m.a.createElement("p",{className:"Fsize-3"},this.heroinitiative)),m.a.createElement("div",{className:"Monsterinitiative center Fsize-2"},m.a.createElement("p",null,"Monster initiative:"),m.a.createElement("p",{className:"Fsize-3"},this.monsterinitiative))),m.a.createElement("div",{className:"HeroHP-icon"},m.a.createElement("img",{src:"../static/images/herohp.png",alt:"icon"}),m.a.createElement("p",{className:"HeroHP-text Fsize-3 center"},d.HeroHp)),m.a.createElement("div",{className:"MonsterHP-icon"},m.a.createElement("img",{src:"../static/images/monsterhp.png",alt:"icon"}),m.a.createElement("p",{className:"MonsterHP-text Fsize-3 center"},u.MonsterHp)))),m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},u.MonsterAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},u.MonsterHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.Monsterattack},"Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},f)))))}}]),t}(m.a.Component);t.default=h},nSqg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD_page",function(){var e=n("iuuu");return{page:e.default||e}}])},pDHh:function(e,t,n){"use strict";n.r(t),n.d(t,"SetConstAdj",function(){return r}),n.d(t,"setHitAdj",function(){return s}),n.d(t,"setDmgAdj",function(){return o}),n.d(t,"setacAdj",function(){return l});var a=n("PPZE");function r(){return 1==a.newHero.Const?-3:2==a.newHero.Const||3==a.newHero.Const?-2:a.newHero.Const>=4&&a.newHero.Const<=6?-1:a.newHero.Const>=7&&a.newHero.Const<=14?0:15==a.newHero.Const?1:16==a.newHero.Const?2:17==a.newHero.Const?3:18==a.newHero.Const?4:19==a.newHero.Const?5:20==a.newHero.Const?6:void 0}function s(){return 1==a.newHero.Str?-4:2==a.newHero.Str||3==a.newHero.Str?-3:4==a.newHero.Str||5==a.newHero.Str?-2:6==a.newHero.Str||7==a.newHero.Str?-1:a.newHero.Str>=8&&a.newHero.Str<=16?0:17==a.newHero.Str?1:18==a.newHero.Str?2:19==a.newHero.Str?3:20==a.newHero.Str?4:void 0}function o(){return 1==a.newHero.Str?-4:2==a.newHero.Str||3==a.newHero.Str?-3:4==a.newHero.Str||5==a.newHero.Str?-2:6==a.newHero.Str||7==a.newHero.Str?-1:a.newHero.Str>=8&&a.newHero.Str<=16?0:17==a.newHero.Str?1:18==a.newHero.Str?2:19==a.newHero.Str?3:20==a.newHero.Str?4:void 0}function l(){return 1==a.newHero.Dext||2==a.newHero.Dext?-5:3==a.newHero.Dext?-4:4==a.newHero.Dext?-3:5==a.newHero.Dext?-2:6==a.newHero.Dext?-1:a.newHero.Dext>=7&&a.newHero.Dext<=14?0:15==a.newHero.Dext?1:16==a.newHero.Dext?2:17==a.newHero.Dext?3:18==a.newHero.Dext||19==a.newHero.Dext?4:20==a.newHero.Dext?5:void 0}},uEUM:function(e,t,n){"use strict";n.r(t),n.d(t,"setHitAdj",function(){return r}),n.d(t,"setDmgAdj",function(){return s}),n.d(t,"setacAdj",function(){return o}),n.d(t,"SetConstAdj",function(){return l});var a=n("UTvf");function r(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function s(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function o(){return 1==a.newMonster.Dext||2==a.newMonster.Dext?-5:3==a.newMonster.Dext?-4:4==a.newMonster.Dext?-3:5==a.newMonster.Dext?-2:6==a.newMonster.Dext?-1:a.newMonster.Dext>=7&&a.newMonster.Dext<=14?0:15==a.newMonster.Dext?1:16==a.newMonster.Dext?2:17==a.newMonster.Dext?3:18==a.newMonster.Dext||19==a.newMonster.Dext?4:20==a.newMonster.Dext?5:void 0}function l(){return 1==a.newMonster.Const?-3:2==a.newMonster.Const||3==a.newMonster.Const?-2:a.newMonster.Const>=4&&a.newMonster.Const<=6?-1:a.newMonster.Const>=7&&a.newMonster.Const<=14?0:15==a.newMonster.Const?1:16==a.newMonster.Const?2:17==a.newMonster.Const?3:18==a.newMonster.Const?4:19==a.newMonster.Const?5:20==a.newMonster.Const?6:void 0}}},[["nSqg","5d41","9da1","ad9d"]]]);