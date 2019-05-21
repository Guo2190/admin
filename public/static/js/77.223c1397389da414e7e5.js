(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/element-ui/packages/card/src/main.vue
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var main = ({
  name: 'ElCard',
  props: ['header', 'bodyStyle']
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-408574be","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/element-ui/packages/card/src/main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-card"},[(_vm.$slots.header || _vm.header)?_c('div',{staticClass:"el-card__header"},[_vm._t("header",[_vm._v(_vm._s(_vm.header))])],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"el-card__body",style:(_vm.bodyStyle)},[_vm._t("default")],2)])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/element-ui/packages/card/src/main.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  main,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_main = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/deliveryDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var deliveryDetail = ({
  data() {
    return {
      LANG,
      dialogVisible: false,
      costStatistics: [{
        label: "线路费用合计",
        val: null
      }, {
        label: "游戏抽成费用合计",
        val: null
      }, {
        label: "总应缴纳金额",
        val: null
      }],
      feeSum: {
        receivable: 0,
        receipts: 0
      },
      nowBaodifei: 0,
      periodsView: {
        period_number: "",
        id: -1
      },
      tableDate: '',
      //页码
      currentPage4: null,
      //线路/包底费用 data
      lineFeeData: [],
      //抽成费用data
      RoyaltyFeeData: [],
      //fee_type 判断是保底费还是线路费 fee_type
      fee_type: '',
      //包底费用合计
      lineFeeAll: null,
      //游戏抽成合计
      RoyaltyFeeDataAll: null,
      nowType: "",
      dialoaMsg: ""
    };
  },

  components: {
    ElCard: src_main
  },
  methods: {
    init() {
      this.periodsView.id = this.$route.query.id || -1;
      this.periodsView.period_number = this.$route.query.period_number || "";

      let _this = this;

      this.lineFeeData.splice(0, this.lineFeeData.length);
      this.RoyaltyFeeData.splice(0, this.RoyaltyFeeData.length);
      let tablUrl = URL.api + ROUTES.GET.system.detail;
      this.$.autoAjax('get', tablUrl + '/' + this.periodsView.id, '', {
        ok: res => {
          if (res.data && res.state === 0 && res.data) {
            //获取是保底费还是线路费
            _this.fee_type = res.data.fee_type;
            let list = res.data.costitems || [];
            let temp = {
              receivable: 0,
              receipts: 0
            };
            _this.nowBaodifei = FORMATNUMBER(list[0].receipts);

            for (let i = 0; i < list.length; i++) {
              _this.lineFeeData.push({
                created: list[i].created,
                fee_scale: list[i].fee_scale,
                id: list[i].id,
                item_name: list[i].item_name,
                quantity: list[i].quantity ? list[i].quantity : 1,
                receipts: list[i].receipts,
                receivable: FORMATNUMBER(list[i].quantity ? list[i].quantity : 1) * FORMATNUMBER(list[i].fee_scale),
                receive_id: list[i].receive_id,
                updated: list[i].updated
              });

              temp.receivable = FORMATNUMBER(temp.receivable) + FORMATNUMBER(_this.lineFeeData[i].receivable);
              temp.receipts = FORMATNUMBER(temp.receipts) + FORMATNUMBER(_this.lineFeeData[i].receipts);
            }

            if (_this.fee_type === "mincost") {
              temp.receipts = temp.receipts - _this.nowBaodifei;
              _this.costStatistics[0].label = "合计（SSL证书费+其它费用）";
            } else {
              _this.costStatistics[0].label = "线路费合计";
            }

            _this.feeSum.receivable = FORMATMONEY(temp.receivable) > 0 ? FORMATMONEY(temp.receivable) : 0.00;
            _this.feeSum.receipts = FORMATMONEY(temp.receipts) > 0 ? FORMATMONEY(temp.receipts) : 0.00; // 总合计

            _this.costStatistics[0].val = 0;
            _this.costStatistics[1].val = 0;
            _this.costStatistics[2].val = 0;
            _this.costStatistics[0].val = _this.feeSum.receipts;
            _this.RoyaltyFeeDataAll = 0; //游戏抽成

            for (let n in res.data.items) {
              _this.RoyaltyFeeData[n] = res.data.items[n];
              _this.RoyaltyFeeDataAll += FORMATNUMBER(res.data.items[n].received);
            }

            _this.RoyaltyFeeDataAll = FORMATMONEY(_this.RoyaltyFeeDataAll);

            if (_this.fee_type === 'mincost') {
              if (FORMATNUMBER(_this.RoyaltyFeeDataAll) > FORMATNUMBER(_this.nowBaodifei)) {
                _this.costStatistics[1].label = "游戏抽成费合计";
                _this.costStatistics[1].val = FORMATNUMBER(_this.RoyaltyFeeDataAll);
              } else {
                _this.costStatistics[1].label = "保底费";
                _this.costStatistics[1].val = FORMATMONEY(_this.nowBaodifei) > 0 ? FORMATMONEY(_this.nowBaodifei) : 0.00;
              }
            } else {
              _this.costStatistics[1].val = FORMATNUMBER(_this.RoyaltyFeeDataAll);
            }

            _this.costStatistics[2].val = (FORMATNUMBER(_this.costStatistics[0].val) + FORMATNUMBER(_this.costStatistics[1].val)).toFixed(2);
          }

          ;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    blackPgUp() {
      this.$router.push({
        path: '/deliveryStatement'
      });
    },

    //查看备注信息
    viewDetail(obj) {
      this.dialoaMsg = obj;
      this.dialogVisible = true;
    },

    //关闭查看详情
    handleClose() {
      this.dialogVisible = false;
    },

    //翻页
    handleSizeChange(val) {},

    handleCurrentChange(val) {}

  },

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1a3bfedb","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/deliveryDetail.vue
var deliveryDetail_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"deliveryDetail"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.blackPgUp}},[_vm._v("\n                "+_vm._s(_vm.LANG['返回'] || '返回')+"\n            ")])],1),_vm._v(" "),_c('el-col',{staticClass:"mt20",attrs:{"span":24}},[_c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"id":""}},[_c('div',{staticClass:"titleBox_One font16"},[_c('span',[_vm._v(_vm._s(_vm.LANG[(_vm.fee_type === 'mincost'?"包底费" : "线路费")] || (_vm.fee_type === 'mincost'?"包底费" : "线路费")))])]),_vm._v(" "),_c('table',{staticClass:"el-table w100  mt10 tCent",attrs:{"border":"1px"},model:{value:(_vm.lineFeeData),callback:function ($$v) {_vm.lineFeeData=$$v},expression:"lineFeeData"}},[_c('tr',[_c('th',{attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.LANG['交收项目'] || '交收项目'))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['数量(月/个)'] || '数量(月/个)'))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['收费标准'] || '收费标准'))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['应交收金额'] || '应交收金额'))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['实际交收金额'] || '实际交收金额'))])]),_vm._v(" "),_vm._l((_vm.lineFeeData),function(item){return _c('tr',[_c('td',{attrs:{"colspan":"2"}},[_vm._v(_vm._s(item.item_name))]),_vm._v(" "),(item.item_name === '其他费用')?_c('td',[_c('div',{staticClass:"cell"},[_c('div',[_c('el-button',{attrs:{"size":"small","type":"text"},on:{"click":function($event){return _vm.viewDetail(item.quantity)}}},[_vm._v(_vm._s(_vm.LANG['查看'] || '查看'))])],1)])]):_c('td',[_vm._v(_vm._s((item.quantity?item.quantity:1)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formatMoney")(item.fee_scale)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formatMoney")(item.receivable)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formatMoney")(item.receipts)))])])}),_vm._v(" "),(_vm.feeSum.receivable && _vm.feeSum.receipts)?_c('tr',{staticClass:"col2"},[(_vm.fee_type === 'mincost')?_c('td',{staticClass:"font16",attrs:{"colspan":"4"}},[_vm._v(_vm._s(_vm.LANG['合计（SSL证书费+其它费用）'] || '合计（SSL证书费+其它费用）'))]):_c('td',{staticClass:"font16",attrs:{"colspan":"4"}},[_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.feeSum.receivable))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.feeSum.receipts))])]):_vm._e()],2)])])],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-dialog',{attrs:{"title":_vm.LANG['备注信息'] || '备注信息',"visible":_vm.dialogVisible,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('h3',{staticClass:"mb20"},[_vm._v(_vm._s(_vm.LANG['其它费用备注'] || '其它费用备注'))]),_vm._v(" "),_c('div',{staticStyle:{"background-color":"#eef1f6","padding":"20px"}},[_vm._v("\n                    "+_vm._s(_vm.dialoaMsg)+"\n                ")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"})])],1),_vm._v(" "),_c('el-col',{staticClass:"mt20",attrs:{"span":24}},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"titleBox_Two font16"},[_vm._v(_vm._s(_vm.LANG['第'] || '第')),_c('span',[_vm._v(_vm._s(_vm.periodsView.period_number))]),_vm._v(_vm._s(_vm.LANG['期游戏抽成费用'] || '期游戏抽成费用'))]),_vm._v(" "),_c('table',{staticClass:"el-table w100 mt20 tCent",attrs:{"border":"1px"}},[_c('tr',[_c('th',[_vm._v(_vm._s(_vm.LANG['交收项目'] || '交收项目'))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['金额(输赢)'] || '金额(输赢)'))]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['抽成比例'] || '抽成比例')+"(%)")]),_vm._v(" "),_c('th',[_vm._v(_vm._s(_vm.LANG['实际交收金额'] || '实际交收金额'))])]),_vm._v(" "),_vm._l((_vm.RoyaltyFeeData),function(items,i){return _c('tr',[_c('td',[_vm._v(_vm._s(items.game_type))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formatMoney")(items.gross_profit)))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(items.proportion))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm._f("formatMoney")(items.received)))])])}),_vm._v(" "),_c('tr',{staticClass:"col2"},[_c('td',{staticClass:"font16",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.LANG['合计'] || '合计')+":")]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.RoyaltyFeeDataAll))])])],2)])],1),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":24}},[_c('el-card',{staticClass:"box-card"},_vm._l((_vm.costStatistics),function(item,k){return _c('div',{key:k,staticClass:"text item"},[_c('span',{staticClass:"font16"},[_vm._v(_vm._s(_vm.LANG[item.label] || item.label)+": ")]),_c('span',[_vm._v(_vm._s(item.val))])])}),0)],1)],1)],1)}
var deliveryDetail_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/statement/deliveryDetail.vue
function injectStyle (context) {
  __webpack_require__(531)
}
/* script */


/* template */

/* template functional */
var deliveryDetail_vue_template_functional_ = false
/* styles */
var deliveryDetail_vue_styles_ = injectStyle
/* scopeId */
var deliveryDetail_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var deliveryDetail_vue_module_identifier_ = null

var deliveryDetail_Component = Object(component_normalizer["a" /* default */])(
  deliveryDetail,
  deliveryDetail_render,
  deliveryDetail_staticRenderFns,
  deliveryDetail_vue_template_functional_,
  deliveryDetail_vue_styles_,
  deliveryDetail_vue_scopeId_,
  deliveryDetail_vue_module_identifier_
)

/* harmony default export */ var statement_deliveryDetail = __webpack_exports__["default"] = (deliveryDetail_Component.exports);


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);