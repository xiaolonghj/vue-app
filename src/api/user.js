/* 用户请求模块 */
import request from '@/utils/request.js'

/* 注册/登录请求 */
export const getLogin = (data) => {
    return request({
       method:'post',
       url:'/mp/v1_0/authorizations',
       data
    })
}