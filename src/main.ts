import initOptions from "./utils/initOptions";
class Client {
  options: optionsType = {
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

  constructor(options: optionsType) {
    this.initOptions(options);
  }

  initOptions = initOptions;
}

new Client({ accessKeyId: "1213312", accessKeySecret: "123123123" });
