<template>
  <div class="footer">
    <!-- <div class="links">
      <a href="https://ant.design/">帮助中心</a>
      <a href="https://vue.ant.design/">联系我们</a>
    </div> -->
    <div class="copyright m-b-10" v-html="copyright"></div>
    <div class="copyright" v-html="support"></div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  },
  computed:{
    copyright(){
      return ((window.serverConfig && window.serverConfig.VUE_APP_ORGANIZER) ? window.serverConfig.VUE_APP_ORGANIZER : process.env.VUE_APP_ORGANIZER)
    },
    support(){
      return ((window.serverConfig && window.serverConfig.VUE_APP_SURPPORT) ? window.serverConfig.VUE_APP_SURPPORT : process.env.VUE_APP_SURPPORT)
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 16px;
  text-align: center;
  .links {
    margin-bottom: 8px;

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
  }
  .m-b-10{
    margin-bottom: 10px;
  }
}
</style>
