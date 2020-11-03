import request from './request'

const baseUrl = "https://3e6dafbd35ba.ngrok.io";
const usercomissionUrl = "http://5572179b8ac5.ngrok.io"

// 登陆
export const loginApi = params => request.post(`${baseUrl}/signin/`, params);

//用户佣金列表
export const getusercommissionList = params => request.get(`${usercomissionUrl}/userAccounts/`, {params})