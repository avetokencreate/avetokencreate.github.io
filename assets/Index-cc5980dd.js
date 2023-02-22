import{D as j}from"./Dialog-0c66b8d0.js";import{_ as q,d as z,f as J,b as K,g as p,B as Q,r as g,o as y,k as W,l as m,w as _,u as X,c as $,v as M,t as v,C as Y,a as l,D as B,E as w,G as E,n as r,H as O,I as Z}from"./index-27fe7498.js";import{E as D,M as ee}from"./ERC20ABI-8ebaa2cb.js";import{u as oe}from"./create-e6b28c06.js";import{_ as ae}from"./SvgIcon-07036f99.js";/* empty css                                                       */const te={class:"van-dialog__header"},se={class:"van-dialog__content"},ne={class:"van-dialog__message van-dialog__message--has-title"},re={style:{paddingTop:"20px"}},le={class:"create-success-title"},ce={class:"create-success-text"},ie={class:"create-success-text"},de={__name:"Index",setup(ue){const{t:s}=z(),P=J(),c=K(),o=oe(),b=p(!1),C=p(!1),k=p(!1),h=p(!1),F=p(!1),T=p(!1),S=p(""),A=p("");async function H(){h.value=!0;try{const a=await new B(window.ethereum).getSigner();let n=await new w(c.tokenFactoryAddress,E,a).baseFeeToken();console.log("baseFeeTokenAddress",n),(await(await new w(n,D,a).approve(c.tokenFactoryAddress,ee)).wait()).status===1&&(r({type:"success",message:s("upChainSuccessfully")}),k.value=!1)}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?r(s("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?r(s("userCancelOperate")):r(s("unkonwError"))}finally{h.value=!1}}async function V(){if(c.chainId==-1){c.netErrorDialogShow=!0;return}if(o.deployerId===0){if(!o.name){r(s("pleaseEnterName"));return}if(!o.symbol){r(s("pleaseEnterSymbol"));return}if(!o.totalSupply){r(s("pleaseEnterTotal"));return}}F.value=!0;const a=await new B(window.ethereum).getSigner(),i=new w(c.tokenFactoryAddress,E,a);let n=await i.baseFee();console.log("baseFee",n);let d=await i.baseFeeToken();console.log("baseFeeTokenAddress",d);const u=new w(d,D,a),f=await u.decimals();A.value=await u.symbol(),S.value=O(n,f);const t=await u.allowance(c.walletAddress,c.tokenFactoryAddress);console.log("allowance",t),t<n?k.value=!0:k.value=!1,b.value=!0,F.value=!1}async function L(){T.value=!0;try{const a=await new B(window.ethereum).getSigner(),i=new w(c.tokenFactoryAddress,E,a);let n=await i.baseFee();console.log("baseFee",n);let d=await i.baseFeeToken();console.log("baseFeeToken",d);const u=new w(d,D,a),f=await u.decimals();A.value=await u.symbol(),S.value=O(n,f);const t=[],N=[],x=[],U=[];o.deployerId==0&&(t[0]=o.name,t[1]=o.symbol,x[0]=o.decimals,x[1]=Z(o.totalSupply,o.decimals),U[0]=o.canMint);const I=await i.tokenCreate(o.deployerId,t,N,x,U);console.dir(I),o.txHash=I.hash,I.wait().then(async G=>{G.status===1&&r({type:"success",message:s("upChainSuccessfully")})}),C.value=!0}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?r(s("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?r(s("userCancelOperate")):r(s("unkonwError"))}finally{b.value=!1,T.value=!1}}function R(){window.open(c.txNetwork+o.txHash,"_blank")}return Q(()=>{console.log("create before mounted"),o.$reset()}),(e,a)=>{const i=g("van-button"),n=g("router-view"),d=g("van-action-bar-button"),u=g("van-action-bar"),f=g("van-popup");return y(),W("div",null,[m(n,null,{default:_(({Component:t,Router:N})=>[(y(),$(Y(t),null,{create:_(()=>[m(i,{type:"primary",round:"",block:"",class:"btn-done",onClick:V,loading:F.value},{default:_(()=>[M(v(e.$t("create")),1)]),_:1},8,["loading"])]),_:2},1024))]),_:1}),m(f,{show:b.value,"onUpdate:show":a[0]||(a[0]=t=>b.value=t),round:"",closeable:"",class:"van-dialog van-dialog--round-button","close-on-click-overlay":!1},{default:_(()=>[l("div",te,v(e.$t("tokenCreationSoon")),1),l("div",se,[l("div",ne,[l("div",null,v(e.$t("createConfirmInfo")),1),l("div",re,v(e.$t("serviceFeeCreation",{baseFeeAmount:S.value,baseFeeSymbol:A.value.toUpperCase()})),1)])]),m(u,{class:"van-dialog__footer"},{default:_(()=>[k.value?(y(),$(d,{key:0,type:"danger",text:e.$t("approveFirst"),class:"van-dialog__confirm",loading:h.value,onClick:H},null,8,["text","loading"])):(y(),$(d,{key:1,type:"danger",loading:T.value,color:"#3F80F7",text:e.$t("confirmAndCreate"),class:"van-dialog__confirm",onClick:L},null,8,["loading","text"]))]),_:1})]),_:1},8,["show"]),m(j,{show:C.value,"onUpdate:show":a[1]||(a[1]=t=>C.value=t),theme:"round-button",showCancelButton:!1,confirmButtonText:e.$t("enterTokenManagement"),onOnConfirm:a[2]||(a[2]=t=>X(P).push("/"))},{default:_(()=>[l("div",null,[m(ae,{name:"createSuccess",style:{width:"48px",height:"48px"}})]),l("div",le,v(e.$t("createdSubmitted")),1),l("div",ce,[M(v(e.$t("inBrowser")),1),l("span",{class:"show",onClick:R},v(e.$t("view")),1)]),l("div",ie,v(e.$t("waitToView")),1)]),_:1},8,["show","confirmButtonText"])])}}},ge=q(de,[["__scopeId","data-v-d801cfaf"]]);export{ge as default};
