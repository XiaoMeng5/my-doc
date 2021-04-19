<template>
  <div id="LoginIndex">

    <div class="login">
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
    <div class="nav">
      <el-menu class="el-menu-demo" mode="horizontal"
      background-color="transparent" >
        <el-menu-item index="1" color='#fff'>
          <img src="./images/首页-选中.svg" alt="" width="20rem" height="20rem">
          <span style="color:#fff"> 首页</span>
        </el-menu-item>
        <el-menu-item index="2" class="home" color='red'>
          <img src="./images/关于.svg" alt="" width="20rem" height="20rem">
          <span style="color:#fff" class="text"> 关于</span>
        </el-menu-item>
        <el-menu-item index="3" class="home" color='red'>
          <img src="./images/域名.svg" alt="" width="20rem" height="20rem">
          <span style="color:#fff"> 域名</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
          <img src="./images/其他.svg" alt="" width="20rem" height="20rem">
            <span style="color:#fff"> 其他</span>
            </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    </div>

    <div class="Login-list">
      <!-- <img src="./images/编组 22.svg" alt="" class="Login-left">
      <img src="./images/编组 23.svg" alt="" class="Login-right"> -->
      <div class="one">
        <p class="one-text">
          我，现在活在这世上，知道了为什么活着，知道了什么叫做“苟非吾之所有，虽一毫而莫取”。“不以物喜，不以己悲”这就是我所追求的人生
        </p>
      </div>
      <div class="one">
        <p class="one-text">
          我，现在活在这世上，知道了为什么活着，知道了什么叫做“苟非吾之所有，虽一毫而莫取”。“不以物喜，不以己悲”这就是我所追求的人生
        </p>
      </div>
      <div class="one">
        <p class="one-text">
          我，现在活在这世上，知道了为什么活着，知道了什么叫做“苟非吾之所有，虽一毫而莫取”。“不以物喜，不以己悲”这就是我所追求的人生
        </p>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content">
      <div class="rief-introduction">
        <h1>嘴里的碎碎念念变成了身边的岁岁年年</h1>
        <img class="rief-content" src="./images/bac.jpg" alt="">
      </div>
    </div>
    <div class="content" >
      <div class="rief-introduction">
        <h1>我以为我看够了阳光直到遇到你才知我从未真的见过阳光</h1>
        <img class="rief-content" src="./images/bac2.jpg" alt="">
      </div>
    </div>
    <div class="content">
      <div class="rief-introduction">
        <h1>早餐店不会开到晚上 想吃的人早就来了</h1>
        <img class="rief-content" src="./images/bac1.jpg" alt="" >
      </div>
    </div>
    <div class="content">
      <div class="rief-introduction">
        <h1>想要乘坐热气球 在你的星球上环绕</h1>
        <img class="rief-content" src="./images/morning.jpg" alt="" >
      </div>
    </div>

    <!-- 侧边栏 -->
    <div class="drawer">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="less" scoped>
#LoginIndex{
  width: 100%;
  height: 100%;
}

.login{
  width: 100%;
  height: 100%;
  background: url('./images/logo.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  .middle {
    width: 120px;
    height: 100%;
    margin: auto;
    display: flex;
    .left,
    .right {
      width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left {
      border-right: 1px solid black;
    }
    .right {
      border-left: 1px solid black;
    }
    .content {
      width: 60px;
      height: 200px;
      background: cornflowerblue;
    }
  }
}

.Login-list {
  width: 100%;
  height: 500px;
  background-color: rgb(236, 239, 241);
  display: flex;
  justify-content: center;
  align-items: center;
  .one{
    width: 300px;
    height: 200px;
    background-color: #fff;
    border-radius: 2%;
    border: 2px solid #000;
    margin-left: 80px;
    .one-text{
      margin-top: 10px;
      letter-spacing: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  .Login-left{
    width: 100px;
    // color: transparent;
    height: 100px;
    float: left;
  }
  .Login-right{
    width: 100px;
    height: 100px;
    float: right;
  }
}
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

.content{
  width: 100%;
  height: 100%;
  // background-color: #93b5cf;
  background: url('./images/new背景.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  h1{
    font-weight: 300;
    text-align: center;
    margin-top: 15px;
    color: #fff;
  }
  .rief-introduction{
    width: 800px;
    height: 630px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    position: relative;
    top: 80px;
    .rief-content {
      width: 840px;
      height: 472px;
      position: relative;
      left: -30px;
      border: 10px solid #fff;
      margin-top: 20px;
    }
    span{
      color: #fff;
    }
  }
}
</style>
