(window.webpackJsonp=window.webpackJsonp||[]).push([["0085"],{"4G67":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD/monster",function(){var e=n("UTvf");return{page:e.default||e}}])},UTvf:function(e,t,n){"use strict";n.r(t),n.d(t,"newMonster",function(){return M});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),o=n("a7VT"),i=n("AT/M"),l=n("Tit0"),c=n("q1tI"),m=n.n(c),d=n("W1xQ"),u=n("jvuh"),M={Str:0,Const:0,Dext:0,BaseHitPoints:50,BaseArmorClass:10,BaseDamage:10,BaseHitAdj:0},h=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(o.default)(t).call(this,e))).state={str:M.Str},n.state={const:M.Const},n.state={dext:M.Dext},n.state={hp:u.MonsteradjStats.MonsterHp},n.state={dmg:u.MonsteradjStats.MonsterDmg},n.setMonsterstats=n.setMonsterstats.bind(Object(i.default)(n)),n.state={Name:""},n.handleChange=n.handleChange.bind(Object(i.default)(n)),n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"handleChange",value:function(e){this.setState({Name:e.target.value})}},{key:"setMonsterstats",value:function(){M.Str=Math.floor(20*Math.random()+1),M.Const=Math.floor(20*Math.random()+1),M.Dext=Math.floor(20*Math.random()+1),u.MonsteradjStats.MonsterHp=M.BaseHitPoints+Object(d.SetConstAdj)(),u.MonsteradjStats.MonsterAc=M.BaseArmorClass+Object(d.setacAdj)(),u.MonsteradjStats.MonsterDmg=M.BaseDamage+Object(d.setDmgAdj)(),u.MonsteradjStats.MonsterHitAdj=M.BaseHitAdj+Object(d.setHitAdj)(),this.setState({str:M.Str}),this.setState({const:M.Const}),this.setState({dext:M.Dext}),this.setState({hp:u.MonsteradjStats.MonsterHp}),this.setState({dmg:u.MonsteradjStats.MonsterDmg})}},{key:"render",value:function(){return m.a.createElement("div",{className:"Monster"},m.a.createElement("div",{className:"MonsterBox"},m.a.createElement("div",null,m.a.createElement("p",null,m.a.createElement("b",null,"Name: "),this.state.Name),m.a.createElement("table",{className:"DandDstat_table"},m.a.createElement("tr",null,m.a.createElement("td",null,"Strength:"),m.a.createElement("td",null," ",this.state.str)),m.a.createElement("tr",null,m.a.createElement("td",null,"Constitution:"),m.a.createElement("td",null," ",this.state.const)),m.a.createElement("tr",null,m.a.createElement("td",null,"Dexterity:"),m.a.createElement("td",null," ",this.state.dext)),m.a.createElement("tr",null,m.a.createElement("td",null,"Hitpoints:"),m.a.createElement("td",null," ",this.state.hp)),m.a.createElement("tr",null,m.a.createElement("td",null,"Base Damage:"),m.a.createElement("td",null," ",this.state.dmg)))),m.a.createElement("div",null,m.a.createElement("img",{className:"DnD_Monster Float-right",src:"../static/images/monster.png",alt:"monster"}))),m.a.createElement("div",{className:"Stats-roll align-center"},m.a.createElement("button",{onClick:this.setMonsterstats},"Set Attrubutes")),m.a.createElement("div",null,m.a.createElement("form",null,m.a.createElement("label",null,"Name:",m.a.createElement("input",{type:"text",maxLength:"20",value:this.state.value,onChange:this.handleChange})))))}}]),t}(m.a.Component);t.default=h},W1xQ:function(e,t,n){"use strict";n.r(t),n.d(t,"setHitAdj",function(){return r}),n.d(t,"setDmgAdj",function(){return s}),n.d(t,"setacAdj",function(){return o}),n.d(t,"SetConstAdj",function(){return i});var a=n("UTvf");function r(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function s(){return 1==a.newMonster.Str?-4:2==a.newMonster.Str||3==a.newMonster.Str?-3:4==a.newMonster.Str||5==a.newMonster.Str?-2:6==a.newMonster.Str||7==a.newMonster.Str?-1:a.newMonster.Str>=8&&a.newMonster.Str<=16?0:17==a.newMonster.Str?1:18==a.newMonster.Str?2:19==a.newMonster.Str?3:20==a.newMonster.Str?4:void 0}function o(){return 1==a.newMonster.Dext||2==a.newMonster.Dext?-5:3==a.newMonster.Dext?-4:4==a.newMonster.Dext?-3:5==a.newMonster.Dext?-2:6==a.newMonster.Dext?-1:a.newMonster.Dext>=7&&a.newMonster.Dext<=14?0:15==a.newMonster.Dext?1:16==a.newMonster.Dext?2:17==a.newMonster.Dext?3:18==a.newMonster.Dext||19==a.newMonster.Dext?4:20==a.newMonster.Dext?5:void 0}function i(){return 1==a.newMonster.Const?-3:2==a.newMonster.Const||3==a.newMonster.Const?-2:a.newMonster.Const>=4&&a.newMonster.Const<=6?-1:a.newMonster.Const>=7&&a.newMonster.Const<=14?0:15==a.newMonster.Const?1:16==a.newMonster.Const?2:17==a.newMonster.Const?3:18==a.newMonster.Const?4:19==a.newMonster.Const?5:20==a.newMonster.Const?6:void 0}},jvuh:function(e,t,n){"use strict";n.r(t),n.d(t,"MonsteradjStats",function(){return d}),n.d(t,"HeroadjStats",function(){return u});var a=n("0iUn"),r=n("sLSF"),s=n("MI3g"),o=n("a7VT"),i=n("AT/M"),l=n("Tit0"),c=n("q1tI"),m=n.n(c),d={MonsterHp:0,MonsterAc:0,MonsterDmg:0,MonsterHitAdj:0},u={HeroHp:0,HeroAc:0,HeroDmg:0,HeroHitAdj:0},M=" ",h=" ";var v=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(s.default)(this,Object(o.default)(t).call(this,e))).heroinitiative=0,n.monsterinitiative=0,n.heroattack=n.heroattack.bind(Object(i.default)(n)),n.Monsterattack=n.Monsterattack.bind(Object(i.default)(n)),n.refresh=n.refresh.bind(Object(i.default)(n)),n.rollforiniative=n.rollforiniative.bind(Object(i.default)(n)),n}return Object(l.default)(t,e),Object(r.default)(t,[{key:"heroattack",value:function(){Math.floor(20*Math.random()+1)>=d.MonsterAc+u.HeroHitAdj?(M="HIT",d.MonsterHp=d.MonsterHp-10,d.MonsterHp<=0&&(d.MonsterHp="Dead")):M="MISS",this.forceUpdate()}},{key:"Monsterattack",value:function(){Math.floor(20*Math.random()+1)>=u.HeroAc+d.MonsterHitAdj?(h="HIT",u.HeroHp=u.HeroHp-10,u.HeroHp<=0&&(u.HeroHp="Dead")):h="MISS",this.forceUpdate()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"rollforiniative",value:function(){this.heroinitiative=Math.floor(10*Math.random()+1),this.monsterinitiative=Math.floor(10*Math.random()+1),this.heroinitiative<this.monsterinitiative?(this.heroinitiative="First",this.monsterinitiative="Second"):this.heroinitiative>this.monsterinitiative?(this.monsterinitiative="First",this.heroinitiative="Second"):(this.heroinitiative="ReRoll",this.monsterinitiative="ReRoll"),M=" ",h=" ",this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},u.HeroAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},u.HeroHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.heroattack},"Hero Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},M)),m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"StatRefresh DandD_button"},m.a.createElement("button",{onClick:this.refresh},"Refresh stats")),m.a.createElement("div",{className:"Initiative DandD_button"},m.a.createElement("button",{onClick:this.rollforiniative},"Roll for iniative")),m.a.createElement("div",{className:"Heroinitiative center Fsize-2"},m.a.createElement("p",null,"Hero ",m.a.createElement("br",null),"iniative:"),m.a.createElement("p",{className:"Fsize-3"},this.heroinitiative)),m.a.createElement("div",{className:"Monsterinitiative center Fsize-2"},m.a.createElement("p",null,"Monster initiative:"),m.a.createElement("p",{className:"Fsize-3"},this.monsterinitiative)),m.a.createElement("div",{className:"HeroHP-icon"},m.a.createElement("img",{src:"../static/images/herohp.png",alt:"icon"}),m.a.createElement("p",{className:"HeroHP-text Fsize-3 center"},u.HeroHp)),m.a.createElement("div",{className:"MonsterHP-icon"},m.a.createElement("img",{src:"../static/images/monsterhp.png",alt:"icon"}),m.a.createElement("p",{className:"MonsterHP-text Fsize-3 center"},d.MonsterHp))),m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},d.MonsterAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},d.MonsterHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.Monsterattack},"Monster Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},h)))}}]),t}(m.a.Component);t.default=v}},[["4G67","5d41","9da1"]]]);