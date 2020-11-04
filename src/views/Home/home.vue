<template>
  <div class="homepage">
    <div class="left">
      <div class="logo">
        <a href="#">
          <img src="" alt="" />
          <h1 class="title">运营管理后台</h1>
        </a>
      </div>
      <el-menu
            v-for="(item,index) in router" :key="index"
            router
            default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#304156"
            text-color="rgb(191, 203, 217)"
            active-text-color="#fff"
            style="width:100%"
          >
            <el-submenu index="1">
              <template slot="title">
                <span v-if="item.appName == 'auth'">分销管理</span>
                <span v-if="item.appName == 'refundPlatform'">佣金管理</span>
                <span v-if="item.appName == 'ad'">积分管理</span>
                <span v-if="item.appName == 'message'">提现管理</span>
              </template>
              <el-menu-item-group style="min-width:0" v-for="(items,index) in item.appRights" :key="index">
                <el-menu-item  index="/team/list" v-if="items.rightsName == 'team.all'" >团队列表</el-menu-item>
                <el-menu-item  index="" v-if="items.rightsName == 'team.all'">团队成员列表</el-menu-item>
                <el-menu-item  index="" v-if="items.rightsName == 'distribution.all'">分销模板管理</el-menu-item>
                <el-menu-item  index="" v-if="items.rightsName == 'distribution.all'">分销比例管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
      </el-menu>
        <div class="sidebar-logo-container">
            <div class="sidebar-logo-link">
                <h1>版本号：V1.0.0</h1>
            </div>
        </div>
    </div>
    <div class="right">
       <div class="navbar">
           <div class="right-menu">
              <div class="loginicon">
                  <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="">
                  <span>test</span>
                  <i class="el-icon-caret-bottom"></i>
                </div>
           </div>  
        </div>
        <div class="main">
            <section>
                <router-view></router-view>
            </section>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
      return {
        router:[]
      }
  },
  created() {
    this.router = JSON.parse(localStorage.getItem('list'))
    // this.router = this.$store.state.router
    console.log(444,this.router);
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }  
  }
};
</script>

<style lang="less" scoped>
.homepage {
  position: relative;
  height: 100%;
  width: 100%;
  .left {
    transition: width 0.28s;
    width: 180px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    .logo {
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: #2b2f3a;
      text-align: center;
      overflow: hidden;
      a {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        padding: 0 20px 0 0;
        img {
          width: 32px;
          height: 32px;
          vertical-align: middle;
          margin-right: 12px;
        }
        .title {
          display: inline-block;
          margin: 0;
          color: #fff;
          font-weight: 600;
          line-height: 50px;
          font-size: 18px;
          font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
          vertical-align: middle;
        }
      }
    }
    /deep/.el-submenu__title {
        display: flex;
    }
    .sidebar-logo-container {
        position: absolute;
        width: 100%;
        height: 40px;
        bottom: 0;
        line-height: 40px;
        background: #2b2f3a;
        text-align: center;
        overflow: hidden;
        .sidebar-logo-link {
            height: 100%;
            width: 100%;
            h1 {
              display: inline-block;
              margin: 0;
              color: #fff;
              font-weight: 600;
              line-height: 40px;
              font-size: 14px;
              font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
              vertical-align: middle;  
            }
        }
    } 
  }
  .right {
     min-height: 100%;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    margin-left: 180px;
    position: relative;
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
        box-shadow: 0 1px 4px rgba(0,21,41,.08);
        .right-menu {
            float: right;
            height: 100%;
            line-height: 50px;
            margin-right: 60px;
            .loginicon {
               position: relative;
               height: 100%;
               line-height: 50px;
               img {
                 cursor: pointer;
                 width: 30px;
                 height: 30px;
                 margin: 10px 14px 0 0;
                 float: left;
                 border-radius: 10px; 
               }
               span {
                  font-size: 15px; 
               }
               i {
                 cursor: pointer;
                position: absolute;
                right: -20px;
                top: 20px;
                font-size: 12px;  
               }
            }
        }
    }
    .main {
      min-height: calc(100vh - 100px);
    /* background: #f9f9f9; */
    padding: 50px 20px 0;
    border-radius: 50%;
      section {
         width: 100%;
        height: 100%;
        min-height: calc(100vh - 100px);
        background: #f9f9f9;
      }
    }
  }
}
</style>