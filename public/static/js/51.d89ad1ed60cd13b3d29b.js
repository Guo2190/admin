(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{121:function(t,e,a){"use strict";a.r(e);var l=a(202),s=a(203),i=a(206),r=a(0);r.default.filter("formatDate",function(t,e){let a=new Date(t),l=function(t){return(t<10?"0":"")+t};return e.replace(/yyyy|MM|dd|HH|mm|ss/g,function(t){switch(t){case"yyyy":return l(a.getFullYear());case"MM":return l(a.getMonth()+1);case"mm":return l(a.getMinutes());case"dd":return l(a.getDate());case"HH":return l(a.getHours());case"ss":return l(a.getSeconds())}})}),r.default.filter("filterOrign",function(t){return"1"==t?"pc":"2"==t?"h5":"app"}),r.default.filter("filterArray",function(t){return t&&t.length>1?t.join("/"):t&&1===t.length?t[0]:void 0}),r.default.filter("filterStatus",function(t){let e;switch(t){case"open":e="已开奖";break;case"winning":e="已中奖";break;case"fast":e="快速玩法";break;case"canceled":e="撤销"}return e});var o={data:()=>({LANG:LANG}),props:["tableData"],created(){},mounted(){},watch:{tableData:function(){}}},n=a(10),c=Object(n.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"noteDetail"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("table",{staticClass:"el-table el-table__header",staticStyle:{width:"100%"},attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("tr",[a("th",{staticClass:"is-leaf",attrs:{colspan:"4",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["注单号："]||"注单号：")+t._s(t.tableData.order_number))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["用户名"]||"用户名"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.user_name))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["上级代理"]||"上级代理"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.agent_name))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["投注时间"]||"投注时间"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t._f("formatDate")(t.tableData.created,"yyyy-MM-dd HH:mm:ss"))+" ")])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["投注金额"]||"投注金额"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.pay_money))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["彩票名称"]||"彩票名称"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.lottery_name))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["有效投注"]||"有效投注"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.valid_bet))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["玩法"]||"玩法"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.play_type1_name))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["赔率"]||"赔率"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t._f("filterArray")(t.tableData.odds)))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["期号"]||"期号"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.lottery_number))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["派彩金额"]||"派彩金额"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.send_prize))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["状态"]||"状态"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t._f("filterStatus")(t.tableData.state)))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["输赢"]||"输赢"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.lose_earn))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["来源"]||"来源"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t._f("filterOrign")(t.tableData.origin)))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["所属追号"]||"所属追号"))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.chase_number))])])]),t._v(" "),a("tr",[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(t.LANG["投注内容"]||"投注内容"))])]),t._v(" "),a("td",{attrs:{colspan:"3"}},[a("div",{staticClass:"cell"},[t._v(t._s(t.tableData.play_number))])])])])])],1)],1)},[],!1,null,null,null).exports;r.default.filter("state",function(t){return"underway"===t?"进行中":"open"===t?"已结算":"cancel"===t?"已取消":void 0});var d={data:()=>({LANG:LANG,columnsUrl:"",tableUrl:"",baseUrl:"",formTtile:"",FormVisible:!1,detailForm:{},searchConfig:[{prop:"user_name",value:"",type:"text",label:"用户名"},{prop:"chase_number",value:"",type:"text",label:"追号单号"},{prop:"lottery_id",value:"",label:"彩票名称",type:"select",list:[]},{prop:"state",value:"",label:"状态",type:"select",list:[{label:"进行中",value:"underway"},{label:"已结算",value:"open"}]},{prop:"origin",value:"",label:"来源",type:"select",list:[{label:"PC",value:"1"},{label:"H5",value:"2"},{label:"移动端",value:"3"}]},{type:"dateGroup",label:"建立时间",prop:[{prop:"start_time",value:"",label:"开始时间"},{prop:"end_time",value:"",label:"结束时间"}]}],typeSearch:"search",labelWidthSearch:"100px",formVisibleSearch:{state:!1},isEditSearch:{state:!1},dialogVisible:!1,dialogTitle:"",isEdit:{state:!1},updated:!1,formType:"",loading:!1,confirmConfig:{state:!1,msg:"",fn:""},btnShow:!1,chase_number:null,tableData:[{label:"用户名",value:""},{label:"上级代理",value:""},{label:"建立时间",value:""},{label:"追号金额",value:""},{label:"彩票名称",value:""},{label:"玩法",value:""},{label:"内容",value:""},{label:"赔率",value:""},{label:"追号类型",value:""},{label:"来源",value:""},{label:"状态",value:""},{label:"盈亏",value:""}],tableList:"",modeData:{}}),components:{tablegrid:l.a,formEdit:s.a,chaseNoteDetail:c,confirm:i.a},methods:{init(){var t=this;this.playType="彩票标准玩法",this.nowPlayType="lottery",this.columnsUrl="/static/json/Note/lottery/columns2.json",this.tableUrl=URL.api+ROUTES.GET.lottery.chase+"?start_time="+sessionStorage.dateTimeStart+"&end_time="+sessionStorage.dateTimeEnd,this.baseUrl=URL.api+ROUTES.GET.lottery.chase,this.$.autoAjax("get",URL.api+ROUTES.GET.lottery.types.$,"",{ok:e=>{if(0==e.state&&e.data){let a=e.data||[];for(let e in a)0!==a[e].pid&&"1"===a[e].is_standard&&t.searchConfig[2].list.push({label:a[e].name,value:a[e].id})}},p:()=>{},error:t=>{console.log(t)}})},doQuery(t){this.tableUrl=this.baseUrl+this.addSearch(t.item)},resetForm(t){t.state&&"init"==t.state&&(this.tableUrl=this.baseUrl+"?start_time="+sessionStorage.dateTimeStart+"&end_time="+sessionStorage.dateTimeEnd)},doHandle(t){switch(t.fn){case"doStop":this.doStop(t.row);break;case"doDet":this.doDet(t.row);break;case"openMember":this.openMember(t.row)}},openMember(t){this.$router.push({path:"/memberManagement",query:{name:t.user_name}})},doStop(t){this.confirmConfig.state=!0,this.confirmConfig.msg=this.LANG["确定停用吗?"]||"确定停用吗?",this.confirmConfig.fn="stop",this.confirmConfig.obj=t.chase_number},doConfirm(t){let e=this;switch(this.updated=!1,t.fn){case"stop":this.dialogVisible=!1;let a=t.obj,l=URL.api+ROUTES.PATCH.lottery.chase+`${a}`;this.$.autoAjax("patch",l,{},{ok:t=>{if(0===t.state&&!1!==t.data){let t=LANG["停用成功"]||"停用成功";this.$message.success(t),e.updated=!0}else{let e=LANG["停用失败"]||"停用失败";this.$message.error(e+":"+t.msg)}},p:()=>{},error:t=>{console.log(t)}})}},handleClose(){this.dialogVisible=!1},stopZh(t){this.confirmConfig.state=!0,this.confirmConfig.msg=this.LANG["确定停用吗?"]||"确定停用吗?",this.confirmConfig.fn="stop",this.confirmConfig.obj=this.chase_number},doDet(t){let e=this;this.dialogTitle="用户"+t.user_name+" 的详情",this.dialogVisible=!0,this.chase_number=t.chase_number;let a=URL.api+ROUTES.GET.lottery.info+"/"+t.chase_number;this.$.autoAjax("get",a,"",{ok:t=>{if(0===t.state){let a=t.data||[];this.modeData=a,e.tableData[0].value=a.name,e.tableData[1].value=a.agent,e.tableData[2].value=a.created,e.tableData[3].value=a.total_price,e.tableData[4].value=a.lottery_name,e.tableData[5].value=a.odds_type,e.tableData[6].value=a.result||a.odds_type||"",e.tableData[7].value=a.odds,e.tableData[8].value=a.prize_stop,e.tableData[9].value=a.origin,e.tableList=a.chase_list;let l="";switch(a.state){case"underway":this.btnShow=!0,l="进行中";break;case"open":this.btnShow=!1,l="已结算";break;case"cancel":this.btnShow=!1,l="已取消"}e.tableData[10].value=l,e.tableData[11].value=a.lose_earn}else{let t=LANG["获取详情失败"]||"获取详情失败";this.$message.error(t)}},p:()=>{},error:t=>{console.log(t)}})},getDetail(t){this.FormVisible=!0,this.formTtile="注单详情";let e=URL.api+`/lottery/order/${t}`,a=this;this.$.autoAjax("get",e,"",{ok:t=>{if(0===t.state&&t.data){let e=t.data;for(let t in e)a.$set(a.detailForm,t,e[t])}},p:()=>{},error:t=>{console.log(t)}})}},computed:{},mounted(){},created(){this.init()}};var _=function(t){a(503)},v=Object(n.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chaseNumber"}},[a("el-row",[a("formEdit",{attrs:{formVisible:t.formVisibleSearch,formConfig:t.searchConfig,type:t.typeSearch,labelWidth:t.labelWidthSearch,isEdit:t.isEditSearch,showAdd:!1},on:{"do-query":t.doQuery,"reset-form":t.resetForm}})],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,tableCheck:!1,pageSet:!0,updated:t.updated,tableIndex:!1},on:{"do-handle":t.doHandle}})],1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogVisible,size:"small","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("追号编号"+t._s(t.chase_number))]),t._v(" "),a("el-row",{staticClass:"tCent"},t._l(t.tableData,function(e,l){return a("el-col",{key:l,attrs:{span:12}},[a("div",[a("el-col",{attrs:{span:12}},[t._v(t._s(e.label))]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(e.value))])],1)])}),1),t._v(" "),a("div",[a("span",[t._v("追号状态")]),t._v(" "),a("span",[t._v("已追 "),a("font",[t._v(t._s(t.modeData.finish))]),t._v("期/共"+t._s(t.modeData.total)+"期")],1)]),t._v(" "),a("el-row",{staticClass:"tCent"},t._l(t.tableList,function(e,l){return a("el-col",{key:l,attrs:{span:24}},[a("div",[a("el-col",{attrs:{span:5}},[t._v("第"+t._s(e.lottery_number)+"期")]),t._v(" "),a("el-col",{attrs:{span:5}},[t._v(t._s(t._f("formatMoney")(e.price))+"元")]),t._v(" "),a("el-col",{attrs:{span:5}},[t._v(t._s(t._f("state")(e.state)))]),t._v(" "),a("el-col",{attrs:{span:5}},[t._v(t._s(t._f("formatMoney")(e.lose_earn)))]),t._v(" "),a("el-col",{attrs:{span:4}},[e.order_id?a("a",{staticClass:"orderDetail",on:{click:function(a){return t.getDetail(e.order_id)}}},[t._v("注单详情")]):t._e()])],1)])}),1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.btnShow?a("el-button",{attrs:{type:"primary"},on:{click:t.stopZh}},[t._v("停止追号")]):t._e(),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("关闭")])],1)],1)],1),t._v(" "),a("el-col",[a("confirm",{attrs:{confirmConfig:t.confirmConfig},on:{"do-confirm":t.doConfirm}})],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-dialog",{staticClass:"fromTitle",attrs:{title:t.formTtile},model:{value:t.FormVisible,callback:function(e){t.FormVisible=e},expression:"FormVisible"}},[a("chaseNoteDetail",{attrs:{tableData:t.detailForm}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.FormVisible=!1}}},[t._v(t._s(t.LANG["关闭"]||"关闭"))])],1)],1)],1)],1)},[],!1,_,"data-v-44949622",null);e.default=v.exports},503:function(t,e,a){}}]);