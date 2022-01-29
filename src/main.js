"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initOptions_1 = require("./utils/initOptions");
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
