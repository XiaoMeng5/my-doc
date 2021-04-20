<template>
  <div class="nav">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="black"
    >
      <el-menu-item index="1" color='#fff'>
        <img src="./images/首页-选中.svg" alt="" width="20rem" height="20rem">
        <router-link to="/" style="text-decoration: none;">
          <span style="color:#fff"> 首页</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2" class="home" color='red'>
        <img src="./images/关于.svg" alt="" width="20rem" height="20rem" >
        <router-link to="/about" style="text-decoration: none;">
        <span style="color:#fff" class="text"> 关于</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3" class="home" color='red'>
        <img src="./images/留言板.svg" alt="" width="20rem" height="20rem">
        <span style="color:#fff"> 留言板</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
        <img src="./images/其他.svg" alt="" width="20rem" height="20rem">
          <span style="color:#fff"> 其他</span>
          </template>
          <router-link to="/photo" style="text-decoration: none;">
            <el-menu-item index="2-1">摄影</el-menu-item>
          </router-link>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
        <div class="hamburgerBox">
          <img
            width="45px"
            height="30px"
            src="./images/icon-find.svg"
          >
          <img
            class="hamburger"
            src="./images/hamburger.svg"
            @click="drawer = true"
          >
        </div>
    </el-menu>

    <!-- 侧边栏 -->
     <el-drawer
        :visible.sync="drawer"
        direction="ltr"
      >
        <img src="./images/avatar.jpg" alt="" class="avatar">
        <p>小萌</p>
        <p>原地孤芳自赏，不如自由盛放</p>

        <el-divider></el-divider>

        <div class="links-of-author">
          <div class="icon">
            <img src="./images/qq.svg" alt="">
            <img src="./images/weixin.svg" alt="">
            <img src="./images/weibo_1.svg" alt="">
            <img src="./images/douyin.svg" alt="">
          </div>
          <div class="icon">
            <img src="./images/wangyiyun.svg" alt="">
            <img src="./images/email.svg" alt="">
            <img src="./images/bilibili-line.svg" alt="">
            <img src="./images/mayun.svg" alt="">
          </div>
        </div>

        <el-divider></el-divider>
      </el-drawer>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="less" scoped>
span{
  font-size: 18px;
}

.el-menu-item{
  position: relative;
}

.el-menu.el-menu--horizontal{
  border-bottom: 0px;
}

.nav{
  z-index: 100;
  width: 100%;
  height: 100%;
}

.el-menu-demo {
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 60px;
  z-index: 99999;
}

.hamburgerBox {
  position: absolute;
  top: 9px;
  right: 40px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  .hamburger{
    width: 45px;
    height: 30px;
  }
}

.links-of-author{
  width: 250px;
  margin: 0px auto;
  .icon{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
}

.links-of-author img{
  width: 1.5rem;
  height: 1.5rem;
}

.avatar{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #ec8aa4;
  display: flex;
  margin: 0 auto;
}

p{
  text-align: center;
  padding-top: 10px;
}
</style>
