webpackJsonp([103],{1130:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"agentSet"}},[a("el-row",{staticClass:"w50",staticStyle:{margin:"0 auto"},attrs:{gutter:20}},[a("el-col",{staticClass:"mainStyle",attrs:{span:24}},[a("div",[a("div",{staticClass:"fl setPlay"},[a("div",{},[a("el-form",{staticClass:"mt10",attrs:{model:e.agentSet,"label-width":"110px"}},[a("h3",[e._v(e._s(e.LANG["退佣有效会员定义"]||"退佣有效会员定义"))]),e._v(" "),a("el-form-item",{staticClass:"w90",attrs:{label:e.LANG["有效会员投注额"]||"有效会员投注额",prop:"active_player_valid_bet"}},[a("el-input",{attrs:{type:"number",size:"small"},model:{value:e.agentSet.userBet,callback:function(t){e.$set(e.agentSet,"userBet",t)},expression:"agentSet.userBet"}})],1),e._v(" "),a("el-form-item",{staticClass:"w90",attrs:{label:e.LANG["期间存款金额"]||"期间存款金额",prop:"active_player_deposit"}},[a("el-input",{attrs:{type:"number",size:"small"},model:{value:e.agentSet.monthDeposit,callback:function(t){e.$set(e.agentSet,"monthDeposit",t)},expression:"agentSet.monthDeposit"}})],1)],1),e._v(" "),a("span",{staticClass:"help_gray"},[e._v("提示：二者其中一个达到，即为有效会员。")])],1)])])]),e._v(" "),a("el-col",{staticClass:"mainStyle",attrs:{span:24}},[a("h3",[e._v(e._s(e.LANG["多级代理佣金百分比"]||"多级代理佣金百分比"))]),e._v(" "),a("el-form",{ref:"agentSet",staticClass:"mt10 agencySet w100",attrs:{model:e.agentSet,"label-width":"100px"}},[a("el-form-item",{staticClass:"w50 fl",attrs:{label:e.LANG["代理层级限制"]||"代理层级限制",rules:[{validator:e.checkNumber,trigger:"blur"}],prop:"max_agent_levels"}},[a("el-input",{attrs:{type:"number"},on:{change:e.showLevles},model:{value:e.agentSet.max_agent_levels,callback:function(t){e.$set(e.agentSet,"max_agent_levels",t)},expression:"agentSet.max_agent_levels"}})],1)],1),e._v(" "),e.agentSet.max_agent_levels>=2&&e.agentSet.max_agent_levels<=20?a("el-form",{ref:"agentSet",staticClass:"mt10 agencySet w100 cl",attrs:{model:e.agentSet,"label-width":"100px"}},e._l(e.levels,function(t){return a("el-form-item",{key:t,staticClass:"w50 fl",attrs:{label:(e.LANG["下"]||"下")+" "+t+" "+(e.LANG["级"]||"级"),rules:[{validator:e.validatorNumber,trigger:"blur"}],prop:"levels.level"+t}},[a("el-input",{attrs:{placeholder:"请输入代理佣金百分比",s:"",type:"number"},model:{value:e.agentSet.levels["level"+t],callback:function(a){e.$set(e.agentSet.levels,"level"+t,a)},expression:"agentSet.levels[`level${item}`]"}},[a("template",{slot:"append"},[e._v("%")])],2)],1)})):e._e()],1),e._v(" "),a("div",{staticClass:"formbtn tCent mt20"},[a("el-button",{attrs:{type:"primary"},on:{click:e.doCash}},[e._v(e._s(e.LANG["保存"]||"保存"))]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:!0},on:{click:e.doRest}},[e._v(e._s(e.LANG["重置"]||"重置"))])],1)],1)],1)},staticRenderFns:[]}},230:function(e,t,a){a(897);var l=a(59)(a(555),a(1130),"data-v-054191ad",null);e.exports=l.exports},555:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{LANG:LANG,agentSet:{minPay:"",accountDate:"",payType:"",userBet:"",monthDeposit:"",max_agent_levels:"",levels:{}},levels:[],dataList:[]}},components:{},methods:{init:function(){for(var e=this,t=1;t<31;t++)this.dataList.push({label:"每月",value:t.toString()});var a=URL.api+ROUTES.GET.commission.level,l=this;this.$.autoAjax("get",a,"",{ok:function(t){var a=t.data;l.agentSet.levels={},l.agentSet.minPay=FORMATMONEY(a.minPay),l.agentSet.accountDate=a.accountDate,l.agentSet.payType=a.payType.toString()?a.payType.toString():"",l.agentSet.userBet=FORMATMONEY(a.userBet),l.agentSet.monthDeposit=FORMATMONEY(a.monthDeposit),l.agentSet.max_agent_levels=a.commission_level_percent.length;var s=e.agentSet.levels;a.commission_level_percent.map(function(e,t){s["level"+(t+1)]=e.value}),l.showLevles(e.agentSet.max_agent_levels)},p:function(){},error:function(e){console.log(e)}})},doCash:function(){var e=this;this.$refs.agentSet.validate(function(t){if(t){for(var a=e.agentSet,l=a.levels,s=e.levels,n="",i=0;i<s.length;i++)l["level"+(i+1)]&&(n=n+"level"+(i+1)+":"+l["level"+(i+1)]+",");n=n.substring(0,n.length-1);var o={minPay:100*e.agentSet.minPay,accountDate:e.agentSet.accountDate,userBet:100*e.agentSet.userBet,monthDeposit:100*e.agentSet.monthDeposit,commission_level_percent:n},r=URL.api+ROUTES.PUT.commission.level;e.$.autoAjax("put",r,o,{ok:function(t){t.data&&e.$message.success(e.LANG["保存成功"]||"保存成功")},p:function(){},error:function(e){console.log(e)}})}})},doRest:function(){this.init(),this.$message("重置成功!")},validatorNumber:function(e,t,a){parseInt(t)<0||parseInt(t)>50?a(new Error(LANG["百分比在0到50之间"]||"百分比在0到50之间")):a()},checkNumber:function(e,t,a){parseInt(t)<2||parseInt(t)>20?a(new Error(LANG["层级在2到20之间"]||"层级在2到20之间")):a()},showLevles:function(e){var t=e||this.agentSet.max_agent_levels;this.levels.splice(0,this.levels.length);for(var a=parseInt(t),l=this.agentSet.levels,s=0;s<a;s++)this.levels.push(s+1),l["level"+(s+1)]||(l["level"+(s+1)]=0)}},created:function(){this.init()}}},726:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,"#agentSet .setPlaySel .el-input__inner[data-v-054191ad]{height:30px}#agentSet .agencySet[data-v-054191ad]{float:left}#agentSet .setPlay[data-v-054191ad]{border:1px solid #e0e6ed;box-sizing:border-box;width:46%;margin-left:2.8%;padding:2%}#agentSet .mainStyle[data-v-054191ad]{border:1px solid #d3dce6;margin:10px 0;padding:20px 0}",""])},897:function(e,t,a){var l=a(726);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(220)("c76f2146",l,!0)}});