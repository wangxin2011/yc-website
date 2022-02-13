<template>
  <div class="dashboard-container">
    首页
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    title(){
      let _title = ((window.serverConfig && window.serverConfig.VUE_APP_WEBSIT_TITLE) ? window.serverConfig.VUE_APP_WEBSIT_TITLE : process.env.VUE_APP_WEBSIT_TITLE)
      return _title
    }
  },
  created() {
    
  }
}
</script>
<style scoped>
.dashboard-container{
  padding: 30px;
}
</style>
