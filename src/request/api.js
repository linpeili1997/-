import request from './request'

// const baseUrl = "https://3e6dafbd35ba.ngrok.io";
const path = process.env.NODE_ENV === 'development' ? '/api' : ''
// 登陆
export const loginApi = params => request.post(`${path}/signin/`, params);
//获取菜单、操作权限列表
export const quanxianApi = params => request.get(`${path}/rbac/${params.id}`);

//用户佣金列表
// export const getusercommissionList = params => request.get(`${usercomissionUrl}/userAccounts/`, {params})