<template>
  <div v-if="support || orgname || copyright" class="footer">
    <div v-if="support" class="copyright" v-html="support"></div>
    <div v-if="orgname" class="copyright" v-html="orgname"></div>
    <div v-if="copyright" class="copyright" v-html="copyright"></div>
    
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  },
  computed:{
    orgname(){
      return ((window.serverConfig && window.serverConfig.VUE_APP_ORGANIZER) ? window.serverConfig.VUE_APP_ORGANIZER : '')
    },
    copyright(){
      return ((window.serverConfig && window.serverConfig.VUE_APP_COPYRIGHT) ? window.serverConfig.VUE_APP_COPYRIGHT : '')
    },
    support(){
      return ((window.serverConfig && window.serverConfig.VUE_APP_SURPPORT) ? window.serverConfig.VUE_APP_SURPPORT : '')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 60px;
  padding: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #efefef;
  .links {
    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    margin-right: 20px;
    &:last-child{
      margin-right: 0;
    }
  }
  .m-b-10{
    margin-bottom: 10px;
  }
}
</style>
