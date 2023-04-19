import{D as k}from"./DropDown-097a4bd4.js";/* empty css                                                       */import{_ as D,e as T,d as N,m as E,q as U,r as d,o as p,h as B,j as l,w as a,u as t,a as c,l as g,s as _,z as h,t as b}from"./index-69bf0c45.js";import{u as L}from"./create-672ee266.js";import{f as M}from"./index-e3a6eef1.js";const x={class:"zero"},A={__name:"Detail",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(V,{emit:$}){const C=V,{t:m}=T(),i=N(),e=L(),S=E();function y(o){return o.replace(/[^\x00-\x7F]+/g,"")}function w(){if(e.deployerId===1||e.deployerId===2||e.deployerId===3){if(!e.name){_(m("pleaseEnterName"));return}if(!e.symbol){_(m("pleaseEnterSymbol"));return}if(!e.totalSupply){_(m("pleaseEnterTotal"));return}}e.step=2,S.push("/create/taxSetting")}return U(()=>{}),(o,n)=>{const u=d("van-cell"),s=d("van-cell-group"),f=d("van-field"),I=d("van-switch"),v=d("van-button");return p(),B("div",x,[l(s,{inset:""},{default:a(()=>[l(u,{title:o.$t("selectChain"),class:"switch-cell"},{value:a(()=>[l(k,{onClick:n[0]||(n[0]=r=>t(i).showSelectChainPopup=!0),error:t(i).chainId==-1,logo:t(i).chainIcon,value:t(i).chain.toUpperCase()},null,8,["error","logo","value"])]),_:1},8,["title"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(u,{title:o.$t("selectTemplate"),class:"switch-cell"},{value:a(()=>[l(k,{disable:"",value:o.$t(t(e).deployerName)},null,8,["value"])]),_:1},8,["title"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(f,{modelValue:t(e).name,"onUpdate:modelValue":n[1]||(n[1]=r=>t(e).name=r),label:o.$t("tokenName"),placeholder:o.$t("lettersLimit"),formatter:y,maxlength:"20","input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(f,{modelValue:t(e).symbol,"onUpdate:modelValue":n[2]||(n[2]=r=>t(e).symbol=r),"label-width":"6.8em",label:o.$t("tokenSymbol"),placeholder:o.$t("lettersLimit"),formatter:y,maxlength:"20","input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(u,{title:o.$t("tokenPrecision"),value:t(e).decimals},null,8,["title","value"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(f,{modelValue:t(e).totalSupply,"onUpdate:modelValue":n[3]||(n[3]=r=>t(e).totalSupply=r),label:o.$t("tokenAmount"),placeholder:o.$t("pleaseEnter"),type:"digit",maxlength:"16","input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),t(e).deployerId===0||t(e).deployerId===1||t(e).deployerId===3?(p(),c(s,{key:0,inset:""},{default:a(()=>[l(u,{class:"switch-cell",title:o.$t("isMintToken")},{value:a(()=>[l(I,{modelValue:t(e).canMint,"onUpdate:modelValue":n[4]||(n[4]=r=>t(e).canMint=r)},null,8,["modelValue"])]),_:1},8,["title"])]),_:1})):g("",!0),t(e).deployerId===0?(p(),c(s,{key:1,inset:""},{default:a(()=>[l(u,{title:o.$t("holder"),class:"switch-cell",value:t(M)(t(i).walletAddress)},null,8,["title","value"])]),_:1})):g("",!0),t(e).deployerId===0?(p(),c(v,{key:2,type:"primary",round:"",block:"",class:"btn-control",onClick:n[5]||(n[5]=r=>$("createTokenClick")),loading:C.createTokenLoading},{default:a(()=>[h(b(o.$t("create")),1)]),_:1},8,["loading"])):(p(),c(v,{key:3,type:"primary",round:"",block:"",class:"btn-control",onClick:w},{default:a(()=>[h(b(t(m)("nextStep")),1)]),_:1}))])}}},R=D(A,[["__scopeId","data-v-fffa758e"]]);export{R as default};
