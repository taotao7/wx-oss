import initOptions from "./utils/initOptions";
import { optionsType } from "./types/optionsType";
import request from "./utils/request";
class Client {
  private static instance: Client;
  protected options: optionsType = {
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

  private constructor(options: optionsType) {
    this.initOptions(options);
  }

  public static getInstance(options: optionsType) {
    if (!Client.instance) {
      Client.instance = new Client(options);
    }
    return Client.instance;
  }

  initOptions = initOptions;
  request = request;
}

const client = Client.getInstance({
  accessKeyId: "asdasd",
  accessKeySecret: "1231323",
});

client.request();

export default Client;
