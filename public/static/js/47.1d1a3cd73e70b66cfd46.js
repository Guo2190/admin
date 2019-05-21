(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/activeSet.vue
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



/* harmony default export */ var activeSet = ({
  data() {
    return {
      LANG,
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      baseUrl: "",
      dialogVisible: false,
      //搜索相关Search
      searchConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "优惠活动名称"
      }, {
        "prop": "issue_mode",
        "value": "",
        "label": "发放方式",
        "type": "select",
        "list": [{
          "label": "手动",
          "value": "manual"
        }, {
          "label": "自动",
          "value": "auto"
        }]
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
      }, {
        "type": "dateGroup",
        "label": "创建时间",
        "prop": [{
          "prop": "begin_time",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间"
        }]
      }],
      typeSearch: "search",
      labelWidthSearch: "100px",
      formVisibleSearch: {
        state: false
      },
      //是否编辑数据
      isEditSearch: {
        state: false
      },
      //修改页面弹窗
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "优惠活动名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "type_id",
        "value": "",
        "label": "所属优惠类型",
        "type": "select",
        "list": [],
        "rules": [{
          "require": true
        }]
      }, //                    {"prop": "type_name", "value": "", "type": "text", "label": "所属优惠类型", "rules": [{"require": true}]},
      {
        "prop": "created_uname",
        "value": "",
        "type": "text",
        "label": "创建人",
        "rules": [{
          "require": true
        }]
      }, {
        "type": "dateGroup",
        "label": "建立时间",
        "prop": [{
          "prop": "begin_time",
          "value": "2014",
          "label": "开始时间",
          "type": "datePicker"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间",
          "type": "datePicker"
        }]
      }],
      type: "default",
      formTitel: "",
      labelWidth: "110px",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      confirmConfig: {
        state: false
      },
      labelform: {
        id: "",
        name: "",
        type_name: "",
        created_uname: "",
        begin_time: "",
        end_time: ""
      },
      //                modificationUrl: '',
      nowId: '',
      //刷新当前数据
      updated: false,
      formType: '',
      loading: false,
      //模板类型
      modeType: 0,
      modeName: ''
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "static/json/preAct/activeSet/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.actives.$;
      this.baseUrl = URL.api + ROUTES.GET.actives.$; //获取优惠活动类型

      let list = this.formConfig[1].list;
      this.$.autoAjax('get', URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              list.push({
                "label": model[k].name,
                "value": model[k].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    doAddNews() {
      this.$router.push({
        path: '/addActiveSet'
      });
    },

    //搜索
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //重置查询条件
    resetForm(obj) {
      this.tableUrl = this.baseUrl;
    },

    //表格按钮点击事件
    doHandle(item) {
      this.formType = "";

      switch (item.fn) {
        case "doStop":
          this.doStop(item.row);
          break;

        case "doStart":
          this.doStart(item.row);
          break;

        case "domodification":
          this.domodification(item.row);
          break;

        case "doDel":
          this.doDel(item.row);
          break;
      }
    },

    //停用
    doStop(row) {
      this.nowId = row.id;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "stop";
      }
    },

    //启用
    doStart(row) {
      this.nowId = row.id;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "start";
      }
    },

    doConfirm(obj) {
      this.loading = true;
      this.updated = false;

      let _this = this;

      switch (obj.fn) {
        case "stop":
          let stopUrl = URL.api + ROUTES.PATCH.active.manualStatus + '/' + this.nowId;
          this.$.autoAjax('patch', stopUrl, {
            status: 'disabled'
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，停用成功！'] || '恭喜您，停用成功！');

                _this.updated = true;
              } else {
                let str = LANG[`${res.msg}`] || `${res.msg}`;

                _this.$message.error(str);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "start":
          let startUrl = URL.api + ROUTES.PATCH.active.manualStatus + '/' + this.nowId;
          this.$.autoAjax('patch', startUrl, {
            status: 'enabled'
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，启用成功！'] || '恭喜您，启用成功！');

                _this.updated = true;
              } else {
                let str = LANG[`${res.msg}`] || `${res.msg}`;

                _this.$message.error(str);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "delete":
          let delUrl = URL.api + ROUTES.DELETE.active.manualDel + '/' + this.nowId + '?type=' + _this.modeType + '&name=' + _this.modeName;
          this.$.autoAjax('delete', delUrl, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，删除成功！'] || '恭喜您，删除成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['删除失败，请稍后重试！'] || '删除失败，请稍后重试！');

                _this.updated = false;
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
    domodification(row) {
      this.nowId = row.id;
      this.$router.push({
        path: `activeMode_${row.template_id}`,
        query: {
          label: row.name,
          id: row.id,
          template_id: row.template_id,
          status: row.status,
          type: "edit"
        }
      });
    },

    //删除
    doDel(row) {
      this.modeName = row.name;
      this.nowId = row.id;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
      }
    }

  },
  computed: {},

  mounted() {},

  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c7a40e0","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/activeSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"activeSet"}},[_c('el-col',[_c('formEdit',{attrs:{"formVisible":_vm.formVisibleSearch,"formConfig":_vm.searchConfig,"type":_vm.typeSearch,"initDate":true,"labelWidth":_vm.labelWidthSearch,"isEdit":_vm.isEditSearch,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增优惠活动'] || '新增优惠活动')},on:{"click":_vm.doAddNews}})],1),_vm._v(" "),_c('el-col',{staticClass:"mt10"},[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"updated":_vm.updated,"showRefresh":false,"tableIndex":false},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{staticClass:"formWindow",attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/activeSet.vue
function injectStyle (context) {
  __webpack_require__(430)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c7a40e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  activeSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_activeSet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);