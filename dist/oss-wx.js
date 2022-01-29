(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global["oss-wx"] = global["oss-wx"] || {}, global["oss-wx"].js = factory()));
})(this, (function () { 'use strict';

    var main = {};

    var initOptions = {};

    Object.defineProperty(initOptions, "__esModule", { value: true });
    function default_1(options) {
        this.options = Object.assign({}, options);
        console.log("test------>");
    }
    initOptions.default = default_1;

    Object.defineProperty(main, "__esModule", { value: true });
    const initOptions_1 = initOptions;
    class Client {
        constructor(options) {
            this.options = {
                accessKeyId: "",
                accessKeySecret: "",
                region: "oss-cn-hangzhou",
                internal: false,
                secure: false,
                timeout: 60000,
                bucket: undefined,
                endpoint: undefined,
                cname: false,
                isRequestPay: false,
                sldEnable: false,
                headerEncoding: "utf-8",
                refreshSTSToken: undefined,
                refreshSTSTokenInterval: 60000 * 5,
                retryMax: 0,
            };
            this.initOptions = initOptions_1.default;
            this.initOptions(options);
        }
    }
    new Client({ accessKeyId: "1213312", accessKeySecret: "123123123" });

    return main;

}));
//# sourceMappingURL=oss-wx.js.map
