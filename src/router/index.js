import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/dashboard/index'),
        name: 'Home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  { path: '*', redirect: '/home', hidden: true }
  // {
  //   path: '/purchase',
  //   component: Layout,
  //   redirect: '/purchase/list',
  //   meta: {
  //     title: '采购管理',
  //     icon: 'el-icon-box',
  //   },
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/purchase/list'),
  //       name: 'PurchaseList',
  //       meta: { title: '采购列表', icon: 'el-icon-s-order' }
  //     },
  //     {
  //       path: 'add',
  //       component: () => import('@/views/purchase/add'),
  //       name: 'PurchaseAdd',
  //       meta: { title: '新增采购单', icon: 'el-icon-plus' }
  //     },
  //     {
  //       path: 'edit/:id?',
  //       component: () => import('@/views/purchase/add'),
  //       name: 'PurchaseEdit',
  //       hidden: true,
  //       meta: { title: '编辑采购单', icon: 'el-icon-plus' }
  //     },
  //     {
  //       path: 'authlist',
  //       component: () => import('@/views/purchase/authlist'),
  //       name: 'PurchaseAuthList',
  //       meta: { title: '采购单审核列表', icon: 'el-icon-s-order' }
  //     },
  //     {
  //       path: 'detail/:id',
  //       component: () => import('@/views/purchase/detail'),
  //       name: 'PurchaseDetail',
  //       hidden: true,
  //       meta: { title: '采购单详情', icon: 'el-icon-document' }
  //     },
  //     {
  //       path: 'flow',
  //       component: () => import('@/views/system/flow/index'),
  //       name: 'SystemFlow',
  //       // hidden: true,
  //       meta: { title: '流程', icon: 'el-icon-tickets' }
  //     }
  //   ]
  // },
  // {
  //   path: '/extract',
  //   component: Layout,
  //   redirect: '/extract/list',
  //   meta: {
  //     title: '机构抽取',
  //     icon: 'el-icon-box',
  //   },
  //   children: [
  //     {
  //       path: 'list',
  //       component: () => import('@/views/extract/list'),
  //       name: 'ExtractList',
  //       meta: { title: '项目抽取记录列表', icon: 'el-icon-tickets' }
  //     },
  //     {
  //       path: 'extract',
  //       component: () => import('@/views/extract/extract'),
  //       name: 'MechanismExtract',
  //       hidden: true,
  //       meta: { title: '招标代理机构抽取', icon: 'el-icon-tickets' }
  //     }
  //   ]
  // },
  // {
  //   path: '/workLists',
  //   component: Layout,
  //   redirect: '/workLists/workLists',
  //   meta: {
  //     title: '学部工作安排',
  //     icon: 'el-icon-box',
  //   },
  //   children: [
  //     {
  //       path: 'workLists',
  //       component: () => import('@/views/workLists/workLists'),
  //       name: 'workLists',
  //       meta: { title: '学部工作安排', icon: 'el-icon-tickets' }
  //     },
  //   ]
  // }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   hidden: true,
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },

  // // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
