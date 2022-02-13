<template>
  <div class="navbar">
    <!-- <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
    <div class="logo">
      <div class="logo-name">宜春市教育体育云平台</div>
      <div class="logo-py">YICHUN  EDUCATION ANSPORTS CLOUD PLATFORM</div>
    </div>
    <div class="apps">
      <div class="app-item active">首页</div>
    </div>
    <div class="menus">
      <div class="btn-page"><a target="_blank" href="https://study.jxeduyun.com/"><i class="el-icon-connection"></i>赣教云</a></div>
      <div class="user"><i class="el-icon-s-custom"></i>欢迎，教育局管理者</div>
      <i class="el-icon-search icon-my"></i>
      <i class="el-icon-s-operation icon-my"></i>
    </div>
    <!-- <div class="right-menu">
      <template v-if="device!=='mobile'">

        <error-log class="errLog-container right-menu-item hover-effect" />

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <div class="u-avatar">
          <img v-if="userInfo.user_photo" :src="userInfo.user_photo" class="user-avatar">
          <i v-else class="el-icon-user"></i>
          <i class="el-icon-caret-bottom" />
          </div>
          <div class="user-name">{{userInfo.user_name}}</div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device',
      'userInfo'
    ])
  },
  mounted(){
    console.log(this.userInfo)
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background: url(../../assets/images/header-bg.png) no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    color: #fff;
    padding-left: 40px;
    .logo-name{
      margin-top: 6px;
      font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC', sans-serif;
      font-weight: 650;
      font-size: 22px;
    }
    .logo-py{
      margin-top: 6px;
      font-family: 'ArialMT', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 6px;
    }
  }
  .apps{
    .app-item{
      position: relative;
      width: 101px;
      height: 70px;
      line-height: 70px;
      font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
      text-align: center;
      color: #FFFFFF;
      &.active{
        &::before{
          position: absolute;
          content: '';
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: rgba(52, 201, 251, 1);
        }
      }
      
    }
  }
 .menus{
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   padding-right: 60px;
   .btn-page{
     display: flex;
     justify-content: center;
     align-items: center;
     height: 44px;
     padding: 0 20px;
     border: 1px solid #fff;
     border-radius: 30px;
     font-size: 18px;
     .el-icon-connection{
        font-size: 24px;
        margin-right: 8px;
     }
     &:hover{
       opacity: 0.8;
     }
   }
   .user{
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 14px;
     margin-left: 15px;
     margin-right: 15px;
     .el-icon-s-custom{
       font-size: 24px;
       border-radius: 100%;
       margin-right: 10px;
     }
   }
   .icon-my{
     font-size: 24px;
     margin-left: 10px;
     &:hover{
       opacity: 0.8;
     }
   }
 }


  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .u-avatar{
          line-height: 20px;
          text-align: center;
        }
        .user-avatar {
          cursor: pointer;
          width: 25px;
          height: 25px;
          border-radius: 10px;
          vertical-align: middle;
        }
        .user-name{
          font-size: 12px;
          line-height: 20px;
        }
        .el-icon-user{
          font-size: 28px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
