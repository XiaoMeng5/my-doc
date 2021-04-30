<template>
  <div class="box">
    <div class="header" :style="{ 'background': 'url(' + headerUrl + ')' }"></div>
    <div class="content">
      <div class="about">
        <img src="./images/樱花.svg" alt="" class="contact" style="width:2.0rem; height:2.0rem"> <h2>前端</h2>
      </div>
        <el-divider></el-divider>
      <div class="icon">
        <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>图标</h3>
        <div class="item">
          <a href="https://www.iconfont.cn/" target="_blank" >
            <img src="./images/Iconfont-阿里巴巴矢量图标库.svg" alt="" class="iconfont">
          </a>
          <div class="info">
            <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a>
            <p>阿里巴巴矢量图标库</p>
          </div>
        </div>
        <div class="item">
          <a href="https://www.iconfont.cn/" target="_blank" >
            <img src="./images/Iconfont-阿里巴巴矢量图标库.svg" alt="" class="iconfont">
          </a>
          <div class="info">
            <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a>
            <p>阿里巴巴矢量图标库</p>
          </div>
        </div>
      </div>
      <div class="about">
        <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>字体</h3>
        <ul>
          <li>我在等一个浪漫的夏天 希望这个就是</li>
          <li>我真的超想和你有很久很久的未来</li>
          <li>糟糕透了</li>
        </ul>
      </div>
      <div class="about">
        <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>渐变</h3>
      </div>
      <div class="about">
        <img src="./images/心跳心动1.svg" alt="" class="anchor"><h3>框架</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutIndex',
  data () {
    return {
      headerUrl: '',
      url: require('./images/背景.jpg')
    }
  },
  // 开始
  created () {
    this.headerUrl = this.url
  },
  mounted () {
    setInterval(() => {
      const num = Math.random()
      const url = `https://api.wod.xyz/Image/GetImage?type=1?giao=${num}`
      this.headerUrl = url
    }, 5000)
  }
}
</script>

<style lang="less" scoped>
.box{
  background: #eeeeee;
  padding-bottom: 100px;
}
.header{
  width: 100%;
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.contact, .anchor{
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
}
.iconfont{
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin: auto;
  background-color: rgba(255, 66, 0);
}
.content{
  width: 1200px;
  height: 100%;
  margin: auto;
  background-color: #fff;
  margin-top: 100px;
  box-shadow: 0px 1px 1px 1px #d4d4d4;
}
.about, .icon{
  margin-left: 30px;
  padding-top: 30px;
  position: relative;
}
.item{
  width: 350px;
  height: 100px;
  border: 1px solid red;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.info{
  display: inline;
  margin-left: 10px;
  margin: auto;
}
h2, h3{
  margin-left: 40px;
}
li{
  list-style: none;
}
.anchor {
  animation: beat 1.5s linear infinite;
}
@keyframes beat {
    0%{
      transform: scaleZ(1);
    }
   50%{
     transform: scale(1.2);
    }
    100% { //动画结束样式
      transform: scale(1);
    }
}

.contact{
  animation: contact 3.5s linear 3s infinite;
}

@keyframes contact{
  from{transform: rotateZ(0deg);}
  to{transform: rotateZ(360deg);}
}

a{
  text-decoration-line: none;
}
</style>
