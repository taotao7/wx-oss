export type optionsType = {
  accessKeyId: string;
  accessKeySecret: string;
  region?: string;
  internal?: boolean;
  secure?: boolean;
  timeout?: number;
  bucket?: string;
  endpoint?: string;
  cname?: boolean;
  isRequestPay?: boolean;
  sldEnable?: boolean;
  headerEncoding?: string;
  refreshSTSToken?: string;
  refreshSTSTokenInterval?: number;
  retryMax?: number;
};
