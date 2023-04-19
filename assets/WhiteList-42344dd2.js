import{_ as V,$ as N,e as S,g as v,r as h,o as w,h as L,b as p,j as c,w as _,t as g,F as W,k as R,u as a,y as k,s as n,z as y,v as z}from"./index-69bf0c45.js";import{f as I,c as U}from"./index-e3a6eef1.js";import{u as M}from"./manage-c4d4e776.js";import{_ as j}from"./SvgIcon-b7a16c96.js";import{D as C}from"./Dialog-0ec7f86b.js";import"./bignumber-3e8dfdf6.js";import"./units-1c3e5529.js";/* empty css                                                       */const E={class:"name-manage"},q={class:"name-list"},G={class:"title"},H={class:"list-item"},J={class:"address"},K={__name:"WhiteList",setup(P){N();const{t}=S(),u=v(!1),m=v(!1),d=v(!1),o=M(),i=v(""),f=v("");function B(s){return s&&s.trim()}function x(){if(!/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/.test(i.value)){n(t("trueFormat"));return}if(o.whiteList.findIndex(e=>e==i.value)!=-1){n(t("addressAdded"));return}u.value=!0}function A(){u.value=!1,m.value=!1}async function b(){d.value=!0;let s=i.value;try{const e=await k.token.contract(o.tokenAddress,o.abi);console.log(e);const l=await e.setFeeWhiteList([i.value],!0);console.log(l),await l.wait(),await o.getWhiteList(o.tokenAddress),i.value="",n({type:"success",message:t("addWhiteListSuccess",{userAddress:s})})}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?n(t("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?n(t("userCancelOperate")):n(t("addWhiteListFail",{userAddress:s}))}finally{u.value=!1,d.value=!1}}function T(s){f.value=s,m.value=!0}async function F(){d.value=!0;let s=f.value;try{const e=await k.token.contract(o.tokenAddress,o.abi);console.log(e);const l=await e.setFeeWhiteList([f.value],!1);console.log(l),await l.wait(),await o.getWhiteList(o.tokenAddress),f.value="",n({type:"success",message:t("addWhiteListSuccess",{userAddress:s})})}catch(e){e.info&&e.info.error&&e.info.error.code===4001?n(t("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?n(t("userCancelOperate")):n(t("removeWhiteListFail",{userAddress:s}))}finally{m.value=!1,d.value=!1}}return(s,e)=>{const l=h("van-button"),O=h("van-field"),$=h("van-cell-group");return w(),L(W,null,[p("div",E,[c($,{inset:""},{default:_(()=>[c(O,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=r=>i.value=r),center:"",clearable:"",formatter:B,placeholder:a(t)("inputAddress")},{button:_(()=>[c(l,{class:"add-btn",size:"mini",type:"primary",round:"",onClick:x},{default:_(()=>[y(g(s.$t("add")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1}),p("div",q,[p("div",G,g(s.$t("added")),1),p("ul",null,[(w(!0),L(W,null,R(a(o).whiteList,r=>(w(),L("li",H,[p("div",J,[y(g(a(I)(r))+" ",1),c(j,{class:"copy-icon",name:"copy",onClick:z(D=>a(U)(r),["stop"])},null,8,["onClick"])]),c(l,{class:"remove-btn",plain:"",size:"mini",type:"primary",round:"",onClick:D=>T(r)},{default:_(()=>[y(g(s.$t("remove")),1)]),_:2},1032,["onClick"])]))),256))])])]),c(C,{show:u.value,"onUpdate:show":e[1]||(e[1]=r=>u.value=r),message:a(t)("addWhiteListWarn",{userAddress:i.value,tokenName:a(o).symbol}),cancelButtonText:a(t)("thinkAgain"),confirmButtonLoading:d.value,confirmButtonText:a(t)("confirm"),onOnCancel:A,onOnConfirm:b},null,8,["show","message","cancelButtonText","confirmButtonLoading","confirmButtonText"]),c(C,{show:m.value,"onUpdate:show":e[2]||(e[2]=r=>m.value=r),message:a(t)("removeWhiteListWarn",{userAddress:f.value}),cancelButtonText:a(t)("thinkAgain"),confirmButtonLoading:d.value,confirmButtonText:a(t)("confirm"),onOnCancel:A,onOnConfirm:F},null,8,["show","message","cancelButtonText","confirmButtonLoading","confirmButtonText"])],64)}}},ae=V(K,[["__scopeId","data-v-a76f77c1"]]);export{ae as default};
