(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/ADManage/depositCopy.vue
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



/* harmony default export */ var depositCopy = ({
  data() {
    return {
      LANG,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      //新增修改
      type: "default",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {
        state: false
      },
      formVisible: {
        state: false
      },
      //当前FORM类型，新增add,修改edit
      formType: "",
      formConfig: [{
        "prop": "name",
        "value": "",
        "label": "文案名称",
        "type": "text",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "language_id",
        "value": "",
        "label": "语言",
        "type": "select",
        "list": [],
        "propVal": "language_name",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "content",
        "value": "",
        "type": "markdown",
        "label": "活动内容",
        "config": {
          maximumWords: 500
        },
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "apply_to",
        "value": "",
        "label": "使用于",
        "type": "select",
        "list": ARRAYS.fileTypeUse,
        "rules": [{
          "require": true
        }]
      }],
      searchConfig: [{
        "prop": "name",
        "value": "",
        "label": "文案类型",
        "type": "text",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "language",
        "value": "",
        "label": "语言",
        "type": "select",
        "list": [{
          "label": "中文",
          "value": "1"
        }, {
          "label": "English",
          "value": "2"
        }],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "use_for",
        "value": "",
        "label": "使用于",
        "type": "select",
        "list": [{
          "label": "线上入款",
          "value": "1"
        }, {
          "label": "公司入款",
          "value": "2"
        }, {
          "label": "微信入款",
          "value": "3"
        }, {
          "label": "支付宝入款",
          "value": "4"
        }],
        "rules": [{
          "require": true
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
        }],
        "rules": [{
          "require": true
        }]
      }],
      editflag: false,
      id: null,
      //是否更新数据
      updated: false,
      loading: false,
      //查看详情的标题
      titleDetails: '',
      //查看的窗口状态
      dialogTableVisible: false,
      details: {},
      formLabelWidth: '100px',
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      }
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.copywriter.deposit;
      this.columnsUrl = "/static/json/ADManage/depositCopy/columns.json"; //获取语言列表

      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$.autoAjax('get', langeUrl, '', {
        ok: res => {
          res.data.forEach(item => {
            this.formConfig[1].list.push({
              "label": item.name.toString(),
              "value": item.id.toString()
            });
          });
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //表格操作点击事件处理
    doHandle(e) {
      this.id = e.row.id;

      switch (e.fn) {
        case "doEnabled":
          this.doEnabled(e.row);
          break;

        case "doEdit":
          this.doEdit(e.row);
          break;

        case "doApption":
          this.doApption(e.row);
          break;

        case "doDel":
          this.doDel(e.row);
          break;

        case "doDisabled":
          this.doDisabled(e.row);
          break;

        case "doDetails":
          this.doDetails(e.row);
          break;
      }
    },

    //新增
    AddNew() {
      this.formTitel = "新增存款文案"; //                for(let i in this.formConfig){
      //                        this.formConfig[i].value= "";
      //                }

      this.formType = "add";
      this.formVisible.state = true;
    },

    //保存数据
    getForm(obj) {
      let _this = this;

      this.fullscreenLoading = true;
      this.loading = true;
      this.updated = false;
      let str = "";

      if (_this.formType != "edit") {
        obj.formObj.pf = 'pc';
        obj.formObj.status = 'disabled';
        obj.formObj.type = 'deposit';
        this.$.autoAjax('put', URL.api + ROUTES.POST.copywriter.deposit, obj.formObj, {
          ok: res => {
            if (res.data && res.state == 0) {
              this.$message.success(LANG["恭喜您，新增存款文案成功！"] || "恭喜您，新增存款文案成功！");
              this.formType = "";
              obj.formObj = "";
              this.loading = false;
              this.updated = true;
            } else if (res.data == false && res.state > 3) {
              str = res.msg;
              this.$message.error(LANG[str] || str);
              this.loading = false;
              this.updated = false;
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.POST.copywriter.deposit, obj.formObj, URLCONFIG).then((res) => {
        //     if (res.data.data && res.data.state == 0) {
        //         this.$message.success(LANG["恭喜您，新增存款文案成功！"] || "恭喜您，新增存款文案成功！");
        //         this.formType = ""
        //         obj.formObj = "";
        //         this.loading = false;
        //         this.updated = true;
        //     } else if (res.data.data == false && res.data.state > 3) {
        //         str = res.data.msg;
        //         this.$message.error(LANG[str] || str);
        //         this.loading = false;
        //         this.updated = false;
        //     }
        // })
      } else {
        // obj.formObj.id = this.id;
        this.$http.put(URL.api + ROUTES.POST.copywriter.deposit + '?id=' + this.id, obj.formObj, URLCONFIG).then(res => {
          if (res.data.data && res.data.state == 0) {
            this.$message.success(LANG["恭喜您，修改存款文案成功！"] || "恭喜您，修改存款文案成功！");
            this.formType = "";
            obj.formObj = "";
            this.loading = false;
            this.updated = true;
          } else if (res.data.data == false && res.data.state > 3) {
            str = res.data.msg;
            this.$message.error(LANG[str] || str);
            this.loading = false;
            this.updated = false;
          }
        }); // this.$http.put(URL.api + ROUTES.POST.copywriter.deposit + '?id=' + this.id, JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
        //     if (res.data.data && res.data.state == 0) {
        //         this.$message.success(LANG["恭喜您，修改存款文案成功！"] || "恭喜您，修改存款文案成功！");
        //         this.formType = "";
        //         obj.formObj = ""
        //         this.loading = false;
        //         this.updated = true;
        //     } else if (res.data.data == false && res.data.state > 3) {
        //         str = res.data.msg;
        //         this.$message.error(LANG[str] || str);
        //         this.loading = false;
        //         this.updated = false;
        //     }
        // })
      }
    },

    //启用
    doEnabled(obj) {
      this.loading = true;
      this.updated = false;

      let _this = this;

      let val = this.id;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {
        "status": "enabled",
        "language_id": obj.language_id,
        "pf": obj.pf,
        "apply_to": obj.apply_to
      }, {
        ok: res => {
          if (res.state == 0) {
            this.$message.success(LANG["启用成功"] || "启用成功");
            this.loading = false;
            this.updated = true;
          } else {
            this.$message.error(LANG["启用失败"] || "启用失败");
            this.loading = false;
            this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"status": "enabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, URLCONFIG).then((res) => {
      //     if (res.data.state == 0) {
      //         this.$message.success(LANG["启用成功"] || "启用成功");
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG["启用失败"] || "启用失败");
      //         this.loading = false;
      //         this.updated = false;
      //     }
      // })
      // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), JSON.stringify({"status": "enabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}), URLCONFIG).then((res) => {
      //     if (res.data.state == 0) {
      //         this.$message.success(LANG["启用成功"] || "启用成功");
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG["启用失败"] || "启用失败");
      //         this.loading = false;
      //         this.updated = false;
      //     }
      //
      // })
    },

    //停用
    doDisabled(obj) {
      this.loading = true;
      this.updated = false;

      let _this = this;

      let val = this.id;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {
        "status": "disabled",
        "language_id": obj.language_id,
        "pf": obj.pf,
        "apply_to": obj.apply_to
      }, {
        ok: res => {
          if (res.state == 0) {
            this.$message.success(LANG["停用成功"] || "停用成功");
            this.loading = false;
            this.updated = true;
          } else {
            this.$message.error(LANG["停用失败"] || "停用失败");
            this.loading = false;
            this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"status": "disabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, URLCONFIG).then((res) => {
      //     if (res.data.state == 0) {
      //         this.$message.success(LANG["停用成功"] || "停用成功");
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG["停用失败"] || "停用失败");
      //         this.loading = false;
      //         this.updated = false;
      //     }
      // })
      // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), JSON.stringify({"status": "disabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}), URLCONFIG).then((res) => {
      //     if (res.data.state == 0) {
      //         this.$message.success(LANG["停用成功"] || "停用成功");
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG["停用失败"] || "停用失败");
      //         this.loading = false;
      //         this.updated = false;
      //     }
      //
      // })
    },

    //申请
    doApption(obj) {
      this.loading = true;
      this.updated = false;

      let _this = this;

      let val = this.id;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {
        "approve_status": "applying",
        "language_id": obj.language_id,
        "pf": obj.pf,
        "apply_to": obj.apply_to
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG["申请成功"] || "申请成功");
            this.loading = false;
            this.updated = true;
          } else {
            this.$message.error(LANG["申请失败"] || "申请失败");
            this.loading = false;
            this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         this.$message.success(LANG["申请成功"] || "申请成功");
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG["申请失败"] || "申请失败");
      //         this.loading = false;
      //         this.updated = false;
      //     }
      // })
      // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), JSON.stringify({"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}), URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         this.$message.success(LANG["申请成功"] || "申请成功");
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG["申请失败"] || "申请失败");
      //         this.loading = false;
      //         this.updated = false;
      //     }
      //
      // })
    },

    //编辑
    doEdit(row) {
      let _this = this;

      this.formType = "";
      this.formTitel = "修改存款文案";
      setTimeout(() => {
        this.formType = "edit";
        FORMVAL(row, this.formConfig);
        this.isEdit.state = true;
        this.formVisible.state = true;
      }, 500);
    },

    //删除
    doDel(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
        this.confirmConfig.obj = row;
      }
    },

    doConfirm(obj) {
      this.loading = true;
      this.updated = false;

      var _this = this;

      switch (obj.fn) {
        case "delete":
          this.$.autoAjax('delete', URL.api + '/copywriter/deposit?id=' + obj.obj.id + "&pf=" + obj.obj.pf, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                this.$message.success(_this.LANG["删除成功"] || "删除成功");
                this.updated = true;
              } else {
                this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
              }

              this.loading = false;
            },
            p: () => {},
            error: e => {
              this.loading = false;
              this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
            }
          }); // this.$http.delete(URL.api + '/copywriter/deposit?id=' + obj.obj.id + "&pf=" + obj.obj.pf, URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         this.$message.success(_this.LANG["删除成功"] || "删除成功");
          //         this.updated = true;
          //     } else {
          //         this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
          //     }
          //     this.loading = false;
          // }).catch((e) => {
          //     this.loading = false;
          //     this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
          // })

          break;
      }
    },

    //查看详情
    doDetails(row) {
      row.type_id = row.type;
      this.nowId = row.id;
      this.titleDetails = '《' + row.name + '》' + '的详情';
      this.dialogTableVisible = true;
      this.details = row;

      for (let k in row) {
        //                    if(k === 'content'){
        //                        this.details[k] = this.markdownTransform(row[k]);
        //                    }else{
        this.details[k] = row[k]; //                    }
      } //                let _this = this;
      //                this.formTitel = "代理文案";
      //                setTimeout(() => {
      //                    this.formType = "edit";
      //                    FORMVAL(row, this.formConfig);
      //                    this.isEdit.state = true;
      //                    this.formVisible.state = true;
      //                }, 500)

    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-531e8108","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/ADManage/depositCopy.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"depositCopy"}},[_c('el-col',{staticClass:"pb",staticStyle:{"text-align":"right"}},[_c('el-button',{staticClass:"btn_right",attrs:{"size":"small","type":"primary"},domProps:{"textContent":_vm._s(_vm.LANG['新增存款文案'] || '新增存款文案')},on:{"click":_vm.AddNew}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"showRefresh":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}}),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"detail",attrs:{"title":_vm.titleDetails,"size":"tiny"},model:{value:(_vm.dialogTableVisible),callback:function ($$v) {_vm.dialogTableVisible=$$v},expression:"dialogTableVisible"}},[_c('el-form',{attrs:{"model":_vm.details}},[_c('el-form-item',{attrs:{"label":_vm.LANG['文案名称:'] || '文案名称:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.details.name))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['语言:'] || '语言:',"label-width":_vm.formLabelWidth}},[_c('p',{staticStyle:{"width":"90%"}},[_vm._v(_vm._s(_vm.details['language_name']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['文案内容:'] || '文案内容:',"label-width":_vm.formLabelWidth}},[_c('div',{staticClass:"mark_waip",domProps:{"innerHTML":_vm._s(_vm.details['content'])}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['生成时间:'] || '生成时间:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.details['created']))])])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogTableVisible = false}}},[_vm._v("关 闭")])],1)],1)],1),_vm._v(" "),_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/ADManage/depositCopy.vue
function injectStyle (context) {
  __webpack_require__(419)
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
  depositCopy,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var ADManage_depositCopy = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);