(window.webpackJsonp=window.webpackJsonp||[]).push([["b0ac"],{"32ut":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandDpage",function(){var e=n("AOlV");return{page:e.default||e}}])},AOlV:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),s=n("a7VT"),o=n("Tit0"),i=n("q1tI"),c=n.n(i),u=n("CafY"),m=n("PPZE"),d=n("UTvf"),f=n("jvuh"),E=function(e){function t(){return Object(a.default)(this,t),Object(l.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"center"},c.a.createElement("h1",null,"Dungeons and Dragons attack simulation"),"Calculations are based on SE 2 rules from late 80's and early 90's."),c.a.createElement("div",null,c.a.createElement("ol",null,c.a.createElement("b",null,"Instructions:"),c.a.createElement("li",null,'Press the "Set Attributes" buttons for both Hero and Monster.'),c.a.createElement("li",null,'Press the "Refresh Stats" button.'),c.a.createElement("li",null,'Press the "Roll for Initiative" button to see who attacks first.'),c.a.createElement("li",null,'Follow the instructions and press the "Roll for Attack" buttons.'),c.a.createElement("li",null,"After each round, repeat until simulation is finished."))),c.a.createElement("div",{className:"DandD_stats Fsize-2"},c.a.createElement("div",null,c.a.createElement("span",{className:"Stats"},c.a.createElement(m.default,null)),c.a.createElement("img",{className:"DnD_avatar ImgSize200",src:"../static/images/hero.png",alt:"hero"})),c.a.createElement("div",null,c.a.createElement("span",{className:"Stats"},c.a.createElement(d.default,null)),c.a.createElement("span",null,c.a.createElement("img",{className:"DnD_avatar ImgSize200",src:"../static/images/monster.png",alt:"monster"})))),c.a.createElement(f.default,null))}}]),t}(i.Component);t.default=E},CafY:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("0iUn"),s=n("sLSF"),o=n("MI3g"),i=n("a7VT"),c=n("AT/M"),u=n("Tit0"),m=function(e){function t(e){var n;return Object(l.default)(this,t),(n=Object(o.default)(this,Object(i.default)(t).call(this,e))).state={showList:!1},n.showList=n.showList.bind(Object(c.default)(n)),n}return Object(u.default)(t,e),Object(s.default)(t,[{key:"showList",value:function(){this.setState(function(e){return{showList:!e.showList}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{className:"center pointer Dropdown",onMouseOver:"this.className='Dropdown_hover'",onClick:this.showList},r.a.createElement("u",null,"Projects")),this.state.showList&&r.a.createElement("div",{className:"DropdownMenu",onMouseLeave:this.showList},r.a.createElement("ul",{className:"Dropdown-list"},r.a.createElement("li",{className:"Dropdown-list_item"},r.a.createElement("a",{href:"/tvpage"},"Tv import")),r.a.createElement("li",{className:"Dropdown-list_item"},r.a.createElement("a",{href:"/DandDpage"},"DandD")),r.a.createElement("li",{className:"Dropdown-list_item"},r.a.createElement("a",{href:"/test"},"test")))))}}]),t}(r.a.Component),d=function(e){function t(e){var n;return Object(l.default)(this,t),(n=Object(o.default)(this,Object(i.default)(t).call(this,e))).state={showList:!1},n.showList=n.showList.bind(Object(c.default)(n)),n}return Object(u.default)(t,e),Object(s.default)(t,[{key:"showList",value:function(){this.setState(function(e){return{showList:!e.showList}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Header-container"},r.a.createElement("div",{className:"Navbar center"},r.a.createElement("div",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("div",null,r.a.createElement("a",{href:"/about"},"About")),r.a.createElement("div",null,r.a.createElement(m,null))),r.a.createElement("div",{className:"google"},r.a.createElement("div",null,r.a.createElement("img",{src:"/static/images/google.png",alt:"google",height:"20"})),r.a.createElement("div",null,r.a.createElement("form",{action:"http://google.com/search",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("input",{name:"q"}),r.a.createElement("input",{type:"submit"})))))}}]),t}(r.a.Component),f=function(e){function t(){return Object(l.default)(this,t),Object(o.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(s.default)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Footer-container"},r.a.createElement("div",{className:"Footer-nav center"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/mark-fioca/"},"Linkedln")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.deviantart.com/franknmullet"},"Deviantart"))),r.a.createElement("div",{className:"email"},r.a.createElement("div",null,r.a.createElement("a",{href:"mailto: mark@fioca.com"},r.a.createElement("a",null,"Send Email")))))}}]),t}(r.a.Component);n("ETxl");function E(e){return r.a.createElement("div",{className:"Layout"},r.a.createElement("div",{className:"Header"},r.a.createElement(d,null)),r.a.createElement("div",{className:"Body FlexDirection_column"},r.a.createElement("body",null,e.children)),r.a.createElement("div",{className:"Footer"},r.a.createElement(f,null)))}n.d(t,"a",function(){return E})},PPZE:function(e,t,n){"use strict";n.r(t),n.d(t,"newHero",function(){return f}),n.d(t,"Hero",function(){return E});var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),s=n("a7VT"),o=n("AT/M"),i=n("Tit0"),c=n("q1tI"),u=n.n(c),m=n("XEZY"),d=n("jvuh"),f={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},E=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(l.default)(this,Object(s.default)(t).call(this,e))).setherostats=n.setherostats.bind(Object(o.default)(n)),n}return Object(i.default)(t,e),Object(r.default)(t,[{key:"setherostats",value:function(){f.Str=Math.floor(20*Math.random()+1),f.Const=Math.floor(20*Math.random()+1),f.Dext=Math.floor(20*Math.random()+1),d.HeroadjStats.HeroHp=f.BaseHitPoints+Object(m.SetConstAdj)(),d.HeroadjStats.HeroAc=f.BaseArmorClass+Object(m.setacAdj)(),d.HeroadjStats.HeroDmg=f.BaseDamage+Object(m.setDmgAdj)(),d.HeroadjStats.HeroHitAdj=f.BaseHitAdj+Object(m.setHitAdj)(),this.forceUpdate()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",null,u.a.createElement("b",null,"Name: "),"Insert random Name Here")),u.a.createElement("div",null,u.a.createElement("table",{className:"DandDstat_table"},u.a.createElement("tr",null,u.a.createElement("td",null,"Strength:"),u.a.createElement("td",null," ",f.Str)),u.a.createElement("tr",null,u.a.createElement("td",null,"Constitution:"),u.a.createElement("td",null," ",f.Const)),u.a.createElement("tr",null,u.a.createElement("td",null,"Dexterity:"),u.a.createElement("td",null," ",f.Dext)),u.a.createElement("tr",null,u.a.createElement("td",null,"Hitpoints:"),u.a.createElement("td",null," ",d.HeroadjStats.HeroHp)),u.a.createElement("tr",null,u.a.createElement("td",null,"Base Damage:"),u.a.createElement("td",null," ",d.HeroadjStats.HeroDmg)))),u.a.createElement("div",{className:"Stats-roll"},u.a.createElement("button",{onClick:this.setherostats},"Set Attrubutes")))}}]),t}(u.a.Component);t.default=E},UTvf:function(e,t,n){"use strict";n.r(t),n.d(t,"newMonster",function(){return f});var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),s=n("a7VT"),o=n("AT/M"),i=n("Tit0"),c=n("q1tI"),u=n.n(c),m=n("W1xQ"),d=n("jvuh"),f={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},E=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(l.default)(this,Object(s.default)(t).call(this,e))).handleClick=n.handleClick.bind(Object(o.default)(n)),n}return Object(i.default)(t,e),Object(r.default)(t,[{key:"handleClick",value:function(){f.Str=Math.floor(20*Math.random()+1),f.Const=Math.floor(20*Math.random()+1),f.Dext=Math.floor(20*Math.random()+1),d.MonsteradjStats.MonsterHp=f.BaseHitPoints+Object(m.SetConstAdj)(),d.MonsteradjStats.MonsterAc=f.BaseArmorClass+Object(m.setacAdj)(),d.MonsteradjStats.MonsterDmg=f.BaseDamage+Object(m.setDmgAdj)(),d.MonsteradjStats.MonsterHitAdj=f.BaseHitAdj+Object(m.setHitAdj)(),this.forceUpdate()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("p",null,u.a.createElement("b",null,"Name: "),"Insert random Name Here")),u.a.createElement("div",null,u.a.createElement("table",{className:"DandDstat_table"},u.a.createElement("tr",null,u.a.createElement("td",null,"Strength:"),u.a.createElement("td",null," ",f.Str)),u.a.createElement("tr",null,u.a.createElement("td",null,"Constitution:"),u.a.createElement("td",null," ",f.Const)),u.a.createElement("tr",null,u.a.createElement("td",null,"Dexterity:"),u.a.createElement("td",null," ",f.Dext)),u.a.createElement("tr",null,u.a.createElement("td",null,"Hitpoints:"),u.a.createElement("td",null," ",d.MonsteradjStats.MonsterHp)),u.a.createElement("tr",null,u.a.createElement("td",null,"Base Damage:"),u.a.createElement("td",null," ",d.MonsteradjStats.MonsterDmg)))),u.a.createElement("div",{className:"Stats-roll"},u.a.createElement("button",{onClick:this.handleClick},"Set Attrubutes")))}}]),t}(u.a.Component);t.default=E},W1xQ:function(e,t,n){"use strict";n.r(t),n.d(t,"setHitAdj",function(){return r}),n.d(t,"setDmgAdj",function(){return l}),n.d(t,"setacAdj",function(){return s}),n.d(t,"SetConstAdj",function(){return o});var a=n("UTvf");function r(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function l(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function s(){return 1==a.newMonster.Dext||2==a.newMonster.Dext?-5:3==a.newMonster.Dext?-4:4==a.newMonster.Dext?-3:5==a.newMonster.Dext?-2:6==a.newMonster.Dext?-1:a.newMonster.Dext>=7&&a.newMonster.Dext<=14?0:15==a.newMonster.Dext?1:16==a.newMonster.Dext?2:17==a.newMonster.Dext?3:18==a.newMonster.Dext||19==a.newMonster.Dext?4:20==a.newMonster.Dext?5:void 0}function o(){return 1==a.newMonster.Const?-3:2==a.newMonster.Const||3==a.newMonster.Const?-2:a.newMonster.Const>=4&&a.newMonster.Const<=6?-1:a.newMonster.Const>=7&&a.newMonster.Const<=14?0:15==a.newMonster.Const?1:16==a.newMonster.Const?2:17==a.newMonster.Const?3:18==a.newMonster.Const?4:19==a.newMonster.Const?5:20==a.newMonster.Const?6:void 0}},XEZY:function(e,t,n){"use strict";n.r(t),n.d(t,"SetConstAdj",function(){return r}),n.d(t,"setHitAdj",function(){return l}),n.d(t,"setDmgAdj",function(){return s}),n.d(t,"setacAdj",function(){return o});var a=n("PPZE");function r(){return 1==a.newHero.Const?-3:2==a.newHero.Const||3==a.newHero.Const?-2:a.newHero.Const>=4&&a.newHero.Const<=6?-1:a.newHero.Const>=7&&a.newHero.Const<=14?0:15==a.newHero.Const?1:16==a.newHero.Const?2:17==a.newHero.Const?3:18==a.newHero.Const?4:19==a.newHero.Const?5:20==a.newHero.Const?6:void 0}function l(){return 1==a.newHero.Str?-4:2==a.newHero.Str||3==a.newHero.Str?-3:4==a.newHero.Str||5==a.newHero.Str?-2:6==a.newHero.Str||7==a.newHero.Str?-1:a.newHero.Str>=8&&a.newHero.Str<=16?0:17==a.newHero.Str?1:18==a.newHero.Str?2:19==a.newHero.Str?3:20==a.newHero.Str?4:void 0}function s(){return 1==a.newHero.Str?-4:2==a.newHero.Str||3==a.newHero.Str?-3:4==a.newHero.Str||5==a.newHero.Str?-2:6==a.newHero.Str||7==a.newHero.Str?-1:a.newHero.Str>=8&&a.newHero.Str<=16?0:17==a.newHero.Str?1:18==a.newHero.Str?2:19==a.newHero.Str?3:20==a.newHero.Str?4:void 0}function o(){return 1==a.newHero.Dext||2==a.newHero.Dext?-5:3==a.newHero.Dext?-4:4==a.newHero.Dext?-3:5==a.newHero.Dext?-2:6==a.newHero.Dext?-1:a.newHero.Dext>=7&&a.newHero.Dext<=14?0:15==a.newHero.Dext?1:16==a.newHero.Dext?2:17==a.newHero.Dext?3:18==a.newHero.Dext||19==a.newHero.Dext?4:20==a.newHero.Dext?5:void 0}},jvuh:function(e,t,n){"use strict";n.r(t),n.d(t,"MonsteradjStats",function(){return m}),n.d(t,"HeroadjStats",function(){return d});var a=n("0iUn"),r=n("sLSF"),l=n("MI3g"),s=n("a7VT"),o=n("AT/M"),i=n("Tit0"),c=n("q1tI"),u=n.n(c),m={MonsterHp:0,MonsterAc:0,MonsterDmg:0,MonsterHitAdj:0},d={HeroHp:0,HeroAc:0,HeroDmg:0,HeroHitAdj:0},f=" ",E=" ";var h=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(l.default)(this,Object(s.default)(t).call(this,e))).heroinitiative=0,n.monsterinitiative=0,n.heroattack=n.heroattack.bind(Object(o.default)(n)),n.Monsterattack=n.Monsterattack.bind(Object(o.default)(n)),n.refresh=n.refresh.bind(Object(o.default)(n)),n.rollforiniative=n.rollforiniative.bind(Object(o.default)(n)),n}return Object(i.default)(t,e),Object(r.default)(t,[{key:"heroattack",value:function(){Math.floor(20*Math.random()+1)>=m.MonsterAc+d.HeroHitAdj?(f="HIT",m.MonsterHp=m.MonsterHp-10,m.MonsterHp<=0&&(m.MonsterHp="Dead")):f="MISS",this.forceUpdate()}},{key:"Monsterattack",value:function(){Math.floor(20*Math.random()+1)>=d.HeroAc+m.MonsterHitAdj?(E="HIT",d.HeroHp=d.HeroHp-10,d.HeroHp<=0&&(d.HeroHp="Dead")):E="MISS",this.forceUpdate()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"rollforiniative",value:function(){this.heroinitiative=Math.floor(10*Math.random()+1),this.monsterinitiative=Math.floor(10*Math.random()+1),this.heroinitiative<this.monsterinitiative?(this.heroinitiative="First",this.monsterinitiative="Second"):this.heroinitiative>this.monsterinitiative?(this.monsterinitiative="First",this.heroinitiative="Second"):(this.heroinitiative="ReRoll",this.monsterinitiative="ReRoll"),f=" ",E=" ",this.forceUpdate()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"DandD_attack"},u.a.createElement("div",{className:"Attack-container"},u.a.createElement("div",{className:"Attack-section"},u.a.createElement("div",{className:"AC-Icon"},u.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),u.a.createElement("p",{className:"AC-Icon-text Fsize-3"},d.HeroAc)),u.a.createElement("div",{className:"HitAdj-Icon"},u.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),u.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},d.HeroHitAdj)),u.a.createElement("div",{className:"Attack-roll"},u.a.createElement("button",{onClick:this.heroattack},"Roll for Attack")),u.a.createElement("div",{className:"Attack-result Fsize-3 center"},f))),u.a.createElement("div",{className:"Attack-container"},u.a.createElement("div",{className:"Attack-section"},u.a.createElement("div",null,u.a.createElement("div",{className:"StatRefresh DandD_button"},u.a.createElement("button",{onClick:this.refresh},"Refresh stats")),u.a.createElement("div",{className:"Initiative DandD_button"},u.a.createElement("button",{onClick:this.rollforiniative},"Roll for iniative")),u.a.createElement("div",{className:"Heroinitiative center Fsize-2"},u.a.createElement("p",null,"Hero ",u.a.createElement("br",null),"iniative:"),u.a.createElement("p",{className:"Fsize-3"},this.heroinitiative)),u.a.createElement("div",{className:"Monsterinitiative center Fsize-2"},u.a.createElement("p",null,"Monster initiative:"),u.a.createElement("p",{className:"Fsize-3"},this.monsterinitiative))),u.a.createElement("div",{className:"HeroHP-icon"},u.a.createElement("img",{src:"../static/images/herohp.png",alt:"icon"}),u.a.createElement("p",{className:"HeroHP-text Fsize-3 center"},d.HeroHp)),u.a.createElement("div",{className:"MonsterHP-icon"},u.a.createElement("img",{src:"../static/images/monsterhp.png",alt:"icon"}),u.a.createElement("p",{className:"MonsterHP-text Fsize-3 center"},m.MonsterHp)))),u.a.createElement("div",{className:"Attack-container"},u.a.createElement("div",{className:"Attack-section"},u.a.createElement("div",{className:"AC-Icon"},u.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),u.a.createElement("p",{className:"AC-Icon-text Fsize-3"},m.MonsterAc)),u.a.createElement("div",{className:"HitAdj-Icon"},u.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),u.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},m.MonsterHitAdj)),u.a.createElement("div",{className:"Attack-roll"},u.a.createElement("button",{onClick:this.Monsterattack},"Roll for Attack")),u.a.createElement("div",{className:"Attack-result Fsize-3 center"},E)))))}}]),t}(u.a.Component);t.default=h}},[["32ut","5d41","9da1","ad9d"]]]);