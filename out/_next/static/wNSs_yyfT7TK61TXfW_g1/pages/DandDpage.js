(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"32ut":function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandDpage",function(){return s("AOlV")}])},"5pKv":function(t,e){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,e,s){t.exports=s("uekQ")},AOlV:function(t,e,s){"use strict";s.r(e);var i=s("0iUn"),a=s("sLSF"),o=s("MI3g"),n=s("a7VT"),r=s("AT/M"),h=s("Tit0"),m=s("q1tI"),l=s.n(m),c=s("CafY"),u=s("6BQ9"),b=s.n(u);function d(t){return 1==t?-3:2==t||3==t?-2:t>=4&&t<=6?-1:t>=7&&t<=14?0:15==t?1:16==t?2:17==t?3:18==t?4:19==t?5:20==t?6:void 0}function A(t){return 1==t||2==t?-5:3==t?-4:4==t?-3:5==t?-2:6==t?-1:t>=7&&t<=14?0:15==t?1:16==t?2:17==t?3:18==t||19==t?4:20==t?5:void 0}function S(t){return 1==t?-4:2==t||3==t?-3:4==t||5==t?-2:6==t||7==t?-1:t>=8&&t<=16?0:17==t?1:18==t?2:19==t?3:20==t?4:void 0}function H(){for(var t in this.state.herostats)this.state.herostats[t]=Math.floor(20*Math.random()+1);this.setState({heroHp:this.state.base.Hp+this.SetConstAdj(this.state.herostats.Const),heroAc:this.state.base.ArmorClass+this.SetAcAdj(this.state.herostats.Dext),heroDmg:this.state.base.Damage+this.SetDmgHitAdj(this.state.herostats.Str),heroHitAdj:this.SetDmgHitAdj(this.state.herostats.Str)})}function p(){for(var t in this.state.monsterstats)this.state.monsterstats[t]=Math.floor(20*Math.random()+1);this.setState({monsterHp:this.state.base.Hp+this.SetConstAdj(this.state.monsterstats.Const),monsterAc:this.state.base.ArmorClass+this.SetAcAdj(this.state.monsterstats.Dext),monsterDmg:this.state.base.Damage+this.SetDmgHitAdj(this.state.monsterstats.Str),monsterHitAdj:this.SetDmgHitAdj(this.state.monsterstats.Str)})}function k(){var t=Math.floor(10*Math.random()+1),e=Math.floor(10*Math.random()+1);t<e?this.setState({heroInitiative:"First",monsterInitiative:"Second",heroAttackVisible:!0,initiativeButtonVisible:!1}):t>e?this.setState({monsterInitiative:"First",heroInitiative:"Second",monsterAttackVisible:!0,initiativeButtonVisible:!1}):this.setState({heroInitiative:"ReRoll",monsterInitiative:"ReRoll",heroAttackVisible:!1,monsterAttackVisible:!1}),this.setState({heroDidHit:"",monsterDidHit:"",heroRoll:0,monsterRoll:0})}function f(){if(!0===this.state.heroAttackVisible){var t=b()(20*Math.random()+1),e=t+this.state.heroHitAdj,s=2*this.state.heroDmg;t<20&&e>=this.state.monsterAc?(this.setState({heroDidHit:"Hit",heroRoll:e}),this.state.monsterHp-this.state.heroDmg<=0?this.setState({monsterHp:"Dead",heroRoll:e}):this.setState({monsterHp:this.state.monsterHp-this.state.heroDmg})):20===t?(this.setState({heroDidHit:"Hit",heroRoll:"Crit Strike"}),this.state.monsterHp-s<=0?this.setState({monsterHp:"Dead",heroRoll:"Crit Strike"}):this.setState({monsterHp:this.state.monsterHp-s})):this.setState({heroDidHit:"Miss",heroRoll:e})}if(!0===this.state.monsterAttackVisible){var i=b()(20*Math.random()+1),a=i+this.state.monsterHitAdj,o=2*this.state.monsterDmg;i<20&&a>=this.state.heroAc?(this.setState({monsterDidHit:"Hit",monsterRoll:a}),this.state.heroHp-this.state.monsterDmg<=0?this.setState({heroHp:"Dead",monsterRoll:a}):this.setState({heroHp:this.state.heroHp-this.state.monsterDmg})):20===i?(this.setState({monsterDidHit:"Hit",monsterRoll:"Crit Strike"}),this.state.heroHp-o<=0?this.setState({heroHp:"Dead",monsterRoll:"Crit Strike"}):this.setState({heroHp:this.state.heroHp-o})):this.setState({monsterDidHit:"Miss",monsterRoll:a})}this.AttackTurn()}function v(){!0===this.state.heroAttackVisible&&("Dead"===this.state.monsterHp||"Second"===this.state.heroInitiative?(this.setState((function(t){return{heroAttackVisible:!t.heroAttackVisible}})),this.setState({initiativeButtonVisible:!0})):this.setState((function(t){return{monsterAttackVisible:!t.monsterAttackVisible,heroAttackVisible:!t.heroAttackVisible}}))),!0===this.state.monsterAttackVisible&&("Dead"===this.state.heroHp||"Second"===this.state.monsterInitiative?(this.setState((function(t){return{monsterAttackVisible:!t.monsterAttackVisible}})),this.setState({initiativeButtonVisible:!0})):this.setState((function(t){return{monsterAttackVisible:!t.monsterAttackVisible,heroAttackVisible:!t.heroAttackVisible}})))}var N=s("Hk3D"),g=s("sOKU"),D=s("ok1R"),R=s("rhny"),j=l.a.createElement,C=function(t){function e(t){var s;return Object(i.a)(this,e),(s=Object(o.a)(this,Object(n.a)(e).call(this,t))).state={base:{Hp:50,ArmorClass:10,Damage:10},herostats:{Str:0,Const:0,Dext:0},monsterstats:{Str:0,Const:0,Dext:0},heroHp:0,heroAc:0,heroDmg:0,heroHitAdj:0,heroNametext:"",heroName:"Hero",heroInitiative:0,heroAttackVisible:!1,heroRoll:0,heroDidHit:"",monsterHp:0,monsterAc:0,monsterDmg:0,monsterHitAdj:0,monsterNametext:"",monsterName:"Monster",monsterInitiative:0,monsterAttackVisible:!1,monsterRoll:0,monsterDidHit:"",initiativeButtonVisible:!0},s.setherostats=H.bind(Object(r.a)(s)),s.heroNameChange=s.heroNameChange.bind(Object(r.a)(s)),s.heroNameSubmit=s.heroNameSubmit.bind(Object(r.a)(s)),s.setmonsterstats=p.bind(Object(r.a)(s)),s.monsterNameChange=s.monsterNameChange.bind(Object(r.a)(s)),s.monsterNameSubmit=s.monsterNameSubmit.bind(Object(r.a)(s)),s.SetConstAdj=d.bind(Object(r.a)(s)),s.SetAcAdj=A.bind(Object(r.a)(s)),s.SetDmgHitAdj=S.bind(Object(r.a)(s)),s.RollforIniative=k.bind(Object(r.a)(s)),s.AttackRoll=f.bind(Object(r.a)(s)),s.AttackTurn=v.bind(Object(r.a)(s)),s}return Object(h.a)(e,t),Object(a.a)(e,[{key:"heroNameChange",value:function(t){this.setState({heroNametext:t.target.value})}},{key:"heroNameSubmit",value:function(t){this.setState({heroName:this.state.heroNametext})}},{key:"monsterNameChange",value:function(t){this.setState({monsterNametext:t.target.value})}},{key:"monsterNameSubmit",value:function(t){this.setState({monsterName:this.state.monsterNametext})}},{key:"IntButton",value:function(){return!0===this.state.initiativeButtonVisible?j(g.a,{className:"m-5 w-50",onClick:this.RollforIniative},"Roll for iniative"):j("h4",{className:"text-white m-5 text-center"},"Round in Progress")}},{key:"render",value:function(){return j("div",null,j(N.d,{className:"m-0 p-0"},j(D.a,{className:"w-100"},j(R.a,{className:"m-1 bg-dark text-white"},j("h5",{className:"mt-5 ml-5"},j("b",null,"Hero Name: "),j("span",{className:"text-info ml-5 h3"},this.state.heroName)),j(N.e,{Strength:this.state.herostats.Str,Constitution:this.state.herostats.Const,Dexterity:this.state.herostats.Dext,Hitpoints:this.state.heroHp,Damage:this.state.heroDmg,ImgUrl:"../static/images/hero.png"}),j("div",{className:"text-center m-3"},j(g.a,{onClick:this.setherostats},"Set Attrubutes")),j(N.l,{Value:this.state.value,NameChange:this.heroNameChange,NameSubmit:this.heroNameSubmit})),j(R.a,{className:"m-1 bg-dark text-white"},j("h5",{className:"mt-5 ml-5"},j("b",null,"Monster Name: "),j("span",{className:"text-info ml-5 h3"},this.state.monsterName)),j(N.e,{Strength:this.state.monsterstats.Str,Constitution:this.state.monsterstats.Const,Dexterity:this.state.monsterstats.Dext,Hitpoints:this.state.monsterHp,Damage:this.state.monsterDmg,ImgUrl:"../static/images/monster.png"}),j("div",{className:"text-center m-3"},j(g.a,{onClick:this.setmonsterstats},"Set Attrubutes")),j(N.l,{Value:this.state.value,NameChange:this.monsterNameChange,NameSubmit:this.monsterNameSubmit})))),j(N.d,{className:"m-0 p-0"},j("div",{className:"bg-dark m-1 p-0 mb-2 col"},j(N.b,{AC:this.state.heroAc,HitAdj:this.state.heroHitAdj,AttackRoll:this.AttackRoll,RollTitle:"Hero Roll for Attack",Roll:this.state.heroRoll,DidHit:this.state.heroDidHit,NextTurn:this.AttackTurn,AttackTurn:this.state.heroAttackVisible})),j("div",{className:"bg-dark m-1 mb-2 p-0 col text-center text-white"},this.IntButton(),j(D.a,null,j(R.a,{className:"w-50"},j(N.c,{Name:this.state.heroName,Initiative:this.state.heroInitiative,HP:this.state.heroHp})),j(R.a,null,j(N.c,{Name:this.state.monsterName,Initiative:this.state.monsterInitiative,HP:this.state.monsterHp})))),j("div",{className:"bg-dark m-1 p-0 mb-2 col"},j(N.b,{AC:this.state.monsterAc,HitAdj:this.state.monsterHitAdj,AttackRoll:this.AttackRoll,RollTitle:"Monster Roll for Attack",Roll:this.state.monsterRoll,DidHit:this.state.monsterDidHit,NextTurn:this.AttackTurn,AttackTurn:this.state.monsterAttackVisible}))))}}]),e}(l.a.Component);e.default=function(){return j(c.a,null,j("div",{className:"ml-5"},j("h1",null,"Dungeons and Dragons attack simulation"),j("h4",null,"Calculations are based on SE 2 rules from late 80's and early 90's."),j("ol",null,j("b",null,"Instructions:"),j("li",null,'Press the "Set Attributes" buttons for both Hero and Monster.'),j("li",null,'Press the "Roll for Initiative" button to see who attacks first.'),j("li",null,'Follow the instructions and press the "Roll for Attack" buttons.'),j("li",null,"After each round, repeat by rolling for Initiative and continue attacking until a character dies."))),j(C,null))}},XWtR:function(t,e,s){var i=s("5T2Y").parseInt,a=s("oc46").trim,o=s("5pKv"),n=/^[-+]?0[xX]/;t.exports=8!==i(o+"08")||22!==i(o+"0x16")?function(t,e){var s=a(String(t),3);return i(s,e>>>0||(n.test(s)?16:10))}:i},dEVD:function(t,e,s){var i=s("Y7ZC"),a=s("XWtR");i(i.G+i.F*(parseInt!=a),{parseInt:a})},oc46:function(t,e,s){var i=s("Y7ZC"),a=s("Jes0"),o=s("KUxP"),n=s("5pKv"),r="["+n+"]",h=RegExp("^"+r+r+"*"),m=RegExp(r+r+"*$"),l=function(t,e,s){var a={},r=o((function(){return!!n[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),h=a[t]=r?e(c):n[t];s&&(a[s]=h),i(i.P+i.F*r,"String",a)},c=l.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=l},uekQ:function(t,e,s){s("dEVD"),t.exports=s("WEpk").parseInt}},[["32ut",1,0]]]);