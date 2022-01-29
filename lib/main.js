import initOptions from "./utils/initOptions";
import request from "./utils/request";
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
export default Client;
