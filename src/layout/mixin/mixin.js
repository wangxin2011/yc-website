
import { mapState } from 'vuex'
import { getInfo } from '@/api/user'
// const mixinsComputed = Vue.config.optionMergeStrategies.computed
// const mixinsMethods = Vue.config.optionMergeStrategies.methods

const mixin = {
  computed: {
    ...mapState({
      layoutMode: state => state.app.layout,
      navTheme: state => state.app.theme,
      primaryColor: state => state.app.color,
      colorWeak: state => state.app.weak,
      fixedHeader: state => state.app.fixedHeader,
      fixSiderbar: state => state.app.fixSiderbar,
      fixSidebar: state => state.app.fixSiderbar,
      contentWidth: state => state.app.contentWidth,
      autoHideHeader: state => state.app.autoHideHeader,
      sidebarOpened: state => state.app.sidebar,
      multiTab: state => state.app.multiTab
    })
  },
  methods: {
    // 页面跳转
    goPage(path){
      this.$router.push({path: path})
    },
    // 回退到上一个页面
    onBack(level){
      this.$router.back()
    },
    isTopMenu() {
      return this.layoutMode === 'topmenu'
    },
    isSideMenu() {
      return !this.isTopMenu()
    },
    // 隐藏按钮
    hiddenMenu(permissonName) {
      // 应用的权限已经全部挂载在路由的mate上
      let _meta = this.$route.meta
      if(_meta && (_meta.auth || _meta.permisson)){
        return (_meta.auth && !!_meta.auth[permissonName]) || (_meta['permisson'] == 'all')
      }
      return false
      // console.log(this.$route)
      // const btnPermissions = this.$store.getters.btnPermissions || []
      // return !!btnPermissions[permissonName]
    },
    /**
     *  按钮授权
     * @param {*} permissonName 按钮授权名称
     * @returns  boolean
     */
    btnAuth(permissonName) {
      console.log(this.$route)
      const _auth = this.$route.meta['auth']
      return !!_auth[permissonName]
    },
    // 更新操作
    updateFunction(functionName, id, updateData) {
      functionName(id, updateData)
        .then(res => {
          this.refresh(res.message)
        })
        .catch(err => this.failed(err))
    },
    // 保存操作
    saveFunction(functionName, values) {
      functionName(values)
        .then(res => {
          this.refresh(res.message)
        })
        .catch(err => this.failed(err))
    },
    refresh(message) {
      this.$notify({
        type: 'success',
        title: '操作提示',
        message: message
      })
      this.handleCancel()
      this.$parent.$parent.handleOk()
    },
    handleCancel() {
      this.visible = false
      this.id = null
      this.confirmLoading = false
      this.show = false
      // this.form.resetFields()
    },
    failed(errors) {
      this.$notify({
        type: 'error',
        title: '失败提示',
        message: errors.message
      })
      this.confirmLoading = false
    },
    /**
     * 提示消息
     * @param {*} message 消息内容
     * @param {*} title 消息标题
     * @param {*} icon  消息icon类型 success、error
     * @param {*} isHtml  是否使用html标签
     */
    notifyMsg(message, title, icon, isHtml) {
      const _param = {
        message: message || '操作异常！'
      }
      if(isHtml){
        _param.dangerouslyUseHTMLString = true
      }
      if (title) {
        _param.title = title
      }
      if (icon) {
        _param.type = icon
      }
      this.$notify(_param)
    },
    refreshMenus() {
      getInfo().then(res => {
        if (res.data && res.data.permissions) {
          const permissions = res.data.permissions
          this.$store.dispatch('permission/GetLatestRoutes', { permissions })
        }
      })
    },
    isActive(route) {
      return route.path === this.$route.path
    },
    // 关闭当前tag
    closeCurrentTag(){
      let view = this.$route
      console.log(view)
      this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.fullPath)
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === 'Dashboard') {
          // to reload home page
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    // 下载excel
    dowloadExcel(file, fileName){
      // let file = response
      // let fileName = '采购单明细表.xls'
      if ('msSaveOrOpenBlob' in navigator) {
          window.navigator.msSaveOrOpenBlob(file, fileName)
      } else {
          let fileUrl = window.URL.createObjectURL(file)
          let a = document.createElement('a')
          a.download = fileName
          a.href = fileUrl
          // document.getElementsByTagName('body')[0].appendChild(a)
          a.click()
          // a.parentNode.removeChild(a)
          window.URL.revokeObjectURL(fileUrl)
      }
    }
  }
}

const AppDeviceEnquire = {
  mounted() {
    const { $store } = this
    deviceEnquire(deviceType => {
      switch (deviceType) {
        case DEVICE_TYPE.DESKTOP:
          $store.commit('TOGGLE_DEVICE', 'desktop')
          $store.dispatch('setSidebar', true)
          break
        case DEVICE_TYPE.TABLET:
          $store.commit('TOGGLE_DEVICE', 'tablet')
          $store.dispatch('setSidebar', false)
          break
        case DEVICE_TYPE.MOBILE:
        default:
          $store.commit('TOGGLE_DEVICE', 'mobile')
          $store.dispatch('setSidebar', true)
          break
      }
    })
  }
}

export { mixin, AppDeviceEnquire }
