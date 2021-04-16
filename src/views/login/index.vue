<template>
  <div id="LoginIndex">
    <div class="login">
      <img
        class="hamburger"
        src="./images/hamburger.svg"
        alt=""
        @click="drawer = true"
      >

      <!-- 中间的内容 -->
      <!-- <div class="middle">
        <div class="left">
          <div class="content">meet for the first time</div>
        </div>
        <div class="right">
          <div class="content">文字</div>
        </div>
      </div> -->

    </div>
    <!-- login 结束标签 -->

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
    <!-- 内容 -->
    <div class="content">
      <div class="rief-introduction">
        <h1>嘴里的碎碎念念变成了身边的岁岁年年</h1>
        <!-- <div class="rief-content"></div> -->
        <img class="rief-content" src="./images/bac.jpg" alt="">
        <!-- <span>
          本人性格开朗与人处事融洽，
          对工作善始善终，
          能承受日益严重的竞争压力，
          并能在成功与失败中完善自己。
          活泼开朗乐观向上适应力强勤奋好学认真负责坚毅不拔勇于迎接新挑战。
          擅长业务具有良好的沟通潜力与团队合作精神。
        </span> -->
      </div>
      <!-- <div class="rief-content"></div> -->
    </div>
    <div class="content" >
      <div class="rief-introduction">
        <h1>我以为我看够了阳光 直到遇到你才知我从未真的见过阳光</h1>
        <!-- <div class="rief-content"></div> -->
        <img class="rief-content" src="./images/bac2.png" alt="">
      </div>
      <!-- <div class="rief-content"></div> -->
    </div>
    <div class="content">
      <div class="rief-introduction">
        <h1>早餐店不会开到晚上 想吃的人早就来了</h1>
        <!-- <div class="rief-content"></div> -->
        <img class="rief-content" src="./images/bac1.jpg" alt="" >
      </div>
      <!-- <div class="rief-content"></div> -->
    </div>
    <div class="content">
      <div class="rief-introduction">
        <h1>想要乘坐热气球 在你的星球上环绕</h1>
        <!-- <div class="rief-content"></div> -->
        <img class="rief-content" src="./images/bac1.jpg" alt="" >
      </div>
      <!-- <div class="rief-content"></div> -->
    </div>
    <div class="content">
      <!-- <div class="rief-introduction">
        <h1>想要乘坐热气球 在你的星球上环绕</h1> -->
        <!-- <div class="rief-content"></div> -->
        <!-- <img class="rief-content" src="./images/bac1.jpg" alt="" > -->
      <!-- </div> -->
      <!-- <div class="rief-content"></div> -->
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

.hamburger{
  width: 45px;
  height: 30px;
  position: absolute;
  top: 25px;
  right: 25px;
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
  background-color: #93b5cf;
  h1{
    font-weight: 300;
    text-align: center;
    margin-top: 15px;
  }
  .rief-introduction{
    width: 800px;
    height: 695px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    position: relative;
    top: 50px;
    .rief-content {
      width: 840px;
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
