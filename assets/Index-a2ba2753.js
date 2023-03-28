import{D as G}from"./Dialog-c03c6f46.js";import{d as X,f as j,b as q,g as w,B as z,r as S,o as B,k as J,l as g,w as L,u as Q,n,C as I,D as b,E,a as p,t as F,c as R,v as Y}from"./index-ad6f6d04.js";import{E as U,M as Z,S as P}from"./Swap-ad87e949.js";import{u as ee}from"./create-5fc31463.js";import{_ as ae}from"./SvgIcon-0d76a317.js";import{B as r}from"./bignumber-3e8dfdf6.js";import{f as D,p as f}from"./units-c131776f.js";/* empty css                                                       */const te={class:"van-dialog__header"},se={class:"van-dialog__content"},oe={class:"van-dialog__message van-dialog__message--has-title"},ne={style:{paddingTop:"20px"}},re={class:"create-success-title"},le={class:"create-success-text"},ie={class:"create-success-text"},Fe={__name:"Index",setup(ue){const{t:o}=X(),W=j(),d=q(),e=ee(),h=w(!1),_=w(!1),C=w(!1),x=w(!1),T=w(!1),N=w(!1),A=w(""),k=w("");async function H(){x.value=!0;try{const u=await new I(window.ethereum).getSigner();let i=await new b(d.tokenFactoryAddress,E,u).baseFeeToken();console.log("baseFeeTokenAddress",i),(await(await new b(i,U,u).approve(d.tokenFactoryAddress,Z)).wait()).status===1&&(n({type:"success",message:o("upChainSuccessfully")}),C.value=!1)}catch(t){console.log(t),t.info&&t.info.error&&t.info.error.code===4001?n(o("userCancelOperate")):t.error&&t.error.message&&t.error.message=="Canceled"?n(o("userCancelOperate")):n(o("unkonwError"))}finally{x.value=!1}}async function O(){console.log("createTokenClick");const t=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;if(d.chainId==-1){d.netErrorDialogShow=!0;return}if(e.deployerId===0||e.deployerId===1||e.deployerId===2){if(!e.name){n(o("pleaseEnterName"));return}if(!e.symbol){n(o("pleaseEnterSymbol"));return}if(!e.totalSupply){n(o("pleaseEnterTotal"));return}}if(e.deployerId===1||e.deployerId==2){if(!e.token){n(o("pleaseSelectCurrency"));return}if(!e.chainSwap){n(o("pleaseSelectSwap"));return}if(e.deployerId===1){if(r(e.buyFundFee).plus(e.buyBurnFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellBurnFee).plus(e.sellLPFee).lte(0)){n(o("taxMustGt0"));return}}else if(e.deployerId===2){if(r(e.buyFundFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellLPFee).lte(0)){n(o("taxlimit2"));return}}else if(e.deployerId===3){if(!e.rewardToken){n(o("dividendTokenError"));return}if(!t.test(e.rewardToken)){n(o("pleaseEnterTrueAddress"));return}if(r(e.buyFundFee).plus(e.buyLPFee).plus(e.buyRewardFee).plus(e.sellFundFee).plus(e.sellLPFee).plus(e.sellRewardFee).lte(0)){n(o("taxMustGt0"));return}}if((Number(e.buyFundFee)>0||Number(e.sellFundFee)>0)&&!e.fundAddress){n(o("pleaseEnterMarketingAddress"));return}if(e.fundAddress&&!t.test(e.fundAddress)){n(o("pleaseEnterTrueAddress"));return}if(e.enableKillBlock&&(!e.killBlock||Number(e.killBlock)<=0)){n(o("pleaseEnterKillBlockNumber"));return}if(e.enableWalletLimit&&(!e.maxWalletAmount||Number(e.maxWalletAmount)<=0)){n(o("pleaseEnterMaxWalletLimit"));return}if(e.enableSwapLimit&&(!e.maxSwapAmount||Number(e.maxSwapAmount)<=0)){n(o("pleaseEnterMaxSwapLimit"));return}}T.value=!0;const y=await new I(window.ethereum).getSigner(),i=new b(d.tokenFactoryAddress,E,y);let l=await i.baseFee();console.log("baseFee",l);let a=await i.baseFeeToken();console.log("baseFeeTokenAddress",a);const s=new b(a,U,y),v=await s.decimals();if(a.toLowerCase()==="0x9ebab27608bd64aff36f027049aecc69102a0d1e")k.value="USDT-lfgbridge";else{let m=await s.symbol();k.value=m.toUpperCase()}A.value=D(l,v);const c=await s.allowance(d.walletAddress,d.tokenFactoryAddress);console.log("allowance",c),c<l?C.value=!0:C.value=!1,h.value=!0,T.value=!1}async function K(){N.value=!0;try{const u=await new I(window.ethereum).getSigner(),y=new b(d.tokenFactoryAddress,E,u),i=[],l=[],a=[],s=[];if(e.deployerId==0)i[0]=e.name,i[1]=e.symbol,a[0]=e.decimals,a[1]=f(e.totalSupply,e.decimals),s[0]=e.canMint;else if(e.deployerId==1){i[0]=e.name,i[1]=e.symbol;let c=e.token.tokenAddress,m=!1;c==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(c=(await new b(e.chainSwap.routerAddress,P,u).WETH()).toLowerCase(),m=!0),l[0]=c,l[1]=e.chainSwap.routerAddress,l[2]=d.walletAddress,l[3]=e.fundAddress?e.fundAddress:"0x0000000000000000000000000000000000000000",a[0]=e.decimals,a[1]=f(e.totalSupply,e.decimals),a[2]=r(e.buyFundFee).times(100).toNumber(),a[3]=r(e.buyBurnFee).times(100).toNumber(),a[4]=r(e.buyLPFee).times(100).toNumber(),a[5]=r(e.sellFundFee).times(100).toNumber(),a[6]=r(e.sellBurnFee).times(100).toNumber(),a[7]=r(e.sellLPFee).times(100).toNumber(),a[8]=e.killBlock?r(e.killBlock).toNumber():0,a[9]=e.maxSwapAmount?f(e.maxSwapAmount,e.decimals):0n,a[10]=e.maxWalletAmount?f(e.maxWalletAmount,e.decimals):0n,s[0]=e.canMint,s[1]=m,s[2]=e.enableManualStartTrade,s[3]=e.enableKillBlock,s[4]=e.enableSwapLimit,s[5]=e.enableWalletLimit,s[6]=e.enableChangeTax,s[7]=e.enableWhiteList}else if(e.deployerId==2){i[0]=e.name,i[1]=e.symbol;let c=e.token.tokenAddress,m=!1;c==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(c=(await new b(e.chainSwap.routerAddress,P,u).WETH()).toLowerCase(),m=!0),l[0]=c,l[1]=e.chainSwap.routerAddress,l[2]=d.walletAddress,l[3]=e.fundAddress?e.fundAddress:"0x0000000000000000000000000000000000000000",a[0]=e.decimals,a[1]=f(e.totalSupply,e.decimals),a[2]=r(e.buyFundFee).times(100).toNumber(),a[3]=r(e.buyRewardFee).times(100).toNumber(),a[4]=r(e.buyLPFee).times(100).toNumber(),a[5]=r(e.sellFundFee).times(100).toNumber(),a[6]=r(e.sellRewardFee).times(100).toNumber(),a[7]=r(e.sellLPFee).times(100).toNumber(),a[8]=e.killBlock?r(e.killBlock).toNumber():0,a[9]=e.maxSwapAmount?f(e.maxSwapAmount,e.decimals):0n,a[10]=e.maxWalletAmount?f(e.maxWalletAmount,e.decimals):0n,s[0]=m,s[1]=e.enableManualStartTrade,s[2]=e.enableKillBlock,s[3]=e.enableSwapLimit,s[4]=e.enableWalletLimit,s[5]=e.enableChangeTax,s[6]=e.enableWhiteList}else if(e.deployerId==3){i[0]=e.name,i[1]=e.symbol;let c=e.token.tokenAddress,m=!1;c==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(c=(await new b(e.chainSwap.routerAddress,P,u).WETH()).toLowerCase(),m=!0),l[0]=c,l[1]=e.chainSwap.routerAddress,l[2]=d.walletAddress,l[3]=e.fundAddress?e.fundAddress:"0x0000000000000000000000000000000000000000",l[4]=e.rewardToken,a[0]=e.decimals,a[1]=f(e.totalSupply,e.decimals),a[2]=r(e.buyFundFee).times(100).toNumber(),a[3]=r(e.buyRewardFee).times(100).toNumber(),a[4]=r(e.buyLPFee).times(100).toNumber(),a[5]=r(e.sellFundFee).times(100).toNumber(),a[6]=r(e.sellRewardFee).times(100).toNumber(),a[7]=r(e.sellLPFee).times(100).toNumber(),a[8]=e.killBlock?r(e.killBlock).toNumber():0,a[9]=e.maxSwapAmount?f(e.maxSwapAmount,e.decimals):0n,a[10]=e.maxWalletAmount?f(e.maxWalletAmount,e.decimals):0n,s[0]=m,s[1]=e.enableManualStartTrade,s[2]=e.enableKillBlock,s[3]=e.enableSwapLimit,s[4]=e.enableWalletLimit,s[5]=e.enableChangeTax,s[6]=e.enableWhiteList,s[7]=e.canMint}console.log(e.deployerId,i,l,a,s);const v=await y.tokenCreate(e.deployerId,i,l,a,s);console.dir(v),e.txHash=v.hash,v.wait().then(async c=>{c.status===1&&n({type:"success",message:o("upChainSuccessfully")})}),_.value=!0}catch(t){if(console.log(t),t.info&&t.info.error&&t.info.error.code===4001)n(o("userCancelOperate"));else if(t.error&&t.error.message&&t.error.message=="Canceled")n(o("userCancelOperate"));else if(t.data&&t.data.code==-32e3){const u=t.data.message.match(/(\d+) want (\d+)/)[2];n(o("balanceSlow2",{chainMianCoin:d.token.chainCoinSymbol,amount:D(u)}))}else t.code==="INSUFFICIENT_FUNDS"?n(o("balanceSlow")):t.info&&t.info.error&&t.info.error.code==-32603&&t.info.error.data.message==="execution reverted: BEP40: transfer amount exceeds balance"?n(o("balanceSlow2",{chainMianCoin:k.value,amount:A.value})):t.code=="CALL_EXCEPTION"&&t.info.error.message=="execution reverted: BEP40: transfer amount exceeds balance"?n(o("balanceSlow2",{chainMianCoin:k.value,amount:A.value})):n(o("unkonwError"))}finally{h.value=!1,N.value=!1}}function V(){window.open(d.txNetwork+e.txHash,"_blank")}return z(()=>{console.log("create before mounted"),e.$reset(),W.push("/create/BasicInfo")}),(t,u)=>{const y=S("router-view"),i=S("van-action-bar-button"),l=S("van-action-bar"),a=S("van-popup");return B(),J("div",null,[g(y,{onCreateTokenClick:O,createTokenLoading:T.value},null,8,["createTokenLoading"]),g(a,{show:h.value,"onUpdate:show":u[0]||(u[0]=s=>h.value=s),round:"",closeable:"",class:"van-dialog van-dialog--round-button","close-on-click-overlay":!1},{default:L(()=>[p("div",te,F(t.$t("tokenCreationSoon")),1),p("div",se,[p("div",oe,[p("div",null,F(t.$t("createConfirmInfo")),1),p("div",ne,F(t.$t("serviceFeeCreation",{baseFeeAmount:A.value,baseFeeSymbol:k.value})),1)])]),g(l,{class:"van-dialog__footer"},{default:L(()=>[C.value?(B(),R(i,{key:0,type:"danger",text:t.$t("approveFirst"),class:"van-dialog__confirm",loading:x.value,onClick:H},null,8,["text","loading"])):(B(),R(i,{key:1,type:"danger",loading:N.value,color:"#3F80F7",text:t.$t("confirmAndCreate"),class:"van-dialog__confirm",onClick:K},null,8,["loading","text"]))]),_:1})]),_:1},8,["show"]),g(G,{show:_.value,"onUpdate:show":u[1]||(u[1]=s=>_.value=s),theme:"round-button",showCancelButton:!1,confirmButtonText:t.$t("enterTokenManagement"),onOnConfirm:u[2]||(u[2]=s=>Q(W).push("/"))},{default:L(()=>[p("div",null,[g(ae,{name:"createSuccess",style:{width:"48px",height:"48px"}})]),p("div",re,F(t.$t("createdSubmitted")),1),p("div",le,[Y(F(t.$t("inBrowser")),1),p("span",{class:"show",onClick:V},F(t.$t("view")),1)]),p("div",ie,F(t.$t("waitToView")),1)]),_:1},8,["show","confirmButtonText"])])}}};export{Fe as default};
