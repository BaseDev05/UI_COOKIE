"use strict";(self.webpackChunkcubdefi_frontend=self.webpackChunkcubdefi_frontend||[]).push([[271],{23282:function(n,e,t){var r=t(1413),o=(t(47313),t(90240)),i=t(11828),s=t(1760),a=t(46417);e.Z=function(n){var e=(0,s.Z)(),t=(0,i.Z)(),c=t.login,u=t.logout,l=(0,o.hB)(c,u).onPresentConnectModal;return(0,a.jsx)(o.zx,(0,r.Z)((0,r.Z)({onClick:l},n),{},{children:e(292,"Unlock Wallet")}))}},89680:function(n,e,t){t.d(e,{D8:function(){return h},yA:function(){return f}});var r=t(74165),o=t(15861),i=t(47313),s=t(82229),a=t(12304),c=t(20438),u=t(63199),l=t(66285),d=t(33866),f=function(n,e,t){var a=(0,c.T)(),f=(0,s.Ge)().account,h=(0,d.y8)(),p=(0,d._l)(),x=(0,d.ZX)();return{onApprove:(0,i.useCallback)((0,o.Z)((0,r.Z)().mark((function o(){var i,s;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i=h,e?i=p:t&&(i=x),r.next=5,(0,l.dE)(n,i,f);case 5:return s=r.sent,a((0,u.IV)(f)),r.abrupt("return",s);case 10:return r.prev=10,r.t0=r.catch(0),r.abrupt("return",!1);case 13:case"end":return r.stop()}}),o,null,[[0,10]])}))),[f,a,n,h,p,x,t,e])}},h=function(n,e){var t=(0,s.Ge)().account;return(0,i.useCallback)((0,o.Z)((0,r.Z)().mark((function o(){var i;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.methods.approve(e,a.Bz).send({from:t});case 2:return i=r.sent,r.abrupt("return",i);case 4:case"end":return r.stop()}}),o)}))),[t,e,n])}},33866:function(n,e,t){t.d(e,{AH:function(){return d},Ny:function(){return s},X_:function(){return a},ZX:function(){return u},_l:function(){return l},y8:function(){return c}});var r=t(47313),o=t(27163),i=t(48574),s=function(n){var e=(0,o.Z)();return(0,r.useMemo)((function(){return(0,i.I9)(n,e)}),[n,e])},a=function(n){var e=(0,o.Z)();return(0,r.useMemo)((function(){return(0,i.jS)(n,e)}),[n,e])},c=function(){var n=(0,o.Z)();return(0,r.useMemo)((function(){return(0,i.aE)(n)}),[n])},u=function(){var n=(0,o.Z)();return(0,r.useMemo)((function(){return(0,i.PN)(n)}),[n])},l=function(){var n=(0,o.Z)();return(0,r.useMemo)((function(){return(0,i.R)(n)}),[n])},d=function(){var n=(0,o.Z)();return(0,r.useMemo)((function(){return(0,i.V9)(n)}),[n])}},1760:function(n,e,t){var r=t(47313),o=t(16031),i=t(81470);e.Z=function(){var n=(0,r.useContext)(i.y).translations;return function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0===n.length)return t;var i=n.find((function(n){return n.data.stringId===e}));if(i){var s=i.data.text,a=s.includes("%");if(a){var c=s;return(0,o.isEmpty)(r)?t:(Object.keys(r).forEach((function(n){var e=new RegExp("%".concat(n,"%"),"g");c=c.replace(e,r[n])})),c)}return s}return t}}},74451:function(n,e,t){t.d(e,{ZP:function(){return m},rQ:function(){return x},A5:function(){return p}});var r=t(74165),o=t(15861),i=t(70885),s=t(47313),a=t(58704),c=t.n(a),u=t(82229),l=t(48574),d=t(38301),f=t(27163),h=t(1689),p=function(){var n=(0,h.Z)().slowRefresh,e=(0,s.useState)(),t=(0,i.Z)(e,2),a=t[0],u=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,l.XT)(),n.next=3,e.methods.totalSupply().call();case 3:t=n.sent,u(new(c())(t));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[n]),a},x=function(n){var e=(0,s.useState)(d.H),t=(0,i.Z)(e,2),a=t[0],u=t[1],p=(0,h.Z)().slowRefresh,x=(0,f.Z)();return(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,x),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:o=e.sent,u(new(c())(o));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[x,n,p]),a},m=function(n){var e=(0,s.useState)(d.H),t=(0,i.Z)(e,2),a=t[0],p=t[1],x=(0,u.Ge)().account,m=(0,f.Z)(),v=(0,h.Z)().fastRefresh;return(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.jS)(n,m),e.next=3,t.methods.balanceOf(x).call();case 3:o=e.sent,p(new(c())(o));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();x&&e()}),[x,n,m,v]),a}},27163:function(n,e,t){var r=t(70885),o=t(47313),i=t(11107),s=t.n(i),a=t(82229),c=t(7964);e.Z=function(){var n=(0,a.Ge)().library,e=(0,o.useRef)(n),t=(0,o.useState)(n?new(s())(n):(0,c.l)()),i=(0,r.Z)(t,2),u=i[0],l=i[1];return(0,o.useEffect)((function(){n!==e.current&&(l(n?new(s())(n):(0,c.l)()),e.current=n)}),[n]),u}},66285:function(n,e,t){t.d(e,{Ge:function(){return x},HV:function(){return f},I4:function(){return p},LK:function(){return l},QS:function(){return v},YR:function(){return d},dE:function(){return u},gL:function(){return m},uG:function(){return h}});var r=t(74165),o=t(15861),i=t(58704),s=t.n(i),a=t(18941),c=t(12304),u=(t(38301),function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.approve(t.options.address,c.Bz).send({from:o}));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o,i){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.deposit(t,new(s())(o).times(a.o3).toString()).send({from:i}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,o){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){var i,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.length>3&&void 0!==c[3]?c[3]:0,n.abrupt("return",e.methods.deposit(new(s())(t).times(a.o3).toString(),i).send({from:o}).on("transactionHash",(function(n){return n.transactionHash})));case 2:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),f=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o,i){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdraw(t,new(s())(o).times(a.o3).toString()).send({from:i}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,o){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdraw(t).send({from:o}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.withdrawAll().send({from:t}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.unlock(t).send({from:t}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o,i){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i){n.next=2;break}return n.abrupt("return",e.methods.withdraw(t,"0").send({from:o}).on("transactionHash",(function(n){return n.transactionHash})));case 2:return n.abrupt("return",e.methods.deposit(t,"0").send({from:o}).on("transactionHash",(function(n){return n.transactionHash})));case 3:case"end":return n.stop()}}),n)})));return function(e,t,r,o){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e,t,o,i,s,a){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.methods.claim(o,i,s,a).send({from:t}).on("transactionHash",(function(n){return n.transactionHash})));case 1:case"end":return n.stop()}}),n)})));return function(e,t,r,o,i,s){return n.apply(this,arguments)}}()},50324:function(n,e){var t=3600,r=86400,o=2629800,i=31557600;e.Z=function(n){var e=Math.abs(n),s={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return e>=i&&(s.years=Math.floor(e/i),e-=s.years*i),e>=o&&(s.months=Math.floor(e/o),e-=s.months*o),e>=r&&(s.days=Math.floor(e/r),e-=s.days*r),e>=t&&(s.hours=Math.floor(e/t),e-=s.hours*t),e>=60&&(s.minutes=Math.floor(e/60),e-=60*s.minutes),s.seconds=e,s}},2271:function(n,e,t){t.r(e),t.d(e,{default:function(){return ee}});var r,o,i,s,a,c,u,l,d,f,h,p,x,m,v,g,Z,j,b,w,y,k,S,C,A,D,P,B,I=t(47313),U=t(63830),z=t(54808),E=t(30168),H=t(49184),O=t(28303),L=t(90240),N=t(46417),M=H.ZP.div(r||(r=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),R=function(){var n=(0,U.$B)(),e=n.url,t=n.isExact;return(0,N.jsx)(M,{children:(0,N.jsxs)(L.xz,{activeIndex:t?0:1,scale:"sm",variant:"subtle",children:[(0,N.jsx)(L.kg,{as:O.rU,to:"".concat(e),children:"Next IDO"}),(0,N.jsx)(L.kg,{as:O.rU,to:"".concat(e,"/history"),children:"Past IDOs"})]})})},T=t(1760),F=(0,H.ZP)(L.X6).attrs({as:"h1",size:"xl"})(o||(o=(0,E.Z)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(n){return n.theme.colors.secondary})),G=H.ZP.div(i||(i=(0,E.Z)(["\n  background-image: linear-gradient(139.73deg, #E6FDFF 0%, #eff8ff 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))),X=H.ZP.div(s||(s=(0,E.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n"]))),_=function(){var n=(0,T.Z)();return(0,N.jsx)(G,{children:(0,N.jsxs)(z.Z,{children:[(0,N.jsx)(F,{children:n(500,"IDO: Initial DEX Offerings")}),(0,N.jsx)(L.X6,{as:"h2",color:"secondary",children:n(502,"Participate in new platform tokens via decentralized IDOs! 50% of the raise burns CUB and 50% goes to the project team who initiated the IDO.")}),(0,N.jsx)("br",{}),(0,N.jsx)(X,{children:(0,N.jsx)(L.zx,{size:"sm",children:(0,N.jsx)("a",{href:"https://docs.cubdefi.com/major-feature-releases/initial-dex-offering-ido",children:"Learn More"})})})]})})},W=t(72731),J=t(74165),Q=t(15861),V=t(70885),Y=t(82229),K=t(58704),$=t.n(K),q=t(18941),nn=t(20717),en=function(){return(0,I.useContext)(nn.J)},tn=t(33866),rn=t(23282),on=(0,H.ZP)(L.kC)(a||(a=(0,E.Z)(["\n  & > div {\n    flex: 1;\n  }\n"]))),sn=(0,H.ZP)(L.X6).attrs({as:"h3",size:"lg"})(c||(c=(0,E.Z)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))),an=(0,H.ZP)(L.xv)(u||(u=(0,E.Z)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(n){return n.theme.colors.textSubtle})),cn=function(n){var e=n.ifoId,t=n.name,r=n.subTitle;return(0,N.jsxs)(on,{mb:"24px",alignItems:"center",children:[(0,N.jsx)("img",{src:"/images/ifos/".concat(e,".svg"),alt:e,width:"64px",height:"64px"}),(0,N.jsxs)("div",{children:[(0,N.jsx)(sn,{children:t}),(0,N.jsx)(an,{children:r})]})]})},un=H.ZP.div(l||(l=(0,E.Z)(["\n  margin-bottom: 16px;\n"]))),ln=function(n){var e=n.progress;return(0,N.jsx)(un,{children:(0,N.jsx)(L.Ex,{primaryStep:e})})},dn=H.ZP.div(d||(d=(0,E.Z)(["\n  margin-top: 24px;\n  margin-bottom: 24px;\n"]))),fn=H.ZP.div(f||(f=(0,E.Z)(["\n  background-color: ",";\n  height: 1px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 90%;\n"])),(function(n){return n.theme.colors.borderColor})),hn=H.ZP.button(h||(h=(0,E.Z)(["\n  background: transparent;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  display: block;\n  font-weight: 600;\n  outline: 0;\n  padding: 24px 16px;\n  width: 100%;\n"])),(function(n){return n.theme.colors.primary})),pn=(0,H.ZP)(L.xv)(p||(p=(0,E.Z)(["\n  color: ",";\n  display: ",";\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.isOpen?"block":"none"})),xn=function(n){var e=n.defaultIsOpen,t=void 0===e||e,r=n.description,o=(0,I.useState)(t),i=(0,V.Z)(o,2),s=i[0],a=i[1],c=(0,T.Z)();return(0,N.jsxs)(dn,{children:[(0,N.jsx)(fn,{}),(0,N.jsx)(hn,{onClick:function(){return a(!s)},children:c(999,s?"Hide":"Show")}),(0,N.jsx)(pn,{isOpen:s,children:r})]})},mn=H.ZP.div(x||(x=(0,E.Z)(["\n  margin-bottom: 24px;\n"]))),vn=H.ZP.div(m||(m=(0,E.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"])),(function(n){return n.theme.colors.secondary})),gn=(0,H.ZP)(L.xv)(v||(v=(0,E.Z)(["\n  flex: 1;\n"]))),Zn=function(n){var e=n.launchDate,t=n.launchTime,r=n.saleAmount,o=n.raiseAmount,i=n.cakeToBurn,s=n.projectSiteUrl,a=n.raisingAmount,c=n.totalAmount,u=(0,T.Z)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(mn,{children:[(0,N.jsxs)(vn,{children:[(0,N.jsx)(gn,{children:u(582,"Launch Time")}),(0,N.jsxs)(L.xv,{children:[e,",",(0,N.jsx)(L.rU,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:t})]})]}),(0,N.jsxs)(vn,{children:[(0,N.jsx)(gn,{children:u(584,"For Sale")}),(0,N.jsx)(L.xv,{children:r})]}),(0,N.jsxs)(vn,{children:[(0,N.jsx)(gn,{children:u(999,"To raise (USD)")}),(0,N.jsx)(L.xv,{children:o})]}),(0,N.jsxs)(vn,{children:[(0,N.jsx)(gn,{children:u(586,"CUB to burn (USD)")}),(0,N.jsx)(L.xv,{children:i})]}),(0,N.jsxs)(vn,{children:[(0,N.jsx)(gn,{children:u(999,"Total raised (% of target)")}),(0,N.jsx)(L.xv,{children:"".concat(c.div(a).times(100).toFixed(2),"%")})]})]}),(0,N.jsx)(L.NR,{href:s,style:{margin:"auto"},children:u(412,"View project site")})]})},jn=t(50324),bn=H.ZP.div(g||(g=(0,E.Z)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),wn=H.ZP.div(Z||(Z=(0,E.Z)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(n){return n.theme.colors.secondary})),yn=function(n){var e=n.isLoading,t=n.status,r=n.secondsUntilStart,o=n.secondsUntilEnd,i=n.block,s=(0,T.Z)(),a="coming_soon"===t?r:o,c=(0,jn.Z)(a),u="coming_soon"===t?"start":"finish";return e?(0,N.jsx)(bn,{children:s(656,"Loading...")}):a<=0?(0,N.jsx)(bn,{children:(0,N.jsx)(L.xv,{bold:!0,children:s(999,"Finished!")})}):(0,N.jsxs)(bn,{children:[(0,N.jsx)(wn,{children:"".concat(c.days,"d, ").concat(c.hours,"h, ").concat(c.minutes,"m until ").concat(u)}),(0,N.jsx)(L.rU,{href:"https://bscscan.com/block/countdown/".concat(i),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},kn=t(38301),Sn=(t(1689),t(89680)),Cn=t(64446),An=H.ZP.div(j||(j=(0,E.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: solid 1px;\n  border-radius: ",";\n  border-color: ",";\n  padding-left: 16px;\n"])),(function(n){return n.theme.radii.default}),(function(n){return n.theme.colors.borderColor})),Dn=function(n){var e=n.value,t=n.label,r=n.buttonLabel,o=n.onClick,i=n.disabled,s=void 0!==i&&i;return(0,N.jsxs)("div",{children:[t&&(0,N.jsx)(L.xv,{fontSize:"14px",color:"textSubtle",children:t}),(0,N.jsxs)(An,{children:[(0,N.jsx)(L.xv,{bold:!0,fontSize:"20px",children:e}),(0,N.jsx)(L.zx,{onClick:o,disabled:s,children:r})]})]})},Pn=H.ZP.div(b||(b=(0,E.Z)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),Bn=H.ZP.input(w||(w=(0,E.Z)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(n){return n.theme.colors.primary})),In=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,o=n.startAdornment,i=n.value;return(0,N.jsxs)(Pn,{children:[!!o&&o,(0,N.jsx)(Bn,{placeholder:r,value:i,onChange:t}),!!e&&e]})},Un=H.ZP.div(y||(y=(0,E.Z)(["\n  width: ","px;\n"])),(function(n){return n.theme.spacing[3]})),zn=H.ZP.div(k||(k=(0,E.Z)(["\n  align-items: center;\n  display: flex;\n"]))),En=H.ZP.div(S||(S=(0,E.Z)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(n){return n.theme.colors.primary})),Hn=H.ZP.span(C||(C=(0,E.Z)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(n){return n.theme.colors.primary})),On=function(n){var e=n.max,t=n.symbol,r=n.onChange,o=n.onSelectMax,i=n.value,s=(0,T.Z)();return(0,N.jsxs)("div",{children:[(0,N.jsx)(In,{endAdornment:(0,N.jsxs)(zn,{children:[(0,N.jsx)(Hn,{children:t}),(0,N.jsx)(Un,{}),(0,N.jsx)("div",{children:(0,N.jsx)(L.zx,{size:"sm",onClick:o,children:s(452,"Max")})})]}),onChange:r,placeholder:"0",value:i}),(0,N.jsx)(En,{children:s(454,"".concat(e.toLocaleString()," ").concat(t," Available"))})]})},Ln=t(74451),Nn=function(n){var e=n.currency,t=n.contract,r=n.currencyAddress,o=n.onDismiss,i=(0,I.useState)(""),s=(0,V.Z)(i,2),a=s[0],c=s[1],u=(0,I.useState)(!1),l=(0,V.Z)(u,2),d=l[0],f=l[1],h=(0,Y.Ge)().account,p=(0,Cn.NJ)((0,Ln.ZP)(r));return(0,N.jsxs)(L.u_,{title:"Contribute ".concat(e),onDismiss:o,children:[(0,N.jsx)(On,{value:a,onChange:function(n){return c(n.currentTarget.value)},symbol:e,max:p,onSelectMax:function(){return c(p.toString())}}),(0,N.jsxs)(L.kC,{justifyContent:"space-between",mb:"24px",children:[(0,N.jsx)(L.zx,{variant:"secondary",onClick:o,mr:"8px",children:"Cancel"}),(0,N.jsx)(L.zx,{disabled:d,onClick:(0,Q.Z)((0,J.Z)().mark((function n(){return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.next=3,t.methods.deposit(new($())(a).times(new($())(10).pow(18)).toString()).send({from:h});case 3:f(!1),o();case 5:case"end":return n.stop()}}),n)}))),children:"Confirm"})]}),(0,N.jsx)(L.NR,{href:"https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x50D809c74e0B8e49e7B4c65BB3109AbE3Ff4C1C1",style:{margin:"auto"},children:"Get ".concat(e)})]})},Mn=function(n){var e=n.address,t=n.currency,r=n.currencyAddress,o=n.contract,i=n.status,s=n.raisingAmount,a=n.tokenDecimals,c=(0,I.useState)(!1),u=(0,V.Z)(c,2),l=u[0],d=u[1],f=(0,I.useState)(new($())(0)),h=(0,V.Z)(f,2),p=h[0],x=h[1],m=(0,I.useState)({amount:0,claimed:!1}),v=(0,V.Z)(m,2),g=v[0],Z=v[1],j=(0,Y.Ge)().account,b=(0,tn.X_)(r),w=function(n,e,t){var r=(0,Y.Ge)().account,o=(0,I.useState)(kn.H),i=(0,V.Z)(o,2),s=i[0],a=i[1];return(0,I.useEffect)((function(){var t=function(){var t=(0,Q.Z)((0,J.Z)().mark((function t(){var o;return(0,J.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.methods.allowance(r,e).call();case 3:o=t.sent,a(new($())(o)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();r&&t()}),[r,e,n,t]),s}(b,e,l),y=(0,Sn.D8)(b,e),k=(0,L.dd)((0,N.jsx)(Nn,{currency:t,contract:o,currencyAddress:r})),S=(0,V.Z)(k,1)[0];if((0,I.useEffect)((function(){var n=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(){var e,t;return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=$(),n.next=3,o.methods.getOfferingAmount(j).call();case 3:return n.t1=n.sent,e=new n.t0(n.t1),n.next=7,o.methods.userInfo(j).call();case 7:t=n.sent,Z(t),x(e);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();j&&n()}),[j,o.methods,l]),null===w)return null;var C=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(){return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,o.methods.harvest().send({from:j});case 3:d(!1);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),A="finished"===i,D=new($())(g.amount).div(s).times(100);return w.toNumber()<=0?(0,N.jsx)(L.zx,{disabled:l||A,onClick:(0,Q.Z)((0,J.Z)().mark((function n(){return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,y();case 4:d(!1),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),d(!1),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,7]])}))),children:"Approve"}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(Dn,{disabled:l||g.claimed,buttonLabel:A?"Claim":"Contribute",label:A?"Your tokens to claim":"Your contribution (".concat(t,")"),value:A?g.claimed?"Claimed":(0,Cn.mW)(p,a).toFixed(4):(0,Cn.mW)(new($())(g.amount)).toFixed(4),onClick:A?C:S}),(0,N.jsx)(L.xv,{fontSize:"14px",color:"textSubtle",children:A?"You'll be refunded any excess tokens when you claim":"".concat(D.toFixed(5),"% of total")})]})},Rn=(0,H.ZP)(L.Zb)(A||(A=(0,E.Z)(["\n  /* background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;*/\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])),(function(n){var e=n.ifoId;return"url('/images/ifos/".concat(e,"-bg.svg')")})),Tn=H.ZP.img(D||(D=(0,E.Z)(["\n  max-height: 112px;\n  width: 100%;\n"]))),Fn=function(n,e,t){return n<e?"coming_soon":n>=e&&n<=t?"live":n>t?"finished":null},Gn=function(n){var e=n.ifo,t=e.id,r=e.address,o=e.name,i=e.subTitle,s=e.description,a=e.launchDate,c=e.launchTime,u=e.saleAmount,l=e.raiseAmount,d=e.cakeToBurn,f=e.projectSiteUrl,h=e.currency,p=e.currencyAddress,x=e.tokenDecimals,m=e.releaseBlockNumber,v=(0,I.useState)({isLoading:!0,status:null,blocksRemaining:0,secondsUntilStart:0,progress:0,secondsUntilEnd:0,raisingAmount:new($())(0),totalAmount:new($())(0),startBlockNum:0,endBlockNum:0}),g=(0,V.Z)(v,2),Z=g[0],j=g[1],b=(0,Y.Ge)().account,w=(0,tn.Ny)(r),y=en(),k=(0,T.Z)(),S=function(n,e){return"coming_soon"===n?(0,N.jsx)(L.PJ,{variantColor:"textDisabled",text:e(999,"Coming Soon")}):"live"===n?(0,N.jsx)(L.PJ,{variantColor:"primary",text:e(999,"LIVE NOW!")}):null}(Z.status,k);(0,I.useEffect)((function(){var n=function(){var n=(0,Q.Z)((0,J.Z)().mark((function n(){var e,t,r,o,i,s,a,c,u,l,d,f;return(0,J.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([w.methods.startBlock().call(),w.methods.endBlock().call(),w.methods.raisingAmount().call(),w.methods.totalAmount().call()]);case 2:e=n.sent,t=(0,V.Z)(e,4),r=t[0],o=t[1],i=t[2],s=t[3],a=parseInt(r,10),c=parseInt(o,10),u=Fn(y,a,c),l=c-a,f=y>a?(y-a)/l*100:(y-m)/(a-m)*100,j({isLoading:!1,secondsUntilEnd:(d=c-y)*q.hJ,secondsUntilStart:(a-y)*q.hJ,raisingAmount:new($())(i),totalAmount:new($())(s),status:u,progress:f,blocksRemaining:d,startBlockNum:a,endBlockNum:c});case 15:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[y,w,m,j]);var C="live"===Z.status,A="finished"===Z.status;return(0,N.jsxs)(Rn,{ifoId:t,ribbon:S,isActive:C,children:[(0,N.jsx)(Tn,{ifoId:t,src:"/images/ifos/".concat(t,"-bg.svg")}),(0,N.jsxs)(L.eW,{children:[(0,N.jsx)(cn,{ifoId:t,name:o,subTitle:i}),(0,N.jsx)(ln,{progress:Z.progress}),(0,N.jsx)(yn,{isLoading:Z.isLoading,status:Z.status,secondsUntilStart:Z.secondsUntilStart,secondsUntilEnd:Z.secondsUntilEnd,block:C||A?Z.endBlockNum:Z.startBlockNum}),!b&&(0,N.jsx)(rn.Z,{fullWidth:!0}),(C||A)&&(0,N.jsx)(Mn,{address:r,currency:h,currencyAddress:p,contract:w,status:Z.status,raisingAmount:Z.raisingAmount,tokenDecimals:x}),(0,N.jsx)(xn,{description:s}),(0,N.jsx)(Zn,{launchDate:a,launchTime:c,saleAmount:u,raiseAmount:l,cakeToBurn:d,projectSiteUrl:f,raisingAmount:Z.raisingAmount,totalAmount:Z.totalAmount})]})]})},Xn=(0,H.ZP)(L.X6).attrs({size:"lg"})(P||(P=(0,E.Z)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(n){return n.theme.colors.secondary})),_n=H.ZP.div(B||(B=(0,E.Z)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.md}),(function(n){var e=n.isSingle;return"repeat(".concat(e?1:2,", 1fr)")}));_n.defaultProps={isSingle:!1};var Wn,Jn,Qn=_n,Vn=(0,H.ZP)(L.IE)(Wn||(Wn=(0,E.Z)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(n){return n.theme.colors.textSubtle}),(function(n){return n.theme.mediaQueries.sm})),Yn=H.ZP.ul(Jn||(Jn=(0,E.Z)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(n){return n.theme.colors.text})),Kn=W.Q2.find((function(n){return n.isActive})),$n=function(){var n=(0,T.Z)();return(0,N.jsxs)("div",{children:[(0,N.jsx)(Qn,{isSingle:!0,children:Kn?(0,N.jsx)(Gn,{ifo:Kn}):(0,N.jsx)(L.xv,{children:"No Active IDOs"})}),(0,N.jsxs)(Vn,{children:[(0,N.jsxs)("div",{children:[(0,N.jsx)(Xn,{as:"h2",children:n(592,"How to Participate in Decentralized IDOs on CubFinance")}),(0,N.jsxs)(L.X6,{mb:"16px",children:[n(594,"Before IDO"),":"]}),(0,N.jsxs)(Yn,{children:[(0,N.jsx)("li",{children:n(596,"Buy CUB and BUSD Tokens")}),(0,N.jsx)("li",{children:n(598,"Get CUB-BUSD LP tokens (PCSv2 Only) on PancakeSwap")})]}),(0,N.jsxs)(L.kC,{mb:"16px",children:[(0,N.jsx)(L.NR,{href:"https://exchange.cubdefi.com/",mr:"16px",children:n(999,"Buy CUB")}),(0,N.jsx)(L.NR,{href:"https://pancakeswap.finance/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x50D809c74e0B8e49e7B4c65BB3109AbE3Ff4C1C1",children:n(999,"Get LP tokens")})]}),(0,N.jsxs)(L.X6,{mb:"16px",children:[n(600,"During IDO"),":"]}),(0,N.jsx)(Yn,{children:(0,N.jsx)("li",{children:n(602,"While the IDO is live, commit your CUB-BUSD LP tokens to participate in the decentralized raise at the predetermined token price")})}),(0,N.jsxs)(L.X6,{mb:"16px",children:[n(604,"After IDO"),":"]}),(0,N.jsxs)(Yn,{children:[(0,N.jsx)("li",{children:n(606,'Click "Claim" to claim the IDO tokens you purchased along with any unspent CUB-BUSD LP.')}),(0,N.jsx)("li",{children:n(608,"Done!")})]}),(0,N.jsx)("img",{src:"images/cub/header_logo_wide.svg",alt:"cub"}),(0,N.jsx)(L.xv,{as:"div",pt:"16px",children:(0,N.jsx)(L.zx,{as:"a",variant:"secondary",href:"https://docs.cubdefi.com/major-feature-releases/initial-dex-offering-ido",children:n(610,"Read more")})})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)(L.Ee,{src:"/images/cub/wide.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),(0,N.jsxs)("div",{children:[(0,N.jsx)(Xn,{as:"h2",children:n(512,"Want to launch your own IDO?")}),(0,N.jsx)(L.xv,{mb:3,children:n(514,"Launch your project with CubDefi to bring your token directly to the most active and rapidly growing community on BSC.")}),(0,N.jsx)(L.zx,{as:"a",href:"https://forms.gle/qRRKAefPsh6D83Ys9",external:!0,children:n(516,"Apply to launch")})]})]})]})]})},qn=W.Q2.filter((function(n){return!n.isActive})),ne=function(){return(0,N.jsx)(Qn,{children:qn.map((function(n){return(0,N.jsx)(Gn,{ifo:n},n.id)}))})},ee=function(){var n=(0,U.$B)().path;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_,{}),(0,N.jsxs)(z.Z,{children:[(0,N.jsx)(R,{}),(0,N.jsx)(U.AW,{exact:!0,path:"".concat(n),children:(0,N.jsx)($n,{})}),(0,N.jsx)(U.AW,{path:"".concat(n,"/history"),children:(0,N.jsx)(ne,{})})]})]})}},12304:function(n,e,t){t.d(e,{Bz:function(){return r.Bz}});var r=t(6321)}}]);