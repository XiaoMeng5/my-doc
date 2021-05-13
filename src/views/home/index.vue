<template>
  <div id="LoginIndex">
    <div class="login">
      <video src="./images/视频.mp4" autoplay loop muted></video>
    </div>
    <div class="Login-list">
      <div class="one">
        <fieldset>
          <legend class="title">深夜鲸落</legend>
          <p>
            我，现在活在这世上，知道了为什么活着，知道了什么叫做“苟非吾之所有，虽一毫而莫取”。“不以物喜，不以己悲”这就是我所追求的人生
          </p>
        </fieldset>
      </div>
      <div class="one">
        <fieldset>
          <legend class="title">漫步雨夜</legend>
          <p>
            如果对自己的蹉跎岁月感到后悔，
            那就请你现在就开始努力吧！
            因为这已是你最年轻的模样。
          </p>
        </fieldset>
      </div>
      <div class="one">
        <fieldset>
          <legend class="title">万千归途</legend>
          <p>
            决定去做一件事情，或是去养成一种习惯，甚至是去爱一个人；开始这些事情最好的时机，一般都是——此时此刻
          </p>
        </fieldset>
      </div>
    </div>
    <div class="img"></div>

    <!-- 内容 -->
    <!-- <div class="content">
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
    </div> -->
    <div class="content">
      <div class="one-content">
        <div class="right">
          <img src="./images/汤圆.png" width=500px; height=300px;>
        </div>
        <div class="right-text">
          <p class="date">四 月 20 , 2021</p>
          <p class="one-text" style="color:#6b6b6b">
            总有一天你的棱角会被世界磨平，你会拔掉身上的刺，你会学着对讨厌的人微笑，你会变成一个不动声色的人
          </p>
        </div>
      </div>
      <div class="one-content">
        <div class="text">
          <p class="date">四 月 20 , 2021</p>
          <p class="one-title" style="color:#7b94ff">
            你要相信看似不起波澜的日复一日，会突然在某一天让人看到坚持的意义
          </p>
        </div>
        <div class="two-right">
          <img src="./images/插画.png" width="500px" height="280px" style="margin-left:-10px">
        </div>
      </div>
      <div class="one-content">
        <div class="right">
          <img src="./images/花.png" width=350px; height=350px;>
        </div>
        <div class="right-text" style="margin-left:330px">
          <p class="date">四 月 20 , 2021</p>
          <p class="one-text" style="color:#ff255d">
            你的好运气藏在实力里，也藏在你不为人知的努力里，你越努力就越幸运
          </p>
        </div>
      </div>
      <div class="one-content">
        <div class="text">
          <p class="date">四 月 21 , 2021</p>
          <p class="one-title" style="color:#057d0e">
            保持积极并不意味着，你要一直快乐，而是即使在最艰难的日子，你也相信会有变好的那一天
          </p>
        </div>
        <div class="two-right">
          <img src="./images/绿.png" width="500px" height="480px" style="margin-left:-50px;margin-top:-50px;padding-bottom:80px">
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-content">
        <p style="color:#3d94ff">©小萌的网站</p>
        <p>我在等一个浪漫的夏天</p>
        <p>希望这个就是</p>
      </div>

    </div>
    <!-- 侧边栏 -->
    <div class="drawer"></div>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
#LoginIndex{
  width: 100%;
  height: 100%;
}

.login{
  width: 100vw;
  height: 100vh;
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: -1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  // width: 100%;
  // height: 100%;
  // background: url('./images/logo.jpg') no-repeat;
  // background-size: cover;
  // background-position: center;
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

  .one {
    width: 280px;
    height: 200px;
    border: 1px solid #d2d2d2;
    margin-left: 15px;
    fieldset {
      border-bottom: transparent;
      border-left: transparent;
      border-right: transparent;
      border-top: 1px solid #d2d2d2;
      margin-top: 30px;
      .title {
        text-align: center;
        font-size: 21px;
        padding: 0  30px 0 30px;
      }
      p {
        padding: 14px;
      }
    }
  }

  .Login-left{
    width: 100px;
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
.img{
  width: 100%;
  height: 500px;
  background: url('./images/new背景.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.content{
  // display: flex;
  width: 100%;
  box-shadow: 0 .125rem 1.25rem #eceff1;
  // border: 1px solid red;
  margin: auto;
  background-color: #eceff1;
  // height: 100%;
  // background: url('./images/new背景.jpg') no-repeat;
  // background-position: center;
  // background-size: cover;
  // background-attachment: fixed;
}
//   h1{
//     font-weight: 300;
//     text-align: center;
//     margin-top: 15px;
//     color: #fff;
//   }
//   .rief-introduction{
//     width: 800px;
//     height: 630px;
//     border: 2px solid rgba(0, 0, 0, 0.2);
//     margin: 0 auto;
//     position: relative;
//     top: 80px;
//     .rief-content {
//       width: 840px;
//       height: 472px;
//       position: relative;
//       left: -30px;
//       border: 10px solid #fff;
//       margin-top: 20px;
//     }
//     span{
//       color: #fff;
//     }
//   }
// }

.one-content{
  display: flex;
}
.right img{
  margin-top: 250px;
  margin-left: 210px;
}
.right-text{
  margin-top: 290px;
  margin-left: 160px;
  width: 350px;
  height: 220px;
}
.one-text{
  letter-spacing: 21px;
  margin: 0 auto;
  margin-top: 55px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 50px;
}
.two-right{
  display: flex;
  margin-left: 850px;
  margin-top: 200px;
}
.one-title{
  letter-spacing: 21px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 20px;
  margin-top: 50px;
}
.text{
  position: absolute;
  margin-top: 250px;
  margin-left: 210px;
  width: 350px;
  height: 220px;
}
.date{
  font-size: 12px;
  color: #000;
}
.footer{
  display: flex;
  width: 100%;
  height: 200px;
  background-color: rgba(236, 241, 244);
}
.footer-content{
  // display: flex;
  // padding-top: 10px;
  font-size: 18px;
  letter-spacing: 10px;
  margin: auto;
}
</style>
