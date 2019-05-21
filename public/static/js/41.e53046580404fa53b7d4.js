(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/receivableBank.vue
var receivableBank = __webpack_require__(265);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d11cad3a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/receivableBank.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"receivableBank"}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":'search',"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"size":_vm.size,"addText":_vm.LANG['新增账户'] ||'新增账户'},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm,"add-new":_vm.AddNew}}),_vm._v(" "),(!_vm.fullscreenLoading)?_c('div',{staticClass:"search"}):_vm._e(),_vm._v(" "),(!_vm.fullscreenLoading)?_c('el-col',[_c('tablegrid',{ref:"bankTable",staticClass:"bankTable",attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"isCreated":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1):_vm._e(),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"size":_vm.size,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/cash/receivableBank.vue
function injectStyle (context) {
  __webpack_require__(510)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  receivableBank["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var cash_receivableBank = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _components_tableGrid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _components_formEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(203);
/* harmony import */ var _components_confirm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(206);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      updated: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      formVisible: {
        state: false
      },
      LANG,
      //表格数据
      tableUrl: "",
      baseUrl: "",
      //列配置
      columnsUrl: "",
      //当前操作数据ID
      nowId: -1,
      //当前表单类型
      formType: "default",
      page: 1,
      //查询
      searchConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "户名"
      }, {
        "prop": "bank_id",
        "value": "",
        "label": "银行名称",
        "type": "select",
        "list": []
      }, {
        "prop": "level",
        "value": "",
        "type": "select",
        "list": ARRAYS.LEVELSLIST,
        "label": "会员等级"
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "启用",
          "value": "enabled"
        }, {
          "label": "停用",
          "value": "disabled"
        }]
      }],
      updateType: "",
      //                //弹窗相关
      size: "small",
      formConfig: [{
        "prop": "levels",
        "value": [],
        "label": "开放会员等级",
        "sReset": false,
        "checkAll": false,
        "allBtnShow": true,
        "type": "checkGroup",
        "list": [],
        "Arr": ARRAYS.LEVELSLIST,
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "bank_id",
        "value": "",
        "label": "银行名称/支付名称",
        "type": "select",
        "list": [],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "accountname",
        "value": "",
        "type": "text",
        "label": "户名",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "address",
        "value": "",
        "type": "text",
        "label": "开户行",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "card",
        "value": "",
        "type": "text",
        "label": "帐号",
        "rules": [{
          "require": true
        }, {
          "max": 60
        }]
      }, {
        "prop": "qrcode",
        "value": [],
        'type': "upload",
        "label": "二维码地址",
        "action": URL.img,
        "fileNum": 1
      }, {
        "prop": "limit_day_max",
        "value": "",
        "type": "number",
        "label": "日停用金额",
        "rules": [{
          varMax: 10000000
        }, {
          "require": true
        }]
      }, {
        "prop": "sort",
        "value": "",
        "type": "number",
        "label": "排序",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "is_enabled",
        "value": "1",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "启用",
          "value": "1"
        }, {
          "label": "停用",
          "value": "0"
        }],
        "isDefault": true
      }, {
        "prop": "comment",
        "value": "",
        "type": "textarea",
        "label": "存款说明",
        "rules": [{
          "require": true
        }]
      }],
      type: "default",
      formType: "",
      formTitel: "",
      labelWidth: "120px",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      nowId: -1,
      //页面加载状态
      fullscreenLoading: false,
      loading: false
    };
  },

  components: {
    tablegrid: _components_tableGrid_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    formEdit: _components_formEdit_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    confirm: _components_confirm_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  },
  methods: {
    init() {
      let _this = this;

      this.fullscreenLoading = true;
      this.tableUrl = URL.api + ROUTES.GET.cash.bank.acounts;
      this.baseUrl = URL.api + ROUTES.GET.cash.bank.acounts;
      this.columnsUrl = "/static/json/cash/receivableBank/columns.json";
      this.$.autoAjax('get', URL.api + ROUTES.GET.allBanks, '', {
        ok: res => {
          if (res.state == 0 && res.data.length) {
            let model = res.data || [];
            let list = _this.formConfig[1].list;
            let search = _this.searchConfig[1].list;

            if (model.length > 0) {
              for (let i in model) {
                list.push({
                  "label": model[i].name,
                  "value": model[i].id
                });
                search.push({
                  "label": model[i].name,
                  "value": model[i].id
                });
              }
            }

            _this.fullscreenLoading = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //获取会员层级

      let model = global.ARRAYS.LEVELSLIST;

      for (let k in model) {
        _this.formConfig[0].list.push(model[k].value);
      }
    },

    //新增
    AddNew() {
      this.formTitel = "新增收款银行账户";
      this.formConfig[8].disabled = false;
      this.editVisible.state = true;
      this.formType = "add";
    },

    //保存弹窗数据
    getForm(obj) {
      let _this = this;

      this.fullscreenLoading = true;
      _this.updated = false;

      if (parseInt(obj.formObj.limit_day_max) > 0) {
        obj.formObj.limit_day_max = obj.formObj.limit_day_max * 100;
      }

      if (parseInt(obj.formObj.limit_max) > 0) {
        obj.formObj.limit_max = obj.formObj.limit_max * 100;
      }

      if (obj.formObj.qrcode == "") {
        obj.formObj.qrcode = null;
      } else {
        obj.formObj.qrcode = obj.formObj.qrcode.toString();
      }

      obj.formObj.levels = obj.formObj.levels.join(",");
      let query = {};

      for (let k in obj.formObj) {
        query[k] = obj.formObj[k];
      }

      query.accountname = obj.formObj.accountname;

      if (!query.sort) {
        query.sort = 0;
      }

      if (this.formType == "edit") {
        delete query.id;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.cash.bank.account + "?id=" + this.nowId, query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.$message.success(LANG['修改收款账户成功'] || '修改收款账户成功');
            } else if (res.state == 2003 && res.data) {
              _this.$message.error(LANG['无修改权限!'] || '无修改权限!');
            } else if (res.state == 1002 && res.data) {
              _this.$message.error(LANG['相同的银行账号已经存在!'] || '相同的银行账号已经存在!');
            } else {
              _this.$message.error(LANG[res.msg] || res.msg);
            }

            _this.updated = true;
          },
          p: () => {},
          error: e => {}
        });
      }

      if (this.formType == "add") {
        this.$.autoAjax('put', URL.api + ROUTES.POST.cash.bank.account, query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.$message.success(LANG['新增收款账户成功'] || '新增收款账户成功');
            } else if (res.state == 1002 && res.data) {
              _this.$message.error(LANG['相同的银行账号已经存在!'] || '相同的银行账号已经存在!');
            } else {
              _this.$message.error(LANG[res.msg] || res.msg);
            }

            _this.updated = true;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }

      this.fullscreenLoading = false;
      _this.formType = "";
    },

    //表格数据按钮
    doHandle(item) {
      this.nowId = parseInt(item.row.id) || -1;
      this.formType = "", this.updated = false;

      switch (item.fn) {
        case "doEdit":
          this.doEdit(item.row);
          break;

        case "doDisable":
          this.doDisable(item.row);
          break;

        case "doEnable":
          this.doEnable(item.row);
          break;

        case "doDelete":
          this.doDelete(item.row);
          break;
      }
    },

    //停用
    doDisable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.accountname + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "disabled";
        this.confirmConfig.obj = row;
      }
    },

    //删除
    doDelete(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.accountname + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "doDelete";
        this.confirmConfig.obj = row;
      }
    },

    doEnable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.accountname + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "enabled";
        this.confirmConfig.obj = row;
      }
    },

    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "disabled":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.bank.account + "?id=" + _this.nowId, {
            "status": 0
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.formType = "disabled";

                _this.$message.success(_this.LANG['收款银行帐号停用成功！'] || '收款银行帐号停用成功！');

                _this.updated = true;
              } else if (res.state == 4003 || res.state == 405) {
                _this.$message.error(res.msg + (_this.LANG['权限不足！'] || '权限不足！'));
              } else {
                _this.$message.error(_this.LANG['收款银行帐号停用失败，请稍后重试！'] || '收款银行帐号停用失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "enabled":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.bank.account + "?id=" + _this.nowId, {
            "status": 1
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.formType = "enabled";

                _this.$message.success(_this.LANG['收款银行帐号启用成功！'] || '收款银行帐号启用成功！');

                _this.updated = true;
              } else if (res.state == 4003 || res.state == 405) {
                _this.$message.error(res.msg + (_this.LANG['权限不足！'] || '权限不足！'));
              } else {
                _this.$message.error(res.msg);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "doDelete":
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.cash.bank.account + '?id=' + _this.nowId, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.formType = "doDelete";

                _this.$message.success(_this.LANG['收款银行帐号删除成功！'] || '收款银行帐号删除成功！');

                _this.updated = true;
              } else if (res.state == 4003 || res.state == 405) {
                _this.$message.error(res.msg + (_this.LANG['权限不足！'] || '权限不足！'));
              } else {
                _this.$message.error(_this.LANG['收款银行帐号删除失败，请稍后重试！'] || '收款银行帐号删除失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;
      }
    },

    //编辑
    doEdit(row) {
      let _this = this,
          arr = [];

      this.loading = true;
      this.formTitel = "编辑收款银行账户";
      this.nowId = parseInt(row.id);
      this.isEdit.state = false;
      this.formConfig[8].disabled = true;
      this.$.autoAjax('get', URL.api + ROUTES.GET.cash.bank.acount + "?id=" + this.nowId, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data ? res.data : {};

            if (model.levels.length) {
              model.levels.toUpperCase().split(',').forEach((item, index) => {
                arr[index] = item.split('VIP')[1];
              });
              model.levels = arr;
            }

            if (FORMATNUMBER(model.limit_day_max) > 0) {
              model.limit_day_max = FORMATMONEY(model.limit_day_max).toString();
            }

            if (FORMATNUMBER(model.limit_max) > 0) {
              model.limit_max = FORMATMONEY(model.limit_max).toString();
            }

            FORMVAL(model, _this.formConfig);
            _this.formConfig[0].value = model.levels;
            _this.formType = "edit";
            _this.editVisible.state = true;
            _this.isEdit.state = true;
          } else {
            _this.$message.error(_this.LANG['获取收款银行信息失败，请稍后重试！'] || '获取收款银行信息失败，请稍后重试！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
      _this.loading = false;
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      this.tableUrl = this.baseUrl;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.updated = false;
    setTimeout(() => {
      this.updated = true;
    }, 500);
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);