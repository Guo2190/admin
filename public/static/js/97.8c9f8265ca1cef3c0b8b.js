(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);
var nprogress_default = /*#__PURE__*/__webpack_require__.n(nprogress);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/strategy/ipBlacklist.vue
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



/* harmony default export */ var ipBlacklist = ({
  data() {
    return {
      LANG,
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      //搜索相关
      searchConfig: [//快捷日期
      {
        "prop": "ip",
        "value": "",
        "type": "text",
        "label": "IP"
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "允许",
          "value": "0"
        }, {
          "label": "禁止",
          "value": "1"
        }] // {"type":"dateGroup","label":"建立时间",
        //     "prop":[{"prop":"time_begin","value":"","label":"开始时间"},
        //         {"prop":"time_end","value":"","label":"结束时间"}]}

      }],
      nowId: -1,
      isEdit: {},
      labelWidth: "80px",
      baseUrl: "",
      // form
      formVisible: {
        state: false
      },
      type: "default",
      formTitle: "",
      formType: "",
      formLabelWidth: "60px",
      formConfig: [{
        "prop": "ip",
        "value": "",
        "label": "IP",
        "type": "textarea",
        "rows": "1",
        "placeholder": "提示:多个ip请用英文的 / 隔开",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "memo",
        "value": "",
        "label": "备注",
        "type": "textarea",
        "rules": [{
          "max": 128
        }]
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "rules": [{
          "require": true
        }],
        "list": [{
          "label": "允许",
          "value": "0"
        }, {
          "label": "禁止",
          "value": "1"
        }]
      }],
      selectedIds: [],
      // table选中的选项
      //批量操作按钮
      tabOperation: [{
        "label": "批量删除",
        "fn": "doBatchDel"
      }, {
        "label": "批量限制",
        "fn": "doBatchLimit"
      }, {
        "label": "批量允许",
        "fn": "doBatchAllow"
      }],
      updated: false
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "/static/json/systemSettings/IPblacklist/columns.json"; // this.tableUrl = URL.api + ROUTES.GET.system.ipblacks + "?time_begin=" + sessionStorage.sysTime + "&time_end=" + sessionStorage.sysTime;

      this.tableUrl = URL.api + ROUTES.GET.system.ipblacks;
      this.baseUrl = URL.api + ROUTES.GET.system.ipblacks;
    },

    //查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //重置
    resetForm() {
      this.tableUrl = this.baseUrl + "?time_begin=" + sessionStorage.dateTimeStart + "&time_end=" + sessionStorage.dateTimeEnd;
    },

    //表格批量数据
    doOperation(obj) {
      switch (obj.fn) {
        case "doBatchDel":
          // 编辑
          this.doBatchDel(obj.rows);
          break;

        case "doBatchAllow":
          this.doBatchAllow(obj.rows);
          break;

        case "doBatchLimit":
          this.doBatchLimit(obj.rows);
          break;
      }
    },

    //表格数据按钮
    doHandle(item) {
      this.formType = "";

      switch (item.fn) {
        case "doEdit":
          // 编辑
          // this.$message.error(LANG['权限不足！'] || '权限不足！');
          // return;
          this.doEdit(item.row);
          break;

        case "doAllow":
          this.submitAllow(item.row);
          break;

        case "doLimit":
          this.submitLimit(item.row);
          break;

        case "doDel":
          this.submitDel(item.row);
          break;
      }
    },

    doEdit(row) {
      this.nowId = row.id;
      this.formTitle = this.LANG["修改IP"] || "修改IP";
      FORMVAL(row, this.formConfig);

      let _this = this;

      setTimeout(function () {
        _this.formVisible.state = true;
        _this.formType = "edit";
      }, 500);
    },

    submitAllow(row) {
      this.updated = false;
      let temp = [];
      temp.push(row.id);
      this.$.autoAjax('patch', URL.api + '/system/ipblacks', {
        status: 0,
        ids: temp
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['允许IP成功'] || '允许IP成功');
            this.updated = true;
          } else {
            this.$message.error(this.LANG['允许IP失败，请稍后重试'] || '允许IP失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + '/system/ipblacks' , JSON.stringify({status: 0,ids: temp}), URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         this.$message.success(this.LANG['允许IP成功'] || '允许IP成功');
      //         this.updated = true;
      //     } else {
      //         this.$message.error(this.LANG['允许IP失败，请稍后重试'] || '允许IP失败，请稍后重试');
      //     }
      // })
    },

    submitLimit(row) {
      this.updated = false;
      let temp = [];
      temp.push(row.id);
      this.$.autoAjax('patch', URL.api + '/system/ipblacks', {
        status: 1,
        ids: temp
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['限制IP成功'] || '限制IP成功');
            this.updated = true;
          } else {
            this.$message.error(this.LANG['限制IP失败，请稍后重试'] || '限制IP失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + '/system/ipblacks' , JSON.stringify({status: 1, ids: temp}), URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         this.$message.success(this.LANG['限制IP成功'] || '限制IP成功');
      //         this.updated = true;
      //     } else {
      //         this.$message.error(this.LANG['限制IP失败，请稍后重试'] || '限制IP失败，请稍后重试');
      //     }
      // })
    },

    submitDel(row) {
      this.updated = false;
      this.$.autoAjax('delete', URL.api + ROUTES.DELETE.system.ipblacks + '?ids=' + row.id, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.updated = true;
            this.$message.success(this.LANG['删除IP成功'] || '删除IP成功');
          } else {
            this.$message.error(this.LANG['删除IP失败，请稍后重试'] || '删除IP失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.delete(URL.api + ROUTES.DELETE.system.ipblacks +'?ids='+ row.id, URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         this.updated = true;
      //         this.$message.success(this.LANG['删除IP成功'] || '删除IP成功');
      //     } else {
      //         this.$message.error(this.LANG['删除IP失败，请稍后重试'] || '删除IP失败，请稍后重试');
      //     }
      // })
    },

    //选中删除数据
    doDelete(row) {
      var _this = this;

      let url = URL.api + ROUTES.DELETE.unused.list;
      this.$http.get(url).then(function (res) {
        nprogress_default.a.done();
      }).catch(function (err) {//                    console.log(err)
      });
    },

    doAddIP() {
      this.formTitle = this.LANG["添加IP"] || "添加IP";
      this.formVisible.state = true;
      this.formType = "add";
      this.isEdit.state = false;
    },

    // 批量删除
    doBatchDel(rows) {
      this.updated = false;

      let _this = this;

      let ids = [];

      for (let k in rows) {
        ids.push(rows[k].id);
      }

      this.$.autoAjax('delete', URL.api + ROUTES.DELETE.system.ipblacks + '?ids=' + ids.join(","), '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            _this.$message.success(this.LANG['批量删除IP成功'] || '批量删除IP成功');

            _this.updated = true;
          } else {
            _this.$message.error(this.LANG['批量删除IP失败，请稍后重试'] || '批量删除IP失败，请稍后重试');

            _this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.delete(URL.api + ROUTES.DELETE.system.ipblacks +'?ids='+ ids.join(","), URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         _this.$message.success(this.LANG['批量删除IP成功'] || '批量删除IP成功');
      //         _this.updated = true;
      //     } else {
      //         _this.$message.error(this.LANG['批量删除IP失败，请稍后重试'] || '批量删除IP失败，请稍后重试');
      //         _this.updated = false;
      //     }
      // })
    },

    // 批量允许
    doBatchAllow(rows) {
      this.updated = false;

      let _this = this;

      let ids = [];

      for (let k in rows) {
        ids.push(rows[k].id);
      }

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.system.ipblacks, {
        status: 0,
        ids: ids
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['批量允许IP成功'] || '批量允许IP成功');
            _this.updated = true;
          } else {
            this.$message.error(this.LANG['批量允许IP失败，请稍后重试'] || '批量允许IP失败，请稍后重试');
            _this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.system.ipblacks, JSON.stringify({status: 0, ids: ids}), URLCONFIG).then((res) => {
      //         if (res.data.state === 0 && res.data.data) {
      //             this.$message.success(this.LANG['批量允许IP成功'] || '批量允许IP成功');
      //             _this.updated = true;
      //         } else {
      //             this.$message.error(this.LANG['批量允许IP失败，请稍后重试'] || '批量允许IP失败，请稍后重试');
      //             _this.updated = false;
      //         }
      //     })
    },

    // 批量限制
    doBatchLimit(rows) {
      this.updated = false;

      let _this = this;

      let ids = [];

      for (let k in rows) {
        ids.push(rows[k].id);
      }

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.system.ipblacks, {
        status: 1,
        ids: ids
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['批量限制IP成功'] || '批量限制IP成功');
            _this.updated = true;
          } else {
            this.$message.error(this.LANG['批量限制IP失败，请稍后重试'] || '批量限制IP失败，请稍后重试');
            _this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.system.ipblacks, JSON.stringify({status: 1, ids: ids}), URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         this.$message.success(this.LANG['批量限制IP成功'] || '批量限制IP成功');
      //         _this.updated = true;
      //     } else {
      //         this.$message.error(this.LANG['批量限制IP失败，请稍后重试'] || '批量限制IP失败，请稍后重试');
      //         _this.updated = false;
      //     }
      // })
    },

    // 提交新增修改
    submitForm(obj) {
      let _this = this;

      let str = "";
      obj.formObj.ip = obj.formObj.ip.split('/'); //
      // obj.formObj.id = this.nowId;

      let add_adit_ip_url = '';
      this.formType === "add" ? add_adit_ip_url = URL.api + ROUTES.PUT.system.ipblacks : add_adit_ip_url = URL.api + ROUTES.PUT.system.ipblacks + "?id=" + parseInt(this.nowId);
      this.updated = false;
      this.$.autoAjax('put', add_adit_ip_url, obj.formObj, {
        ok: res => {
          if (res.state === 0 && res.data) {
            if (_this.formType === "add") {
              str = _this.LANG['新增IP成功！'] || '新增IP成功！';
              _this.updateType = "add";
            } else {
              str = _this.LANG['IP修改成功！'] || 'IP修改成功！';
              _this.updateType = "edit";
            }

            _this.$message.success(str);

            _this.updated = true;
          } else {
            if (_this.formType === "add") {
              str = res.data.msg; //                            str=_this.LANG['新增IP失败，请稍候重试！'] || '新增IP失败，请稍候重试！';
            } else {
              str = _this.LANG['修改IP失败，请稍候重试！'] || '修改IP失败，请稍候重试！';
            }

            _this.$message.error(str);
          }

          _this.formType = "";
          _this.formVisible.state = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //                 this.$http.put(add_adit_ip_url,JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
      //                     if (res.data.state === 0 && res.data.data) {
      //                         if(_this.formType === "add"){
      //                             str=_this.LANG['新增IP成功！'] || '新增IP成功！';
      //                             _this.updateType = "add";
      //                         }else{
      //                             str=_this.LANG['IP修改成功！'] || 'IP修改成功！';
      //                             _this.updateType = "edit";
      //                         }
      //                         _this.$message.success(str);
      //                         _this.updated = true;
      //
      //                     }else{
      //                         if(_this.formType === "add"){
      //                         	str = res.data.msg;
      // //                            str=_this.LANG['新增IP失败，请稍候重试！'] || '新增IP失败，请稍候重试！';
      //                         }else{
      //                             str=_this.LANG['修改IP失败，请稍候重试！'] || '修改IP失败，请稍候重试！';
      //                         }
      //                         _this.$message.error(str);
      //                     }
      //                     _this.formType = "";
      //                     _this.formVisible.state = false;
      //                 })
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f6fd4b3","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/strategy/ipBlacklist.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"IpBlacklist"}},[_c('el-col',{staticClass:"pb"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":'search',"labelWidth":_vm.labelWidth,"isEdit":{},"addText":_vm.LANG['新增IP'] || '新增IP'},on:{"do-query":_vm.doQuery,"do-resetForm":_vm.resetForm,"add-new":_vm.doAddIP}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":true,"pageSet":true,"showRefresh":false,"tabOperation":_vm.tabOperation,"updated":_vm.updated},on:{"do-operation":_vm.doOperation,"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitle,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.formLabelWidth,"formType":_vm.formType,"isEdit":{}},on:{"get-form":_vm.submitForm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/strategy/ipBlacklist.vue
function injectStyle (context) {
  __webpack_require__(474)
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
  ipBlacklist,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var strategy_ipBlacklist = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);