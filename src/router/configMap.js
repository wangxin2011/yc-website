/**
 * export component map
 */
export default {
  // 框架组件

  // 系统组件
  basicLayout: () => import('@/layout'),

  // 框架组件
  menu: () => import('@/views/system/menu/index'),
  role: () => import('@/views/system/role/index'),
  user: () => import('@/views/system/user/index'),
  /* dashboard: () => import('@/views/framework/dashboard/index'),*/
  profile: () => import('@/views/system/permission/index'),
  /* 同步用户 部门
    * */
  depart: () => import('@/views/system/user/sysdepart'),
  org_user: () => import('@/views/system/user/sysuser'),
  permission: () => import('@/views/system/permission/index'),
  flow: () => import('@/views/system/flow/index'),

  // 采购
  purchase_list: () => import('@/views/purchase/list'),
  purchase_add: () => import('@/views/purchase/add'),
  purchase_auth: () => import('@/views/purchase/authlist'),
  purchase_detail: () => import('@/views/purchase/detail'),
  purchase_manager_auth: () => import('@/views/purchase/manager_auth_list'),
  purchase_export_excel: () => import('@/views/purchase/export_excel'),

  // 机构
  project_list: () => import('@/views/extract/list'),
  extract_list: () => import('@/views/extract/extract'),
}
