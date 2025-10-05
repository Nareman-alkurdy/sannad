export enum AxiosQueryEnum {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
}

export enum AxiosStatusEnum {
  VALIDATION = 422,
  AUTHENTICATED = 401,
}
export const REACT_APP_AUTH="392175644526-8118eaafr46sp2lli7i9rc99hpc7j73n.apps.googleusercontent.com"

const localUrl = "https://api-legendary.sbg-outsourcing.com" 
export enum AxiosEnum {
  //@ts-ignore
  BASEURL = localUrl + "/api",
  IMAGE_BASE_URL = localUrl ,

  HEADER_KEY = 'X-Custom-Query-Key',
  HEADER_CUSTOM_MESSAGE = 'X-Custom-message',
  RESPONSE_TYPE = 'json',
  TIMEOUT = 120000,
  BEARER = 'Bearer ',
}

export enum AxiosQueryStatusEnum {
  ERROR = 'error',
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
}