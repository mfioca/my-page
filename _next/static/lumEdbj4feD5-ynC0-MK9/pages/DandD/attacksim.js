(window.webpackJsonp=window.webpackJsonp||[]).push([["518b"],{jvuh:function(e,t,a){"use strict";a.r(t),a.d(t,"MonsteradjStats",function(){return d}),a.d(t,"HeroadjStats",function(){return h});var i=a("0iUn"),n=a("sLSF"),r=a("MI3g"),c=a("a7VT"),s=a("AT/M"),o=a("Tit0"),l=a("q1tI"),m=a.n(l),d={MonsterHp:0,MonsterAc:0,MonsterDmg:0,MonsterHitAdj:0},h={HeroHp:0,HeroAc:0,HeroDmg:0,HeroHitAdj:0},v=" ",u=" ";var E=function(e){function t(e){var a;return Object(i.default)(this,t),(a=Object(r.default)(this,Object(c.default)(t).call(this,e))).heroinitiative=0,a.monsterinitiative=0,a.heroattack=a.heroattack.bind(Object(s.a)(a)),a.Monsterattack=a.Monsterattack.bind(Object(s.a)(a)),a.refresh=a.refresh.bind(Object(s.a)(a)),a.rollforiniative=a.rollforiniative.bind(Object(s.a)(a)),a}return Object(o.default)(t,e),Object(n.default)(t,[{key:"heroattack",value:function(){Math.floor(20*Math.random()+1)>=d.MonsterAc+h.HeroHitAdj?(v="HIT",d.MonsterHp=d.MonsterHp-10,d.MonsterHp<=0&&(d.MonsterHp="Dead")):v="MISS",this.forceUpdate()}},{key:"Monsterattack",value:function(){Math.floor(20*Math.random()+1)>=h.HeroAc+d.MonsterHitAdj?(u="HIT",h.HeroHp=h.HeroHp-10,h.HeroHp<=0&&(h.HeroHp="Dead")):u="MISS",this.forceUpdate()}},{key:"refresh",value:function(){this.forceUpdate()}},{key:"rollforiniative",value:function(){this.heroinitiative=Math.floor(10*Math.random()+1),this.monsterinitiative=Math.floor(10*Math.random()+1),this.heroinitiative<this.monsterinitiative?(this.heroinitiative="First",this.monsterinitiative="Second"):this.heroinitiative>this.monsterinitiative?(this.monsterinitiative="First",this.heroinitiative="Second"):(this.heroinitiative="ReRoll",this.monsterinitiative="ReRoll"),v=" ",u=" ",this.forceUpdate()}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"DandD_attack"},m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},h.HeroAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},h.HeroHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.heroattack},"Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},v))),m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",null,m.a.createElement("div",{className:"StatRefresh DandD_button"},m.a.createElement("button",{onClick:this.refresh},"Refresh stats")),m.a.createElement("div",{className:"Initiative DandD_button"},m.a.createElement("button",{onClick:this.rollforiniative},"Roll for iniative")),m.a.createElement("div",{className:"Heroinitiative center Fsize-2"},m.a.createElement("p",null,"Hero ",m.a.createElement("br",null),"iniative:"),m.a.createElement("p",{className:"Fsize-3"},this.heroinitiative)),m.a.createElement("div",{className:"Monsterinitiative center Fsize-2"},m.a.createElement("p",null,"Monster initiative:"),m.a.createElement("p",{className:"Fsize-3"},this.monsterinitiative))),m.a.createElement("div",{className:"HeroHP-icon"},m.a.createElement("img",{src:"../static/images/herohp.png",alt:"icon"}),m.a.createElement("p",{className:"HeroHP-text Fsize-3 center"},h.HeroHp)),m.a.createElement("div",{className:"MonsterHP-icon"},m.a.createElement("img",{src:"../static/images/monsterhp.png",alt:"icon"}),m.a.createElement("p",{className:"MonsterHP-text Fsize-3 center"},d.MonsterHp)))),m.a.createElement("div",{className:"Attack-container"},m.a.createElement("div",{className:"Attack-section"},m.a.createElement("div",{className:"AC-Icon"},m.a.createElement("img",{src:"../static/images/acicon.png",alt:"shield"}),m.a.createElement("p",{className:"AC-Icon-text Fsize-3"},d.MonsterAc)),m.a.createElement("div",{className:"HitAdj-Icon"},m.a.createElement("img",{src:"../static/images/hitadjust.png",alt:"icon"}),m.a.createElement("p",{className:"HitAdj-Icon-text Fsize-3"},d.MonsterHitAdj)),m.a.createElement("div",{className:"Attack-roll"},m.a.createElement("button",{onClick:this.Monsterattack},"Roll for Attack")),m.a.createElement("div",{className:"Attack-result Fsize-3 center"},u)))))}}]),t}(m.a.Component);t.default=E},nDws:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD/attacksim",function(){var e=a("jvuh");return{page:e.default||e}}])}},[["nDws","5d41","9da1"]]]);