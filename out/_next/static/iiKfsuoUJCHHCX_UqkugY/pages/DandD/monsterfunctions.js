(window.webpackJsonp=window.webpackJsonp||[]).push([["5739"],{"5pKv":function(t,s){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(t,s,e){t.exports=e("uekQ")},DrJK:function(t,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/DandD/monsterfunctions",function(){var t=e("W1xQ");return{page:t.default||t}}])},W1xQ:function(t,s,e){"use strict";e.r(s),e.d(s,"SetmonsterConstAdj",function(){return a}),e.d(s,"SetmonsterDmgAdj",function(){return i}),e.d(s,"SetmonsterHitAdj",function(){return m}),e.d(s,"SetmonsteracAdj",function(){return o}),e.d(s,"setmonsterstats",function(){return h}),e.d(s,"monsterattackroll",function(){return u});var r=e("6BQ9"),n=e.n(r);function a(){return 1==this.state.monsterstats.Const?-3:2==this.state.monsterstats.Const||3==this.state.monsterstats.Const?-2:this.state.monsterstats.Const>=4&&this.state.monsterstats.Const<=6?-1:this.state.monsterstats.Const>=7&&this.state.monsterstats.Const<=14?0:15==this.state.monsterstats.Const?1:16==this.state.monsterstats.Const?2:17==this.state.monsterstats.Const?3:18==this.state.monsterstats.Const?4:19==this.state.monsterstats.Const?5:20==this.state.monsterstats.Const?6:void 0}function o(){return 1==this.state.monsterstats.Dext||2==this.state.monsterstats.Dext?-5:3==this.state.monsterstats.Dext?-4:4==this.state.monsterstats.Dext?-3:5==this.state.monsterstats.Dext?-2:6==this.state.monsterstats.Dext?-1:this.state.monsterstats.Dext>=7&&this.state.monsterstats.Dext<=14?0:15==this.state.monsterstats.Dext?1:16==this.state.monsterstats.Dext?2:17==this.state.monsterstats.Dext?3:18==this.state.monsterstats.Dext||19==this.state.monsterstats.Dext?4:20==this.state.monsterstats.Dext?5:void 0}function i(){return 1==this.state.monsterstats.Str?-4:2==this.state.monsterstats.Str||3==this.state.monsterstats.Str?-3:4==this.state.monsterstats.Str||5==this.state.monsterstats.Str?-2:6==this.state.monsterstats.Str||7==this.state.monsterstats.Str?-1:this.state.monsterstats.Str>=8&&this.state.monsterstats.Str<=16?0:17==this.state.monsterstats.Str?1:18==this.state.monsterstats.Str?2:19==this.state.monsterstats.Str?3:20==this.state.monsterstats.Str?4:void 0}function m(){return 1==this.state.monsterstats.Str?-4:2==this.state.monsterstats.Str||3==this.state.monsterstats.Str?-3:4==this.state.monsterstats.Str||5==this.state.monsterstats.Str?-2:6==this.state.monsterstats.Str||7==this.state.monsterstats.Str?-1:this.state.monsterstats.Str>=8&&this.state.monsterstats.Str<=16?0:17==this.state.monsterstats.Str?1:18==this.state.monsterstats.Str?2:19==this.state.monsterstats.Str?3:20==this.state.monsterstats.Str?4:void 0}function h(){for(var t in this.state.monsterstats)this.state.monsterstats[t]=Math.floor(20*Math.random()+1);this.setState({monsterHp:this.state.monsterbase.Hp+this.SetmonsterConstAdj(),monsterAc:this.state.monsterbase.ArmorClass+this.SetmonsteracAdj(),monsterDmg:this.state.monsterbase.Damage+this.SetmonsterDmgAdj(),monsterHitAdj:this.state.monsterbase.HitAdj+this.SetmonsterHitAdj()})}function u(){var t=n()(20*Math.random()+1)+n()(this.state.heroHitAdj),s=2*this.state.monsterDmg;t<20&&t>=this.state.heroAc?(this.setState({monsterDidHit:"Hit",monsterRoll:t}),this.state.heroHp-this.state.monsterDmg<=0?this.setState({heroHp:"Dead",monsterRoll:t}):this.setState({heroHp:this.state.heroHp-this.state.monsterDmg})):t>=20?(this.setState({monsterDidHit:"Hit",monsterRoll:"Crit Strike"}),this.state.heroHp-s<=0?this.setState({heroHp:"Dead",monsterRoll:"Crit Strike"}):this.setState({heroHp:this.state.heroHp-s})):this.setState({monsterDidHit:"Miss",monsterRoll:t})}},XWtR:function(t,s,e){var r=e("5T2Y").parseInt,n=e("oc46").trim,a=e("5pKv"),o=/^[-+]?0[xX]/;t.exports=8!==r(a+"08")||22!==r(a+"0x16")?function(t,s){var e=n(String(t),3);return r(e,s>>>0||(o.test(e)?16:10))}:r},dEVD:function(t,s,e){var r=e("Y7ZC"),n=e("XWtR");r(r.G+r.F*(parseInt!=n),{parseInt:n})},oc46:function(t,s,e){var r=e("Y7ZC"),n=e("Jes0"),a=e("KUxP"),o=e("5pKv"),i="["+o+"]",m=RegExp("^"+i+i+"*"),h=RegExp(i+i+"*$"),u=function(t,s,e){var n={},i=a(function(){return!!o[t]()||"​"!="​"[t]()}),m=n[t]=i?s(S):o[t];e&&(n[e]=m),r(r.P+r.F*i,"String",n)},S=u.trim=function(t,s){return t=String(n(t)),1&s&&(t=t.replace(m,"")),2&s&&(t=t.replace(h,"")),t};t.exports=u},uekQ:function(t,s,e){e("dEVD"),t.exports=e("WEpk").parseInt}},[["DrJK","5d41","9da1"]]]);