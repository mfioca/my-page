(window.webpackJsonp=window.webpackJsonp||[]).push([["e154"],{PPZE:function(e,t,a){"use strict";a.r(t),a.d(t,"newHero",function(){return H}),a.d(t,"Hero",function(){return h});var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),s=a("AT/M"),l=a("Tit0"),c=a("q1tI"),m=a.n(c),d=a("XEZY"),u=a("jvuh"),H={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},h=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(o.default)(this,Object(i.default)(t).call(this,e))).state={str:H.Str,const:H.Const,dext:H.Dext,hp:u.HeroadjStats.HeroHp,dmg:u.HeroadjStats.HeroDmg,name:""},a.setherostats=a.setherostats.bind(Object(s.default)(a)),a.handleChange=a.handleChange.bind(Object(s.default)(a)),a.handleSubmit=a.handleSubmit.bind(Object(s.default)(a)),a}return Object(l.default)(t,e),Object(r.default)(t,[{key:"setherostats",value:function(){H.Str=Math.floor(20*Math.random()+1),H.Const=Math.floor(20*Math.random()+1),H.Dext=Math.floor(20*Math.random()+1),u.HeroadjStats.HeroHp=H.BaseHitPoints+Object(d.SetConstAdj)(),u.HeroadjStats.HeroAc=H.BaseArmorClass+Object(d.setacAdj)(),u.HeroadjStats.HeroDmg=H.BaseDamage+Object(d.setDmgAdj)(),u.HeroadjStats.HeroHitAdj=H.BaseHitAdj+Object(d.setHitAdj)(),this.setState({str:H.Str}),this.setState({const:H.Const}),this.setState({dext:H.Dext}),this.setState({hp:u.HeroadjStats.HeroHp}),this.setState({dmg:u.HeroadjStats.HeroDmg})}},{key:"handleChange",value:function(e){this.setState({Name:e.target.value})}},{key:"handleSubmit",value:function(){this.setState(function(e){return{showNameForm:!e.showNameForm}})}},{key:"render",value:function(){return m.a.createElement("div",{className:"Hero"},m.a.createElement("div",{className:"HeroBox"},m.a.createElement("div",null,m.a.createElement("p",null,m.a.createElement("b",null,"Name:")," ",this.state.Name),m.a.createElement("table",{className:"DandDstat_table"},m.a.createElement("tr",null,m.a.createElement("td",null,"Strength:"),m.a.createElement("td",null," ",this.state.str)),m.a.createElement("tr",null,m.a.createElement("td",null,"Constitution:"),m.a.createElement("td",null," ",this.state.const)),m.a.createElement("tr",null,m.a.createElement("td",null,"Dexterity:"),m.a.createElement("td",null," ",this.state.dext)),m.a.createElement("tr",null,m.a.createElement("td",null,"Hitpoints:"),m.a.createElement("td",null," ",this.state.hp)),m.a.createElement("tr",null,m.a.createElement("td",null,"Base Damage:"),m.a.createElement("td",null," ",this.state.dmg)))),m.a.createElement("div",null,m.a.createElement("img",{className:"DnD_Hero Float-right",src:"../static/images/hero.png",alt:"hero"}))),m.a.createElement("div",{className:"Stats-roll align-center"},m.a.createElement("button",{onClick:this.setherostats},"Set Attrubutes")),m.a.createElement("div",null,m.a.createElement("form",null,m.a.createElement("label",null,"Name:",m.a.createElement("input",{type:"text",maxLength:"20",value:this.state.value,onChange:this.handleChange})))))}}]),t}(m.a.Component);t.default=h},TLmu:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD/hero",function(){var e=a("PPZE");return{page:e.default||e}}])},XEZY:function(e,t,a){"use strict";a.r(t),a.d(t,"SetConstAdj",function(){return r}),a.d(t,"setHitAdj",function(){return o}),a.d(t,"setDmgAdj",function(){return i}),a.d(t,"setacAdj",function(){return s});var n=a("PPZE");function r(){return 1==n.newHero.Const?-3:2==n.newHero.Const||3==n.newHero.Const?-2:n.newHero.Const>=4&&n.newHero.Const<=6?-1:n.newHero.Const>=7&&n.newHero.Const<=14?0:15==n.newHero.Const?1:16==n.newHero.Const?2:17==n.newHero.Const?3:18==n.newHero.Const?4:19==n.newHero.Const?5:20==n.newHero.Const?6:void 0}function o(){return 1==n.newHero.Str?-4:2==n.newHero.Str||3==n.newHero.Str?-3:4==n.newHero.Str||5==n.newHero.Str?-2:6==n.newHero.Str||7==n.newHero.Str?-1:n.newHero.Str>=8&&n.newHero.Str<=16?0:17==n.newHero.Str?1:18==n.newHero.Str?2:19==n.newHero.Str?3:20==n.newHero.Str?4:void 0}function i(){return 1==n.newHero.Str?-4:2==n.newHero.Str||3==n.newHero.Str?-3:4==n.newHero.Str||5==n.newHero.Str?-2:6==n.newHero.Str||7==n.newHero.Str?-1:n.newHero.Str>=8&&n.newHero.Str<=16?0:17==n.newHero.Str?1:18==n.newHero.Str?2:19==n.newHero.Str?3:20==n.newHero.Str?4:void 0}function s(){return 1==n.newHero.Dext||2==n.newHero.Dext?-5:3==n.newHero.Dext?-4:4==n.newHero.Dext?-3:5==n.newHero.Dext?-2:6==n.newHero.Dext?-1:n.newHero.Dext>=7&&n.newHero.Dext<=14?0:15==n.newHero.Dext?1:16==n.newHero.Dext?2:17==n.newHero.Dext?3:18==n.newHero.Dext||19==n.newHero.Dext?4:20==n.newHero.Dext?5:void 0}},jvuh:function(e,t,a){"use strict";a.r(t),a.d(t,"MonsteradjStats",function(){return d}),a.d(t,"HeroadjStats",function(){return u});var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),s=a("AT/M"),l=a("Tit0"),c=a("q1tI"),m=a.n(c),d={MonsterHp:0,MonsterAc:0,MonsterDmg:0,MonsterHitAdj:0},u={HeroHp:0,HeroAc:0,HeroDmg:0,HeroHitAdj:0},H=" ",h=" ";var f=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(o.default)(this,Object(i.default)(t).call(this,e))).heroinitiative=0,a.monsterinitiative=0,a.heroattack=a.heroattack.bind(Object(s.default)(a)),a.Monsterattack=a.Monsterattack.bind(Object(s.default)(a)),a.refresh=a.refresh.bind(Object(s.default)(a)),a.rollforiniative=a.rollforiniative.bind(Object(s.default)(a)),a}return Object(l.default)(t,e),Object(r.default)(t,[{key:"heroattack",value:function(){Math.floor(20*Math.random()+1)>=d.MonsterAc+u.HeroHitAdj?(H="HIT",d.MonsterHp=d.MonsterHp-10,d.MonsterHp<=0&&(d.MonsterHp="Dead")):H="MISS",this.forceUpdate()}},{key:"Monsterattack",value:function(){Math.floor(20*Math.random()+1)>=u.HeroAc+d.MonsterHitAdj?(h="HIT",u.HeroHp=u.HeroHp-10,u.HeroHp<=0&&(u.HeroHp="Dead")):h="MISS",this.forceUpdate()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"rollforiniative",value:function(){this.heroinitiative=Math.floor(10*Math.random()+1),this.monsterinitiative=Math.floor(10*Math.random()+1),this.heroinitiative<this.monsterinitiative?(this.heroinitiative="First",this.monsterinitiative="Second"):this.heroinitiative>this.monsterinitiative?(this.monsterinitiative="First",this.heroinitiative="Second"):(this.heroinitiative="ReRoll",this.monsterinitiative="ReRoll"),H=" ",h=" ",this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},u.HeroAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},u.HeroHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.heroattack},"Hero Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},H)),m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"StatRefresh DandD_button"},m.a.createElement("button",{onClick:this.refresh},"Refresh stats")),m.a.createElement("div",{className:"Initiative DandD_button"},m.a.createElement("button",{onClick:this.rollforiniative},"Roll for iniative")),m.a.createElement("div",{className:"Heroinitiative center Fsize-2"},m.a.createElement("p",null,"Hero ",m.a.createElement("br",null),"iniative:"),m.a.createElement("p",{className:"Fsize-3"},this.heroinitiative)),m.a.createElement("div",{className:"Monsterinitiative center Fsize-2"},m.a.createElement("p",null,"Monster initiative:"),m.a.createElement("p",{className:"Fsize-3"},this.monsterinitiative)),m.a.createElement("div",{className:"HeroHP-icon"},m.a.createElement("img",{src:"../static/images/herohp.png",alt:"icon"}),m.a.createElement("p",{className:"HeroHP-text Fsize-3 center"},u.HeroHp)),m.a.createElement("div",{className:"MonsterHP-icon"},m.a.createElement("img",{src:"../static/images/monsterhp.png",alt:"icon"}),m.a.createElement("p",{className:"MonsterHP-text Fsize-3 center"},d.MonsterHp))),m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},d.MonsterAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},d.MonsterHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.Monsterattack},"Monster Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},h)))}}]),t}(m.a.Component);t.default=f}},[["TLmu","5d41","9da1"]]]);