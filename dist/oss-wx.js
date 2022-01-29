(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global["oss-wx"] = global["oss-wx"] || {}, global["oss-wx"].js = factory()));
})(this, (function () { 'use strict';

    function initOptions (options) {
        this.options = Object.assign(this.options, options);
    }

    function request () {
        console.log("request method", this.options);
    }

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
            this.initOptions = initOptions;
            this.request = request;
            this.initOptions(options);
        }
        static getInstance(options) {
            if (!Client.instance) {
                Client.instance = new Client(options);
            }
            return Client.instance;
        }
    }
    const client = Client.getInstance({
        accessKeyId: "asdasd",
        accessKeySecret: "1231323",
    });
    const client2 = Client.getInstance({
        accessKeyId: "xxxxxx",
        accessKeySecret: "xxxxxxxx",
    });
    client.request();
    client2.request();

    return Client;

}));
//# sourceMappingURL=oss-wx.js.map
