import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { beforeLogin, accessLogin } from '@/api/system/login'
import { param2Obj } from '@/utils/index'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect', '/purchase/list', '/404'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  document.title = getPageTitle(to.meta.title)
  // 获取地址
  let _path = location.pathname
  if(_path =='/accesslogin'){
    // 获取参数
    let _params = param2Obj(location.href)
    if(_params.code){
        // token
        accessLogin({code: _params.code}).then(res => {
            if (res.code == 10000 && res.data.status == 0) {
                // Vue.ls.set(ACCESS_TOKEN, res.data.token, 7 * 24 * 60 * 60 * 1000)
                // Vue.ls.set(ID_TOKEN, res.data.id_t, 7 * 24 * 60 * 60 * 1000)
                store.commit('user/SET_TOKEN', res.data.token)
                store.commit('user/SET_ID_TOKEN', res.data.id_t)
                // next({path:'/'});
                window.location.href = "/"
            } else {
              console.log("*******ddddd********",res.message)
                store.commit('errorLog/SET_MESSAGE',res.message)
                window.location.href = "/#/404"
                
            }
        }).catch(error => {
          console.log(error)
          store.commit('errorLog/SET_MESSAGE', JSON.stringify(error))
          window.location.href = "/#/404"
        })

    }
    NProgress.done()
  }else{
    // determine whether the user has logged in
    const hasToken = getToken()
    if (hasToken) {
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
      } else {
        // determine whether the user has obtained his permission roles through getInfo
        const hasRoute = store.getters.permission_routes && store.getters.permission_routes.length > 0
        if (hasRoute) {
          next()
        } else {
          try {
            // get user info
            // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
            const { permissions } = await store.dispatch('user/getInfo')
            // generate accessible routes map based on roles
            const accessRoutes = await store.dispatch('permission/generateRoutes', permissions)
            // dynamically add accessible routes
            router.addRoutes(accessRoutes)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              next({...to, replace: true})
            } else {
              // 跳转到目的路由
              /* next({ path: redirect })*/
              next({path: to.path})
            }
            // hack method to ensure that addRoutes is complete
            // set the replace: true, so the navigation will not leave a history record
            // next({ ...to, replace: true })
          } catch (error) {
            // remove token and go to login page to re-login
            console.log(error)
            await store.dispatch('user/resetToken')
            // next(`/login?redirect=${to.path}`)
            next(`/404`)
            NProgress.done()
          }
        }
      }
    } else {
      /* has no token*/
      if (whiteList.indexOf(to.path) !== -1 || to.path.indexOf('detail') > -1) {
        // in the free login whitelist, go directly
        next()
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        // 开发阶段只使用本地登录
        if(process.env.NODE_ENV == 'development'){
          next(`/login?redirect=${to.path}`)
          NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }else{
          // 未登录 判断是去哪里登录
          beforeLogin().then(res => {
            if (res.data.status == 0) {
              console.log(res.data.url)
                // 开启sso登录
                window.location.href = res.data.url
                // next(`/login?redirect=${to.path}`)
                NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
            } else {
                next(`/login?redirect=${to.path}`)
                NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
            }
         })
        }
      }
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
