// /*
//  * @Description: 接口文件
//  * @Author: fengzhijun
//  * @Date: 2020-07-15 09:15:46
//  * @LastEditors: Please set LastEditors
//  */
import { request, loginRequest, request_form } from './request';
// import { AuthForm } from '../context/auth-context';
// import { IChangePassword } from '../pages/account/changepassword';
// import { IContactUs } from '../components/styled_components/contact';
// import { IPrintRequest } from '../pages/print/index';
// //联系我们提交
// export function SubmitLXWM(param: IContactUs) {
//   return request.post('/Sys/SubmitLXWM', param);
// }
// //登录验证码
// export function ValidateCode() {
//   return request.get('/Sys/ValidateCode');
// }
// //登出
// export function Logout(account: string, token: string) {
//   return request.get('/Sys/Logout?account=' + account + '&token=' + token);
// }
// // export function Logout(token: string) {
// //     return request.get("/Sys/Logout?token=" + token);
// // }
// //登录获取用户信息
// export function CheckLogin(param: AuthForm) {
//   return loginRequest.post('/Sys/Login', param);
// }
// //修改密码
// export function ChangePassword(param: IChangePassword) {
//   return request.post('/Sys/ChangePassword', param);
// }
// //获取通知公告
// export function GetNoticeList(param: {}) {
//   return request.post('/Default/GetNoticeList', param);
// }
// //获取通知公告详情
// export function GetNoticeDetail(id: string) {
//   return request.get('/Default/GetNoticeDetail?id=' + id);
// }
// //获取轮播文案
// export function GetGlobalDefaultBanner() {
//   return request.get('/Default/GlobalDefaultBanner');
// }
// //打印页面调用,获取宗地列表或详情
// export function GetPrintInfos(param: IPrintRequest) {
//   return request.get('/InfoReport/GetLandInfos', { params: param });
// }
// //提交附件
// export function SubmitFile(param: FormData) {
//   return request_form.post('/InfoReport/SubmitFile', param);
// }

// export declare interface GetLandInfoRequest {
//   year: string;
//   code: string;
//   /** @deprecated Only for warning usage. Do not use. */
// }

// export declare interface FileRemoveRequest {
//   id: string;
//   API_TOKEN?: string;
//   /** @deprecated Only for warning usage. Do not use. */
// }

// export declare interface EnterpriseRemoteRequest {
//   keyword: string;
//   API_TOKEN?: string;
//   /** @deprecated Only for warning usage. Do not use. */
// }

// export function GetLandInfo(param: GetLandInfoRequest) {
//   return request.get('/InfoReport/GetLandInfo', { params: param });
// }

// export function GetLandInfos(param: GetLandInfoRequest) {
//   return request.get('/InfoReport/GetLandInfos', { params: param });
// }

// // 获取字典接口
// export function GetDictInfo() {
//   return request.get('/Dict/DictList');
// }

// export function GetDictInfoByCode(code: string) {
//   return request.get(`/Dict/DictInfo/${code}`);
// }

// // 草稿填报提交/修改
// export function SubmitInfoReportTemp(param: {}) {
//   return request.post('/InfoReport/Submit_CGInfo', param);
// }
// // 填报提交/修改
// export function SubmitInfoReport(param: {}) {
//   return request.post('/InfoReport/SubmitInfo', param);
// }

// export function UploadTest(param: {}) {
//   return request_form.post('/Values/Test', param);
// }
// // 附件移除
// export function RemoveReportAttach(param: FileRemoveRequest) {
//   return request.get('/InfoReport/FileDelete', { params: param });
// }

// // 按企业名称获取企业社会信用代码
// export function GetEnterpriseInfoByName(param: EnterpriseRemoteRequest) {
//   return request.get('/InfoReport/GetCodesFromName', { params: param });
// }

// // 获取体检表内容
// export function GetTJBInfo(param: GetLandInfoRequest) {
//   return request.get('/Composite/GetTJBInfo', { params: param });
// }

// // 获取最终评价
// export function GetEvaluationInfo(param: { year: string; code: string; pageIndex: number; pageSize: number }) {
//   return request.post('/Composite/GetEvaluationInfo', param);
// }

// // 获取体检表提交
// export function ConfirmSubmit(
//   param: any,
//   //     {
//   //     id?: string,
//   //     year: 0,
//   //     name_FillInInfo: string,
//   //     contactNumber_FillInInfo: string,
//   //     landownerCode: string,
//   //     landownerName: string,
//   //     isObjection: string,
//   //     isConfirm: string,
//   //     proCaption: string,
//   //     fjId?: string
//   //   }
// ) {
//   return request.post('/Composite/ConfirmSubmit', param);
// }

// //获取此宗地编辑中状态
// export function saveLandIsEdit(param: {
//   token: string | undefined;
//   landCode: string | undefined;
//   isForceEdit: string; //状态 0，1  1强制
// }) {
//   return request.post('InfoReport/SaveLandIsEdit', param);
// }

// // 首页-企业名称模糊匹配查找
export function getCodesFromName(param: { keyword: string }) {
  return request.get('/Default/GetCodesFromName', { params: param });
}

// // 首页- 公示评价结果查询
// export function getQYPJJGInfo(keyword: string | undefined) {
//   return request.get('/Default/GetQYPJJGInfo?keyword=' + keyword);
// }
