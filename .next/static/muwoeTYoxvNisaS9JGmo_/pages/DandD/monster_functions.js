(window.webpackJsonp=window.webpackJsonp||[]).push([["2b62"],{"4g4t":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD/monster_functions",function(){var e=n("uEUM");return{page:e.default||e}}])},UTvf:function(e,t,n){"use strict";n.r(t),n.d(t,"newMonster",function(){return M});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),i=n("a7VT"),o=n("AT/M"),c=n("Tit0"),l=n("q1tI"),m=n.n(l),d=n("uEUM"),u=n("jvuh"),M={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},h=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(i.default)(t).call(this,e))).handleClick=n.handleClick.bind(Object(o.default)(n)),n}return Object(c.default)(t,e),Object(r.default)(t,[{key:"handleClick",value:function(){M.Str=Math.floor(20*Math.random()+1),M.Const=Math.floor(20*Math.random()+1),M.Dext=Math.floor(20*Math.random()+1),u.MonsteradjStats.MonsterHp=M.BaseHitPoints+Object(d.SetConstAdj)(),u.MonsteradjStats.MonsterAc=M.BaseArmorClass+Object(d.setacAdj)(),u.MonsteradjStats.MonsterDmg=M.BaseDamage+Object(d.setDmgAdj)(),u.MonsteradjStats.MonsterHitAdj=M.BaseHitAdj+Object(d.setHitAdj)(),this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",null,m.a.createElement("p",null,m.a.createElement("b",null,"Name: "),"Insert random Name Here")),m.a.createElement("div",null,m.a.createElement("table",{className:"DandDstat_table"},m.a.createElement("tr",null,m.a.createElement("td",null,"Strength:"),m.a.createElement("td",null," ",M.Str)),m.a.createElement("tr",null,m.a.createElement("td",null,"Constitution:"),m.a.createElement("td",null," ",M.Const)),m.a.createElement("tr",null,m.a.createElement("td",null,"Dexterity:"),m.a.createElement("td",null," ",M.Dext)),m.a.createElement("tr",null,m.a.createElement("td",null,"Hitpoints:"),m.a.createElement("td",null," ",u.MonsteradjStats.MonsterHp)),m.a.createElement("tr",null,m.a.createElement("td",null,"Base Damage:"),m.a.createElement("td",null," ",u.MonsteradjStats.MonsterDmg)))),m.a.createElement("div",{className:"Stats-roll"},m.a.createElement("button",{onClick:this.handleClick},"Set Attrubutes")))}}]),t}(m.a.Component);t.default=h},jvuh:function(e,t,n){"use strict";n.r(t),n.d(t,"MonsteradjStats",function(){return d}),n.d(t,"HeroadjStats",function(){return u});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),i=n("a7VT"),o=n("AT/M"),c=n("Tit0"),l=n("q1tI"),m=n.n(l),d={MonsterHp:0,MonsterAc:0,MonsterDmg:0,MonsterHitAdj:0},u={HeroHp:0,HeroAc:0,HeroDmg:0,HeroHitAdj:0},M=" ",h=" ";var v=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(i.default)(t).call(this,e))).heroinitiative=0,n.monsterinitiative=0,n.heroattack=n.heroattack.bind(Object(o.default)(n)),n.Monsterattack=n.Monsterattack.bind(Object(o.default)(n)),n.refresh=n.refresh.bind(Object(o.default)(n)),n.rollforiniative=n.rollforiniative.bind(Object(o.default)(n)),n}return Object(c.default)(t,e),Object(r.default)(t,[{key:"heroattack",value:function(){Math.floor(20*Math.random()+1)>=d.MonsterAc+u.HeroHitAdj?(M="HIT",d.MonsterHp=d.MonsterHp-10,d.MonsterHp<=0&&(d.MonsterHp="Dead")):M="MISS",this.forceUpdate()}},{key:"Monsterattack",value:function(){Math.floor(20*Math.random()+1)>=u.HeroAc+d.MonsterHitAdj?(h="HIT",u.HeroHp=u.HeroHp-10,u.HeroHp<=0&&(u.HeroHp="Dead")):h="MISS",this.forceUpdate()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"rollforiniative",value:function(){this.heroinitiative=Math.floor(10*Math.random()+1),this.monsterinitiative=Math.floor(10*Math.random()+1),this.heroinitiative<this.monsterinitiative?(this.heroinitiative="First",this.monsterinitiative="Second"):this.heroinitiative>this.monsterinitiative?(this.monsterinitiative="First",this.heroinitiative="Second"):(this.heroinitiative="ReRoll",this.monsterinitiative="ReRoll"),M=" ",h=" ",this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"DandD_attack"},m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},u.HeroAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},u.HeroHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.heroattack},"Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},M))),m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",null,m.a.createElement("div",{className:"StatRefresh DandD_button"},m.a.createElement("button",{onClick:this.refresh},"Refresh stats")),m.a.createElement("div",{className:"Initiative DandD_button"},m.a.createElement("button",{onClick:this.rollforiniative},"Roll for iniative")),m.a.createElement("div",{className:"Heroinitiative center Fsize-2"},m.a.createElement("p",null,"Hero ",m.a.createElement("br",null),"iniative:"),m.a.createElement("p",{className:"Fsize-3"},this.heroinitiative)),m.a.createElement("div",{className:"Monsterinitiative center Fsize-2"},m.a.createElement("p",null,"Monster initiative:"),m.a.createElement("p",{className:"Fsize-3"},this.monsterinitiative))),m.a.createElement("div",{className:"HeroHP-icon"},m.a.createElement("img",{src:"../static/images/herohp.png"}),m.a.createElement("p",{className:"HeroHP-text Fsize-3 center"},u.HeroHp)),m.a.createElement("div",{className:"MonsterHP-icon"},m.a.createElement("img",{src:"../static/images/monsterhp.png"}),m.a.createElement("p",{className:"MonsterHP-text Fsize-3 center"},d.MonsterHp)))),m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},d.MonsterAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},d.MonsterHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.Monsterattack},"Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},h)))))}}]),t}(m.a.Component);t.default=v},uEUM:function(e,t,n){"use strict";n.r(t),n.d(t,"setHitAdj",function(){return r}),n.d(t,"setDmgAdj",function(){return s}),n.d(t,"setacAdj",function(){return i}),n.d(t,"SetConstAdj",function(){return o});var a=n("UTvf");function r(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function s(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function i(){return 1==a.newMonster.Dext||2==a.newMonster.Dext?-5:3==a.newMonster.Dext?-4:4==a.newMonster.Dext?-3:5==a.newMonster.Dext?-2:6==a.newMonster.Dext?-1:a.newMonster.Dext>=7&&a.newMonster.Dext<=14?0:15==a.newMonster.Dext?1:16==a.newMonster.Dext?2:17==a.newMonster.Dext?3:18==a.newMonster.Dext||19==a.newMonster.Dext?4:20==a.newMonster.Dext?5:void 0}function o(){return 1==a.newMonster.Const?-3:2==a.newMonster.Const||3==a.newMonster.Const?-2:a.newMonster.Const>=4&&a.newMonster.Const<=6?-1:a.newMonster.Const>=7&&a.newMonster.Const<=14?0:15==a.newMonster.Const?1:16==a.newMonster.Const?2:17==a.newMonster.Const?3:18==a.newMonster.Const?4:19==a.newMonster.Const?5:20==a.newMonster.Const?6:void 0}}},[["4g4t","5d41","9da1"]]]);